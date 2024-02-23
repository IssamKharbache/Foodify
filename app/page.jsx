import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reservation from "@/components/Reservation";
import ScrollEffect from "@/components/ScrollEffect";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main className="w-full   bg-white font-poppins  mx-auto overflow-hidden">
      <Header />
      <ScrollEffect />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Footer />
      <ToastContainer />
    </main>
  );
}
