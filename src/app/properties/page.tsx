import React from "react";
import { PropertyCard } from "@/components/card/PropertyCard";
import { PropertyType } from "@/types/properties";
import { fetchProperties } from "@/controllers/propertyController";
import { Search } from "./_components/Search";

const PropertiesPage = async () => {
  const properties: PropertyType[] = await fetchProperties();

  // Sort properties by date
  properties.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  return (
    <>
      <Search />
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties?.length > 0 ? (
              properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))
            ) : (
              <div className="text-center">No properties found</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;
