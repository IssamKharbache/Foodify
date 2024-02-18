"use client";

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      className="bg-body  bg-no-repeat relative xl:bg-cover  py-40 pb-32 xl:py-0 "
      id="home"
    >
      <div className="container mx-auto">
        {/* TEXT and IMAGE */}
        <div className="flex items-center xl:h-[960px]">
          {/* TEXT */}
          <div className="w-full xl:max-w-[460px] text-center xl:text-left">
            <motion.h1
              className="text-white mb-7"
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              Taste the
              <br /> extra ordinary
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white font-semibold mb-7"
            >
              By : <span className="text-black">FOODIFY</span>
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-12 max-w-lg mx-auto  xl:max-w-none xl:mx-0"
            >
              Welcome to FOODIFY ! Where every meal is a celebration!
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Button variant="default">
                LET'S M <p className="text-white uppercase">eat</p>
              </Button>
            </motion.div>
          </div>
          {/* IMAGE */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="hidden xl:flex xl:absolute xl:top-[200px] xl:right-11"
          >
            <Image
              src="/hero/heroplate.jpg"
              width={756}
              className="rounded-full"
              height={602}
              quality={80}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
