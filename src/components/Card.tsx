import React, { ReactNode } from "react";

type CardProps = {
  className: string;
  title: string;
  description: string;
  icon: string;
};

const Card = ({ className, title, description, icon }: CardProps) => {
  return (
    <section className={className}>
      <h3>{title}</h3>
      <p>{description}</p>
      {icon}
    </section>
  );
};

export default Card;
