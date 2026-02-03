"use client";

import Footer from "@/components/footer";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import CustomNavbar from "@/components/navbar";



export default function Home() {

  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (

    <div className="min-h-screen w-full relative">
      <CustomNavbar navItems={navItems} />
      <Hero />
      <HowItWorks />
      <Footer />
    </div>
  );
}
