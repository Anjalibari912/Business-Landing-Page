import "./Subscribe.scss"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Subscribe = () => {
    useEffect(()=>{
        Aos.init({duration : 1000});
    });
  return <section className="subscribe">
    <div className="subscribe__container wrapper">
        <h2 data-aos="fade-up">Subscribe & Get to know the latest trendy updaates</h2>
        <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates deleniti, sit totam mollitia maxime animi itaque nobis. Recusandae voluptates hic, molestias beatae, distinctio dignissimos, veniam fugit perspiciatis nihil reiciendis voluptatem.
        </p>
        <form action="#" data-aos="fade-up">
            <input type="name" placeholder="Your name" />
            <input type="email" placeholder="Write Your Email here"/>
            <a href="#" className="btn">
                Connect
            </a>
        </form>
    </div>
  </section>
}

export default Subscribe
