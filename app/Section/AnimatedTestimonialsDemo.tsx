import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonialsClient } from "../data/data";
import SpecialTitle from "@/components/ui/SpecialTitle";
import React from "react";
export default function AnimatedTestimonialsDemo() {
  return (
    <section className="min-h-screen">
      <SpecialTitle title={"Clients"} desc={"work in national company"} />
      <AnimatedTestimonials testimonials={testimonialsClient} />
    </section>
  );
}
