import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Heade from "../components/Heade";

function Layout({children}) {
      const [IsOpen, setIsOpen] = useState({
    menu: false,
    dots: false,
    SmallSideBar: false,
  });

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar IsOpen={IsOpen} setIsOpen={setIsOpen} />
      <div className="md:ml-[18%] w-full md:w-[82%] bg-slate-200 dark:bg-slate-800 min-h-screen">
        <Heade IsOpen={IsOpen} setIsOpen={setIsOpen} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
