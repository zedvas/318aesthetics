"use client";

import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiAlignRight, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopSubMenuOpen, setDesktopSubMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const handleClick = (menuType: string) => {
    menuType === "mainMenu"
      ? setMenuOpen(!menuOpen)
      : menuType === "desktopSubMenu"
      ? setDesktopSubMenuOpen(!desktopSubMenuOpen)
      : menuType === "mobileSubMenu"
      ? setMobileSubMenuOpen(!mobileSubMenuOpen)
      : "";
  };

  return (
    <nav className="fixed top-0 bg-zinc-900 text-zinc-200 text-sm w-screen h-16 flex justify-between">
      <div className="w-full h-full p-3 flex justify-between sm:justify-center items-center">
        {/*Desktop menu */}
        <ul className="sm:flex justify-between items-center">
          {/*Left menu links*/}
          <div className="hidden sm:block">
            <Link href="/book" className="mx-6 ">
              book
            </Link>
            {/*Submenu */}
            <div
              className="mx-6 inline-block cursor-pointer relative"
              onClick={() => handleClick("desktopSubMenu")}
            >
              services
              <FiChevronDown className="inline cursor-pointer" />
              <ul
                className={
                  desktopSubMenuOpen
                    ? "bg-zinc-900 text-xs text-nowrap p-4 absolute flex flex-col justify-center translate-x-[-25%]"
                    : "hidden"
                }
              >
                <Link href="/services/bodySculpting" className="my-1">
                  body sculpting
                </Link>
                <Link href="/services/lashExtensions" className="my-1">
                  lash extensions
                </Link>
                <Link href="/services/teethWhitening" className="my-1">
                  teeth whitening
                </Link>
              </ul>
            </div>
          </div>
          {/*Logo */}
          <Link href="/" className="sm:mx-7">
            318
          </Link>
          {/*Right menu links*/}
          <div className="hidden sm:block">
            <Link href="/policies" className="mx-6">
              policies
            </Link>
            <Link href="/about" className="mx-6">
              about
            </Link>
          </div>
        </ul>
        {/*Hamburger icon */}
        <div
          className="sm:hidden cursor-pointer"
          onClick={() => handleClick("mainMenu")}
        >
          <FiAlignRight />
        </div>
        {/*Side menu */}
        <div
          className={
            menuOpen
              ? "fixed sm:hidden top-0 left-0 h-screen w-screen bg-zinc-900 text-zinc-200 ease-in duration-300"
              : "fixed sm-hidden top-0 left-[-100%] h-screen w-screen bg-zinc-900 text-zinc-200  ease-in duration-300"
          }
        >
          {/*Close hamburger icon*/}
          <div
            onClick={() => handleClick("mainMenu")}
            className="w-full flex justify-end p-3"
          >
            <FiX className="cursor-pointer" />
          </div>
          {/*Side menu links*/}
          <ul className="flex flex-col h-full w-full justify-start items-start text-sm">
            <Link href="/" className="ml-4 mb-2">
              book
            </Link>
            {/*Side menu - submenu*/}
            <div
              className="cursor-pointer ml-4 mb-2"
              onClick={() => handleClick("mobileSubMenu")}
            >
              services
              <FiChevronDown className="inline cursor-pointer" />
              <div className={!mobileSubMenuOpen ? "hidden": ""}>
                <ul className="flex flex-col ml-2">
                  <Link href="/services/bodySculpting">body sculpting</Link>
                  <Link href="/services/lashExtensions">lash extensions</Link>
                  <Link href="/services/teethWhitening">teeth whitening</Link>
                </ul>
              </div>

            </div>
            <Link href="/" className="ml-4 mb-2">
              policies
            </Link>
            <Link href="/" className="ml-4 mb-2">
              about
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
