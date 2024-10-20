import Image from "next/image";
import Link from "next/link"
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Button, ButtonGroup} from "@nextui-org/button";
import Footer from "../../components/Footer";


export default function Home() {
  const accOne = "Grood is a Typing Test Simulator that helps you improve on your typing!"
  const accTwo = "Grood works by collecting your performance and running it throught an LLM to help grade you!"
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar className="fixed top-0 left-0 right-0 w-full max-w-4xl mx-auto flex justify-between items-center p-4 bg-transparent z-50 text-lg">
        <NavbarBrand className="flex justify-center w-full">
          <p className="font-bold">Grood</p>
        </NavbarBrand>
        <NavbarContent className="flex justify-center w-full">
          <NavbarItem>
            <Link href="#">About</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="flex justify-end w-full font-bold">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="flex-grow flex-row">
      <div className="flex flex-col items-center justify-center min-h-screen text-white py-4">
      <div className="flex flex-row items-center space-x-4"> 
        <Image
          src="/logo.png"
          width={250}
          height={250}
          alt="Picture of Mascot"
        />
        <div className="text-center flex flex-col">
          <p className="text-4xl font-bold mb-2"> 
            Welcome to Grood
          </p>
          <p className="text-xl mb-6"> 
            The Typing Test Simulator for Ideal Improvement
          </p>
          <Button radius="md" size="md" className="bg-green-500 hover:bg-green-600 transition duration-200"> {/* Ensure button has background and hover effect */}
            Sign Up!
          </Button>
        </div>
      </div>
    </div>
      </div>
      
    <div> 
      <Accordion>
      <AccordionItem aria-label="Accordion 1" title="What is Grood really">
      {accOne}
      </AccordionItem>
      <AccordionItem aria-label="Accordion 2" title="How does it work?">
       {accTwo}
      </AccordionItem>
    </Accordion>
    </div>
      <div className="w-full text-center p-4 text-green-500 underline-offset-2">
        <Footer />
      </div>
    </div>
  );
}
