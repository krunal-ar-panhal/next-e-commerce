import React from "react";

export const Navbar = () => {
  const isAdminView = false;
  const isAuthUser = false;
  const user = {
    role: "admin",
  };

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center cursor-pointer">
            <span className="slef-center text-2xl font-semibold whitespace-nowrap">
              Ecommercery
            </span>
            <div className="flex md:order-2 gap-2"></div>
          </div>
        </div>
      </nav>
    </>
  );
};
