import React from "react";
import { Button } from "@/components/ui/button";
import { CarouselSize } from "@/components/ui/CarouselSize";

export default function TryProf() {
  return (
    <section className="min-h-screen  ">
      <div className="grid grid-cols-2 capitalize  gap-16">
        <div className="lg:col-span-1 col-span-2 ">
          <CarouselSize />
        </div>
        <div className="lg:col-span-1 col-span-2  gap-6 justify-center  flex flex-col">
          <h3 className="md:text-5xl text-3xl dark:text-white  text-[#1e2532] font-bold text">
            Try our professional Resume builder now!
          </h3>
          <p className="md:text-lg text-sm">
            Try our professional Resume builder now! Save time with our easy
            3-step resume builder. No more writers block or formatting
            difficulties in Word. Rapidly make a perfect resume employers love.
          </p>
          <div className="flex gap-2 md:gap-6">
            <Button className="text-xs md:text-lg">create my resume</Button>
            <Button className="text-xs md:text-lg" variant="outline">
              Resume examples
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
