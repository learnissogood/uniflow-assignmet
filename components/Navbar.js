import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex">
      <div className="m-10 mx-20 text-white flex flex-row gap-[750px]">
        <div>
          <Image src={logo} alt="Universal Flow Logo" height={100} width={500} />
        </div>
        <div className="grid justify-items-stretch items-center grid-flow-col gap-[40px] text-2xl">
          <Link href="/">
            <a>Personal</a>
          </Link>
          <Link href="/business">
            <a>Business</a>
          </Link>
          <div>
            <button>
              <AiOutlineMenu className="text-white" size={40} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
