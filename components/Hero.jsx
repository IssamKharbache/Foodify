"use client";

import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="bg-body min-h-screen flex justify-center" id="home">
      <div className="flex">
        {/* TEXT and IMAGE */}
        <div className="flex ml-0 md:ml-8  items-center justify-center gap-16">
          {/* TEXT */}
          <div className="">
            <motion.h1
              className="text-white mb-7 lg:text-left text-center "
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
              className="text-white font-semibold text-center lg:text-left "
            >
              By : <span className="text-black">FOODIFY</span>
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-8 text-center lg:text-left "
            >
              Welcome to FOODIFY ! Where every meal is a celebration!
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Link
                to="reservation"
                spy={true}
                smooth={true}
                duration={500}
                className="flex justify-center lg:justify-start"
              >
                <Button variant="default">
                  LET'S M <p className="text-white uppercase">eat</p>
                </Button>
              </Link>
            </motion.div>
          </div>
          {/* IMAGE */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="hidden lg:flex"
          >
            <Image
              src="/hero/plates.jpg"
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
