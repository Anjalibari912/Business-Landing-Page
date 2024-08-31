
import "./Hero.scss";
import Mob from "../../crytocode-assets/Shree RaDha.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 1000 });
  });
  return (
    <section className="hero">
      <div className="hero__container wrapper">
        <div className="hero__left" data-aos="fade-right">
          <img src={Mob} alt="hero" />
        </div>
        <div className="hero__right" data-aos="zoom-in-up">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fuga doloribus id sunt eaque, placeat tenetur voluptas perspiciatis dolorum obcaecati dignissimos eum. 
            Modi fugiat libero illum asperiores autem saepe sed possimus.
          </p>
          <a href="#" className="btn">Contact us or book a visit</a>
        </div>

      </div>
    </section>
  
  )
}

export default Hero
