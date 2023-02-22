import React from "react";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi! We are La Creative Hub!",
      "We design and <develop /> awesome websites.tsx",
      "We make it by leveraging high quality graphics and user experiences!",
      "Get in touch, and let's make it happen!",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-central overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-44 w-44 mx-auto object-cover mt-0"
        src="https://lacreativehub.com/wp-content/uploads/2022/01/Ergys-Sono-picture.jpg"
        alt="Ergys Sono, Software developer"
        width={200}
        height={200}
      />
      <div className="z-10 text-center">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Design and Development
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#000" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
