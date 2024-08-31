import "./Pricing.scss"
import {pricingInfo} from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Pricing = () => {
    useEffect(() =>{
        Aos.init({duration: 1000});
    })
  return <section className="pricing">
    <h2 data-aos="fade-up">Our Services</h2>
    <div className="pricing__container wrapper">
        {
            pricingInfo.map(({image, name, text}) => (
                <div className="pricing__card" data-aos="fade-up">
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <span>{text}</span>
                    <a href="#" className="btn">Call Now to Visit</a>
                </div>
            ))
        }
    </div>
  </section>
}

export default Pricing
