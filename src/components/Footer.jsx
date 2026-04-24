"use client";

import React from "react";
import { motion } from "framer-motion";
import { TechServLogo } from "./ui/Icons";

const PREMIUM_EASE = [0.25, 0.8, 0.25, 1];
const VIEWPORT_ONCE = { once: true, margin: "-50px" };

const footerRevealVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: PREMIUM_EASE,
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-[#ece8f7] bg-[linear-gradient(180deg,rgba(247,243,255,0.88),rgba(255,255,255,0.98))] pb-[38px] pt-[80px] text-[#2f3038] max-lg:pt-16 max-md:pb-8 max-md:pt-12"
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={footerRevealVariants}
      style={{ willChange: "transform, opacity" }}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 px-8 md:grid-cols-[1.25fr_1fr_1fr] max-md:gap-10 max-md:px-5">
        <div>
          <TechServLogo className="origin-top-left -ml-14 -mt-14 scale-[3]" />
          <p className="mt-[110px] text-[17px] font-normal leading-none tracking-[0.01em] text-[#5f6470] max-md:mt-10 max-md:text-[15px]">
            Connected growth for the IT sales ecosystem.
          </p>
        </div>
        <div>
          <h3 className="mb-[22px] text-[13px] font-bold uppercase tracking-[0.36em] text-[#8b61ff] max-md:mb-4">Resources</h3>
          <ul className="space-y-[15px] text-[17px] font-normal leading-none text-[#303038] max-md:text-[15px]">
            <a href="#" className="block">Customer stories</a>
            <a href="#" className="block">Channel glossary</a>
            <a href="#" className="block">Partner results</a>
            <a href="#" className="block">Blog</a>
            <a href="#" className="block">Research</a>
          </ul>
        </div>
        <div>
          <h3 className="mb-[22px] text-[13px] font-bold uppercase tracking-[0.36em] text-[#8b61ff] max-md:mb-4">Company</h3>
          <ul className="space-y-[15px] text-[17px] font-normal leading-none text-[#303038] max-md:text-[15px]">
            <a href="#" className="block">About</a>
            <a href="#" className="block">Careers</a>
            <a href="#" className="block">Partner program</a>
            <a href="#" className="block">Book a demo</a>
            <a href="#" className="block">Find a partner</a>
          </ul>
        </div>
      </div>
      <p className="mt-[74px] text-center text-[14px] font-normal text-[#626774] max-md:mt-10">
        2026 TechServ.ai. Built for modern IT sales growth.
      </p>
    </motion.footer>
  );
}
