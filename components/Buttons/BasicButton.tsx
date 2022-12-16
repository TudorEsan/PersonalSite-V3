import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: (...args: any[]) => any;
  className: string;
}

export const BasicButton = ({ children, onClick, className }: Props) => {
  return (
    <div className={className}>
      <button
        onClick={onClick}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-yellow-50/90 rounded-lg group bg-gradient-to-r from-amber-400 to-purple-900 group-hover:from-amber-400 group-hover:to-purple-900 hover:text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 active:outline-none "
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {children}
        </span>
      </button>
    </div>
  );
};
