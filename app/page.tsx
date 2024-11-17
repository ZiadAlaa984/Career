"use client";
import { useEffect, useState } from "react";
import AnimatedTestimonialsDemo from "./Section/AnimatedTestimonialsDemo";
import Asked from "./Section/Asked";
import Contact from "./Section/Contact";
import Elevator from "./Section/Elevator";
import Features from "./Section/Features";
import Hero from "./Section/Hero";
import { InfiniteMovingCardsDemo } from "./Section/InfiniteMovingCardsDemo";
import TryProf from "./Section/TryProf";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="z-[10000000000000] fixed overflow-hidden h-screen inset-0 flex justify-center items-center  bg-white">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <Hero />
          <Features />
          <TryProf />
          <AnimatedTestimonialsDemo />
          <InfiniteMovingCardsDemo />
          <Elevator />
          <Asked />
          <Contact />
        </>
      )}
    </>
  );
}
