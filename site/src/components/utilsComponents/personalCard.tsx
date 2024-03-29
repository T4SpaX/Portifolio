import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import Image from "next/image";

import { ListTech } from "../../utils/list-tech";
import icons from "../../utils/icons/icons";
import ButtonComponent from "../buttons/button";

export function PersonalCard() {
  const [scrolled, setScrolled] = useState(false);

  const changeHiddenCard = () => {
    if (window.scrollY >= 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHiddenCard);
  }, []);

  return (
    <div>
      <Card
        className={`bg-white
        ${
          !scrolled ? "opacity-100 transition-opacity ease-in delay-600" : ""
        } rounded-lg shadow-md 
      md:shadow-xl md:hover:shadow-2xl bg-white md:w-96 scale-90 md:scale-100 mx-auto 
      `}
      >
        <CardHeader
          floated={false}
          className={`relative
        self-center h-60 w-40 rounded shadow-2 shadow-none bg-transparent`}
        >
          <Image
            src="/imgs/dree.png"
            fill
            unoptimized={false}
            alt={"Dree"}
            className="bg-transparent"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography
            variant="h4"
            color="blue-gray"
            className={`"text-white" `}
          >
            Adriel Lucas
          </Typography>
          <Typography
            color="blue"
            className={`
           "text-[#c37fff]"
             font-medium`}
            textGradient
          >
            Desenvolvedor Web / Full-Stack
          </Typography>
          <div className="flex justify-around mx-5 my-0">
            <a
              href="https://github.com/t4spax"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content="Github">
                <Button
                  size="lg"
                  className="flex items-center gap-3 rounded-none p-2 bg-transparent text-blue-gray-900"
                  variant="text"
                >
                  {icons.github} Github
                </Button>
              </Tooltip>
            </a>
            <a
              href="https://linkedin.com/in/adriel-lucas"
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content="Linkedin">
                <Button
                  size="lg"
                  color="blue"
                  className="flex items-center gap-3 rounded-none p-2 bg-transparent text-blue-gray-900"
                  variant="text"
                >
                  {icons.linkedin} Linkedin
                </Button>
              </Tooltip>
            </a>
          </div>
        </CardBody>

        <CardFooter className="flex flex-col my-4 p-0">
          <div className="flex mx-auto text-base font-semibold 
          text-blue-gray-800 border-t w-full text-center justify-center mb-6 pt-6">
            Technologias e Linguagens
          </div>
          <div className="block m-1 text-center">
            <ListTech
              props={{
                text: "Next13.JS",
                color: " rounded bg-black ",
                colorIcon: "text-white",
                icon: icons.next,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Node.JS",
                color: " rounded bg-green-400 ",
                colorIcon: "text-white",
                icon: icons.node,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "React.JS",
                color: " rounded bg-light-blue-400 ",
                colorIcon: "text-white",
                icon: icons.react,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "JavaScript",
                color: " rounded bg-yellow-500 ",
                colorIcon: "text-black",
                icon: icons.js,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "MongoDB",
                color: " rounded bg-gray-900",
                colorIcon: "text-green-800 ",
                icon: icons.mongo,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "GrapQL",
                color: " rounded bg-pink-600 ",
                colorIcon: "text-white",
                icon: icons.graph,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Git",
                color: " rounded bg-orange-900",
                colorIcon: "text-white",
                icon: icons.git,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Python",
                color: " rounded bg-blue-900",
                colorIcon: "text-yellow-700",
                icon: icons.python,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "TailwindCss",
                color: " rounded bg-gradient-to-r from-cyan-500 to-blue-500",
                colorIcon: "text-white",
                icon: icons.tailwind,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Express",
                color: " rounded bg-black",
                colorIcon: "text-white",
                icon: icons.express,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Typescript",
                color: " rounded bg-blue-500",
                colorIcon: "text-white",
                icon: icons.typescript,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "Axios",
                color: " rounded bg-purple-500",
                colorIcon: "text-white",
                icon: icons.axios,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "SQL",
                color: " rounded bg-blue-700",
                colorIcon: "text-white",
                icon: icons.sql,
                mobile: "",
              }}
            />
            <ListTech
              props={{
                text: "PHP",
                color: " rounded bg-orange-500",
                colorIcon: "text-white",
                icon: icons.php,
                mobile: "",
              }}
            />
          </div>
          {/* <div className="flex w-full justify-center mx-auto mt-10">
            <a href="#contact">
              <ButtonComponent
                className="text-blue-gray-500 font-bold py-2 px-4 rounded bg-white
              border border-blue-gray-100 hover:bg-blue-500 hover:text-white hover:border-white"
              >
                Download CV
              </ButtonComponent>
            </a>
          </div> */}
        </CardFooter>
      </Card>
    </div>
  );
}
