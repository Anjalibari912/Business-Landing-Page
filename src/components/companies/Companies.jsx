import "./Companies.scss";
import {companyInfo} from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Companies = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    });
  return( 
  <section className="companies">
    <h2 data-aos="fade-up">Products || Latest and trendy design</h2>
    {/* <h2 data-aos="fade-up">Latest and trendy design</h2> */}
    <div className="companies__container wrapper" data-aos="fade-up">
        {
            companyInfo.map(({id, img}) =>(
                <img src={img} alt="company" key={id} />
            ))
        }
    </div>
  </section>
  )
  
}

export default Companies
