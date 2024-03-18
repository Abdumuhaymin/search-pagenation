import React from "react";

export const Card = ({ title, id, description }) => {
  return (
    <div className="mx-auto  shadow-purple-800 shadow-inner backdrop-blur-md w-[350px] text-center border-4 border-purple-950 pl-4 mb-2">
      <i className="">{id}</i>
      <h2>{title}</h2>
      <h3>{description}</h3>
    </div>
  );
};
