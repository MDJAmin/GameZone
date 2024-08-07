"use client";
import Spline from "@splinetool/react-spline";
import { useEffect, useState, useRef } from "react";
import AdminLoading from "../../loading";
import "./style.modules.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export default function Model() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const splineRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    const handleError = (e) => {
      setError(e.message);
      setLoading(false);
    };

    window.addEventListener("error", handleError);

    const disableZoom = (event) => {
      event.preventDefault();
    };

    if (splineRef.current) {
      splineRef.current.addEventListener("wheel", disableZoom);
    }

    return () => {
      window.removeEventListener("error", handleError);
      if (splineRef.current) {
        splineRef.current.removeEventListener("wheel", disableZoom);
      }
    };
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <main className="mt-72 w-full">
      <div>
        <h2
          className="modelHeader text-4xl gap-2 flex justify-center"
          ref={headerRef}
        >
          <span>Take</span>
          <span>A</span>
          <span>Look</span>
          <span>At</span>
          <span>Our</span>
          <span>New</span>
          <span>Merch</span>
        </h2>
      </div>
      <div className="ModelItem mt-4 pt-4" ref={splineRef}>
        {loading && (
          <div>
            <AdminLoading />
          </div>
        )}
        {error ? (
          <div>Error loading Spline scene: {error}</div>
        ) : (
          <Spline
            scene="https://prod.spline.design/iZuhyFBKamgS9dEw/scene.splinecode"
            onLoad={() => setLoading(false)}
            onError={(e) => {
              setError(e.message);
              setLoading(false);
            }}
          />
        )}
      </div>
    </main>
  );
}
