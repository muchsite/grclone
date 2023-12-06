import React, { useState, useEffect } from "react";
import axios from "axios";
import "./services.scss";
import { Link } from "react-router-dom";
import { BaseURL, scrollTP } from "../home/Home";
import { useInView } from "react-intersection-observer";
import LoadnigMain from "../../loading/LoadnigMain";
import Faq from "../../faq/Faq";
import Testimonials from "../../testimonials/Testimonials";
const Services = () => {
  const [services, setServices] = useState(null);
  const [faqData, setFaqData] = useState(null);
  const [testimonials, setTestimonials] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BaseURL}/service/list/`);
        setServices(res.data.services);
        setFaqData(res.data.faqs);
        setTestimonials(res.data.testimonial);
        setIsLoading(false);
        scrollTP();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  const [hoverService, setHoverService] = useState(null);
  const { ref: serviceRef, inView: serviceView } = useInView();

  return (
    <>
      {isLoading ? (
        <LoadnigMain />
      ) : (
        <div className="services_cont">
          <h2>SERVICES</h2>
          <div className="home_service_cont" ref={serviceRef}>
            {services?.map((item, index) => (
              <Link
                target="_blank"
                to={`/services/${item.slug}`}
                key={index}
                className={`hoem_service_item ${
                  serviceView && `service_animation_${index} `
                }`}
                onMouseEnter={() => setHoverService(index)}
                onMouseLeave={() => setHoverService(null)}
              >
                <h3
                  className={`home_service_title ${
                    hoverService == index && "home_service_title_active"
                  } `}
                >
                  {item.title}
                </h3>
                <img src={item.image} alt="" />
                <div
                  className={`service_bacgound ${
                    hoverService == index && "opacity_1"
                  } `}
                ></div>
              </Link>
            ))}
          </div>
          <Faq faqData={faqData} />
          <Testimonials testimonials={testimonials} />
        </div>
      )}
    </>
  );
};

export default Services;
