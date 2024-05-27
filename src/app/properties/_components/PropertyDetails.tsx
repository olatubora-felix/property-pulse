import { PropertyType } from "@/types/properties";
import Image from "next/image";
import React from "react";
import { PropertyDetailsSidebar } from "./PropertyDetailsSidebar";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { CustomBack } from "@/components/UI/CustomBack";
import {
  FaMapMarker,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

export const PropertyDetails = ({ property }: PropertyDetailsProps) => {
  if (!property)
    return (
      <div className="text-center text-2xl font-bold py-6 h-[60vh] grid place-content-center capitalize text-blue-500">
        Property not found
      </div>
    );
  return (
    <>
      {/* //  <!-- Property Header Image --> */}
      <section>
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1">
            <Image
              src={`/images/properties/${property.images[0]}`}
              alt=""
              className="object-cover h-[400px] w-full"
              width={1800}
              sizes="100vh"
              height={400}
            />
          </div>
        </div>
      </section>

      {/* // <!-- Go Back --> */}
      <CustomBack href="/properties" text="Back to Properties" />

      {/* // <!-- Property Info --> */}
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{property?.type}</div>
                <h1 className="text-3xl font-bold mb-4">{property?.name}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className=" text-lg text-orange-700 mr-2" />
                  <p className="text-orange-700">{`${property?.location.street}, ${property?.location.city}, ${property?.location.state}`}</p>
                </div>

                <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
                  Rates & Options
                </h3>
                <div className="flex flex-col md:flex-row justify-around">
                  <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                    <div className="text-gray-500 mr-2 font-bold">Nightly</div>
                    {property?.rates.nightly ? (
                      <div className="text-2xl font-bold text-blue-500">
                        {`$${property?.rates.nightly}`}
                      </div>
                    ) : (
                      <div className="text-2xl font-bold">
                        <FaTimes className="fa fa-xmark text-red-700" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
                    <div className="text-gray-500 mr-2 font-bold">Weekly</div>
                    {property?.rates.weekly ? (
                      <div className="text-2xl font-bold text-blue-500">
                        {`$${property?.rates.weekly}`}
                      </div>
                    ) : (
                      <div className="text-2xl font-bold">
                        <FaTimes className="fa fa-xmark text-red-700" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
                    <div className="text-gray-500 mr-2 font-bold">Monthly</div>
                    {property?.rates.monthly ? (
                      <div className="text-2xl font-bold text-blue-500">
                        {`$${property?.rates.monthly}`}
                      </div>
                    ) : (
                      <div className="text-2xl font-bold">
                        <FaTimes className="fa fa-xmark text-red-700" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-bold mb-6">
                  Description & Details
                </h3>
                <div className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9">
                  <p className="flex items-center gap-1">
                    <FaBed className="fa-solid fa-bed" /> {property?.beds}
                    <span className="hidden sm:inline">
                      {property?.beds > 1 ? "Beds" : "Bed"}
                    </span>
                  </p>
                  <p className="flex items-center gap-1">
                    <FaBath className="fa-solid fa-bath" /> {property?.baths}
                    <span className="hidden sm:inline">
                      {property?.baths > 1 ? "Baths" : "Bath"}
                    </span>
                  </p>
                  <p className="flex items-center gap-1">
                    <FaRulerCombined className="fa-solid fa-ruler-combined" />
                    {property?.square_feet}
                    <span className="hidden sm:inline">sqft</span>
                  </p>
                </div>
                <p className="text-gray-500 mb-4">{property?.description}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-bold mb-6">Amenities</h3>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none gap-4">
                  {property?.amenities.map((amenity, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FaCheck className="fas fa-check text-green-600 " />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <div id="map"></div>
              </div>
            </main>
            <PropertyDetailsSidebar />
          </div>
        </div>
      </section>
    </>
  );
};
interface PropertyDetailsProps {
  property: PropertyType;
}
