import React from "react";
import { ButtonComponent } from "../homeComponents";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { InputRow, TextAreaRow } from "../forms/input";
import { IoSend } from "react-icons/io5";
import { useFormPostApi } from "../../hook/form";

export default function ContactSection() {
  const {
    isLoading,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    values,
    resetForm,
  } = useFormPostApi();
  return (
    <div className="flex items-start gap-[136px] self-stretch md:p-10 bg-white">
      <div
        className="flex items-center md:gap-8 flex-[1_0_0] md:rounded-2xl p-[72px]
        bg-gradient-to-t from-[#0047FF] to-[#00F0FF] flex-col md:flex-row
        text-white gap-6 self-stretch px-6 py-12 justify-center"
      >
        {/* <div className="w-72 h-[220px] shrink-0 bg-white opacity-50"></div> */}
        <div className="flex flex-col items-start gap-8 self-stretch w-96 md:w-1/3">
          <div className="flex items-center gap-6"></div>
          <h1 className="text-[#7DFFAF] text-regular text-base">contato</h1>
          <h2 className="font-semibold text-4xl font-sans">
            Entre em contato conosco hoje mesmo.
          </h2>
          <p>
            Estou sempre pronto para um bate-papo. Envie-me um e-mail para
            hi@linalevi.com ou dê-me um alô nas redes sociais.
          </p>
          <div className="flex items-start gap-2">
            <ButtonComponent
              className="bg-white rounded-md p-3 hover:bg-blue-gray-100
            shadow transition-transform active:scale-95 active:bg-blue-gray-50"
            >
              <FaGithub className="text-[#121212] w-5 h-5" />
            </ButtonComponent>
            <ButtonComponent
              className="bg-white rounded-md p-3 hover:bg-blue-gray-100
            shadow transition-transform active:scale-95 active:bg-blue-gray-50"
            >
              <FaLinkedin className="text-[#121212] w-5 h-5" />
            </ButtonComponent>
            <ButtonComponent
              className="bg-white rounded-md p-3 hover:bg-blue-gray-100
            shadow transition-transform active:scale-95 active:bg-blue-gray-50"
            >
              <FaInstagram className="text-[#121212] w-5 h-5" />
            </ButtonComponent>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-start"
        >
          <InputRow
            id={"name"}
            type={"name"}
            value={values.name}
            error={errors.name}
            holder={"Nome"}
            handle={handleChange}
            blur={handleBlur}
          />
          <InputRow
            id={"email"}
            type={"email"}
            value={values.email}
            error={errors.email}
            holder={"Email"}
            handle={handleChange}
            blur={handleBlur}
          />

          <TextAreaRow
            id={"message"}
            holder={"Mensagem"}
            value={values.message}
            error={errors.message}
            handle={handleChange}
            blur={handleBlur}
          />

          <p className="text-justify w-80">Ao enviar essa mensagem o tempo de resposta sera de 1 a 2 dias uteis.</p>
          {/* <p>Ao enviar essa mensagem voce aceitar receber emails como resposta.</p> */}

          <ButtonComponent
            className="bg-blue-500 rounded-md z-20 
            shadow-none transition-transform py-2 px-4
            active:scale-95  text-white active:bg-[#4f94e448]
            border border-transparent hover:border-white"
            type="submit"
          >
            Enviar Mensagem
            <IoSend />
          </ButtonComponent>
        </form>
      </div>
    </div>
  );
}
