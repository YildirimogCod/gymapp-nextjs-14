"use client";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top-0  w-full bg-primary-200 h-[100px] bg-primary z-50 transition-all`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <Image src="/img/logo.png" width={117} height={55} alt="logo" />
        </Link>
        {/* mobile nav - hidden on large devices */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"} ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          } fixed flex flex-col gap-8 text-center  top-[124px] left-0 text-base uppercase font-medium text-white transition-all bg-primary-200 lg:hidden text-white w-full`}
        />
        {/* desktop nav - hidden on small devices */}
        <Nav containerStyles="flex gap-4 hidden lg:flex text-white" />
        {/* hamburger menu icon */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-white">
            <button className="hover:text-accent border-b  hover:border-b-red-400 transition-all">
              Login
            </button>
            <button className="hover:text-accent border-b hover:border-b-red-400 transition-all">
              Register
            </button>
          </div>
          <div>
            <button
              className="text-white lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              <MdMenu className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
