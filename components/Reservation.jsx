"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import ReservationForm from "./ReservationForm";

const Reservation = () => {
  return (
    <motion.section
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="xl:my-32 xl:h-[1020px] xl:bg-reservation xl:bg-no-repeat xl:bg-cover xl:flex xl:flex-col xl:justify-center xl:items-center"
      id="reservation"
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-black w-full xl:max-w-[868px] min-h-[518px] p-8 md:m-14"
      >
        <h2 className="text-white mb-9 capitalize">Make a reservation</h2>
        <ReservationForm />
      </motion.div>
    </motion.section>
  );
};

export default Reservation;
