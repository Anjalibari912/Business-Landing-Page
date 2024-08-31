import "./Earnings.scss";
import Img from "../../crytocode-assets/icon1.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Earnings = () => {
    useEffect(() => {
        Aos.init({ duration: 1000});
    });
  return <section className="earnings">
    <div className="earnings__container wrapper">
        <div className="earnings__left" data-aos="fade-right">
            <img src={Img} alt="earnings" />
        </div>
        <div className="earnings__right" data-aos="zoom-in-up">
            <h2>Trusted By 200 + satisfied clients</h2>
            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.
                <br/>↪Fresh and Fast food Delivery
                <br/>↪24/7 Customer Support
                <br/>↪Easy Customization Options
                <br/>↪Delicious Deals for Delicious Meals
                </p>
                <a href="#" className="btn">
                    GET TO US
                </a>
        </div>

    </div>

  </section>
}

export default Earnings
