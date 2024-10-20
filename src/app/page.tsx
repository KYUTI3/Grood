import Image from "next/image";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-2 pb-4 gap-16">
      <Navbar> 
        <NavbarBrand>
          <p className="font-bold"> Grood </p>
        </NavbarBrand>
         <NavbarContent>
         </NavbarContent>
      </Navbar>
    </div>
  );
}
