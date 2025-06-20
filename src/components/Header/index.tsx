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
      className={`top-0 left-0 z-[9999] w-full transition-all duration-300 ${
        sticky
          ? "fixed bg-white/80 dark:bg-gray-900/90 shadow-md py-2 backdrop-blur-sm"
          : "absolute bg-transparent py-5"
      }`}
    >
      <div
        className={`container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between transition-all duration-300 ${
          sticky ? "py-1" : "py-4"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/logo-2.png"
            alt="logo"
            width={sticky ? 160 : 240}
            height={sticky ? 28 : 40}
            className="dark:hidden transition-all duration-300"
          />
          <Image
            src="/images/logo/logo.png"
            alt="logo"
            width={sticky ? 160 : 240}
            height={sticky ? 28 : 40}
            className="hidden dark:block transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {menuData.map((menuItem, index) => (
            <div key={index} className="relative group">
              {menuItem.path ? (
                <Link
                  href={menuItem.path}
                  className={`text-base font-medium transition ${
                    pathname === menuItem.path
                      ? "text-primary dark:text-white"
                      : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  }`}
                >
                  {menuItem.title}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="flex items-center text-base font-medium text-dark dark:text-white/70 hover:text-primary"
                  >
                    {menuItem.title}
                    <svg
                      className="ml-1 h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4.24 4.243a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg p-3 z-50 ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {menuItem.submenu.map((submenuItem, subIndex) => (
                      <Link
                        href={submenuItem.path}
                        key={subIndex}
                        className="block py-2 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                      >
                        {submenuItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
          <ThemeToggler />
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="lg:hidden text-dark dark:text-white"
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
            <path
              d={
                navbarOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {navbarOpen && (
        <div className="lg:hidden mt-4 flex flex-col items-center space-y-4 pb-4">
          {menuData.map((menuItem, index) =>
            menuItem.path ? (
              <Link
                key={index}
                href={menuItem.path}
                className={`text-base font-medium ${
                  pathname === menuItem.path
                    ? "text-primary"
                    : "text-dark dark:text-white/70"
                }`}
              >
                {menuItem.title}
              </Link>
            ) : null
          )}
          <ThemeToggler />
        </div>
      )}
    </header>
  );
};

export default Header;
