import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";

const Hero = () => (
    <div className="flex flex-col items-center justify-center min-h-screen text-white py-4">
      <div className="flex flex-row items-center space-x-4"> {/* Use space-x-4 for horizontal spacing */}
        <Image
          src="/logo.png"
          width={250}
          height={250}
          alt="Picture of Mascot"
        />
        <div className="text-center flex flex-col">
          <p className="text-4xl font-bold mb-2"> {/* Add margin bottom for space */}
            Welcome to Grood
          </p>
          <p className="text-xl mb-6"> {/* Add margin bottom for space */}
            The Typing Test Simulator for Ideal Improvement
          </p>
          <Button radius="md" size="md" className="bg-green-500 hover:bg-green-600 transition duration-200"> {/* Ensure button has background and hover effect */}
            Sign Up!
          </Button>
        </div>
      </div>
    </div>
  );
  
  export default Hero;
