import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black flex justify-center items-center py-8 text-white flex-col">
      <img
        src="https://demo.cocobasic.com/opta-html/images/footer_logo_@x2.png"
        className="mb-12 w-16 h-16"
        alt=""
      />
      <p className="mb-4">
        &copy; {new Date().getFullYear()} Desarollado por{" "}
        <a
          href="https://prometheustij.com/"
          target="_blank"
          className="hover:underline hover:font-bold hover:text-primary"
        >
          Prometheustij
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
