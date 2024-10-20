import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const Hero = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-green-600 text-white">
    <div className="flex flex-col items-center">
      <Image
        src="/logo.png"
        width={250}
        height={250}
        alt="Picture of Mascot"
      />
      <div className="text-center mt-4">
        <p className="text-4xl font-bold bg-gradient-to-r from-green-500 to-sky-500 bg-clip-text text-transparent underline-offset-1">
          Welcome to Grood
        </p>
        <p className="text-xl bg-gradient-to-r from-green-500 to-sky-500 bg-clip-text text-transparent">
          The Typing Test Simulator for Ideal Improvement
        </p>
      </div>
      <div className="mt-6">
        <Button radius="md" color="success">
          Sign Up!
        </Button>
      </div>
    </div>
  </div>
);

export default Hero;
