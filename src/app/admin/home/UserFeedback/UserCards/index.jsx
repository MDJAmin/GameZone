"use client";
import React, { useRef, useEffect } from "react";
import { RiStarSFill } from "react-icons/ri";
import "./style.modules.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UserCard = () => {
  const CardRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".UserCard");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: CardRef.current,
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={CardRef}
      className="UserCardContainer flex flex-wrap mt-4 justify-center"
    >
      <div className="UserCard gap-4 flex flex-col">
        <p className="text-white text-center">
          Beautiful game, engaging <br /> play. Easy purchase and <br /> fast
          delivery !
        </p>
        <div className="flex">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill className="text-white opacity-75" />
        </div>
        <p className="text-white">RPGFanatic</p>
        <p className="text-white">Operations Manager,</p>
      </div>

      <div className="UserCard gap-4 flex flex-col">
        <p className="text-white text-center">
          Stunning card, high- <br /> quality, fast shipping. <br /> Highly
          recommend !
        </p>
        <div className="flex">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </div>
        <p className="text-white">Samuel</p>
        <p className="text-white">Product Specialist,</p>
      </div>

      <div className="UserCard gap-4 flex flex-col">
        <p className="text-white text-center">
          Product Purchased: <br /> Pokémon Trading Card <br /> Game Booster
          Pack
        </p>
        <div className="flex">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
        </div>
        <p className="text-white">DarkKnightGamer</p>
        <p className="text-white">CTO, TechGenius,</p>
      </div>
    </div>
  );
};

export default UserCard;
