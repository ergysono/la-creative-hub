import React from "react";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

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
        className="relative rounded-full h-44 w-44 mx-auto object-cover"
        src="https://lacreativehub.com/wp-content/uploads/2022/01/Ergys-Sono-picture.jpg"
        alt="Ergys Sono, Software developer"
        width={200}
        height={200}
      />
      <div className="z-10">
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#000" />
        </h1>
      </div>
    </div>
  );
}
