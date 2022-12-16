import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";

export const Navbar = () => {
  const [selected, setSelected] = React.useState(0);
  const router = useRouter();
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="backdrop-blur-lg	 border-gray-900 fixed z-50 w-screen px-2 sm:px-4 py-2.5 bg-darkBlue/95 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image src={Logo} className="h-6 mr-3 sm:h-9" alt="Tudor Esan Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            "absolute top-14 right-1 md:hidden rounded-md bg-darkBlue/90 backdrop-blur-md animate:fadeIn shadow-border " +
            (open ? "visible" : "invisible")
          }
        >
          <ul className="flex flex-col p-4 bg-inherit rounded-lg">
            {routes.map((route, index) => {
              return (
                <li>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(route.path);
                    }}
                    className={
                      "block py-2 pl-3 pr-4 rounded md:bg-transparent  md:p-0 dark " +
                      (selected === index ? "text-amber-400" : "text-white/90")
                    }
                    aria-current="page"
                  >
                    {route.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border bg-inherit rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
            {routes.map((route, index) => {
              return (
                <li>
                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(route.path);
                    }}
                    className={
                      "block py-2 pl-3 pr-4 rounded md:bg-transparent  md:p-0 dark " +
                      (selected === index ? "text-amber-400" : "text-white/90")
                    }
                    aria-current="page"
                  >
                    {route.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
