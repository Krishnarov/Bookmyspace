import React from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children, size = "lg" }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-6xl"
  };

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black/50 bg-opacity-50 flex">
      <div className={`relative p-8 bg-white w-full ${sizeClasses[size]} m-auto flex-col flex rounded-lg shadow-lg`}>
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;