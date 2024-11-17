"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import FramerMagnetic from "../../components/ui/Framer";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const phrases = ["join to get exclusive contact."];

  // MaskText Component for Animating the Phrases
  function MaskText() {
    // Animation configuration
    const animation = {
      initial: { y: "100%", opacity: 0 },
      enter: (i: number) => ({
        y: "0",
        opacity: 1,
        transition: {
          duration: 1.5,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.1 * i,
        },
      }),
    };

    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });

    return (
      <div ref={ref}>
        {phrases.map((phrase, index) => (
          <div key={index} className="overflow-hidden">
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : "initial"}
              className="md:text-8xl text-6xl text-[#1e2532] dark:text-white  mt-8 max-w-3xl mx-auto text-center capitalize"
            >
              {phrase}
            </motion.p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section>
      <h1>
        <MaskText />
      </h1>
      <div className="flex justify-center my-20 items-center">
        <FramerMagnetic>
          <Button className="md:p-5 p-3 md:w-[200px] w-[150px] h-[150px] md:h-[200px] rounded-full cursor-pointer text-white md:text-2xl text-xl text-wrap border dark:bg-stone-950 shadow-stone-950 bg-transparent bg-[#1e2532] hover:bg-[#1e2532]/95 transition-all duration-300 border-stone-900">
            <Link target="_blank" href="mailto:ziadalaa984@gmail.com">
              Contact With Me
            </Link>
          </Button>
        </FramerMagnetic>
      </div>
    </section>
  );
}
