import { getScrollPos } from "../../utils/scroll";

let container;
let subContainer;
let scroller;

export const setContainer = e => { container = e; }
export const setSubContainer = e => { subContainer = e; }
export const setScroller = e => { scroller = e; }

export const fadeIn = (node, currentScroll, totalScroll) => {
    node.element.style.opacity = currentScroll / totalScroll;
}

export const fadeOut = (node, currentScroll, totalScroll) => {
    node.element.style.opacity = (totalScroll - currentScroll) / totalScroll;
}

export const makeStoppable = (node, currentScroll, totalScroll) => {
    node.element.style.position = 'sticky';
    node.element.style.top = '0';
}

export const stopScroll = node => {
    if (subContainer) {
        subContainer.style.position = 'fixed';
        let scrollError = node.element.getBoundingClientRect().top;
        subContainer.style.top = -1 * (scrollError) + 'px';
    }
}

export const resumeScroll = node => {
    if (subContainer && container) {
        subContainer.style.position = 'absolute';
        subContainer.style.top = subContainer.getBoundingClientRect().top - getScrollPos() + 'px';
    }
}

export const end = node => {
    node.end = true;
}

const animations = {
    fadeIn,
    fadeOut,
    stopScroll,
    resumeScroll,
    end,

    setContainer,
    setSubContainer,
    setScroller
}

export default animations;