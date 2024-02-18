"use client";

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px]  p-8 md:p-12 xl:p-0 items-center "
      id="about"
    >
      {/* TEXT */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="xl:pl-[135px] "
      >
        <h1 className="mb-9">Let's talk about Foodify</h1>
        <p className="mb-8">
          Foodify is a contemporary culinary destination that redefines the
          dining experience through a fusion of innovation and tradition.
          Nestled in the heart of the city, Foodify offers a tantalizing menu
          curated by expert chefs who artfully blend global flavors with
          locally-sourced ingredients, ensuring each dish is a harmonious
          symphony of taste and texture.
        </p>
        <p className="mb-10">
          It offers a diverse menu crafted from locally-sourced ingredients and
          complemented by a selection of fine wines and craft cocktails. With
          its focus on culinary excellence and modern flair, Foodify promises a
          memorable dining experience for every guest
        </p>
        <div className="pt-8 mb-8">
          <Button>Read more</Button>
        </div>

        {/* IMAGE */}
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/about/img.png"
          width={705}
          height={771}
          alt=""
          className="hidden xl:flex"
        />
      </motion.div>
    </section>
  );
};

export default About;
