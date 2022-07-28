import React, { useState } from "react";
import Link from "next/link";
import ModalSider from "./ModalSider";
import Image from "next/image";
import sider from "../assets/sider-car-1.png";
import siderColor from "../assets/sider-card-color1.png";
import siderColor2 from "../assets/sider-card-color2.png";
import siderColor3 from "../assets/sider-card-color3.png";

const Hero = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  return (
    <>
      <ModalSider
        viewModal={isOpen1}
        closeModal={setIsOpen1}
        title="Understand money"
        text="Plan your finances with a business precision even if you dont
              know how to count. Super simple solution for everyone. You will
              stop wondering about the end of the month and start enjoying
              freedom of choice."
        buttonColor="bg-[#fed500]"
      />
      <ModalSider
        viewModal={isOpen2}
        closeModal={setIsOpen2}
        title="Decentralized Identity"
        text="1. Create your first decentralized identity ensuring your data and account is secured 2.Connect with one identity for different services without sharing your data."
        buttonColor="bg-[#a2dbaf]"
      />
      <ModalSider
        viewModal={isOpen3}
        closeModal={setIsOpen3}
        title="Get your first money account"
        text="Uniflow allows you to store all kinds of assets in a secure way behind your decentralised identity so you will never have to worry about losing them again."
        buttonColor="bg-[#88c1e7]"
      />
      <ModalSider
        viewModal={isOpen4}
        closeModal={setIsOpen4}
        title="Store digital and physical assets in one place"
        text="Uniflow allows you to store all kinds of assets in a secure way behind your decentralised identity so you will never have to worry about losing them again."
        buttonColor="bg-[#a08ae1]"
      />
      <ModalSider
        viewModal={isOpen5}
        closeModal={setIsOpen5}
        title="Solve your debt issue"
        text="1. Pay off your debt quicker
        2. Decrease monthly commitment
        3. Get some extra cash
        Uniflow gives you possibilities that you did not know exist.."
        buttonColor="bg-[#a2dbaf]"
      />
      <div className="flex flex-col justify-center text-white m-10 mx-20">
        <div className="flex flex-col items-end">
          <h3 className="text-2xl tracking-widest">
            Pick the scenario the most suitable to you
          </h3>
        </div>
        <div className="flex flex-row items-center justify-between gap-[40px]">
          <div className="my-20">
            <h1 className="text-5xl my-6">Money ecosystem for everyone</h1>
            <h1 className="text-2xl my-6">
              Take control of your personal and financial data
            </h1>
            <Link href="/sign-up">
              <button className="text-black text-xl font-thin tracking-widest bg-[#fed500] rounded-[10px] p-[10px] px-[20px]">
                Its all free, sign up now
              </button>
            </Link>
          </div>
          <div className="flex flex-row">
            <div>
              <div
                className="py-2 cursor-pointer"
                onClick={() => {
                  setIsOpen1(true);
                  setIsOpen2(false);
                  setIsOpen3(false);
                  setIsOpen4(false);
                  setIsOpen5(false);
                }}
              >
                <ul className="bg-[#0c75d7]/75 tracking-wider rounded-[10px] p-[10px] px-12 hover:bg-black/50">
                  I am living pay check to pay check
                </ul>
              </div>
              <div
                className="py-2 cursor-pointer"
                onClick={() => {
                  setIsOpen1(false);
                  setIsOpen2(true);
                  setIsOpen3(false);
                  setIsOpen4(false);
                  setIsOpen5(false);
                }}
              >
                <ul className="bg-[#0c75d7]/75 tracking-wideer rounded-[10px] p-[10px] px-12 hover:bg-black/50">
                  I was a victim of Identity theft
                </ul>
              </div>
              <div
                className="py-2 cursor-pointer"
                onClick={() => {
                  setIsOpen1(false);
                  setIsOpen2(false);
                  setIsOpen3(true);
                  setIsOpen4(false);
                  setIsOpen5(false);
                }}
              >
                <ul className="bg-[#0c75d7]/75 tracking-wider rounded-[10px] p-[10px] px-12 hover:bg-black/50">
                  I dont have a bank account
                </ul>
              </div>
              <div
                className="py-2 cursor-pointer"
                onClick={() => {
                  setIsOpen1(false);
                  setIsOpen2(false);
                  setIsOpen3(false);
                  setIsOpen4(true);
                  setIsOpen5(false);
                }}
              >
                <ul className="bg-[#0c75d7]/75 tracking-wider rounded-[10px] p-[10px] px-12 hover:bg-black/50">
                  I want to store all assets in one place
                </ul>
              </div>
              <div
                className="py-2 cursor-pointer"
                onClick={() => {
                  setIsOpen1(false);
                  setIsOpen2(false);
                  setIsOpen3(false);
                  setIsOpen4(false);
                  setIsOpen5(true);
                }}
              >
                <ul className="bg-[#0c75d7]/75 tracking-wider rounded-[10px] p-[10px] px-8 hover:bg-black/50">
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
