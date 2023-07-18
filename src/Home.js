import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="./images/amazon_background.jpg" alt="" />

        <div className="home__row">
          <Product id="12321341" title="The lean startup" price={29.99} image="./images/the-lean-startup-cover.png" rating={3} />
          <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.00} image="./images/Kenwood.Mixer.jpg" rating={4} />
        </div>

        <div className="home__row">
          <Product id="4903850" title="Fitbit Charge 3 Fitness Wristband (Black/Graphite)" price={199.99} image="./images/Fit_Bit_watch.jpg" rating={3} />
          <Product id="23445930" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} image="./images/Amazon_Echo.jpg" rating={5} />
          <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={598.99} image="./images/Apple_iPad_Pro.jpg" rating={4} />
        </div>

        <div className="home__row">
          <Product id="4903850" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.99} image="./images/Samsung_curved_monitor.jpg" rating={4} />
        </div>

    </div>
  </div>
  );
}


export default Home;