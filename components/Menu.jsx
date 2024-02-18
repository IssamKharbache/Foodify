"use client";
//next components
import Image from "next/image";
import Link from "next/link";

//icons
import { IoIosArrowRoundForward } from "react-icons/io";
//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

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
  return (
    <section className="relative py-12 xl:py-24 bg-white" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className=" max-w-[570px] mx-auto text-center pb-4 xl:text-right pt-5  "
        >
          <h2 className="text-black mb-3 ">Favorite Menu</h2>
          <Link
            className="text-black hover:opacity-70 group justify-center hover:text-black flex xl:justify-end items-center mb-16"
            href="menu"
          >
            View All
            <IoIosArrowRoundForward className="text-3xl group-hover:rotate-45 duration-500" />
          </Link>
        </motion.div>
        {/* MENU GRID */}
        <motion.div
          variants={fadeIn("up", 0.4)}
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
    </section>
  );
};

export default Menu;
