"use client";
import React, { useEffect, useRef } from "react";
import UserCard from "./UserCards";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import "./style.modules.css";
gsap.registerPlugin(ScrollTrigger);
const FeedBack = () => {
  const CardTitleRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".CardTitle");
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: CardTitleRef.current,
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section>
      <div
        ref={CardTitleRef}
        className="CardTitle container text-center text-white flex flex-col gap-4"
      >
        <h3 className="text-4xl">User Feedback</h3>
        <p className="">Hear What Our Users Say about us :</p>
      </div>
      <div>
        <UserCard />
      </div>
    </section>
  );
};

export default FeedBack;
