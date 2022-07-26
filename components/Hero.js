import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
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
            <div className="py-2">
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
  );
};

export default Hero;
