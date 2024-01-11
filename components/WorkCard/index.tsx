import React from "react";
import { ProjectProps } from "../../interfaces/project";

type WorkCardProps = {
  props: ProjectProps;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
};

const WorkCard = ({ props, handleClick }: WorkCardProps) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={handleClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={props.title}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={props.image}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {props.title ? props.title : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {props.description ? props.description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
