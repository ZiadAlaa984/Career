"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/ModeToggle";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    setIsActive((prevState) => !prevState);
  };

  return (
    <nav className="py-4 fixed left-0 right-0 backdrop-blur-2xl z-[1000]  dark:bg-stone-950 dark:border-stone-700 bg-white/75 border-b border-gray-200 w-full">
      <div className="max-w-screen-2xl w-full mx-auto px-4 md:px-6   flex justify-between items-center">
        <h1 className=" text-4xl  text-[#1e2532] dark:text-transparent font-bold  capitalize bg-clip-text bg-gradient-to-r  from-stone-200 via-stone-400 to-stone-600   capitaliz">
          career
        </h1>

        <div className="flex gap-3 items-center justify-center">
          <div
            onClick={toggleMenu}
            className="relative lg:hidden w-[40px] z-50 cursor-pointer h-[24px] flex flex-col justify-between"
          >
            <span
              className={`block h-[3px] rounded-full dark:bg-white bg-stone-950 transition-transform duration-300 ${
                isActive ? "transform translate-y-[10px] rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block h-[3px] rounded-full dark:bg-white bg-stone-950 transition-opacity duration-300 ${
                isActive ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-[3px] rounded-full dark:bg-white bg-stone-950 transition-transform duration-300 ${
                isActive ? "transform -translate-y-[10px] -rotate-45" : ""
              }`}
            ></span>
          </div>
          <div className="flex gap-6">
            <ul className="flex-1 lg:flex hidden flex-row items-center justify-end gap-6">
              <li className="text-lg font-medium">
                <Link href="/home">home</Link>
              </li>
              <li className="text-lg font-medium">
                <Link href="/Features">Features</Link>
              </li>
              <li className="text-lg font-medium">
                <Link href="/Questions">Questions</Link>
              </li>
              <li className="text-lg font-medium">
                <Link href="/Clients">Clients</Link>
              </li>
              <li className="text-lg font-medium">
                <Link href="/Elevator">Elevator</Link>
              </li>
              <li className="text-lg font-medium">
                <Link href="/Reviewed">Reviewed</Link>
              </li>
              <li className="text-lg font-medium">
                <Link href="/Contact">Contact</Link>
              </li>
              <Link href="#">
                <Button>build my resume</Button>
              </Link>
            </ul>
            <span className="text-lg font-medium">
              <ModeToggle />
            </span>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 overflow-hidde n w-full h-screen dark:bg-stone-950 bg-white flex flex-col items-center justify-center z-40"
            >
              <ul className="flex flex-col items-center gap-6">
                <li className="text-2xl font-medium">
                  <Link href="/home">home</Link>
                </li>
                <li className="text-2xl font-medium">
                  <Link href="/Features">Features</Link>
                </li>
                <li className="text-2xl font-medium">
                  <Link href="/Questions">Questions</Link>
                </li>
                <li className="text-2xl font-medium">
                  <Link href="/Clients">Clients</Link>
                </li>

                <li className="text-2xl font-medium">
                  <Link href="/Elevator">Elevator</Link>
                </li>
                <li className="text-2xl font-medium">
                  <Link href="/Reviewed">Reviewed</Link>
                </li>
                <li className="text-2xl font-medium">
                  <Link href="/Contact">Contact</Link>
                </li>
                <Link href="#">
                  <Button className="font-medium  ">build my resume</Button>
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
