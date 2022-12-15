import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: Props) => {
  return (
    <div
      // style={{boxShadow}}
      className={
        "bg-cardColor/30 shadow-border  backdrop-saturate-120 backdrop-brightness-100 backdrop-blur-md p-5 sm:p-10 max-w-xl rounded-2xl " +
        className
      }
    >
      {children}
    </div>
  );
};
