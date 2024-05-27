import Link from "next/link";
import React, { FC } from "react";

export const InfoBox: FC<InfoBoxProps> = ({
  title,
  content,
  link,
  linkText,
  linkBackground,
  linkColor,
}) => {
  return (
    <div className={linkBackground}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 mb-4">{content}</p>
      <Link href={link} className={linkColor}>
        {linkText}
      </Link>
    </div>
  );
};

interface InfoBoxProps {
  title: string;
  content: string;
  link: string;
  linkText: string;
  linkBackground: string;
  linkColor: string;
}
