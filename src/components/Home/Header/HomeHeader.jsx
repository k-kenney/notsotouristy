import React from "react";
import { BsMedium } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboard } from "react-icons/md";
import { Link } from "react-router-dom";
import Search from "./Search";

const HomeHeader = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="size h-[60px] flex items-center justify-between">
        {/* left side */}
        <div></div>
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <span className="text-5xl">
              <BsMedium />
            </span>
          </Link>
          <Search />
        </div>
        <div className="flex items-center gap-3 sm:gap-7">
          <Link
            className="hidden md:flex items-center gap-1 text-gray-500"
            to="/write"
          >
            <span className="text-3xl">
              <LiaEditSolid />
            </span>
            <span className="text-sm mt-2">Write</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
