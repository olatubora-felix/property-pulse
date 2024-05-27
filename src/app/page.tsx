import { Hero } from "@/components/home/Hero";
import { HomeProperties } from "@/components/home/HomeProperties";
import InfoBoxes from "@/components/home/InfoBoxes";
import React from "react";
import { fetchProperties } from "@/controllers/propertyController";
import { PropertyType } from "@/types/properties";

const HomePage = async () => {
  const properties: PropertyType[] = await fetchProperties();
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties properties={properties} />
    </>
  );
};

export default HomePage;
