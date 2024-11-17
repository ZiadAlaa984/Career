import SpecialTitle from "@/components/ui/SpecialTitle";
import React from "react";
import { Button } from "@/components/ui/button";
import img1 from "../img/Elevator/img1.png";
import img2 from "../img/Elevator/img2.jpg";
import Image from "next/image";

export default function Elevator() {
  return (
    <section className="min-h-screen">
      <SpecialTitle
        title={"The Elevator"}
        desc={
          "Discover our extensive knowledge base, The Elevator, which gives you the best information on improving your resume and resume writing samples, taking your career to the next level."
        }
      />

      <div className="grid grid-cols-2 capitalize mt-12 max-w-screen-lg mx-auto place-content-center gap-24">
        <div className="md:col-span-1 col-span-2  cursor-pointer  relative  bg-[#493995] overflow-hidden min-h-[392px]  rounded-xl  gap-3 flex ">
          <Image
            src={img1}
            alt="img1"
            className="w-full  object-cover  absolute"
          />
          <div className="p-4    overlay relative flex justify-between flex-col w-full h-full">
            <div>
              <Button className="rounded-md bg-[#f68559] hover:bg-[#f68559]/95">
                Filed Tested
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-white font-bold">
                The universal guide on how to write the perfect resume
              </h3>
              <p className="text-opacity-80 text-white uppercase leading-tight text-sm">
                Resume Guide · 57 min read
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-1 col-span-2 cursor-pointer relative bg-[#338699] overflow-hidden min-h-[392px]  rounded-xl  gap-3 flex">
          <Image
            src={img2}
            alt="img2"
            className="w-full  object-contain  absolute"
          />
          <div className="p-4 flex justify-between relative overlay1 flex-col w-full h-full">
            <div>
              <Button className="rounded-md bg-[#1a91f0] hover:bg-[#1a91f0]/95">
                HR approved
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl text-white font-bold">
                A comprehensive guide on how to write a cover letter
              </h3>
              <p className="text-opacity-80 text-white uppercase leading-tight text-sm">
                Cover Letter Guide · 72 min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
