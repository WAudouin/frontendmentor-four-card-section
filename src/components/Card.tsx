import React, { ReactNode } from "react";

type CardProps = {
  className: string;
  title: string;
  description: string;
  icon: string;
};

const getIcon = (icon: string) => {
  return <span className="ml-auto mt-auto">{icon}</span>;
};

const Card = ({ className, title, description, icon }: CardProps) => {
  return (
    <section
      className={`flex flex-col gap-3 ${className} p-8 shadow-md rounded-xl`}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      {getIcon(icon)}
    </section>
  );
};

export default Card;
