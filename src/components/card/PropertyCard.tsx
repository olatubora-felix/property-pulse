import { PropertyType, Rates } from "@/types/properties";
import Image from "next/image";
import React, { FC } from "react";
import {
  FaBed,
  FaRulerCombined,
  FaBath,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";

export const PropertyCard: FC<PropertyProps> = ({ property }) => {
  const getRateDisplay = (rate: Rates) => {
    if (rate.monthly) return `$${rate.monthly?.toLocaleString()}/Mo`;
    if (rate.weekly) return `$${rate.weekly?.toLocaleString()}/Wk`;
    if (rate.nightly) return `$${rate.nightly?.toLocaleString()}/Nt`;
  };
  return (
    <div className="rounded-xl shadow-md relative" key={property._id}>
      <Image
        src={`/images/properties/${property?.images[0]}`}
        alt={property.name}
        className="w-full h-auto rounded-t-xl"
        sizes="100vh"
        height={0}
        width={0}
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>

        {property?.rates.monthly && (
          <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
            {`$${property?.rates.monthly?.toLocaleString()}/Mo`}
          </h3>
        )}
        {property?.rates.weekly && (
          <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
            {`$${property?.rates.weekly?.toLocaleString()}/Wk`}
          </h3>
        )}
        {property?.rates.nightly && (
          <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
            {`$${property?.rates.nightly?.toLocaleString()}/Nt`}
          </h3>
        )}

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p className="flex items-center gap-1">
            <FaBed /> {property.beds}
            <span className="md:hidden lg:inline">
              {property.beds > 1 ? "Beds" : "Bed"}
            </span>
          </p>
          <p className="flex items-center gap-1">
            <FaBath /> {property.baths}
            <span className="md:hidden lg:inline">
              {property.baths > 1 ? "Baths" : "Bath"}
            </span>
          </p>
          <p className="flex items-center gap-1">
            <FaRulerCombined />
            {property.square_feet}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {
            // Display only the rates that are available
            property?.rates.monthly ? (
              <p className="flex items-center gap-1">
                <FaMoneyBill /> Monthly
              </p>
            ) : null
          }
          {
            // Display only the rates that are available
            property?.rates.weekly ? (
              <p className="flex items-center gap-1">
                <FaMoneyBill /> Weekly
              </p>
            ) : null
          }
          {
            // Display only the rates that are available
            property?.rates.nightly ? (
              <p className="flex items-center gap-1">
                <FaMoneyBill /> Nightly
              </p>
            ) : null
          }
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="fa-solid fa-location-dot text-lg text-orange-700" />
            <span className="text-orange-700">
              {property.location.city}, {property.location.state}
            </span>
          </div>
          <a
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
};
interface PropertyProps {
  property: PropertyType;
}
