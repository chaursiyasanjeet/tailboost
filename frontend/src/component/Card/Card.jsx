import React from "react";

const Card = ({ title, icon, data, ...props }) => {
  return (
    <div
      className={`flex flex-col py-5 rounded-md justify-center items-center ${props.color}`}
    >
      <div className="flex items-center justify-center gap-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <ion-icon name={icon} {...props} className="icon" />
      </div>
      <h1 className="text-xl font-semibold">{data}</h1>
    </div>
  );
};

export default Card;
