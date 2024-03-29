import React from "react";
import dynamic from "next/dynamic";
//componente de layout footer e navbar
import {
  InfoCard,
  ProjectCard,
  HeroSection,
  PersonalCard,
  Features,
  Loading,
} from "../../src/components/utilsComponents/index"; //componente

import FloatButton from "../../src/components/buttons/floatButton";
import { useHomePopulation } from "../../src/hook/useHomePupulation";
import { useFormPostApi } from "../../src/hook/form";
import Confetti from "react-confetti";
import {
  AboutSection,
  HeroSectionSlide,
  ProjectSection,
} from "../../src/components/sections";
import ContactSection from "../../src/components/sections/contactSection";
import Section from "../../src/components/sections/sectionOne";
import SectionOne from "../../src/components/sections/sectionOne";
import SectionTwo from "../../src/components/sections/sectionTwo";
import Head from "next/head";
import SectionCards from "../../src/components/sections/sectionCards";
import SectionCostumers from "../../src/components/sections/sectionCostumers";

const InfoCardComponent = React.lazy(
  () => import("../../src/components/utilsComponents/infoCard")
);
const FeaturesComponent = React.lazy(
  () => import("../../src/components/utilsComponents/featuredCards")
);
const ProjectComponent = dynamic(
  async () => await import("../../src/components/utilsComponents/projectCard"),
  {
    ssr: false,
    loading: () => {
      return <Loading />;
    },
  }
);

export default function Homepage() {
  const { isLoading, projects, textProps, featuresData } = useHomePopulation();
  const { showConfetti } = useFormPostApi();
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <title>Square Oden | Soluções Digitais</title>
        <meta name="author" content="AdrielDev-for-SquareOden" />
        <meta
          name="keywords"
          content="presença online, marketing digital, impulsionar seus negócios, Square Oden, Desenvolvimento web, Trafego Online"
        />
        <meta
          name="description"
          content="Potencialize sua presença online com a Square Oden,
          Oferecemos soluções de marketing digital personalizadas para impulsionar seus negócios.
          Desenvolvimento Web, Design, Marketing Digital, Trafego Online"
        />
      </Head>
      {showConfetti && (
        <div className="fixed h-auto items-center mx-auto">
          <Confetti className="flex w-screen" />
        </div>
      )}
      <div className="w-full h-auto bg-white">
        <HeroSection />
        {/* <HeroSectionSlide /> */}
        <AboutSection />
        <SectionOne />
        <SectionTwo />
        {/* <SectionCards /> */}
        {/* <ProjectSection /> */}
        {/* <SectionCostumers /> */}
        <ContactSection />
      </div>
    </div>
  );
}
