import React, { useContext, useEffect, useState } from "react"
import Sidebar from "../components/sidebar"
import ParallaxComponent from '../components/parallax';
import Hero from "../components/index/Hero";
import StickyComponent from "../components/StickyComponent";
import StickySlider from '../components/StickySlider';
import Gallery from '../components/Gallery';
import Skewer from "../components/Skewer";
import Loader from '../components/loader';

import UIKit from 'uikit/dist/js/uikit.min';
import icons from 'uikit/dist/js/uikit-icons.min';

import consumerImage1 from '../assets/images/consumer-1.jpg';
import consumerImage2 from '../assets/images/consumer-2.jpg';
import consumerImage3 from '../assets/images/consumer-3.jpg';
import logo from '../assets/images/logo.png';

import nostosImage1 from '../assets/images/nostos-1.png';
import nostosImage2 from '../assets/images/nostos-2.png';
import nostosImage3 from '../assets/images/nostos-3.png';
import nostosImage4 from '../assets/images/nostos-4.png';
import nostosImage5 from '../assets/images/nostos-5.png';
import ScrollContextProvider, { ScrollContext } from "../contexts/ScrollContext";
import { getWindow } from '../utils/scroll';
import { navigate } from "gatsby-link";









getWindow.interacted = false;
getWindow.redirected = false;
getWindow.addEventListener && getWindow.addEventListener('click', () => getWindow.interacted = true);

const GarmentItem = props => {

  const [isOpen, setIsOpen] = useState(false);
  const descriptionSplit = props.item.description.split('.');
  const desc1 = descriptionSplit[0];
  const desc2 = descriptionSplit.slice(1, descriptionSplit.length).join('.');

  return <div className={"h-80 relative flex w-100 items-center justify-start gallery-right-item " + (props.selected ? "selected" : "unselected")}>
    <div className="absolute bottom-0">
      <img src={props.item.image} style={{ maxWidth: '100vw', width: 'auto', height: '95vh' }} />
    </div>
    <div className="absolute w-75" style={{ bottom: '100px' }}>
      <h1 className="white" style={{ fontSize: '100px' }}>{props.itemIndex + 1}</h1>
      <div className="bg-blur glass-morph br4 pa4">
          <h2 className="white">{props.item.title}</h2>
          <p className="black">{desc1}</p>
          <div style={{
            color: '#000',
            transition: '0.2s',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }} className="mv3">
            <div style={{ transition: '0.2s', marginBottom: isOpen ? '0' : '-110%' }}>
              {desc2}
            </div>
          </div>
          <button onClick={e => setIsOpen(!isOpen)} style={{ color: '#fff' }} className="uk-button uk-button-default">Read more</button>
      </div>
    </div>
  </div>;
}

const ConsumerItem = props => {
  return <div className="flex h-100">
    <div className="w-60 h-100 flex items-center justify-center">
      <img src={props.item.src} className="shadowed mw-80-imp" style={{ maxHeight: 'calc(100% - 20px)', border: '10px solid #fff', borderRadius: '20px' }} />
    </div>
    <div className="w-40 ml3 flex flex-column justify-center">
      <h1 className="st st-yellow mb5"><nobr>Our consumer</nobr></h1>
      <Skewer angle={10}>
        <div className="w-80">
          <div className="w-100 h-100 absolute top-0 left-0 z-5">
            <img src={require('../assets/images/comma-top-left.png')} className="blur absolute" style={{ top: '-10px', left: '-20px' }} />
            <img src={require('../assets/images/comma-bottom-right.png')} className="blur absolute" style={{ bottom: '-10px', right: '5px' }} />
          </div>

          <div className="bg-blur glass-morph pa4 br5 w-100 text-dark relative z-6" style={{ boxSizing: 'unset' }}>
            <h2>{props.item.title}</h2>
            <p>{props.item.content}</p>
          </div>
          
          <div className="w-100 h-100 absolute top-0 left-0 z-7">
            <img src={require('../assets/images/comma-top-left.png')} className="absolute" style={{ top: '-25px', left: '-35px' }} />
            <img src={require('../assets/images/comma-bottom-right.png')} className="absolute" style={{ bottom: '-25px', right: '-10px' }} />
          </div>
        </div>
      </Skewer>
    </div>
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
      <div className="br4 pa5 bg-white shadowed tc w-80">
        <div className="w-100 flex justify-center">
          <BannerIcon src={props.icon} blueBackground={true} />
        </div>
        <h2 className="mv4">{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>,
    <div className="w-50 flex items-center justify-center">
      <Skewer className="w-100 h-100" angle={10} disableY={true}>
        <div className="banner-image" style={{ width: props.imageWidth ? props.imageWidth + '%' : '100%' }}>
          <img src={props.src} style={{...imgAttributes}} />
        </div>
      </Skewer>
    </div>];

  return <div className="flex mv4" style={{ height: '600px' }}>{props.reverse ? order.reverse() : order}</div>;
}

const CoreValuesItem = props => {
  return <div className="w-33 flex relative justify-center">
    <div className="bg-blur br4 pa3 pb4 glass-morph flex flex-column items-center items-center w-80 relative z-2">
      <img src={props.src} className="w-90" />
      <h2 className="white mt4">{props.title}</h2>
      <p className="text-dark tc">{props.content}</p>
    </div>
    <div className="w-100 h-100 flex top-0 left-0 absolute justify-center">
      <div className="w-80 h-100 flex justify-center items-center">
        <div style={{
          position: 'absolute',
          top: '18px',
          height: '0',
          width: '0',
          padding: '33%',
          background: 'var(--yellow)',
          filter: 'blur(10px)',
          borderRadius: '100%',
          zIndex: '1'
        }} />
      </div>
    </div>
  </div>
}

const GarmentLeftItem = ({ item, isActive }) => {
  return <div className="w-90 pa2 h-100 flex relative items-center overflow-hidden" data-uk-lightbox>
      <div data-uk-slider className="h-100 flex flex-column justify-center" style={{ height: '50vh' }}>
        <ul className="uk-slider-items uk-child-width-1-1 h-100">
          {item.items.map((subImage, index) => isActive && <li className="garment-gallery-item" style={{ border: '0' }}>
              <a href={'/static/' + subImage} className="h-100 w-100">
                <img src={'/static/' + subImage} show={isActive} onLoad={e => {
                  e.target.parentNode.style.border = '10px solid #f3e4c2';
                }} />
              </a>
            </li>
          )}
        </ul>
        <ul class="uk-slider-nav uk-dotnav uk-flex-center white-dotnav mb1"></ul>

        <div className="absolute w-100 bottom-0">
          <a class="uk-position-center-left uk-position-small uk-hidden-hover z-7 slider-navigation" href="#" uk-slidenav-previous uk-slider-item="previous"><span data-uk-icon="icon: chevron-left; ratio: 1"></span></a>
          <a class="uk-position-center-right uk-position-small uk-hidden-hover z-7 slider-navigation" href="#" uk-slidenav-next uk-slider-item="next"><span data-uk-icon="icon: chevron-right; ratio: 1"></span></a>
        </div>
      </div>
    </div>
}
















const IndexPage = () => {


  const toggleVideoOnHover = (e, target) => {
    if (e) {
      target = document.getElementById(target);
      e.addEventListener('mouseover', () => {
        if (getWindow.interacted && target.paused) target.play();
      })
      e.addEventListener('mouseleave', () => {
        if (!target.paused) target.pause()
      });
    }
  }

  if (typeof window !== 'undefined') UIKit.use(icons);

  const { nostos: nostosImages } = require('../data.json');

  const garmentItems = [
    {
        title: 'The Time Leaper',
        description: `Presenting the first stage of Nostalgia: Restoration. Travel back into the past by combining polyurethane laminated fabric with polyester backing in the bodysuit, emphasizing the shoulders through volume and shape; Interweaving memories with a range of unconventional material. Combining holographic rexine interwoven with laser cut plastic mesh stitched on top of PVC`,
        background: 'linear-gradient(to bottom right, #474C18, #B08059)',
        image: nostosImage1,
        items: nostosImages[0].files
    },
    {
        title: 'The Temporal Explorer',
        description: `Presenting the second stage of Nostalgia: Reflection. Reflect on the past by combining printed satin fabric with A-line skirt constructed with foiled polyurethane and hand-done sequenced embroidery all over. Adding to the silhouette's sleekness, we have layers of memories interwoven in PVC with holographic rexine & sheep nappa`,
        background: 'linear-gradient(to bottom right, #898145, #6A2D20)',
        image: nostosImage2,
        items: nostosImages[1].files
    },
    {
        title: 'The Bygone Belle',
        description: 'Presenting the third stage of Nostalgia: Retrospection. Combine checks & prints with our "Bygone Belle" look. Experience the wearability of material that we see around us. Sporting a printed polyamide coated rubber fabric; mostly used in the manufacturing of raincoats & printed PVC. Showcasing the existence of two concepts in the same plane, the bygone belle aims to find ways to pair up eclectic prints with classic checks; symbolizing the yearning of the past and awareness about the present.',
        background: 'linear-gradient(to bottom right, #66120E, #423007)',
        image: nostosImage3,
        items: nostosImages[2].files
    },
    {
        title: 'The Chronologist',
        description: 'Presenting the fourth stage of Nostalgia: Prospective. Experience the excitement for the present; sporting boot cut pants with medium flare in foiled polyurethane laminate fabric & a turtleneck in printed cotton velvet with flared sleeves. Combining cotton velvet in the top with sleeves in foiled polyurethane fabric on top. Shapes have been inspired from film negatives, a tangible representation of nostalgia; interweaving memories with a range of unconventional material. Combining holographic rexine interwoven with laser-cut plastic mesh in the form of a corset.',
        background: 'linear-gradient(to bottom right, #383B14, #896346)',
        image: nostosImage4,
        items: nostosImages[3].files
    },
    {
        title: 'The Conciliator',
        description: 'Presenting the fourth stage of Nostalgia: Prospective. Experience the excitement for the present; sporting flared mid-calf length culottes in embossed rexine, combined with a peplum top, combining rexine and printed organza & loose weave knit. Shapes have been inspired from film negatives, a tangible representation of nostalgia; interweaving memories with a range of unconventional material. Demonstrating this is our short jacket interwoven through a laser-cut pattern, in a combination of sheep nappa, embossed rexine, PVC & holographic rexine.',
        background: 'linear-gradient(to bottom right, #6C1510, #453209)',
        image: nostosImage5,
        items: nostosImages[4].files
    },
  ];


  const [garmentsCursor, setGarmentsCursor] = useState(0);

  const getGarmentsCursor = cursor => {
    let traversed = 0;
    let garmentsCursor = 0;
    while (traversed + garmentItems[garmentsCursor].items.length < cursor) {
      garmentsCursor++;
      traversed += garmentItems[garmentsCursor].items.length;
    }
    let subGarmentsCursor = cursor - traversed;
    return [garmentsCursor, subGarmentsCursor];
  }

  const consumerItems = [
    {
      title: 'Decadance & Comfort',
      content: 'Become involved in an extravagant and eccentric amalgamation of textiles, silhouettes & tactile surfaces.',
      src: consumerImage1
    },
    {
      title: 'Unconventional',
      content: 'Embrace eccentricity and get transported to a better time thematically.',
      src: consumerImage2
    },
    {
      title: 'Eclectic',
      content: 'Be one with art, merging barriers between art & fashion.',
      src: consumerImage3
    },
  ];
  const [consumerCursor, setConsumerCursor] = useState(0);
  
  const [whatWeOfferExpandable, setWhatWeOfferExpandable] = useState(false);
  const [nostosExpandable, setNostosExpandable] = useState(false);

  // Had to do this because of icons were not loading in UIKit unless navigated
  useEffect(() => {
    if (!getWindow.redirected) {
      getWindow.redirected = true;
      navigate('/redirect')
    }
  }, [])

  return <>
    <div className="flex">
      <div className="w-sidebar">
        <Sidebar />
      </div>

      <div id="container" className="w-100">

        <Hero />

        <span id="about">
        <ParallaxComponent defaultTop={500} duration={typeof window !== 'undefined' && window.innerHeight}>
          <StickySlider divisions={1}>
            <div className="z-2 standard-container top-0 left-0 h-100v overflow-hidden shadowed-down">
                <div className="absolute top-0 left-0 w-100v h-100v">
                  <img src={require('../assets/images/white-print.jpg')} className="w-100" />
                </div>
                <div className="h-100v w-100v absolute flex items-center justify-center">
                  <div className="subcontainer flex-ns">
                      <div className="subcontainer-small flex items-center justify-center">
                        <div className="w-100">
                          <h1 className="st st-yellow">About us</h1>
                          <div className="br4 bg-white tc pa4 shadowed">
                            <p align="left">
                              We are a maximalist fashion brand that believes in following the philosophy of "Creating stories through chaos". We aim at curating art for fashion. Our Focus is to provide clothing described as wearable art, bringing art onto a platform to the masses who want to be the connoisseur of their own story. 
                            </p>
                            <div className="flex justify-center w-100 mt4">
                              <a href="" target="_blank"><div className="data-uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span data-uk-icon="icon: instagram; ratio: 2"></span></div></a>
                              <a href="" target="_blank"><div className="data-uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span data-uk-icon="icon: facebook; ratio: 2"></span></div></a>
                              <a href="" target="_blank"><div className="data-uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span data-uk-icon="icon: whatsapp; ratio: 2"></span></div></a>
                              <a href="" target="_blank"><div className="data-uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span data-uk-icon="icon: linkedin; ratio: 2"></span></div></a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="subcontainer-big">
                        {/* <Skewer className="w-100 h-100" angle={10} disableY={true}> */}
                          <div>
                            <img src={require('../assets/images/about-us.png')} className="mw-100-imp" style={{ transform: 'scale(2)' }} />
                          </div>
                        {/* </Skewer> */}
                      </div>
                  </div>
                </div>
            </div>
          </StickySlider>
        </ParallaxComponent>



        <div className="h-100v" id="what-we-offer"></div>
        <div className="standard-container top-0 right-0 pv5 h-100v bg-sky-blue z-1" style={{ width: 'calc(100vw - 60px)', position: 'fixed' }} ref={e => toggleVideoOnHover(e, 'wdwo-video')}>
          <div className="absolute left-0 top-0 h-100 w-100 z-1">
            <img src={require('../assets/images/blue-print.jpg')} style={{ transform: 'scale(1.04)' }} className="w-100 h-100" />
          </div>
          <div className="w-100v h-100v left-0 top-0 absolute z-2 flex items-center justify-center">
            <div className="subcontainer flex-ns">
              <div className="subcontainer-small flex justify-center flex-column">
                <h1 className="st st-blue">What do we offer?</h1>
                <div className="bg-blur br4 pa4 mv4 w-100 text-dark glass-morph">
                  <BannerIcon src={require('../assets/images/icons/wdwo.svg')} />
                  <h2 className="white">Wearable art and Maximalism</h2>
                  <p className="mt3">
                    Clothing described as wearable art, bringing art onto a platform meant for a bridge market that is the perfect blend between commercial & luxury.
                  </p>

                  <div className="overflow-hidden" style={{
                    transition: '0.2s',
                    height: whatWeOfferExpandable ? '280px' : '0'
                  }}>
                    <p className="mv2">
                      We create a platform where art or evolving a design language is not just co-related with luxury but will be associated with the masses who want to be the connoisseur of their own story. Art is for the everyday man, who wants to be understood, create their path & with Phue we make a community that understands and appreciates art???creating a blend between COMFORT & DECADENCE.
                    </p>
                    <p className="mv2">
                      We  provide an appreciation for the passion & time it takes to make art & to convert a process into a narrative that enables a human connection. A story can be told through the most mundane objects that we see around us & We aim at weaving those objects together to create a narrative.
                    </p>
                  </div>

                  <button className="uk-button uk-button-default" style={{ color: '#fff', marginTop: '30px', borderColor: '1px solid #fff' }} onClick={() => setWhatWeOfferExpandable(!whatWeOfferExpandable)}>
                    {whatWeOfferExpandable ? 'Hide' : 'Read more'}
                  </button>
                </div>
              </div>
              <div className="subcontainer-big">
                  <div className="banner-image">
                    <video className="br4 shadowed w-80" style={{ border: '10px solid var(--bgDark)', background: 'rgba(0,0,0,0.8)' }} id="wdwo-video" autoPlay muted controls loop>
                      <source src={require('../assets/videos/wdwo.mp4')} type="video/mp4" />
                    </video>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="standard-container pv5 bg-white z-2 shadowed-up" id="value-proposition">
          <div className="absolute w-100 h-100 z-1">
            <img src={require('../assets/images/white-print.jpg')} className="w-100v sticky h-100v top-0 bottom-0" />
          </div>
          <div className="subcontainer relative z-2">
          <div className="w-33 flex justify-center">
              <div className="w-80 tl">
                <h1 className="absolute top-0 st st-yellow pt5">Our Value proposition</h1>
              </div>
            </div>
            
            <div className="w-100" style={{ marginTop: '200px' }}>

              <ValuePropositionItem
                title="Integration"
                content="Integration of art & Design in the same plane; to align them in a consistent harmony ;giving our consumers a feeling of freedom and confidence to be in touch with their inner self."
                src={require('../assets/images/vp-integration.png')}
                icon={require('../assets/images/icons/vp-integration.png')}
                imageWidth={40}
                translateX={-15}
              />

              <ValuePropositionItem
                title="Innovation"
                content="The promise of  innovation in textiles, eccentricity & the promise of an unprecedented & exhilarating experience. The intention is to create tangible products out of psychological responses to the things we see around us."
                src={require('../assets/images/vp-innovation.png')}
                icon={require('../assets/images/icons/vp-innovation.png')}
                reverse={true}
                imageWidth={60}
                translateX={-30}
              />

              <ValuePropositionItem
                title="Extravagance"
                content="We believe in indulgence, living life to the fullest  Art in itself is extravagant and found with layers of subtext. We intend to curate the same meaning of art for fashion maximalists."
                src={require('../assets/images/vp-extravagance.png')}
                icon={require('../assets/images/icons/vp-extravagance.png')}
                imageWidth={70}
                translateX={-40}
              />

            </div>

          </div>
        </div>

        <div className="z-3 standard-container pv5 h-100v top-0 right-0 z-1 bg-sky-blue">
          <div className="absolute left-0 top-0 h-100 w-100 z-1" id="core-values">
            <img src={require('../assets/images/blue-print.jpg')} className="w-100 h-100" />
          </div>
          <div id="of-core-values" className="subcontainer relative z-2">
            <div className="flex justify-center">
                <h1 className="st st-blue">Our Core values</h1>
            </div>
            <div className="flex mt4">
                <CoreValuesItem
                  title="Process"
                  content={`To Allow the process itself to become a narrative for our products. We provide an appreciation for the passion & time that it takes to make art & to convert the process into a constructive narrative.`}
                  src={require('../assets/images/cv-process.png')}
                />

                <CoreValuesItem
                  title="Passion"
                  content={`Passion for continually creating stories through the chaos.Maximalist fashion is the ability to convert mayhem into significant pieces of art. PHUE embraces the unrest of today's years.`}
                  src={require('../assets/images/cv-passion.png')}
                />

                <CoreValuesItem
                  title="Persistence"
                  content={`Persistence to innovate and to continually follow the path of maximalism. Diligence to understand the value of a narrative, a story behind every item of clothing.`}
                  src={require('../assets/images/cv-persistence.png')}
                />
            </div>
          </div>
        </div>

        <StickySlider onChange={e => {
          setConsumerCursor(e)
        }} divisions={consumerItems.length} divisionHeight={50} name="consumer">
          <div className="absolute left-0 top-0 h-100 w-100 z-1" id="consumer">
            <img src={require('../assets/images/white-print.jpg')} className="w-100 h-100" />
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
        </span>
        <div id="nostos-target" />

        <span id="nostos">
          <StickyComponent className="standard-container pv5 h-100v top-0 right-0 z-1 bg-dark" style={{ marginTop: '-100vh' }}>
            <div className="absolute left-0 top-0 h-100 w-100 z-1">
              <img src={require('../assets/images/nostos-bg.jpg')} className="w-100" />
            </div>
            <div className="relative w-100 flex items-center justify-center h-100v" ref={e => toggleVideoOnHover(e, 'nostos-video')}>
              <div className="subcontainer flex relative z-2 items-center">
                <div className="subcontainer-small pr3">
                  <h1 className="st st-yellow" style={{ color: '#fff' }}>Nostos</h1>
                  <div className="bg-blur glass-morph white pa4 br5 p-margin">
                    <BannerIcon src={require('../assets/images/icons/nostos.svg')} />
                    <h2 className="white">Lights. Camera. Action!</h2>
                    <p>Nostos means home in Greek. Nostalgia is a yearning for a home. The digital revolution defining the turn of the century brought significant changes which could also affect emotional perspectives.</p>
                    
                    <div className="overflow-hidden" style={{
                        transition: '0.2s',
                        height: nostosExpandable ? '280px' : '0'
                      }}>
                        <p>Everything we could desire in space or time is right in front of us ??? but??there is still space for nostalgia.??We are nostalgic about the lost indirectness; a connection unmediated by computers, with other people or nature. Contemporary nostalgia is not merely a desire for an existing, concrete home, but more for the abstract "homeliness".</p>
                        <p>With every piece, the progression of nostalgia is showcased, including the complexity of emotions. It depicts that the existence of two concepts in the same plane, acknowledging the past might look like a better place to be, but it's not. Through NOSTOS, a platform that encourages it as well as questions it. The idea is to create a home to come back to, which is not defined by time and space conventions. Nostos represents a deeper appreciation for the past and a keen interest in the future. Through NOSTOS, a rich & eccentric amalgamation of textiles, silhouettes & tactile surfaces is created to get thematically transported to a better time.</p>
                    </div>

                    <button className="uk-button uk-button-default" style={{ color: '#fff', marginTop: '30px', borderColor: '1px solid #fff' }} onClick={() => setNostosExpandable(!nostosExpandable)}>
                      {nostosExpandable ? 'Hide' : 'Read more'}
                    </button>
                  </div>
                </div>

                <div className="subcontainer-big h-100 flex items-center">
                  <div className="pa2 w-100">
                    <video className="br4 shadowed w-100" style={{ border: '10px solid #f3e4c2', background: 'rgba(0,0,0,0.8)' }} id="nostos-video" autoPlay muted controls loop>
                      <source src={require('../assets/videos/nostos.mp4')} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </StickyComponent>

          <StickySlider
            onChange={cursor => {
              setGarmentsCursor(cursor);
            }}
            divisions={garmentItems.length}
            name="garments"
            style={{
              transition: '1s',
              background: garmentItems[garmentsCursor >= 0 && garmentsCursor < garmentItems.length ? garmentsCursor : 0].background
            }}
          >
            <div className="absolute left-0" style={{ top: '-80px' }}>
              <h1 style={{ fontSize: '400px', opacity: '0.1', color: '#000' }}>NOSTOS</h1>
            </div>
            <div className="subcontainer flex relative z-2 w-100 h-100">
              <div className="w-50 h-100 flex items-center justify-center">
                  <Gallery
                    items={garmentItems} 
                    current={garmentsCursor}
                    scrollLength={typeof window !== 'undefined' && window.innerHeight}
                    Component={GarmentLeftItem}
                    noNavigation={true}
                  />
              </div>
              <div className="w-50 h-100v relative flex items-center justify-center">
                  {garmentItems.map((_item, index) => <GarmentItem item={_item} current={garmentsCursor} selected={index === garmentsCursor} itemIndex={index} />)}
              </div>
            </div>
          </StickySlider>
        </span>

        <div className="standard-container bg-white z-6" style={{ minHeight: '60vh' }} id="contact">
          <div className="absolute left-0 top-0 h-100 w-100 z-1">
            <img src={require('../assets/images/white-print.jpg')} className="w-100 h-100" />
          </div>
          <div className="subcontainer relative z-2 flex flex-column items-center justify-center">
            <button className="uk-button btn-wide shop-btn" style={{ borderRadius: '10px !important'}}>SHOP NOW</button>
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
                  <a href="" target="_blank"><div className="data-uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span data-uk-icon="icon: instagram; ratio: 2"></span></div></a>
                  <a href="" target="_blank"><div className="data-uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span data-uk-icon="icon: facebook; ratio: 2"></span></div></a>
                  <a href="" target="_blank"><div className="data-uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span data-uk-icon="icon: whatsapp; ratio: 2"></span></div></a>
                  <a href="" target="_blank"><div className="data-uk-icon-button mh2" style={{ padding: '10px', width: '50px', height: '50px' }}><span data-uk-icon="icon: linkedin; ratio: 2"></span></div></a>
                </div>
              </div>
          </div>
        </div>


        <div className="fixed z-5" style={{ bottom: '40px', right: '60px' }}>
          <button className="uk-button shop-btn">SHOP</button>
        </div>
      </div>
    </div>
    <Loader />
  </>
}

const IndexPageWrapper = () => <ScrollContextProvider><IndexPage /></ScrollContextProvider>
export default IndexPageWrapper;