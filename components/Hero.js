import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sider from "../assets/sider-car-1.png";
import siderColor from "../assets/sider-card-color1.png";
import siderColor2 from "../assets/sider-card-color2.png";
import siderColor3 from "../assets/sider-card-color3.png";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={
          isOpen
            ? "flex absolute ease-in duration-300 left-0 bottom-[30%] w-[60vw] h-auto px-[5vh] py-[3vh] flex-col justify-between content-stretch auto-cols-[1fr] bg-white shadow-xl shadow-black rounded-r-lg"
            : "flex absolute -left-[100%] ease-in duration-300 bottom-[30%] w-[60vw] h-auto px-[5vh] py-[3vh] flex-col justify-between content-stretch auto-cols-[1fr] bg-white shadow-xl shadow-black rounded-r-lg"
        }
      >
        <h1 className="text-[2rem] z-10">Understand Money</h1>
        <div className="absolute left-auto top-auto right-0 bottom-auto w-[183px] h-[85%]">
          <Image src={sider} alt="Sider image" />
        </div>
        <div className="absolute top-[0%] left-[83%] bottom-auto">
          <Image
            src={siderColor}
            alt="color background"
            style={{ borderTopRightRadius: "9px" }}
          />
        </div>
        <div className="absolute -bottom-2">
          <Image src={siderColor2} alt="color background" />
        </div>
        <div className="absolute left-0 w-[130px] top-0 z-1">
          <Image src={siderColor3} alt="color background" />
        </div>
        <div className="flex flex-row">
          <div className="flex h-full flex-col justify-center items-start text-[#000614] z-10">
            <p>
              Plan your finances with a business precision even if you don’t{" "}
              <br />
              know how to count. Super simple solution for everyone. You will{" "}
              <br />
              stop wondering about the end of the month and start enjoying{" "}
              <br />
              freedom of choice.
            </p>
            <Link href="/sign-up">
              <button className="text-black text-sm font-thin tracking-widest bg-[#fed500] rounded-[10px] p-[5px] px-[20px] mt-2 shadow-black shadow-md">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center text-white m-10 mx-20">
        <div className="flex flex-col items-end">
          <h3 className="text-2xl tracking-widest">
            Pick the scenario the most suitable to you
          </h3>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="my-20">
            <h1 className="text-5xl my-6">Money ecosystem for everyone</h1>
            <h1 className="text-2xl my-6">
              Take control of your personal anf financial data
            </h1>
            <Link href="/sign-up">
              <button className="text-black text-xl font-thin tracking-widest bg-[#fed500] rounded-[10px] p-[10px] px-[20px]">
                Its all free, sign up now
              </button>
            </Link>
          </div>
          <div className="flex flex-row">
            <div>
              <div className="py-2 cursor-pointer" onClick={handleClick}>
                <ul className="bg-[#0c75d7]/75 tracking-wider rounded-[10px] p-[10px] px-12">
                  I am living pay check to pay check
                </ul>
              </div>
              <div className="py-2">
                <ul className="bg-[#0c75d7]/75 tracking-wideer rounded-[10px] p-[10px] px-12">
                  I was a victim of Identity theft
                </ul>
              </div>
              <div className="py-2">
                <ul className="bg-[#0c75d7]/75 tracking-wider rounded-[10px] p-[10px] px-12">
                  I dont have a bank account
                </ul>
              </div>
              <div className="py-2">
                <ul className="bg-[#0c75d7]/75 tracking-wider rounded-[10px] p-[10px] px-12">
                  I want to store all assets in one place
                </ul>
              </div>
              <div className="py-2">
                <ul className="bg-[#0c75d7]/75 tracking-wider rounded-[10px] p-[10px] px-8">
                  I am in debt (commig soon)
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
