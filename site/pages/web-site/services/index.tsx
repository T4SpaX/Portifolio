import React from "react";
import ContactSection from "../../../src/components/sections/contactSection";
import ServiceSection from "../../../src/components/sections/serviceSection";
import Wrapper from "../../../src/layout/wrapper";

export default function Index() {
  return (
    <div className="h-auto">
      <ServiceSection />
      <ContactSection />
    </div>
  );
}
