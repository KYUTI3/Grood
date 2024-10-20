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
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar className="w-full max-w-4xl flex justify-between items-center">
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
      <Footer />
    </div>
  );
}