"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();

  useEffect(() => {
    const handleStickyNavbar = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  return (
    <header
      className={`header top-0 left-0 z-[99999] w-full transition-all duration-300 ${
        sticky
          ? "fixed bg-white/90 dark:bg-gray-dark/90 backdrop-blur-sm shadow-md py-2"
          : "absolute bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-center lg:space-x-16">
          <Link href="/" className="flex items-center justify-center">
            <Image
              src="/images/logo/logo-2.png"
              alt="logo"
              width={360}
              height={32}
              className="dark:hidden"
            />
            <Image
              src="/images/logo/logo.png"
              alt="logo"
              width={360}
              height={32}
              className="hidden dark:block"
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center space-x-10">
            {menuData.map((menuItem, index) => (
              <div key={index} className="relative group">
                {menuItem.path ? (
