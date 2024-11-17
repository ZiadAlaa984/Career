"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";
import { testimonials } from "../data/data";
import SpecialTitle from "@/components/ui/SpecialTitle";

export function InfiniteMovingCardsDemo() {
  return (
    <section className="min-h-screen">
      <SpecialTitle
        title={"Reviewed"}
        desc={" by the community. Trusted by professionals"}
      />
      <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:border-stone-300 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
