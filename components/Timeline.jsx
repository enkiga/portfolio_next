import React from "react";
import Image from "next/image";

const Timeline = ({ logo, title, company, date, description }) => {
  return (
    <div className="flex relative">
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
        <Image
          src={logo}
          alt={`${company} Logo`}
          layout="responsive"
          width={48}
          height={48}
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold text-lg">{company}</h3>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="mt-1">{description}</p>
      </div>
      <div className="absolute top-0 left-0 w-1 h-full bg-gray-300"></div>
    </div>
  );
};

export default Timeline;
