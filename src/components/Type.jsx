import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="">
    <Typewriter
      options={{
        strings: ["Hi there! I'm Panrit,", "I'm a new front-end developer.", "Freelancer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Type;
