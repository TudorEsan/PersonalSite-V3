import React from "react";
import { Navbar } from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      <main className="bg-darkBlue">
        <div className="mt-20">{children}</div>
      </main>
    </>
  );
};
