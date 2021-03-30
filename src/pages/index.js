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

import UIKit from 'uikit/dist/js/uikit.min';
import icons from 'uikit/dist/js/uikit-icons.min';

import consumerImage1 from '../assets/images/consumer-1.png';
import consumerImage2 from '../assets/images/consumer-2.png';
import consumerImage3 from '../assets/images/consumer-3.png';
import logo from '../assets/images/logo.png';

import nostosImage1 from '../assets/images/nostos-1.png';
import nostosImage2 from '../assets/images/nostos-2.png';
import nostosImage3 from '../assets/images/nostos-3.png';
import nostosImage4 from '../assets/images/nostos-4.png';
import nostosImage5 from '../assets/images/nostos-5.png';


const GarmentGalleryItem = props => {

}

const GarmentLeftItem = props => {
  return <div className="w-90 pa2 h-100 flex items-center">
      <Gallery
        items={props.item.items}
        current={props.index}
        scrollLength={typeof window !== 'undefined' && window.innerHeight}
        Component={GarmentGalleryItem}
        className="w-90"
        style={{ height: '30vh' }}
      />
  </div>
}

const GarmentItem = props => {
  return <div className={"h-80 relative flex w-100 items-center justify-start gallery-right-item " + (props.selected ? "selected" : "unselected")}>
    <div className="absolute bottom-0">
      <img src={props.item.image} style={{ maxWidth: '100vw', width: 'auto', height: '90vh' }} />
    </div>
    <div className="absolute w-75" style={{ bottom: '100px' }}>
      <h1 className="white">{props.index + 1}</h1>
      <div className="bg-blur glass-morph br4 pa4">
          <h2 className="white">{props.item.title}</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)' }} className="mv3">{props.item.description}</p>
          <button className="uk-button bg-transparent border-white white-important">BUY NOW</button>
      </div>
    </div>
  </div>;
}

const ConsumerItem = props => {
  return <div className="flex h-100">
    <div className="w-60 h-100 flex items-center justify-center">
      <img src={props.item.src} className="shadowed w-80" style={{ border: '10px solid #fff', borderRadius: '20px' }} />
    </div>
    <div className="w-40 ml3 h-100 flex flex-column justify-center">
      <h1 className="st st-yellow"><nobr>{props.item.title}</nobr></h1>
      <div className="bg-blur glass-morph pa4 br5 w-80 text-dark">{props.item.content}</div>
    </div>
  </div>
}

function SectionBackground(props) {
  return <div className="absolute left-0 top-0 h-100 w-100 z-1">
    <img src={require(props.img)} className="w-100 h-100" />
  </div>
}

const BannerIcon = props => {
  return <div className="br-100 flex items-center justify-center" style={{
      width: '70px',
      height: '70px',
      background: props.blueBackground ? 'linear-gradient(to bottom right, #28ABE8, #DDBC64)' : '#fff',
    }}>
    <img src={props.src} />
  </div>
}

const ValuePropositionItem = props => {
  const imgAttributes = {
    ...(props.imageMargin ? { margin: props.imageMargin + 'px' } : {}),
    transform: `translate(${props.translateX || -50}%, ${props.translateY || -50}%)`
  };
  const order = [<div className="w-50 flex items-center justify-center">
      <div className="br4 pa5 bg-white shadowed tc">
        <div className="w-100 flex justify-center">
          <BannerIcon src={props.icon} blueBackground={true} />
        </div>
        <h2 className="mv4">{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>,
    <div className="w-50">
      <Skewer className="w-100 h-100" angle={10} disableY={true}>
        <div className="banner-image" style={{ width: props.imageWidth ? props.imageWidth + 'px' : '700px'}}>
          <img src={props.src} style={{...imgAttributes}} />
        </div>
      </Skewer>
    </div>];

  return <div className="flex mt4 h-100v">{props.reverse ? order.reverse() : order}</div>;
}

const CoreValuesItem = props => {
  return <div className="w-33 flex justify-center">
    <div className="bg-blur br4 pa3 pb4 glass-morph flex flex-column items-center items-center w-80">
      <img src={props.src} className="w-90" />
      <h2>{props.title}</h2>
      <p className="text-dark tc">{props.content}</p>
    </div>
  </div>
}

if (typeof window !== 'undefined') {
  UIKit.use(icons);
}


const IndexPage = () => {

  const garmentItems = [
    {
        title: 'Something #1',
        description: 'Some other thing #1',
        background: 'linear-gradient(to bottom right, #474C18, #B08059)',
        image: nostosImage1,
        items: [
          // nostosImage1_1,
          // nostosImage1_2,
          // nostosImage1_3,
          // nostosImage1_4,
          // nostosImage1_5,
        ]
    },
    {
        title: 'Something #2',
        description: 'Some other thing #2',
        background: 'linear-gradient(to bottom right, #898145, #6A2D20)',
        image: nostosImage2,
        items: [
          // nostosImage2_1,
          // nostosImage2_2,
          // nostosImage2_3,
          // nostosImage2_4,
          // nostosImage2_5,
        ]
    },
    {
        title: 'Something #3',
        description: 'Some other thing #3',
        background: 'linear-gradient(to bottom right, #66120E, #423007)',
        image: nostosImage3,
        items: [
          // nostosImage3_1,
          // nostosImage3_2,
          // nostosImage3_3,
          // nostosImage3_4,
          // nostosImage3_5,
        ]

    },
    {
        title: 'Something #4',
        description: 'Some other thing #4',
        background: 'linear-gradient(to bottom right, #383B14, #896346)',
        image: nostosImage4,
        items: [
          // nostosImage4_1,
          // nostosImage4_2,
          // nostosImage4_3,
          // nostosImage4_4,
          // nostosImage4_5,
        ]

    },
    {
        title: 'Something #5',
        description: 'Some other thing #5',
        background: 'linear-gradient(to bottom right, #6C1510, #453209)',
        image: nostosImage5,
        items: [
          // nostosImage5_1,
          // nostosImage5_2,
          // nostosImage5_3,
          // nostosImage5_4,
          // nostosImage5_5,
        ]

    },
  ];
  const [garmentsCursor, setGarmentsCursor] = useState(0);

  console.log(garmentItems, garmentsCursor);

  const consumerItems = [
    {
      title: 'Consumer',
      content: 'Lorem ipsum lorem ipsum ipsum lorem sit amet dolor consectetur',
      src: consumerImage1
    },
    {
      title: 'Consumer #2',
      content: 'Lorem ipsum lorem ipsum ipsum lorem sit amet dolor consectetur',
      src: consumerImage2
    },
    {
      title: 'Consumer #3',
      content: 'Lorem ipsum lorem ipsum ipsum lorem sit amet dolor consectetur',
      src: consumerImage3
    },
  ];
  const [consumerCursor, setConsumerCursor] = useState(0);

  return <Layout>
    <div className="flex">
      <div className="w-sidebar">
        <Sidebar />
      </div>

      <div id="container" className="w-100" id="home">

        <Hero />

        
        <ParallaxComponent defaultTop={500} duration={typeof window !== 'undefined' && (window.innerHeight)}>
          <StickySlider divisions={1}>
            <div className="z-2 standard-container top-0 left-0 pv5 h-100v overflow-y-hidden shadowed-down" id="about"> 
                <div className="absolute top-0 left-0 w-100v h-100v">
                  <img src={require('../assets/images/white-print.png')} className="w-100" />
                </div>
                <div className="h-100v w-100v absolute flex items-center justify-center">
                  <div className="subcontainer flex-ns">
                      <div className="w-50">
                        <div className="w-100">
                          <h1 className="st st-yellow">About us</h1>
                          <div className="br4 bg-white tc pa4 shadowed">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris... 
                            </p>
                            <div className="flex justify-center w-100 mt4">
                              <a href="" target="_blank"><div className="uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span uk-icon="icon: instagram; ratio: 2"></span></div></a>
                              <a href="" target="_blank"><div className="uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span uk-icon="icon: facebook; ratio: 2"></span></div></a>
                              <a href="" target="_blank"><div className="uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span uk-icon="icon: whatsapp; ratio: 2"></span></div></a>
                              <a href="" target="_blank"><div className="uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span uk-icon="icon: linkedin; ratio: 2"></span></div></a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-50">
                        <Skewer className="w-100 h-100" angle={10} disableY={true}>
                          <div className="banner-image">
                            <img src={require('../assets/images/about-us.png')} />
                          </div>
                        </Skewer>
                      </div>
                  </div>
                </div>
            </div>
          </StickySlider>
        </ParallaxComponent>



        <div className="h-100v" id="what-we-offer"></div>
        <div className="standard-container top-0 right-0 pv5 h-100v bg-sky-blue z-1" style={{ width: 'calc(100vw - 60px)', position: 'fixed' }}>
          <div className="absolute left-0 top-0 h-100 w-100 z-1">
            <img src={require('../assets/images/blue-print.png')} className="w-100 h-100" />
          </div>
          <div className="w-100v h-100v left-0 top-0 absolute z-2 flex items-center justify-center">
            <div className="subcontainer flex-ns">
              <div className="w-50">
                <h1 className="st st-blue">What we offer</h1>
                <div className="bg-blur br4 pa4 mv4 w-100 text-dark glass-morph">
                  <BannerIcon src={require('../assets/images/icons/wdwo.svg')} />
                  <h2 className="white">Lorem</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris... 
                  </p>
                </div>
              </div>
              <div className="w-50">
                <Skewer className="w-100 h-100" angle={10} disableY={true}>
                  <div className="banner-image">
                    <img src={require('../assets/images/about-us.png')} />
                  </div>
                </Skewer>
              </div>
            </div>
          </div>
        </div>

        <div className="standard-container pv5 bg-white z-2 shadowed-up" id="value-proposition">
          <div className="absolute w-100 h-100 z-1">
            <img src={require('../assets/images/white-print.png')} className="w-100v sticky h-100v top-0 bottom-0" />
          </div>
          <div className="subcontainer relative z-2">
            <h1 className="absolute top-0 st st-yellow pt5">Value proposition</h1>
            
            <div className="w-100">

              <ValuePropositionItem
                title="Integration"
                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At "
                src={require('../assets/images/vp-integration.png')}
                icon={require('../assets/images/icons/vp-integration.png')}
              />

              <ValuePropositionItem
                title="Innovation"
                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At "
                src={require('../assets/images/vp-innovation.png')}
                icon={require('../assets/images/icons/vp-innovation.png')}
                reverse={true}
                imageWidth={400}
              />

              <ValuePropositionItem
                title="Extravagance"
                content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At "
                src={require('../assets/images/vp-extravagance.png')}
                icon={require('../assets/images/icons/vp-extravagance.png')}
                imageWidth={400}
                translateX={-40}
              />

            </div>

          </div>
        </div>

        <div className="z-3 standard-container pv5 h-100v top-0 right-0 z-1 bg-sky-blue">
          <div className="absolute left-0 top-0 h-100 w-100 z-1" id="core-values">
            <img src={require('../assets/images/blue-print.png')} className="w-100 h-100" />
          </div>
          <div id="of-core-values" className="subcontainer relative z-2">
            <h1 className="st st-blue">Core values</h1>
            <div className="flex mt4">
                <CoreValuesItem
                  title="Process"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
                  src={require('../assets/images/cv-process.png')}
                />

                <CoreValuesItem
                  title="Passion"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
                  src={require('../assets/images/cv-passion.png')}
                />

                <CoreValuesItem
                  title="Persistence"
                  content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam"
                  src={require('../assets/images/cv-persistence.png')}
                />
            </div>
          </div>
        </div>

        <StickySlider onChange={e => {
          setConsumerCursor(e)
        }} divisions={consumerItems.length} name="consumer">
          <div className="absolute left-0 top-0 h-100 w-100 z-1" id="consumer">
            <img src={require('../assets/images/white-print.png')} className="w-100 h-100" />
          </div>
          <div className="subcontainer relative z-2 h-100 flex flex-column justify-center">
            <Gallery
              items={consumerItems}
              current={consumerCursor}
              scrollLength={typeof window != 'undefined' && window.innerHeight}
              Component={ConsumerItem}
              noNavigation={true}
            />
          </div>
        </StickySlider>

        <StickyComponent className="standard-container pv5 h-100v top-0 right-0 z-1 bg-dark" style={{ marginTop: '-100vh' }}>
          <div className="absolute left-0 top-0 h-100 w-100 z-1" id="nostos">
            <img src={require('../assets/images/nostos-bg.png')} className="w-100 h-100" />
          </div>
          <div className="subcontainer flex relative z-2">
            <div className="w-50 pr3">
              <h1 className="st st-yellow" style={{ color: '#fff' }}>Nostos</h1>
              <div className="bg-blur glass-morph white pa4 br5">
                <BannerIcon src={require('../assets/images/icons/nostos.svg')} />
                <h2 className="white">Lorem</h2>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              </div>
            </div>

            <div className="w-50">
              <div className="pa2 br4 bg-white shadowed">
                <img src={require('../assets/images/nostos-thumbnail.svg')} />
              </div>
            </div>
          </div>
        </StickyComponent>

        <StickySlider
          onChange={cursor => {
            setGarmentsCursor(cursor)
          }}
          divisions={garmentItems.length}
          name="garments"
          style={{
            transition: '1s',
            background: garmentItems[garmentsCursor >= 0 && garmentsCursor < garmentItems.length ? garmentsCursor : 0].background
          }}
        >
          <div className="subcontainer flex w-100 h-100">
            <div className="w-50 h-100 flex items-center justify-center">
                <Gallery
                  items={garmentItems} 
                  current={garmentsCursor}
                  scrollLength={typeof window !== 'undefined' && window.innerHeight}
                  Component={GarmentLeftItem}
                  className="w-90"
                  style={{ height: '60vh' }}
                />
            </div>
            <div className="w-50 h-100v relative flex items-center justify-center">
                {garmentItems.map((_item, index) => <GarmentItem item={_item} current={garmentsCursor} selected={index === garmentsCursor} index={index} />)}
            </div>
          </div>
        </StickySlider>

        <div className="standard-container bg-white z-6" style={{ minHeight: '60vh' }}>
          <div className="absolute left-0 top-0 h-100 w-100 z-1">
            <img src={require('../assets/images/white-print.png')} className="w-100 h-100" />
          </div>
          <div className="subcontainer relative z-2 flex flex-column items-center justify-center">
            <button className="uk-button btn-wide shop-btn">SHOP NOW</button>
            <h1 className="text-dark mv5" style={{ fontSize: '50px' }}>Stay updated!</h1>
            <div className="br4 bg-trans-blue">
              <input type="text" className="invisible h-100" style={{ width: '300px' }} placeholder="Enter your email" />
              <button className="uk-button bg-dark white-important br4">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="standard-container bg-dark z-6" style={{ minHeight: '40vh' }}>
          <div className="subcontainer flex justify-center">
              <div className="w-30 pa2 tl">
                <img src={logo} />
                <p className="mv4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
              </div>
              <div className="w-30 pa2 tc">
                <span className="white">CONTENTS</span>
                <ul style={{ listStyle: 'none', padding: '0' }}>
                  <a href="#home"><li>Home</li></a>
                  <a href="#about"><li>About Us</li></a>
                  <a href="#what-we-offer"><li>What we offer</li></a>
                  <a href="#value-proposition"><li>Value proposition</li></a>
                  <a href="#core-values"><li>Core Values</li></a>
                  <a href="#consumer"><li>Consumer</li></a>
                  <a href="#nostos"><li>Nostos</li></a>
                </ul>
              </div>
              <div className="w-30 pa2 tr">
                <p className="mv4">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <div className="flex justify-end">
                  <a href="" target="_blank"><div className="uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span uk-icon="icon: instagram; ratio: 2"></span></div></a>
                  <a href="" target="_blank"><div className="uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span uk-icon="icon: facebook; ratio: 2"></span></div></a>
                  <a href="" target="_blank"><div className="uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span uk-icon="icon: whatsapp; ratio: 2"></span></div></a>
                  <a href="" target="_blank"><div className="uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span uk-icon="icon: linkedin; ratio: 2"></span></div></a>
                </div>
              </div>
          </div>
        </div>


        <div className="fixed z-5" style={{ bottom: '40px', right: '60px' }}>
          <button className="uk-button shop-btn">SHOP NOW</button>
        </div>
      </div>
    </div>
  </Layout>
}

export default IndexPage;