import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import signUp from "../assets/sign-up-logo.png";
import ourStory from "../assets/our-story-icon.png";
import contactUs from "../assets/contact-us-icon.png";
import blog from "../assets/blog-icon.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-10 mx-20 text-white flex flex-row justify-between">
      <div
        className={
          isOpen
            ? "flex flex-col absolute left-auto top-[13%] right-[8vw] bottom-auto text-black z-4 h-auto p-[50px] justify-between gap-x-[30px] gap-y-[30px] bg-[#f0f0f0] rounded-lg"
            : "hidden flex-col absolute left-auto top-[13%] right-[8vw] bottom-auto text-black z-4 h-auto p-[50px] justify-between gap-x-[30px] gap-y-[30px] bg-[#f0f0f0] rounded-lg"
        }
      >
        <div className="flex justify-center gap-x-[20px] gap-y-[20px]">
          <div className="text-xl font-medium">Meet Us</div>
        </div>
        <Link href="/sign-up">
          <a className="flex items-center gap-[10px]">
            <div className="flex w-[50px] h-[50px] px-[5px] content-center items-center border-l-4 border-[#c54797]">
              <Image src={signUp} alt="Sign Up Icon" />
            </div>
            <div>Sign Up</div>
          </a>
        </Link>
        <Link href="/our-story">
          <a className="flex items-center gap-[10px]">
            <div className="flex w-[50px] h-[50px] px-[5px] content-center items-center border-l-4 border-[#c54797]">
              <Image src={ourStory} alt="Sign Up Icon" />
            </div>
            <div>Our Story</div>
          </a>
        </Link>
        <Link href="/contact-us">
          <a className="flex items-center gap-[10px]">
            <div className="flex w-[50px] h-[50px] px-[5px] content-center items-center border-l-4 border-[#c54797]">
              <Image src={contactUs} alt="Sign Up Icon" />
            </div>
            <div>Contact Us</div>
          </a>
        </Link>
        <Link href="/blog">
          <a className="flex items-center gap-[10px]">
            <div className="flex w-[50px] h-[50px] px-[5px] content-center items-center border-l-4 border-[#c54797]">
              <Image src={blog} alt="Sign Up Icon" />
            </div>
            <div>Blog</div>
          </a>
        </Link>
      </div>
      <div>
        <Image src={logo} alt="Universal Flow Logo" height={60} width={300} />
      </div>
      <div className="grid justify-items-stretch items-center grid-flow-col gap-[40px] text-2xl">
        <Link href="/">
          <a>Personal</a>
        </Link>
        <Link href="/business">
          <a>Business</a>
        </Link>
        <div>
          <button onClick={handleClick}>
            {isOpen ? (
              <AiOutlineClose className="text-white" size={40} />
            ) : (
              <AiOutlineMenu className="text-white" size={40} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
