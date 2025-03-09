import { Menu, School } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import DarkMode from "@/DarkMode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { assets } from "@/assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = true;
  const role = "instructor";

  const Logo = () => (
    <Link to="/">
      <img
        src={assets.logo}
        alt="Educator Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />
    </Link>
  );

  return (
    <div className="h-16 dark:bg-[#0A0A0A] bg-cyan-50 border-b dark:border-b-gray-800 border-b-gray-400 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* Desktop */}
      <div className="md:flex max-w-7xl hidden justify-between items-center gap-10 h-full mx-35">
        <Logo />
        <div className="flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link to="my-learning">My Learning</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button>
              <Button>Signup</Button>
            </div>
          )}
          <DarkMode />
        </div>
      </div>

      {/* Mobile Device */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <Logo />
        <MobileNavbar role={role} />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = ({ role }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="rounded-full hover:bg-gray-200"
          variant="outline"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex mx-4 flex-row items-center justify-between mt-9">
          <img
            src={assets.logo}
            alt="Educator Logo"
            className="w-28 lg:w-32 cursor-pointer"
          />
          <DarkMode />
        </SheetHeader>
        <Separator className="mr-2" />
        <nav className="flex ml-4 items-center flex-col space-y-4">
          <Link to="my-learning">My Learning</Link>
          <span>Edit Profile</span>
          <p className="text-red-500">Log out</p>
          {role === "instructor" && (
            <SheetClose asChild>
              <Button type="button">Dashboard</Button>
            </SheetClose>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
