"use client";

import Link from "next/link";
import { useState } from "react";
import { FiChevronDown, FiAlignRight, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(true);
  const [subMobileMenuOpen, setMobileSubMenuOpen] = useState(true);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  const handleSubMenuClick = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  const handleMobileSubMenuClick = () => {
    setMobileSubMenuOpen(!subMobileMenuOpen);
  };

  return (
    <nav className="fixed bg-zinc-900 text-zinc-200 text-sm w-full h-16 flex justify-between">
      <div className="w-full h-full p-3 flex justify-between sm:justify-center items-center">
        <ul className="sm:flex justify-between items-center">
          <div className="hidden sm:block">
            <Link href="/book" className="mx-6 ">
              book
            </Link>
            <div className="mx-6 inline-block cursor-pointer relative">
              services
              <FiChevronDown
                className="inline cursor-pointer"
                onClick={handleSubMenuClick}
              />
              <ul
                className={
                  subMenuOpen
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
          <Link href="/" className="sm:mx-7">318</Link>
          <div className="hidden sm:block">
            <Link href="/policies" className="mx-6">
              policies
            </Link>
            <Link href="/about" className="mx-6">
              about
            </Link>
          </div>
        </ul>
        <div className="sm:hidden cursor-pointer" onClick={handleClick}>
          <FiAlignRight />
        </div>
        <div
          className={
            menuOpen
              ? "fixed sm:hidden top-0 left-0 h-screen w-screen bg-zinc-900 text-zinc-200 ease-in duration-300"
              : "fixed sm-hidden top-0 left-[-100%] h-screen w-screen bg-zinc-900 text-zinc-200  ease-in duration-300"
          }
        >
          <div onClick={handleClick} className="w-full flex justify-end p-3">
            <FiX className="cursor-pointer" />
          </div>
          <ul className="flex flex-col h-full w-full justify-start items-start text-sm">
            <Link href="/" className="ml-4 mb-2">
              book
            </Link>
            <div className="cursor-pointer ml-4 mb-2">
              services{" "}
              <FiChevronDown
                className="inline cursor-pointer"
                onClick={handleMobileSubMenuClick}
              />
              <ul className="hidden">
                <Link href="/services/bodySculpting">Body Sculpting</Link>
                <Link href="/services/lashExtensions">Lash extensions</Link>
                <Link href="/services/teethWhitening">Teeth Whitening</Link>
              </ul>
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
