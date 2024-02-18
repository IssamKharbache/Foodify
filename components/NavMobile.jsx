"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
//icons for links
import { IoHome } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

import { AiTwotoneMessage } from "react-icons/ai";

// icons for menu
import { TiThMenu } from "react-icons/ti";

import { CgClose } from "react-icons/cg";

import { Link as ScrollLink } from "react-scroll";
import { Button } from "./ui/button";

const links = [
  {
    icon: <IoHome />,
    path: "home",
    name: "home",
    offset: 0,
  },
  {
    icon: <MdRestaurantMenu />,
    path: "menu",
    name: "menu",
    offset: 0,
  },
  {
    icon: <FaBookReader />,
    path: "about",
    name: "about",
    offset: -50,
  },
  {
    icon: <AiTwotoneMessage />,
    path: "contact",
    name: "contact",
    offset: 0,
  },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${containerStyles}`}>
      {/* open menu button */}
      <div
        className="cursor-pointer outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <TiThMenu className="text-3xl text-white transition-all duration-200 " />
      </div>
      <aside
        className={`bg-black-deep fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500 ${
          isOpen ? "right-0" : "-right-full"
        }`}
      >
        <div className="flex flex-col items-center justify-between h-full  ">
          {/* Nav close button */}
          <div
            className="cursor-pointer text-4xl rounded-md outline-none absolute w-11 h-10 left-8 top-8 bg-body flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CgClose className="" />
          </div>
          {/* LOGO */}
          <Link href="/">
            <Image src={"/logoNav.svg"} width={90} height={36} alt="" />
          </Link>
          {/* LINKS */}
          <div className="flex flex-col gap-y-14">
            {links.map((link, index) => {
              return (
                <ScrollLink
                  onClick={() => setIsOpen(false)}
                  key={index}
                  to={link.path}
                  offset={link.offset}
                  smooth={false}
                  className="flex items-center gap-x-3"
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </ScrollLink>
              );
            })}
          </div>
          {/* Button */}
          <ScrollLink
            to="reservation"
            onClick={() => setIsOpen(false)}
            smooth={true}
            offset={-150}
          >
            <Button>Make a reservation</Button>
          </ScrollLink>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
