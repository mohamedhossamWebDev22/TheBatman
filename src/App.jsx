import React, { useEffect } from "react";
import "./style.scss";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import AOS from "aos";
import "aos/dist/aos.css";

import sign from "./assets/1.png";
import city from "./assets/2.png";
import batman from "./assets/3.png";
import ridller from "./assets/4.png";
import glider from "./assets/5.png";
import line2 from "./assets/6.png";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <div className="mob">
        <h1>Oops!!.. that's seems like you are using a mobile device; try using a wider screen ;)</h1>
      </div>

      <Parallax pages={6}>
        <ParallaxLayer offset={0.3} speed={0.2}>
          <h1 className="tit">
            The
            <br />
            BATMAN
          </h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={2} factor={5}>
          <img id="one" src={city} alt="Gotham City" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.8}
          speed={0}
          style={{ background: "black" }}
          factor={2.8}
        >
          <div className="content">
            <img src={sign} alt="Bat Logo" />
            <h1>
              Fear is a tool. When that light hits the sky, it's not just a
              call. It's a <br />
              <a>warning</a>.
            </h1>

            <div className="chs">
              <div className="ch">
                <div style={{ flexDirection: "row-reverse" }} className="bg">
                  <img src={batman} alt="batman" />
                  <p>I'm vengeance!</p>
                </div>
              </div>
              <div className="ch">
                <div className="bg">
                  <img src={ridller} alt="ridller" />
                  <p> If you are justice, please do not lie .</p>
                </div>
              </div>
            </div>

            <img className="line" src={line2} alt="line 2" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.2} speed={0}>
          <h1 className="q">
            "Our <a>scars</a> can destroy us, even after the physical{" "}
            <a>wounds </a>
            have healed. But if we <a>survive</a> them, they can{" "}
            <a>transform</a> us. They can give us the <a>power</a> to endure,
            and the <a>strength</a> to fight."
          </h1>
        </ParallaxLayer>
        <ParallaxLayer offset={5} style={{ background: "black" }} speed={2.5}>
          <h1 className="footer">
            Made By <a>Mohamed Hossam</a>
          </h1>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
