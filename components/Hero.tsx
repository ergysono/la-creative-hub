import React from "react";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

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
    <div>
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#000" />
      </h1>
    </div>
  );
}
