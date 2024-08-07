"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.modules.css";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// Define images
const sliderImages = [
  { src: require("/public/assets/landingpage/Slider.png"), alt: "Slider" },
  { src: require("/public/assets/landingpage/Slider1.png"), alt: "Slider 1" },
  { src: require("/public/assets/landingpage/Slider2.png"), alt: "Slider 2" },
  { src: require("/public/assets/landingpage/Slider4.png"), alt: "Slider 3" },
  { src: require("/public/assets/landingpage/Slider5.png"), alt: "Slider 4" },
];

const Slider = () => {
  const SliderRef = useRef(null);
  const SliderTitleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the slider container
    gsap.fromTo(
      SliderRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: SliderRef.current,
          start: "top 100%",
          end: "bottom 65%",
          scrub: true,
        },
      }
    );

    // Animation for the title and company links with stagger effect
    if (SliderTitleRef.current) {
      gsap.fromTo(
        SliderTitleRef.current.children,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: SliderTitleRef.current,
            start: "top 100%",
            end: "bottom 65%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section>
      <div ref={SliderTitleRef} className="CompanyCard mt-4 mb-4">
        <p className="text-center text-2xl mb-4 pb-4">
          Trusted by Top Companies Worldwide
        </p>
        <div className="CompanyDiv flex justify-center">
          <a className="Company hover:text-[#FF4553] transition-colors" href="">
            Nintendo
          </a>
          <a className="Company hover:text-[#FF4553] transition-colors" href="">
            Microsoft
          </a>
          <a className="Company hover:text-[#FF4553] transition-colors" href="">
            Electronic Arts
          </a>
          <a className="Company hover:text-[#FF4553] transition-colors" href="">
            Ubisoft
          </a>
        </div>
      </div>
      <div ref={SliderRef} className="relative">
        <Swiper
          autoplay={{ delay: 5000 }} // Set autoplay delay here
          pagination={{ dynamicBullets: true }}
          modules={[Autoplay, Pagination]} // Include Autoplay module
          className="mySwiper"
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                width={800} // Set appropriate width
                height={600} // Set appropriate height
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
