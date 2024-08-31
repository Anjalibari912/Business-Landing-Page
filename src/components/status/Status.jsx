import "./Status.scss";
import StatusImg from "../../crytocode-assets/icon2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Status = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  });
  return (
    <section className="status">
        <div className="status__container wrapper">
            <div className="status__left" data-aos="zoom-in-up">
                <h2>Trust the process & Shree Radha</h2>
                <p>Consectetur adipisicing elit, 
                  sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.
                </p>
                <a href="#" className="btn">
                    READ MORE
                </a>
            </div>
        <div className="status__right" data-aos="fade-left">
            <img src={StatusImg} alt="status" />
        </div>
        </div>
    </section>
  );
};

export default Status
