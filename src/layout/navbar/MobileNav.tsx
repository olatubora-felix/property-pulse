import { routes } from "@/constant/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import { FaGoogle } from "react-icons/fa";

export const MobileNav: FC<MobileNavProps> = ({
  mobile,
  onClose,
  loggedIn,
}) => {
  const active = usePathname();
  return (
    <div className={mobile ? "block md:hidden" : "hidden"} id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.path}
            onClick={onClose}
            className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
              active === route.path ? "bg-gray-900" : ""
            }`}
          >
            {route.name}
          </Link>
        ))}
        {loggedIn && (
          <Link
            href="/properties/add"
            onClick={onClose}
            className={`text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${
              active === "/properties/add" ? "bg-gray-900" : ""
            }`}
          >
            Add Property
          </Link>
        )}
        {!loggedIn ? (
          <button className="flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 my-4">
            <FaGoogle className="text-white mr-2" />
            <span>Login or Register</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};
interface MobileNavProps {
  mobile: boolean;
  onClose: () => void;
  loggedIn: boolean;
}
