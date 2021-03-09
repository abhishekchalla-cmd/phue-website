import React from "react"
import Sidebar from "../components/sidebar"
import ParallaxComponent from '../components/parallax';
import Hero from "./index/Hero";
import StickyComponent from "../components/StickyComponent";
import BlankBox from "../components/BlankBox";
import GarmentsSection from './index/GarmentsSection';

const IndexPage = () => {
  return <div className="flex">
    <div className="w-sidebar">
      <Sidebar />
    </div>

    <div id="container" className="w-100">

      <Hero />

      
      <ParallaxComponent defaultTop={500} duration={typeof window !== 'undefined' && window.innerHeight}>
        <div className="z-2 standard-container top-0 left-0 pv5 h-100v bg-light">
            <div className="subcontainer flex-ns">
                <div className="w-50">
                  <h1>About us</h1>
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

                <div className="w-50">
                  <div className="bg-dark ml3 h-100 w-100 br4" />
                </div>
            </div>
        </div>
      </ParallaxComponent>



      <div className="h-100v"></div>
      <div className="standard-container top-0 right-0 pv5 h-100v bg-sky-blue z-1" style={{ width: 'calc(100vw - 60px)', position: 'fixed' }}>
        <div className="subcontainer flex-ns">
          <div className="w-50">
            <h1>What we offer</h1>
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

      <div className="standard-container pv5 bg-white z-2">
        <div className="subcontainer">
          <h1>Value proposition</h1>
          
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

      <StickyComponent className="standard-container pv5 h-100v top-0 right-0 z-1 bg-sky-blue" style={{ marginTop: '-100vh' }}>
        <div className="subcontainer">
            <h1>Core values</h1>
            <div className="flex">
                <div className="w-33">
                    <BlankBox />
                </div>
                <div className="w-33">
                    <BlankBox />
                </div>
                <div className="w-33">
                    <BlankBox />
                </div>
            </div>
        </div>
      </StickyComponent>

      <div className="standard-container pv5 bg-white z-2" style={{ minHeight: '100vh' }}>
        <div className="subcontainer">
          <div className="flex">
            <div className="w-60">
              <BlankBox backgroundColor="#333" />
            </div>
            <div className="w-40 ml3">
              <h1>Consumer</h1>
              <div className="bg-blur pa4 br5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-60">
              <BlankBox backgroundColor="#333" />
            </div>
            <div className="w-40 ml3">
              <h1>Consumer</h1>
              <div className="bg-blur pa4 br5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="w-60">
              <BlankBox backgroundColor="#333" />
            </div>
            <div className="w-40 ml3">
              <h1>Consumer</h1>
              <div className="bg-blur pa4 br5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              </div>
            </div>
          </div>
        </div>
      </div>

      <StickyComponent className="standard-container pv5 h-100v top-0 right-0 z-1 bg-dark" style={{ marginTop: '-100vh' }}>
        <div className="subcontainer flex">
          <div className="w-50 pr3">
            <h1 className="white">Nostos</h1>
            <div className="bg-blur pa4 br5">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            </div>
          </div>

          <div className="w-50">
            <BlankBox backgroundColor="#444" />
          </div>
        </div>
      </StickyComponent>


      <GarmentsSection />


      <div className="fixed z-7" style={{ bottom: '40px', right: '60px' }}>
        <button className="uk-button">SHOP NOW</button>
      </div>
    </div>
  </div>
}

export default IndexPage
