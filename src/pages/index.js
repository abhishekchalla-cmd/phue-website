import React, { useState } from "react"
import Sidebar from "../components/sidebar"
import ParallaxComponent from '../components/parallax';
import Hero from "./index/Hero";
import StickyComponent from "../components/StickyComponent";
import BlankBox from "../components/BlankBox";
import StickySlider from '../components/StickySlider';
import Gallery from '../components/Gallery';
import Layout from '../components/Layout';
import Skewer from "../components/Skewer";

const GarmentLeftItem = props => {
  return <div className="w-100 pa2">
      <BlankBox backgroundColor="#333" className="w-100">
          <h1 style={{ color: '#fff', padding: '20px' }}>{props.index}</h1>
      </BlankBox>
  </div>
}

const GarmentItem = props => {
  return <div className={"h-80 relative flex w-100 items-center justify-start gallery-right-item " + (props.selected ? "selected" : "unselected")}>
      <div className="w-60">
          <h1>{props.index + 1}</h1>
          <div className="bg-blur br4 pa3">
              <h3>{props.item.title}</h3>
              <p>{props.item.description}</p>
          </div>
      </div>
  </div>;
}

const ConsumerItem = props => {
  return <div className="flex">
    <div className="w-60">
      <BlankBox backgroundColor="#333" className="w-100" />
    </div>
    <div className="w-40 ml3">
      <h1 className="st st-yellow">{props.item.title}</h1>
      <div className="bg-blur pa4 br5">{props.item.content}</div>
    </div>
  </div>
}

function SectionBackground(props) {
  return <div className="absolute left-0 top-0 h-100 w-100 z-1">
    <img src={require(props.img)} className="w-100 h-100" />
  </div>
}

const IndexPage = () => {

  const garmentItems = [
    {
        title: 'Something #1',
        description: 'Some other thing #1'
    },
    {
        title: 'Something #2',
        description: 'Some other thing #2'
    },
    {
        title: 'Something #3',
        description: 'Some other thing #3'
    },
    {
        title: 'Something #4',
        description: 'Some other thing #4'
    },
    {
        title: 'Something #5',
        description: 'Some other thing #5'
    },
  ];
  const [garmentsCursor, setGarmentsCursor] = useState(0);

  const consumerItems = [
    {
      title: 'Consumer',
      content: 'Lorem ipsum lorem ipsum ipsum lorem sit amet dolor consectetur',
    },
    {
      title: 'Consumer #2',
      content: 'Lorem ipsum lorem ipsum ipsum lorem sit amet dolor consectetur',
    },
    {
      title: 'Consumer #3',
      content: 'Lorem ipsum lorem ipsum ipsum lorem sit amet dolor consectetur',
    },
  ];
  const [consumerCursor, setConsumerCursor] = useState(0);

  return <Layout>
    <div className="flex">
      <div className="w-sidebar">
        <Sidebar />
      </div>

      <div id="container" className="w-100">

        <Hero />

        
        <ParallaxComponent defaultTop={500} duration={typeof window !== 'undefined' && (window.innerHeight)}>
          <StickySlider divisions={1}>
            <div className="z-2 standard-container top-0 left-0 pv5 h-100v overflow-y-hidden shadowed-down"> 
                <div className="absolute top-0 left-0 w-100v h-100v">
                  <img src={require('../assets/images/white-print.png')} className="w-100" />
                </div>
                <div className="h-100v w-100v absolute flex items-center justify-center">
                  <div className="subcontainer flex-ns">
                      <div className="w-50">
                        <div className="w-80">
                          <h1 className="st st-yellow">About us</h1>
                          <div className="br4 bg-white tc pa4 shadowed">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris... 
                            </p>
                            <div className="flex center justify-center w-100">
                              <span uk-icon="icon: instagram; ratio: 2" className="uk-icon-button pa2 mh2"></span>
                              <span uk-icon="icon: facebook; ratio: 2" className="uk-icon-button pa2 mh2"></span>
                              <span uk-icon="icon: twitter; ratio: 2" className="uk-icon-button pa2 mh2"></span>
                              <span uk-icon="icon: whatsapp; ratio: 2" className="uk-icon-button pa2 mh2"></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-50">
                        <Skewer className="w-100" angle={10} disableY={true}>
                          <div className="ml3 br4">
                            <img src={require('../assets/images/about-us.png')} className="banner-image" />
                          </div>
                        </Skewer>
                      </div>
                  </div>
                </div>
            </div>
          </StickySlider>
        </ParallaxComponent>



        <div className="h-100v"></div>
        <div className="standard-container top-0 right-0 pv5 h-100v bg-sky-blue z-1" style={{ width: 'calc(100vw - 60px)', position: 'fixed' }}>
          <div className="absolute left-0 top-0 h-100 w-100 z-1">
            <img src={require('../assets/images/blue-print.png')} className="w-100 h-100" />
          </div>
          <div className="w-100v h-100v left-0 top-0 absolute z-2 flex items-center justify-center">
            <div className="subcontainer flex-ns">
              <div className="w-50">
                <h1 className="st st-blue">What we offer</h1>
                <div className="bg-blur br4 pa4 mv4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris... 
                  </p>
                </div>
              </div>
              <div className="w-50">
                <div className="bg-white ml3 h-100 w-100 br4" />
              </div>
            </div>
          </div>
        </div>

        <div className="standard-container pv5 bg-white z-2 shadowed-up">
          <div className="absolute left-0 top-0 h-100 w-100 z-1">
            <img src={require('../assets/images/white-print.png')} className="w-100 h-100" />
          </div>
          <div className="subcontainer" className="relative z-2">
            <h1 className="st st-yellow">Value proposition</h1>
            
            <div className="flex mt4">
              <div className="w-50">
                <div className="br4 pa5 bg-white shadowed tc">
                  <h2>Integration</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At </p>
                </div>
              </div>
              <div className="w-50">
                <div className="bg-dark ml3 h-100 w-100 br4" />
              </div>
            </div>

            <div className="flex mt4">
              <div className="w-50">
                <div className="bg-dark h-100 w-100 br4" />
              </div>
              <div className="w-50">
                <div className="br4 pa5 ml3 bg-white shadowed tc">
                  <h2>Innovation</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At </p>
                </div>
              </div>
            </div>

            <div className="flex mt4">
              <div className="w-50">
                <div className="br4 pa5 bg-white shadowed tc">
                  <h2>Extravagance</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At </p>
                </div>
              </div>
              <div className="w-50">
                <div className="bg-dark ml3 h-100 w-100 br4" />
              </div>
            </div>

          </div>
        </div>

        <StickyComponent className="z-3 standard-container pv5 h-100v top-0 right-0 z-1 bg-sky-blue">
          <div className="absolute left-0 top-0 h-100 w-100 z-1">
            <img src={require('../assets/images/blue-print.png')} className="w-100 h-100" />
          </div>
          <div id="of-core-values" className="subcontainer relative z-2">
            <h1 className="st st-blue">Core values</h1>
            <div className="flex">
                <div className="w-33">
                    <BlankBox className="w-100" />
                </div>
                <div className="w-33">
                    <BlankBox className="w-100" />
                </div>
                <div className="w-33">
                    <BlankBox className="w-100" />
                </div>
            </div>
          </div>
        </StickyComponent>

        <StickySlider onChange={e => {
          setConsumerCursor(e)
        }} divisions={consumerItems.length} name="consumer">
          <div className="absolute left-0 top-0 h-100 w-100 z-1">
            <img src={require('../assets/images/white-print.png')} className="w-100 h-100" />
          </div>
          <div className="subcontainer relative z-2">
            <Gallery
              items={consumerItems}
              current={consumerCursor}
              scrollLength={typeof window != 'undefined' && window.innerHeight}
              Component={ConsumerItem}
            />
          </div>
        </StickySlider>

        <StickyComponent className="standard-container pv5 h-100v top-0 right-0 z-1 bg-dark" style={{ marginTop: '-100vh' }}>
          <div className="absolute left-0 top-0 h-100 w-100 z-1">
            <img src={require('../assets/images/nostos-bg.png')} className="w-100 h-100" />
          </div>
          <div className="subcontainer flex relative z-2">
            <div className="w-50 pr3">
              <h1 className="st st-yellow" style={{ color: '#fff' }}>Nostos</h1>
              <div className="bg-blur pa4 br5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              </div>
            </div>

            <div className="w-50">
              <BlankBox backgroundColor="#444" className="w-100" />
            </div>
          </div>
        </StickyComponent>

        <StickySlider onChange={cursor => {
          setGarmentsCursor(cursor)
        }} divisions={garmentItems.length} name="garments">
          <div className="subcontainer flex w-100 h-100">
            <div className="w-60 h-100 flex items-center justify-center">
                <Gallery
                  items={garmentItems} 
                  current={garmentsCursor}
                  scrollLength={typeof window !== 'undefined' && window.innerHeight}
                  Component={GarmentLeftItem}
                />
            </div>
            <div className="w-40 relative flex items-center justify-center">
                {garmentItems.map((_item, index) => <GarmentItem item={_item} current={garmentsCursor} selected={index === garmentsCursor} index={index} />)}
            </div>
          </div>
        </StickySlider>


        <div className="fixed z-7" style={{ bottom: '40px', right: '60px' }}>
          <button className="uk-button">SHOP NOW</button>
        </div>
      </div>
    </div>
  </Layout>
}

export default IndexPage
