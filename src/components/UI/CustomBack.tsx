import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export const CustomBack = ({ href, text }: CustomBackProps) => {
  return (
    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          href={href}
          className="text-blue-500 hover:text-blue-600 flex items-center"
        >
          <FaArrowLeft className=" mr-2" /> {text}
        </Link>
      </div>
    </section>
  );
};
interface CustomBackProps {
  href: string;
  text: string;
}
