import "./Footer.scss"
import Logo from "../../crytocode-assets/Shree RaDha.png"
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    });

  return ( 
  <footer className="footer">
    <div className="footer__container wrapper" data-aos="fade-up">
        <div className="footer__col">
            <img src={Logo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste a voluptatum voluptas asperiores qui! 
               Sequi voluptas cumque libero dolorum aut sunt vero ea cupiditate, itaque sapiente? Ab inventore aliquid tempora.
            </p>
        </div>

        <div className="footer__col">
            <h3>About</h3>
            <a href="#">about us</a>
            <a href="#">features</a>
            <a href="#">trends</a>
        </div>

        <div className="footer__col">
            <h3>Facilities</h3>
            <a href="#">Customized blouses</a>
            <a href="#">Home delivery</a>
            <a href="#">Rankings</a>
        </div>

        <div className="footer__col">
            <h3>Contact Us</h3>
            <a href="#">123 Street, Rajasthan, India</a>
            <a href="#">386724567</a>
            <a href="#">info@example.com</a>
        </div>
        
        <div className="footer__col">
            <h3>Socials</h3>
            <div className="footer__icons">
                <a href="#" className="footer__icon">
                    <FaFacebookF />
                </a>
                <a href="#" className="footer__icon">
                    <FaInstagram />
                </a>
                <a href="#" className="footer__icon">
                    <FaLinkedinIn />
                </a>
                <a href="#" className="footer__icon">
                    <FaYoutube />
                </a>
            </div>
        </div>
    </div>
  </footer>
  );
};

export default Footer
