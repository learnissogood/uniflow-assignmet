import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import sider from "../assets/sider-car-1.png";
import siderColor from "../assets/sider-card-color1.png";
import siderColor2 from "../assets/sider-card-color2.png";
import siderColor3 from "../assets/sider-card-color3.png";

const ModalSider = ({
  children,
  viewModal,
  closeModal,
  title = "Alerta",
  text = "Alerta",
  buttonColor = "bg-blue-500",
}) => {
  return (
    <>
      <div
        className={
          viewModal
            ? "left-0 top-[40%] w-[55vw] ease-in duration-300 min-h-[222px] bg-white absolute rounded-r-lg shadow-xl shadow-black p-[20px]"
            : "-left-[100%] top-[40%] ease-in duration-300 w-[55vw] min-h-[222px] bg-white absolute rounded-r-lg shadow-xl shadow-black p-[20px]"
        }
      >
        <div className="absolute bottom-0 left-0 pl-4 pb-4 z-10">
          <Link href="/sign-up">
            <button className={`text-black text-sm font-thin tracking-widest ${buttonColor} rounded-[10px] p-[5px] px-[20px] mt-2 shadow-black shadow-md`}>
              Sign Up
            </button>
          </Link>
        </div>
        <button
          className="flex flex-col items-center justify-center cursor-pointer absolute top-0 right-0 mt-[20px] mr-[20px] h-[30px] w-[30px] font-black text-3xl bg-white/50 hover:bg-black/50 hover:text-white rounded-sm z-20"
          onClick={() => closeModal(false)}
        >
          <AiOutlineClose />
        </button>
        <div className="absolute right-0 top-4 w-[183px] h-[85%] z-0">
          <Image src={sider} alt="Sider image" />
        </div>
        <div className="absolute top-0 right-0 bottom-auto z-1">
          <Image
            src={siderColor}
            alt="color background"
            style={{ borderTopRightRadius: "9px" }}
          />
        </div>
        <div className="absolute -bottom-2 z-1">
          <Image src={siderColor2} alt="color background" />
        </div>
        <div className="absolute left-0 w-[120px] top-0 z-0">
          <Image src={siderColor3} alt="color background" />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col z-10">
            <p className="text-[2rem]">{title}</p>
          </div>
          <div className="flex flex-col justify-center items-start text-[#000614] z-10 w-[500px]">
            <p>{text}</p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default ModalSider;
