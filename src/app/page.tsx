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


export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-2 pb-4 gap-16">
      <Navbar> 
        <NavbarBrand>
          <p className="font-bold"> Grood </p>
        </NavbarBrand>
         <NavbarContent>
         <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Team
          </Link>
        </NavbarItem>
        </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
         </NavbarContent>
      </Navbar>

      
    </div>
  );
}
