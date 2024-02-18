"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import NavBar from "./NavBar";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

const Header = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      //detect scroll
      setActive(window.scrollY > 100);
    };

    //add event listener
    window.addEventListener("scroll", handleScroll);

    //clear even listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        active ? "bg-black-deep py-4" : "bg-none py-8"
      } fixed text-white top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        {/* logo , nav , btn */}
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href={"/"}>
            <Image
              src={`${active ? "/logoNav.svg" : "/logo.svg"}`}
              width={120}
              height={45}
              alt=""
            />
          </Link>
          {/* NAV BAR */}
          <NavBar
            containerStyles="hidden xl:flex gap-x-12"
            linkStyles="capitalize"
          />
          {/* BUTTON */}
          <ScrollLink to="reservation" className="hidden md:flex" smooth={true}>
            <Button variant="default">Make a reservation</Button>
          </ScrollLink>
          {/* MOBILE NAV */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
