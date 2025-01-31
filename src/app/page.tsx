"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function WelcomePage() {
    const textRef = useRef<HTMLParagraphElement>(null);
    const clickMeRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        if (textRef.current) {
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

            gsap.to(textRef.current.children, {
                color: () => gsap.utils.random(["#FF4553"]),
                duration: 3,
                repeat: -1,
                yoyo: true,
                stagger: 0.2,
                ease: "sine.inOut",
            });

        }

        if (clickMeRef.current) {
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
                                y: () => gsap.utils.random(-3, 3),
                                x: () => gsap.utils.random(-2, 2),
                                duration: gsap.utils.random(1.5, 2.5),
                                repeat: -1,
                                yoyo: true,
                                ease: "sine.inOut",
                            });
                        });
                    },
                }
            );

            gsap.to(clickMeRef.current.children, {
                color: () => gsap.utils.random(["#FF4553"]),
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
            <p className="text-6xl font-bold flex space-x-2" ref={textRef}>
                {"WELCOME".split("").map((letter, index) => (
                    <span key={index} className="inline-block">
                        {letter}
                    </span>
                ))}
            </p>

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
