import Image from "next/image";
import React from "react";
import logo from "@/assets/imgs/logo.png";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 mt-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <Link href={"/"} className="mb-4 md:mb-0">
          <Image src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>
        <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
          <ul className="flex space-x-4">
            {footerRoutes.map((route) => (
              <li key={route.path}>
                <Link href={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy;{" "}
            {
              new Date().getFullYear() // Get the current year
            }{" "}
            PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
const footerRoutes = [
  {
    name: "Properties",
    path: "/properties",
  },
  {
    name: "Terms of Service",
    path: "/terms",
  },
];
