import Link from "next/link";
import React, { FC } from "react";

export const ProfileDropdown: FC<ProfileDropdownProps> = ({
  open,
  onClose,
}) => {
  return (
    <div
      id="user-menu"
      className={` absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${open ? "block" : "hidden"}`}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
    >
      <Link
        href="/profile"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        id="user-menu-item-0"
      >
        Your Profile
      </Link>
      <Link
        href="saved-properties"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        id="user-menu-item-2"
      >
        Saved Properties
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        id="user-menu-item-2"
      >
        Sign Out
      </Link>
    </div>
  );
};
interface ProfileDropdownProps {
  open: boolean;
  onClose: () => void;
}
