import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Button, ButtonGroup} from "@nextui-org/button";

const Hero = () => (
 <div className="">
  <div className="flex-row bg-green-600">
   <div className="">
   <Image
      src="/profile.png"
      width={250}
      height={250}
      alt="Picture of Mascot"
    />
   </div>
    <div className="bg-gradient-to-r flex-col"> 
        <p className="font-bold"> Welcome to <p className="underline-offset-1">Grood</p> </p>
        <p>The Typing Test Simulator for Ideal Improvement</p>
    </div>
  </div>
 </div>
);

export default Hero;
