import { Lora, Poppins, Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-urbanist",
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Foodify",
  description: "Our restaurent web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${lora.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
