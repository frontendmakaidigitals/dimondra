"use client";
import React, { useState } from "react";
import PopForm from "../../app_chunks/PopFrom";
const CTA = ({
  title,
  desc,
  button,
}: {
  title: string;
  desc: string;
  button: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container ">
      <PopForm isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="relative  rounded-xl overflow-hidden  w-full  mt-10 mb-20">
        <div className="absolute inset-0 w-full h-full z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1400 1400"
            width="1400"
            height="1400"
          >
            <defs>
              <filter
                id="nnnoise-filter"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                colorInterpolationFilters="linearRGB"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.102"
                  numOctaves="4"
                  seed="15"
                  stitchTiles="stitch"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  result="turbulence"
                ></feTurbulence>
                <feSpecularLighting
                  surfaceScale="15"
                  specularConstant="0.75"
                  specularExponent="20"
                  lightingColor="#9013fe"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="turbulence"
                  result="specularLighting"
                >
                  <feDistantLight azimuth="3" elevation="100"></feDistantLight>
                </feSpecularLighting>
                <feColorMatrix
                  type="saturate"
                  values="0"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="specularLighting"
                  result="colormatrix"
                ></feColorMatrix>
              </filter>
            </defs>
            <rect width="1400" height="1400" fill="transparent"></rect>
            <rect
              width="1400"
              height="1400"
              fill="#9013fe"
              filter="url(#nnnoise-filter)"
            ></rect>
          </svg>
        </div>
        <img
          src={"/bgOg.jpg"}
          alt={""}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-[99] px-6 py-12">
          <h2 className="text-center font-dmSans  text-3xl tracking-tight font-[600]">
            {title}
          </h2>
          <p className="text-center mt-3 text-sm max-w-3xl font-quicksand font-[600] mx-auto">
            {desc}
          </p>
          <div className="flex  justify-center mt-5 ">
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 bg-dimondra-black hover:bg-black py-2 text-dimondra-white rounded-lg text-sm"
            >
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
