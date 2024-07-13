'use client'

import { adminNavOptions, buttonClasses, navOptions } from "@/utils";
import { Fragment } from "react";

export const Navbar = () => {
  const isAdminView = false  ;
  const isAuthUser = true;
  const user = {
    role: "admin",
  };

  const NavItems = () => {
    return (
      <div className="mt-4 md:mt-0">
        <ul className="flex flex-col md:flex-row md:space-x-4">
          {isAdminView
            ? adminNavOptions.map((item) => (
                <li key={item.id} className="py-2 md:py-0">
                  <a href={item.link} className="text-gray-700 hover:text-gray-900">
                    {item.label}
                  </a>
                </li>
              ))
            : navOptions.map((item) => (
                <li key={item.id} className="py-2 md:py-0">
                  <a href={item.link} className="text-gray-700 hover:text-gray-900">
                    {item.label}
                  </a>
                </li>
              ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200 fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center cursor-pointer">
            <h1 className="text-2xl font-semibold">Clothing Store</h1>
          </div>
          <div className="flex items-center gap-4 md:order-2">
            {!isAdminView && isAuthUser ? (
              <Fragment>
                <button className={buttonClasses.btnStyles }>Account</button>
                <button className={buttonClasses.btnStyles }>Cart</button>
              </Fragment>
            ) : null}
            {user.role === "admin" ? (
              isAdminView ? (
                <button className={buttonClasses.btnStyles }>Client view</button>
              ) : (
                <button className={buttonClasses.btnStyles }>Admin view</button>
              )
            ) : null}
            {isAuthUser ? (
              <button className={buttonClasses.btnStyles }>Logout</button>
            ) : (
              <button className={buttonClasses.btnStyles }>Login</button>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
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
          </div>
          <div className="hidden md:flex md:items-center md:w-auto">
            <NavItems />
          </div>
        </div>
        <div className="md:hidden">
          <NavItems />
        </div>
      </nav>
    </>
  );
};



