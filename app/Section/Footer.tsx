import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { jobLinks } from "../data/data";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

const socialLinks = [
  { id: 1, icon: <FaFacebookF className="text-lg" /> },
  { id: 2, icon: <FaTiktok className="text-lg" /> },
  { id: 3, icon: <FaYoutube className="text-lg" /> },
  { id: 4, icon: <FaLinkedinIn className="text-lg" /> },
  { id: 5, icon: <FaSpotify className="text-lg" /> },
];

export default function Footer() {
  return (
    <footer className="text-[white] py-14 px-4 md:px-6  dark:bg-stone-950 bg-[#0f141e]">
      <div className="grid  max-w-screen-xl mx-auto grid-cols-4 gap-12">
        {/* Social Media Section */}
        <div className="md:col-span-1 col-span-4   flex md:flex-col gap-6">
          <h4 className="text-2xl">
            Connect with us <br /> on social media
          </h4>
          <ul className="flex flex-wrap gap-3 items-center">
            {socialLinks.map((link) => (
              <li
                key={link.id}
                className="p-3 bg-[#1e2532] dark:bg-black cursor-pointer hover:bg-[#303848] transition-all duration-300 ease-in rounded-full justify-center items-center"
              >
                {link.icon}
              </li>
            ))}
          </ul>
        </div>

        {/* Job Seekers Section */}
        <div className="md:col-span-3 col-span-4 gap-6  grid grid-cols-4">
          {jobLinks.map((section, index) => (
            <div
              key={index}
              className="md:col-span-1 col-span-2 flex flex-col gap-3"
            >
              <h6 className="text-[#303848]  dark:text-transparent font-medium text-lg capitalize bg-clip-text bg-gradient-to-r  from-stone-200 via-stone-700 to-stone-900  leading-snug">
                {section.title}
              </h6>
              <ul className="flex flex-col gap-2">
                {section.list.map((item, idx) => (
                  <li
                    key={idx}
                    className="cursor-pointer transition-colors duration-300 ease-in hover:text-[#10529b]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
