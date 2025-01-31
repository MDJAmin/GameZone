"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WelcomePage() {
    const textRef = useRef<HTMLParagraphElement>(null); // Ref for "WELCOME" text
    const clickMeRef = useRef<HTMLAnchorElement>(null); // Ref for "Click Me!" text

    useEffect(() => {
        if (textRef.current) {
            // Intro animation for "WELCOME"
            gsap.fromTo(
                textRef.current.children,
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power3.out",
                    onStart: () => {
                        Array.from(textRef.current!.children).forEach((letter) => {
                            gsap.to(letter, {
                                y: () => gsap.utils.random(-10, 10),
                                x: () => gsap.utils.random(-5, 5),
                                duration: gsap.utils.random(1.5, 2.5),
                                repeat: -1,
                                yoyo: true,
                                ease: "sine.inOut",
                            });
                        });
                    },
                }
            );

            // Color animation for "WELCOME"
            gsap.to(textRef.current.children, {
                color: ["#FF4553", "#FFD700", "#00FF7F", "#00BFFF", "#FF69B4"],
                duration: 3,
                repeat: -1,
                yoyo: true,
                stagger: 0.2,
                ease: "sine.inOut",
            });
        }

        if (clickMeRef.current) {
            // Intro animation for "Click Me!" with smoother, lower values
            gsap.fromTo(
                clickMeRef.current.children,
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power3.out",
                    onStart: () => {
                        Array.from(clickMeRef.current!.children).forEach((letter) => {
                            gsap.to(letter, {
                                y: () => gsap.utils.random(-3, 3), // Smoother and lower vertical movement
                                x: () => gsap.utils.random(-2, 2), // Slight random horizontal shift
                                duration: gsap.utils.random(1.5, 2.5),
                                repeat: -1,
                                yoyo: true,
                                ease: "sine.inOut",
                            });
                        });
                    },
                }
            );

            // Color animation for "Click Me!" with the same style as "WELCOME"
            gsap.to(clickMeRef.current.children, {
                color: ["#FF4553", "#FFD700", "#00FF7F", "#00BFFF", "#FF69B4"],
                duration: 3,
                repeat: -1,
                yoyo: true,
                stagger: 0.2,
                ease: "sine.inOut",
            });
        }
    }, []);

    return (
        <div className="flex flex-col h-screen items-center justify-center bg-gray-900">
            {/* "WELCOME" as a normal p tag */}
            <p className="text-6xl font-bold flex space-x-2" ref={textRef}>
                {"WELCOME".split("").map((letter, index) => (
                    <span key={index} className="inline-block">
                        {letter}
                    </span>
                ))}
            </p>

            {/* "Click Me!" as an anchor (a) tag */}
            <a href="/admin/home" className="mt-10 text-3xl font-bold flex space-x-2" ref={clickMeRef}>
                {"Click Me!".split("").map((letter, index) => (
                    <span key={index} className="inline-block cursor-pointer">
                        {letter}
                    </span>
                ))}
            </a>
        </div>
    );
}
