import SpecialTitle from "@/components/ui/SpecialTitle";
import React from "react";
import { FaPinterest } from "react-icons/fa";
import { featuresData } from "../data/data";

export default function Features() {
  return (
    <section className="min-h-screen ">
      <SpecialTitle
        title={"Features"}
        desc={"designed to help you win your dream job"}
      />
      <div className="grid grid-cols-3 capitalize mt-6 md:mt-12 gap-8 md:gap-16">
        {featuresData.map((feature, index) => (
          <div key={index} className="lg:col-span-1 col-span-3 gap-3 flex">
            <div className="md:text-5xl text-3xl">
              <FaPinterest className="text-[#2B9B5A]" />
            </div>
            <div className="flex-1 flex flex-col">
              <h4 className="md:text-xl  text-lg  text-[#2B9B5A] font-bold">
                {feature.title}
              </h4>
              <p className="md:text-lg text-sm  font-semibold">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
