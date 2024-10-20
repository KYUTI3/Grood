import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Button, ButtonGroup} from "@nextui-org/button";

const Hero = () => (
 <div className="">
  <div className="flex-row bg-green-600">
   <div className="">
   <Image
      src="/logo.png"
      width={250}
      height={250}
      alt="Picture of Mascot"
    />
   </div>
    <div className="flex-col"> 
      <div className="font-bold"> 
        <p className="bg-gradient-to-r from-green-500 to-sky-500"> Welcome to <p className="underline-offset-1">Grood</p> </p>
        <p className="bg-gradient-to-r from-green-500 to-sky-500">The Typing Test Simulator for Ideal Improvement</p>
      </div>
    <div className="text-black">
    <Button radius="md" color="success">
      Sign Up!
    </Button>
    </div>
    </div>
  </div>
 </div>
);

export default Hero;
