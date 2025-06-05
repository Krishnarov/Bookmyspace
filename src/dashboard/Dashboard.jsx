import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import Btn from "../components/Btn";

import Input from "../components/Input";
import axios from "axios";
import { Library, BookOpenCheck, Building2 } from "lucide-react";

function Dashboard() {
  const [AllRegisterdLibraryn, setAllRegisterdLibraryn] = useState([]);
  const [AllInquiriesLibraryn, setAllInquiriesLibraryn] = useState([]);
  const Base_Api = import.meta.env.VITE_BASE_API;
  const fetchAllRegisterdLibraryn = async () => {
    try {
      const res = await axios.get(`${Base_Api}/api/libraries`);
      if (res.data.success) setAllRegisterdLibraryn(res.data.libraries);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAllInquiriesLibraryn = async () => {
    try {
      const res = await axios.get(`${Base_Api}/api/inquiries`);
      console.log(res);

      if (res.data.success) setAllInquiriesLibraryn(res.data.inquiries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllRegisterdLibraryn();
    fetchAllInquiriesLibraryn();
  }, []);

  return (
    <div className="">
      <div className="mt-10 px-8 ">
        <div className=" grid grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">
                  Total Active Registerd Library
                </p>
                <p className="text-2xl font-bold text-blue-800">
                  {AllRegisterdLibraryn?.length}
                </p>
              </div>
              <BookOpenCheck className="h-8 w-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-600 text-sm font-medium">
                  Total Active Enqurise
                </p>
                <p className="text-2xl font-bold text-blue-800">
                  {AllInquiriesLibraryn?.length}
                </p>
              </div>
              <Library className="h-8 w-8 text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
