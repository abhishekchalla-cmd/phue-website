import React, { useEffect, useState } from 'react';
import ScrollContainer from '../components/ScrollContainer';
import { setContainer, setSubContainer, setScroller } from '../assets/transitions/Transitions';
import { getScrollPos } from '../utils/scroll';

export const ScrollContext = React.createContext();

const newNode = props => ({ children: [], ...props })
const getId = element => element && element.getAttribute && element.getAttribute('data-scroller-id');
const findRoot = node => {
    let child = node;
    while (child && child.children[0]) child = child.children[0];
    return child;
}
const findNextNode = node => {
    if (node.nextSibling) return node.nextSibling;
    else return node.parent && findNextNode(node.parent);
}

let body;
let scrollContainer, scrollSubContainer, mainScroller;
let lastScroll = 0;
let animationStack = {};
let animationStackKeys = [];

let average = 0;
let num = 0;

const addToAnimationStack = node => {
    node.added = true;
    animationStack[node.id] = node;
    animationStackKeys.push(node.id);
}

const removeFromAnimationStack = node => {
    delete animationStack[node.id];
    animationStackKeys.splice(animationStackKeys.indexOf(node.id), 1);
}

export default function ScrollContextProvider({ children }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [allNodes, setAllNodes] = useState({});
    const [mainScrollerHeight, setMainScrollerHeight] = useState(0);
    const [currentNode, setCurrentNode] = useState(null);




    const register = (element, config) => {

        let parent = element.parentNode;
        let parentId = null;
        while(parent && getId(parent) === null) parent = parent.parentNode;
        parentId = getId(parent);

        // check if there is a parent or not
        //  if yes,
        //      if it doesn't have an id
        //          create a node and fetch the id
        //      else
        //          fetch the id
        //  else,
        //      create a master node and fetch the id
        if (!parentId) {
            if (!allNodes['master']) createNode({}, 'master');
            parentId = 'master';
        } else {
            if (parentId === 'false') {
                parentId = createNode();
                parent.setAttribute('data-scroller-id', parentId);
            }
            else parentId = Number(parentId);
        }

        // check if the node is already registered
        //  if no,
        //     create a new node with the config
        //  else,
        //     fetch the node and set the config
        let node;
        if (getId(element) === 'false') {
            let nodeId = createNode(config);
            node = allNodes[nodeId];
        } else {
            node = allNodes[Number(getId(element))];
            Object.keys(config).map(key => {
                node[key] = config[key];
            });
        }

        // set the DOM element
        // set the dimensions
        // set the resize observer
        node.element = element;
        node.dim = {};
        node.ro = new ResizeObserver(entries => {
            let { height, width } = element.getBoundingClientRect();
            node.dim = { height, width };
            setScrollerSize();
        }).observe(element);

        // attach parent and siblings
        parent = allNodes[parentId];
        node.parent = parent;

        let siblingCount = parent.children.length;
        if (parent.children.length > 0) {
            node.previousSibling = parent.children[siblingCount - 1];
            node.previousSibling.nextSibling = node;
        }

        // attach to the parent
        parent.children.push(node);

        return node;
    }

    const createNode = (config, node_id) => {
        let newAllNodes = allNodes;
        config = config ? config : {};
        let id = node_id || Object.keys(newAllNodes).length;
        config = {
            ...config,

            // adding sequence as the model: { transitionFn, scroll, totalScroll }
            sequence: !Array.isArray(config.sequence) ? [] :
                config.sequence.map(step => {
                    const newStep = {
                        transitionFn: step[0] || (() => {}),
                        scroll: 0,
                        totalScroll: step[1] || 0
                    }
                    return newStep
                }),
            
            // to keep track of the current step
            currentStep: 0
        }
        newAllNodes[id] = newNode({ ...config, id });

        setAllNodes(newAllNodes);
        return id;
    }

    const setScrollerSize = () => {
        let newHeight = 0;

        // traverse all nodes
        // get heights from all the steps in the sequence of the node
        // sum them all up
        Object.keys(allNodes).map(key => {
            const node = allNodes[key];
            let sumOfSteps = node.sequence.reduce((total, step) => total + step.totalScroll, 0);
            newHeight += sumOfSteps;
        });

        // set the height of the main scroller
        setMainScrollerHeight(scrollSubContainer.clientHeight + (newHeight || 0));
    }





    const handleScroll = e => {
        const currentScroll = getScrollPos();
        const deltaScroll = currentScroll - lastScroll;
        lastScroll = currentScroll;
        average = ((average * num) + Math.abs(deltaScroll)) / (++num);
        console.log(average);
        if (animationStackKeys.length === 0) {
            const masterNode = allNodes['master'];
            masterNode.startChild = true;
            addToAnimationStack(masterNode);
        } else {
            // Run step(s) for each node in animationStack
            animationStackKeys.map(nodeKey => {
                const node = allNodes[nodeKey];
                while (node.currentStep < node.sequence.length) {
                    const step = node.sequence[node.currentStep];

                    // handling the transition functions
                    if (step.totalScroll === 0) {
                        step.transitionFn(node, 0, 0);
                        node.currentStep++;
                    } else {
                        if (step.scroll < step.totalScroll) {
                            step.transitionFn(node, step.scroll, step.totalScroll);
                            step.scroll += deltaScroll;
                            break;
                        } else {
                            node.currentStep++;
                        }
                    }
                }

                // checking if the next sibling should be added
                const nodeSeq = node.sequence;
                const nodeSeqLast = nodeSeq[nodeSeq.length - 1];
                if (node.currentStep === nodeSeq.length) {
                    const nextNode = findNextNode(node);
                    removeFromAnimationStack(node);
                    if (nextNode) addToAnimationStack(nextNode);
                }

                // checking if the child should be added
                if (node.startChild && !node.startedChild) {
                    addToAnimationStack(node.children[0]);
                    node.startedChild = true;
                }
            })
        }
    }





    useEffect(() => {
        body = document.getElementsByTagName('body')[0];
        body.onscroll = handleScroll;

        scrollContainer = document.getElementById('scroll-container');
        scrollSubContainer = document.getElementById('scroll-subcontainer');
        mainScroller = body;
        
        setContainer(scrollContainer);
        setSubContainer(scrollSubContainer);
        setScroller(mainScroller);
    }, [])





    window.showNodeStructure = () => console.log(allNodes);

    return <ScrollContext.Provider value={{
        scrollPosition, setScrollPosition,
        allNodes, setAllNodes,

        register,
        createNode,

        mainScrollerHeight,
        handleScroll
    }}>
        <ScrollContainer>
            {children}
        </ScrollContainer>
    </ScrollContext.Provider>
}