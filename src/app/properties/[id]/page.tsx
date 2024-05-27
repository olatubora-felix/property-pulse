import { fetchPropertyById } from "@/controllers/propertyController";
import { PropertyType } from "@/types/properties";
import React, { FC } from "react";
import { Search } from "../_components/Search";
import { PropertyDetails } from "../_components/PropertyDetails";

const Propertypage: FC<PropertyProps> = async ({ params: { id } }) => {
  const property = (await fetchPropertyById(id)) as PropertyType;
  return (
    <>
      <Search />
      <PropertyDetails property={property} />
    </>
  );
};

export default Propertypage;
interface PropertyProps {
  params: {
    id: string;
  };
}
