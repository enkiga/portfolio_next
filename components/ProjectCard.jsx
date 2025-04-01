import React from "react";
import Image from "next/image";

const ProjectCard = ({ title, description, image, technologies }) => {
  return (
    <div className="flex flex-col items-start justify-between w-full max-w-md min-h-[500px]  p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold text-primary">{title}</h2>
      <p className="mt-2 text-gray-700">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((item, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
