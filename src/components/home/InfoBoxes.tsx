import React from "react";
import { InfoBox } from "./InfoBox";

const InfoBoxes = () => {
  return (
    //  <!-- Renters and Owners -->
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            title="For Renters"
            content=" Find your dream rental property. Bookmark properties and contact
              owners."
            link="/properties"
            linkText="Browse Properties"
            linkBackground="bg-gray-100 p-6 rounded-lg shadow-md"
            linkColor="inline-block bg-gray-500 text-white rounded-lg px-4 py-2 hover:bg-gray-600"
          />
          <InfoBox
            title="For Property Owners"
            content="List your properties and reach potential tenants. Rent as an
              airbnb or long term."
            link="/properties/add"
            linkText="Add Property"
            linkBackground="bg-blue-100 p-6 rounded-lg shadow-md"
            linkColor="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
