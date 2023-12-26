import React from "react";
import Typewriter from "typewriter-effect";

const TypeEffect = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Deep Learning Engineer",
          "MERN Stack Developer",
          "Freelancer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  )
}

export default TypeEffect

