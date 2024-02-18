"use client";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <motion.footer
      id="contact"
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="bg-black-deep text-white pt-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row">
          <div className="w-[300px] mb-8 xl:mb-0 ">
            {/* LOGO */}
            <Link href="/">
              <Image src="/logoNav.svg" height={39} width={90} alt="logo" />
            </Link>
          </div>
          {/* Grid items */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-5 xl:mb-16">
            <div>
              <h4 className="font-semibold mb-5">Blog</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <li>
                  <Link href="/">Want to learn more about us ? </Link>
                </li>
                <li>
                  <Link href="/">Read about foodify and there co workers</Link>
                </li>
                <li>
                  <Link href="/">
                    How we become the largest brand restaurent in usa
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-x-5 xl:flex-col xl:items-center ">
              <h4 className="font-semibold mb-5 ">Socials</h4>
              <ul className="flex flex-row  gap-x-4 xl:flex-col gap-y-6 text-lg">
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#910d65] flex items-center gap-x-2"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#316FF6] flex items-center gap-x-2"
                  >
                    <FaFacebook />{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-grey flex items-center gap-x-2"
                  >
                    <RiTwitterXLine />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#FF0000] flex items-center gap-x-2"
                  >
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright */}
        </div>
        <div className="py-4 border-t border-white/10">
          <p className="text-white/60 text-center text-sm">
            Copyright &copy; Foodify 2024 Build by Kharbache Issam
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
