// Sidebar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import routes from "../route/SidebarRaoute.jsx";
import { useSelector } from "react-redux";

const Sidebar = ({ setIsOpen, IsOpen }) => {
  const location = useLocation();
  const path = location.pathname;
const user = useSelector((state)=>state.auth.user.user)
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (index) => {
    setExpandedMenus({
      ...expandedMenus,
      [index]: !expandedMenus[index]
    });
  };

  const isActiveRoute = (routePath) => {
    return path === routePath || path.startsWith(routePath + "/");
  };

  return (
    <div
      className={`h-full md:w-[18%] w-full fixed bg-white dark:bg-[#212529] z-30 font-inter py-1 overflow-auto scrollbar-custom transition-all duration-500 ${
        IsOpen?.menu ? "left-0" : "-left-full md:left-0"
      }`}
    >
      <div className="flex items-center justify-between px-4 md:justify-center top-0 pb-2 pt-3 fixed w-[inherit] bg-white dark:bg-[#212529] z-10 transition-all duration-500">
        <div className="flex items-center md:justify-center transition-opacity duration-500">
          <img src="./img/bookmyspace.jpeg" alt="Logo" className="h-12" />
        </div>
        <div className="text-xl font-black pl-2">
          <h2>Book My Space</h2>
        </div>
        <button
          onClick={() => setIsOpen({ ...IsOpen, menu: false })}
          className={`text-3xl text-orange-400 font-semibold md:hidden transition-transform duration-500 hover:rotate-90`}
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>
      <div className="px-4 pt-20 overflow-auto font-inter bg-white dark:bg-[#212529] text-gray-600 dark:text-[#7c7f90] text-sm transition-all duration-500">
        {routes.map((route, index) => (
          <div key={index} className="relative group">
            {route.collapse ? (
              <>
                <div
                  onClick={() => toggleMenu(index)}
                  className={`flex items-center justify-between py-3 gap-3 px-3 cursor-pointer rounded-lg my-1 transition-all duration-500 ${
                    isActiveRoute(route.path)
                      ? "bg-orange-100 dark:bg-slate-700 text-orange-600 dark:text-white"
                      : "hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl">
                      <i className={route.icon}></i>
                    </div>
                    <div className={`whitespace-nowrap ${IsOpen?.SmallSideBar ? "md:hidden" : "md:block"}`}>
                      {route.name}
                    </div>
                  </div>
                  <div className={`transition-transform duration-300 ${expandedMenus[index] ? "rotate-90" : ""}`}>
                    <i className="ri-arrow-right-s-line"></i>
                  </div>
                </div>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedMenus[index] 
                      ? "max-h-96 opacity-100" 
                      : "max-h-0 opacity-0 md:group-hover:max-h-96 md:group-hover:opacity-100"
                  }`}
                >
                  {route.collapse.map((subRoute, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subRoute.path}
                      onClick={() => setIsOpen({ ...IsOpen, menu: false })}
                      className={`flex items-center py-2 gap-3 px-3 cursor-pointer rounded-lg my-1 ml-6 transition-all duration-300 ${
                        path === subRoute.path
                          ? "bg-orange-100 dark:bg-slate-700 text-orange-600 dark:text-white"
                          : "hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      <div className="text-xl">
                        <i className={subRoute.icon}></i>
                      </div>
                      <div className={`whitespace-nowrap ${IsOpen?.SmallSideBar ? "md:hidden" : "md:block"}`}>
                        {subRoute.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                to={route.path}
                onClick={() => setIsOpen({ ...IsOpen, menu: false })}
                className={`flex items-center font-inter py-3 gap-3 px-3 cursor-pointer rounded-lg my-1 transition-all duration-500 ${
                  path === route.path
                    ? "bg-orange-100 dark:bg-slate-700 text-orange-600 dark:text-white"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <div className="text-xl">
                  <i className={route.icon}></i>
                </div>
                <div className={`whitespace-nowrap ${IsOpen?.SmallSideBar ? "md:hidden" : "md:block"}`}>
                  {route.name}
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;