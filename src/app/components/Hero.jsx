import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex flex-col justify-start items-center py-16 ">
      <Image src="/logo.png" width={100} height={100} alt="Logo principal" />
      <h1 className="mt-12 text-[47px] max-w-3xl text-center">
        Art studio from{" "}
        <strong className="text-primary font-light">New York</strong> passionate
        about creativity and crafting things since 1963.{" "}
      </h1>
      <p className="font-bold text-[11px] mt-6 bg-[#fae3b5]">
        PETER WALL + COCO BASIC
      </p>
    </div>
  );
}

export default page;
