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
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { assets } from "@/assets/assets";

const Navbar = () => {
  const user = true;
  return (
    <div className="h-16 dark:bg-[#0A0A0A] bg-cyan-50 border-b dark:border-b-gray-800 border-b-gray-400 fixed top-o left-0 right-0 duration-300 z-10">
      {/* Desktop */}
      <div className="md:flex max-w-7xl hidden justify-between items-center gap-10 h-full mx-35">
        <div className="flex items-center gap-2">
          <img
            src={assets.logo}
            alt="Educator"
            className="w-28 lg:w-32 cursor-pointer"
          />
        </div>
        {/* User Icon and Darkmode Icon */}
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
                  <DropdownMenuItem>My Learning</DropdownMenuItem>
                  <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuItem>Deshboard</DropdownMenuItem>
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
        <h1 className="font-extrabold text-2xl">
        <img
            src={assets.logo}
            alt="Educator"
            className="w-28 lg:w-32 cursor-pointer"
          />
        </h1>
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const role = "instructor";
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
          <div className="flex items-center gap-2">
            <img
              src={assets.logo}
              alt="Educator"
              className="w-28 lg:w-32 cursor-pointer"
            />
          </div>
          <div>
            <DarkMode />
          </div>
        </SheetHeader>
        <Separator className="mr-2" />
        <nav className="flex ml-4 items-center flex-col space-y-4">
          <span>My Learning</span>
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
