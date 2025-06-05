import React from "react";
import Modal from "./Modal";
import { MapPin, Phone, Mail, Clock, Book, Users } from "lucide-react";

const LibraryDetailModal = ({ isOpen, onClose, libraryData }) => {
  if (!libraryData) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    if (!timeString) return 'N/A';
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Library Details" 
      size="xl"
    >
      <div className="space-y-6">
        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Basic Information</h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-600">Library Name</label>
                <p className="text-gray-800 font-medium">{libraryData.libraryName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Library Type</label>
                <p className="text-gray-800 font-medium">{libraryData.libraryType}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Description</label>
                <p className="text-gray-800 font-medium">{libraryData.description}</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              Logo
            </h3>
            <div className="space-y-2">
              {libraryData.logo && (
                <div className="aspect-video  rounded overflow-hidden">
                  <img 
                    src={`${import.meta.env.VITE_BASE_API}/uploads/${libraryData.logo}`} 
                    alt="Library logo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/placeholder-image.jpg';
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Phone size={20} className="text-blue-600" />
            Contact Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-gray-500" />
              <div>
                <label className="block text-sm font-medium text-gray-600">Location</label>
                <p className="text-gray-800">{libraryData.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gray-500" />
              <div>
                <label className="block text-sm font-medium text-gray-600">Contact Number</label>
                <p className="text-gray-800">{libraryData.contactNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 md:col-span-2">
              <Mail size={16} className="text-gray-500" />
              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <p className="text-gray-800">{libraryData.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timing & Stats */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Clock size={20} className="text-green-600" />
              Operating Hours
            </h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-600">From</label>
                <p className="text-gray-800 font-medium">{formatTime(libraryData.timingFrom)}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">To</label>
                <p className="text-gray-800 font-medium">{formatTime(libraryData.timingTo)}</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Book size={20} className="text-purple-600" />
              Statistics
            </h3>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-600">Total Books</label>
                <p className="text-gray-800 font-medium text-xl">{libraryData.totalBooks?.toLocaleString()}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Registered On</label>
                <p className="text-gray-800">{formatDate(libraryData.createdAt)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Users size={20} className="text-yellow-600" />
            Services & Facilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            {libraryData.services && libraryData.services.map((service, index) => (
              <div key={index} className="bg-white p-2 rounded border border-yellow-200">
                <span className="text-sm text-gray-700">✓ {service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Images Section */}
        {libraryData.images && libraryData.images.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {libraryData.images.map((image, index) => (
                <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={`${import.meta.env.VITE_BASE_API}/uploads/${image}`} 
                    alt={`Library image ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/placeholder-image.jpg';
                    }}
                  />
                </div>
              ))}
              
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default LibraryDetailModal;