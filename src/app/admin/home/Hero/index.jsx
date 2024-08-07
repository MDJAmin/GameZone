"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { HeroGif, HeroImg } from "../constants";
import "./style.modules.css";
import gsap from "gsap";

const Hero = () => {
  const heroContentRef = useRef(null);

  useEffect(() => {
    if (heroContentRef.current)
      gsap.fromTo(
        heroContentRef.current.children,
        {
          opacity: 0,
          x: -200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.5,
        }
      );
  }, []);

  return (
    <section id="Hero" className="relative">
      <div className="w-full relative">
        <Image
          src={HeroImg}
          alt="Description"
          className="select-none w-full"
          height={"100%"}
        />
      </div>
      <div ref={heroContentRef} id="HeroContent" className="z-10 px-[4rem]">
        <p className="text-white text-sm sm:px-2 Discover">
          Discover new exciting games& play them anytime !
        </p>
        <p id="HeroTitle" className="pb-4">
          Start your <br /> <span className="text-[#FF4553]">gaming</span>{" "}
          <br />
          adventure today.
        </p>
        <div className="AllBtn flex flex-wrap gap-4 sm:pt-4">
          <a href="/admin/games">
            <button className="bg-[#FF4553] rounded-sm text-white hover:bg-white hover:text-[#FF4553] transition-colors">
              Free trail
            </button>
          </a>
          <a href="/admin/orders#Analyze">
            <button className="bg-white rounded-sm text-black hover:text-[#FF4553] transition-colors">
              Explore Top Games
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
