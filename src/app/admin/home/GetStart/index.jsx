"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { GetStartImg } from "../constants";
import "./style.modules.css";
import Atropos from "atropos/react";
import "atropos/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const GetStart = () => {
  const StartCardRef = useRef(null);
  const StartTitleCardRef = useRef(null);

  useEffect(() => {
    const imgEl = StartCardRef.current;
    const titleEl = StartTitleCardRef.current;
    gsap.fromTo(
      imgEl,
      {
        y: 100,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: imgEl,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      titleEl,
      {
        x: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        x: 0,
        delay: 1,
        direction: 1,
        scrollTrigger: {
          trigger: titleEl,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="GetStartSection text-white rounded-md shadow-md ">
      <div ref={StartTitleCardRef} className="CardContent ">
        <p>
          Start Your <br /> Journey with <br />{" "}
          <span className="text-[#FF4553]"> GameZone </span>
          <br /> Today!
        </p>
        <a className="transition-colors" href="/admin/games">
          Get Start
        </a>
      </div>
      <div ref={StartCardRef}>
        <Atropos shadow={false} className="my-atropos">
          <Image
            className="GetStartImg"
            src={GetStartImg}
            alt="Get Started Image"
          />
        </Atropos>
      </div>
    </section>
  );
};

export default GetStart;
