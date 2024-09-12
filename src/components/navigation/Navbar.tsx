"use client";
import classNames from "classnames";
import React from "react";
import Image from "next/image";
import logo from "@/assets/netflix_logo.png";
import { useState, useEffect } from "react";
import NavBarItems from "../Shared/NavBarItems";
import { BsSearch, BsBell } from "react-icons/bs";
function Navbar(): React.ReactElement {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    document.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={classNames(
        "mx-auto fixed flex justify-between p-5 w-screen transition duration-500 text-neutral-200 z-40",
        isTop ? "" : "bg-black"
      )}
    >
      <Image src={logo} width={150} height={150} alt="logo" />
      <div className="gap-7 flex flex-row ml-8 font-semibold mt-2">
        <NavBarItems label="Home" />
        <NavBarItems label="Series" />
        <NavBarItems label="Films" />
        <NavBarItems label="My List" />
        <NavBarItems label="Popular" />
      </div>
      <div className="flex flex-row ml-auto gap-7 items-center font-semibold">
        <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
          <BsSearch />
        </div>
        <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
          <BsBell />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
