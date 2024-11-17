import { AccordionDemo } from "@/components/ui/AccordionDemo";
import SpecialTitle from "@/components/ui/SpecialTitle";
import React from "react";

export default function Asked() {
  return (
    <section className="min-h-screen">
      <SpecialTitle title={" Questions"} desc={"Frequently Asked Questions."} />
      <AccordionDemo />
    </section>
  );
}
