import React from "react";

const HeroBusiness = () => {
  return (
    <div className="flex flex-col justify-center text-white m-10 mx-20">
      <div className="flex flex-col items-end text-end">
        <h3 className="text-2xl tracking-widest">
          Are you a one man start-up or you hire 50+ people? <br />
          Our all in one solution is for you!
        </h3>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-20">
          <h1 className="text-5xl my-6">Business management for SMB</h1>
          <h1 className="text-2xl my-6">
            Decentralise & automate your business today
          </h1>
          <button className="text-black text-xl tracking-widest bg-[#fed500] rounded-[10px] p-[10px] px-[20px]">
            Save your spot now
          </button>
          <p className="text-sm pt-2">Release date December 2022</p>
        </div>
        <div className="flex flex-row">
          <div className="">
            <div className="py-2">
              <ul className="bg-[#366589]/75 tracking-wider rounded-[10px] p-[10px] px-12">
                I need decentralised account
              </ul>
            </div>
            <div className="py-2">
              <ul className="bg-[#366589]/75 tracking-wideer rounded-[10px] p-[10px] px-12">
                I need a CMR to know my costumers
              </ul>
            </div>
            <div className="py-2">
              <ul className="bg-[#366589]/75 tracking-wider rounded-[10px] p-[10px] px-12">
                I need an accountant
              </ul>
            </div>
            <div className="py-2">
              <ul className="bg-[#366589]/75 tracking-wider rounded-[10px] p-[10px] px-12">
                I need analytics
              </ul>
            </div>
            <div className="py-2">
              <ul className="bg-[#366589]/75 tracking-wider rounded-[10px] p-[10px] px-8">
                I need HR system
              </ul>
            </div>
            <div className="py-2">
              <ul className="bg-[#366589]/75 tracking-wider rounded-[10px] p-[10px] px-8">
                I need Payroll system
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBusiness;
