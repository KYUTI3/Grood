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
import {Button, ButtonGroup} from "@nextui-org/button";
import { Accordion } from "@nextui-org/accordion";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <Navbar className="fixed top-0 left-0 right-0 w-full max-w-4xl mx-auto flex justify-between items-center p-4 bg-transparent z-50 text-lg">
        <NavbarBrand className="flex justify-center w-full">
          <p className="font-bold">Grood</p>
        </NavbarBrand>
        <NavbarContent className="flex justify-center w-full">
          <NavbarItem>
            <Link href="#">About</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="flex justify-end w-full">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      {/* <div className="flex-grow">
      <Hero />
      </div> */}
      <div className="w-full text-center p-4 text-green-500">
        <Footer />
      </div>
    </div>
  );
}
