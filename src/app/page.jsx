import Image from "next/image";
import React from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";

function page() {
  return (
    <main>
      <div className="container mx-auto px-16 py-8">
        <Nav />
        <Hero />
      </div>
      <Gallery />
    </main>
  );
}

export default page;
