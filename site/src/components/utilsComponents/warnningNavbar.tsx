import React from "react";
import ButtonComponent from "../buttons/button";
import { RiCloseCircleFill } from "react-icons/ri";
import { useGlobalContext } from "../../context/globalContext";

interface ComponentProps {
  scrollNav?: number;
}

export default function WarnningNavbar({ scrollNav }: ComponentProps) {
  const { warning, hiddenWarnning } = useGlobalContext();

  return (
    <span
      className={` ${warning ? "hidden" : ""} 
        ${
          scrollNav
            ? "mt-4 text-medium font-semibold scale-75"
            : "mt-0 scale-75 text-medium"
        } flex justify-center bg-[#7dffaf] py-3 px-5 max-w-[1200px] text-[#121212] rounded-full
        transition-all gap-4 text-center z-20`}
    >
      <p className="">
        {" "}
        🎊 Agradecemos pela sua confiança em nós e desejamos a todos um Natal
        cheio de sorrisos e momentos inesquecíveis 🎊. Feliz Natal ! 🥳 🍾
      </p>
      <ButtonComponent
        className="shadow-none m-0 p-0 rounded-lg hover:text-red-500 text-gray-900 flex items-center justify-center"
        onClick={() => hiddenWarnning()}
        icon={<RiCloseCircleFill className="w-6 h-6" />}
      ></ButtonComponent>
    </span>
  );
}
