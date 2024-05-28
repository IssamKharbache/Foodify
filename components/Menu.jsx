"use client";
//next components
import Image from "next/image";
import Link from "next/link";

//icons
import { IoIosArrowRoundForward, IoMdCloseCircleOutline } from "react-icons/io";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

const menu = [
  {
    img: "/menu/items1.png",
    title: "Tiny Tangy Spaghetti Twirl",
    price: "$78.00",
  },
  {
    img: "/menu/item2.jpeg",
    title: "Flame-Grilled Classic Burger",
    price: "$42.00",
  },
  {
    img: "/menu/item3.jpg",
    title: "Wood-Fired Margherita Mastery",
    price: "$32.00",
  },
  {
    img: "/menu/item4.jpg",
    title: "Summery Strawberry Delight",
    price: "$11.00",
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.section
      className="relative py-12 xl:py-24 bg-white"
      id="menu"
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <div className=" max-w-[570px] mx-auto text-center pb-4 xl:text-right pt-5  ">
          <h2 className="text-black mb-3 ">Favorite Menu</h2>

          <Popover
            isOpen={isOpen}
            onOpenChange={(open) => setIsOpen(open)}
            className="rounded-md bg-black-deep text-white"
          >
            <PopoverTrigger>
              <div>
                <Button
                  onClick={() => setIsOpen(true)}
                  className="text-black hover:opacity-70 group justify-center hover:text-black flex xl:justify-end items-center mb-16"
                >
                  View All
                  <IoIosArrowRoundForward className="text-3xl group-hover:rotate-45 duration-500" />
                </Button>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2 flex flex-col gap-y-4 ">
                <div className="flex justify-between">
                  <div className="text-small font-bold">Main Menu</div>
                  <IoMdCloseCircleOutline
                    className="text-2xl text-end cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  />
                </div>

                <div>
                  <img src="/menu.jpg" className="rounded-md" alt="" />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* MENU GRID */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4"
        >
          {menu.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[270px] bg-white hover:bg-blue duration-300  rounded-md shadow-primary mx-auto xl:mx-0 group"
              >
                {/* IMAGE */}
                {item.img && (
                  <div className="overflow-hidden">
                    <Image
                      src={item.img}
                      width={270}
                      height={270}
                      className="h-[350px] group-hover:scale-125 transition-all duration-300"
                      alt=""
                    />
                  </div>
                )}

                {/* TITLE AND PRICE */}
                <div className="pt-[20px] pb-[28px] px-[30px]">
                  <Link href="/">
                    <h3 className="font-poppins text-black mb-[14px]">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="text-xl font-poppins font-semibold text-body">
                    {item.price}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Menu;
