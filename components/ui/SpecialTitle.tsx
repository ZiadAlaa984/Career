"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { TypewriterEffect } from "../ui/typewriter-effect";

interface SpecialTitle {
  title: string;
  desc: string;
}

export default function SpecialTitle({ title, desc }: SpecialTitle) {
  const words = [
    {
      text: title,
      className: "md:text-5xl text-4xl text-[#1e2532] font-bold",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="flex flex-col gap-2 justify-center items-center">
      {inView && (
        <>
          <h2>
            <TypewriterEffect words={words} />
          </h2>
          <p className="md:text-md text-sm capitalize font-medium text-center max-w-xl">
            {desc}
          </p>
        </>
      )}
    </div>
  );
}
