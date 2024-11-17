"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { imgs } from "../data/data";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Hero() {
  const phrases = ["take your career", "search to the next level"];
  const words = ` use professional field-tested resume templates that follow the exact
            resume rules employers look for. easy to use and done within minutes
            - try now for free!`;

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

    return (
      <div>
        {phrases.map((phrase, index) => (
          <div key={index} className="overflow-hidden">
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate="enter"
              className="lg:text-8xl text-4xl md:text-6xl dark:text-white  text-[#1e2532] text-center capitalize"
            >
              {phrase}
            </motion.p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <section className="h-screen flex justify-center flex-col pt-[140px] xl:pt-[40px]  gap-16 items-center">
        <div className="flex flex-col justify-center items-center md:gap-4 gap-2 lg:gap-8">
          <h1>
            <MaskText />
          </h1>
          <TextGenerateEffect duration={1} filter={false} words={words} />
          <div className="flex justify-center items-center">
            <Button className="">start creating</Button>
          </div>
        </div>
        <div>
          <h5 className="text-center text-xl">
            Our customers have been hired at:
          </h5>
          <div className="grid mt-4 place-content-center lg:grid-cols-7 md:grid-cols-4 grid-cols-3  ">
            {imgs.map((img, index) => (
              <Image
                key={index}
                alt={`company logo ${index + 1}`}
                className=" col-span-1 "
                src={img}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
