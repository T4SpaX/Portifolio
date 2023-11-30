import React from "react";
import { ButtonComponent } from "../homeComponents";
// import { ListTech } from "../../utils/list-tech";
// import icons from "../../utils/icons/icons";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaLongArrowAltRight,
  FaMoneyBillWave,
} from "react-icons/fa";
import { IoEyeSharp, IoPeopleSharp } from "react-icons/io5";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import InputButton from "../forms/input/inputButton";

export default function SectionTwo() {
  return (
    <div className="flex items-start justify-center mx-auto gap-[136px] self-stretch md:p-10 bg-white ">
      <div
        className="flex md:items-start justify-center mx-auto md:gap-8 flex-[1_0_0] md:rounded-2xl p-[72px]
        bg-white flex-col md:flex-row
        text-white items-start gap-10 self-stretch px-6 py-12"
      >
        <div className="w-80  h-[266px] shrink-0 bg-gray-300 opacity-50"></div>
        <div className="flex flex-col items-start w-auto md:w-[592px]  md:gap-8 self-stretch">
          <div className="flex items-center justify-between gap-6  text-[#654AEE]">
            <GiReceiveMoney className="w-5 h-5" />
            <FaMoneyBillWave className="w-5 h-5" />
            <IoPeopleSharp className="w-5 h-5" />
          </div>
          <h1 className="text-[#7DFFAF] text-regular text-base"></h1>
          <h2 className="font-semibold text-4xl font-sans text-[#12121299]">
            Atraia mais clientes e aumente suas vendas
          </h2>
          <p className="font-regular font-medium font-sans text-justify text-[#12121299]">
            Com a Digital Boost, você poderá atrair mais clientes e aumentar
            suas vendas. Nossas soluções de marketing digital são projetadas
            para gerar leads qualificados e converter visitantes em clientes
            fiéis.
          </p>
          <div className="flex items-center justify-between">
            <InputButton />

            {/* <ButtonComponent
              className="bg-[#121212] rounded-md z-20 
            shadow-none transition-transform py-2 px-4
            active:scale-95  text-white active:bg-[#12121299]
            border border-transparent hover:border-white"
            >
              My Resume
              <FaLongArrowAltRight />
            </ButtonComponent> */}
          </div>
        </div>
      </div>
    </div>
  );
}