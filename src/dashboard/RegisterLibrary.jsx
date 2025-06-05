import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import LibraryDetailModal from "./LibraryDetailModal";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

function RegisterLibrary() {
  const Base_Api = import.meta.env.VITE_BASE_API;
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLibrary, setSelectedLibrary] = useState(null);

  const fetchAllRegisterdLibraryn = async () => {
    try {
      const res = await axios.get(`${Base_Api}/api/libraries`);
      if (res.data.success) setData(res.data.libraries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllRegisterdLibraryn();
  }, []);

  const handleViewLibrary = (library) => {
    setSelectedLibrary(library);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLibrary(null);
  };

  const columns = [
    {
      Header: "createdAt",
      accessor: "createdAt",
      sortable: true,
      Cell: ({ row }) => <span>{row.createdAt.split("T")[0]}</span>,
    },
    {
      Header: "library Name",
      accessor: "libraryName",
      sortable: true,
    },
    {
      Header: "contact No",
      accessor: "contactNumber",
      sortable: true,
    },
    {
      Header: "Location",
      accessor: "location",
      sortable: true,
    },
    {
      Header: "Action",
      accessor: "actions",
      sortable: false,
      Cell: ({ row }) => (
        <div className="flex gap-5 text-xl">
          <span
            className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors"
            onClick={() => handleViewLibrary(row)}
            title="View Details"
          >
            <Eye size={24} />
          </span>
        </div>
      ),
    },
  ];

  return (
    <div className="">
      <div className="md:px-8 px-4 border-b border-slate-300 py-4 left-0 right-0 z-10 bg-slate-200">
        <div className="flex items-center justify-between">
          <div className="text-base">
            <h5 className="font-semibold">Registerd Library</h5>
            <p className="text-sm">Manage your Registerd Library</p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="mt-10 px-8">
        <DataTable
          columns={columns}
          data={data || []}
          defaultSort={{ field: "_id", direction: "asc" }}
          pageSize={8}
          searchable={true}
        />
      </div>

      {/* Library Details Modal */}
      <LibraryDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        libraryData={selectedLibrary}
      />
    </div>
  );
}

export default RegisterLibrary;