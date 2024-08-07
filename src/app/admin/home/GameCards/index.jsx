"use client";
import React, { useRef, useEffect } from "react";
import { GameCard1, GameCard2 } from "../constants";
import Image from "next/image";
import "./style.modules.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const GameCards = () => {
  const Image1Ref = useRef(null);
  const Title1Ref = useRef(null);
  const Image2Ref = useRef(null);
  const Title2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      Image1Ref.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: Image1Ref.current,
          start: "top 100%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      Title1Ref.current.children,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: Title1Ref.current,
          start: "top 100%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      Image2Ref.current,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: Image2Ref.current,
          start: "top 100%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      Title2Ref.current.children,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: Title2Ref.current,
          start: "top 100%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <section className="GameCard1Section">
        <Image
          className="rounded-lg"
          id="GameCard1"
          src={GameCard1}
          alt="GameCard1"
          ref={Image1Ref}
        />
        <div
          ref={Title1Ref}
          className="gap-4 flex flex-col justify-center align-middle text-white"
        >
          <p>Dive into the Shadows and Uncover the Past</p>
          <p className="text-[#FF4553] text-4xl gameName">
            Assassin's <br /> Creed Game's
          </p>
          <p className="Description1">
            Step into the world of Assassins and Templars with the Assassin's
            Creed Card Game. This thrilling card game brings the iconic
            characters, rich lore, and intense action of the Assassin's Creed
            series to your tabletop.
          </p>
          <a
            className="PlayBtn hover:bg-white hover:text-[#FF4553] transition-colors"
            href="#"
          >
            {" "}
            Play Now{" "}
          </a>
        </div>
      </section>
      <section className="GameCard2Section">
        <div
          ref={Title2Ref}
          className="gap-4 flex flex-col justify-center align-middle text-white"
        >
          <p>Dive into the Shadows and Uncover the Past</p>
          <p className="text-[#FF4553] text-4xl gameName">
            Elden Ring: <br /> Shadow of the Erdtree
          </p>
          <p className="Description2">
            Step into the world of Assassins and Templars with the Assassin's
            Creed Card Game. This thrilling card game brings the iconic
            characters, rich lore, and intense action of the Assassin's Creed
            series to your tabletop.
          </p>
          <a
            className="PlayBtn hover:bg-white hover:text-[#FF4553] transition-colors"
            href="#"
          >
            {" "}
            Play Now{" "}
          </a>
        </div>
        <Image
          ref={Image2Ref}
          className="rounded-lg"
          id="GameCard2"
          src={GameCard2}
          alt="GameCard1"
        />
      </section>
    </>
  );
};

export default GameCards;
