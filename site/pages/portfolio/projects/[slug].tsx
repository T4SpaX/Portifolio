import React from "react";
import Wrapper from "../../../src/layout/wrapper";
import { ButtonComponent } from "../../../src/components/utilsComponents";
import { CgAlbum } from "react-icons/cg";
import { FaArrowLeft, FaGithub, FaLongArrowAltRight } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import ContactSection from "../../../src/components/sections/contactSection";
import Image from "next/image";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdOutlineStorage } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import PersonalContactSection from "../../../portfolio/src/sections/personalContactSection";
import itemData from "../../../portfolio/src/conponents/projectData";

interface SlugProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  date_post: string;
  tags: string[];
  github_link: string;
  url_link: string;
}

export default function PersonalPage({
  slug,
  title,
  description,
  image,
  date_post,
  tags,
  github_link,
  url_link,
}: SlugProps) {
  const pathname = usePathname();
  const router = useRouter();

  console.log(pathname);

  const item = itemData.find((item) => item.slug === pathname);

  if (!item) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        Produto não encontrado
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Wrapper className="w-screen h-full flex flex-col justify-around items-center md:flex-row md:items-start gap-6 bg-white mt-20 font-semibold text-sm font-sans">
        <div className="">
          <ButtonComponent
            className="bg-white rounded-md p-3 hover:bg-blue-gray-100 relative top-16 left-6
            shadow transition-transform active:scale-95 active:bg-blue-gray-50"
            onClick={() => router.back()}
          >
            <FaArrowLeft className="text-[#121212] w-5 h-5" />
          </ButtonComponent>
          <div className="md:w-[600px] h-[300px] flex justify-center self-stretch bg-[#12121220] rounded-t-2xl">
            <Image
              src={`/imgs/${item.image}`}
              alt={""}
              width={700}
              height={300}
              objectFit="cover"
              style={{ objectFit: "cover" }}
              className="rounded-t-xl"
            />
          </div>
          <div className="bg-white border text-[#12121299] shadow-md rounded-b-xl pt-8 pr-12 pb-12 pl-12 flex flex-col gap-6 items-start justify-start shrink-0 md:w-[600px] relative ">
            <div className="flex justify-between items-start self-stretch text-[#0047FF]">
              <div className="flex flex-col justify-center">
                <p className="text-xs not-italic font-semibold">
                  {item.date_post}
                </p>
                <div className="scale-75 -ml-6">
                  <div className="flex gap-2 justify-around">
                    {item.tags.map((tag, index) => (
                      <p
                        key={index}
                        className="h-auto w-auto bg-[#0047FF] py-2 px-3 rounded-full text-white
                        text-xs font-thin"
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <p className="flex items-center gap-4 ">
                <SiJavascript className="w-4 h-4" />
                <FaReact className="w-4 h-4" />
                <MdOutlineStorage className="w-4 h-4" />
              </p>
            </div>

            <div className="flex flex-col w-full  items-start gap-2">
              <h1 className="text-2xl not-italic font-semibold font-sans">
                {item.title}
              </h1>
              <p className="text-ellipsis not-italic font-sans text-base leading-1">
                {item.description}
              </p>
            </div>
          </div>
        </div>

        <div className="my-12 w-auto md:w-[500px] self-stretch">
          <div className="bg-white border shadow rounded-xl p-8 flex flex-col gap-6 shrink-0 w-full relative ">
            <h1 className="text-lg text-blue-400">
              Ver mais:<span className="text-[#12121299]">{item.title}</span>{" "}
            </h1>
            <a className="w-full">
              <ButtonComponent
                className="bg-[#121212] rounded-lg w-full font-medium cursor-not-allowed
              shadow-none py-4 px-10 text-base hover:border-[#12121220]
              text-white active:bg-gray-400 border-4 border-transparent active:border-gray-600 transition-all"
                disable={true}
              >
                <FaGithub className="w-5 h-5" />
                Ver Codigo
              </ButtonComponent>
            </a>
            <a href={`${item.url_link}`} target="blank" className="w-full">
              <ButtonComponent
                className="bg-blue-500 rounded-lg  font-medium w-full
              shadow-none py-4 px-10 text-base hover:border-[#12121220] hover:text-[whitesmoke]
              text-white active:bg-gray-400 border-4 border-transparent active:border-gray-600 transition-all"
              >
                <TbWorld className="w-6 h-6" /> Visitar Site
              </ButtonComponent>
            </a>
          </div>
        </div>
      </Wrapper>
      <ContactSection />
    </div>
  );
}
