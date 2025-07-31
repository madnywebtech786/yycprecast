'use client'
import Breadcrumb from "@/app/components/Breadcrumb";
import React from "react";
import AboutSection from "../sections/AboutSection";

export default function page() {
  return (
    <div>
      <Breadcrumb name={"About Us"} />

      <AboutSection  />
    </div>
  );
}
