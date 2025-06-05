import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Upload,
  Clock,
  BookOpen,
  Users,
  DollarSign,
  Library,
  CreditCard,
  Eye,
  EyeOff,
} from "lucide-react";
import HeroHead from "../components/HeroHead";
import Footer from "../components/Footer";
import axios from "axios";
import { toast } from "react-toastify";

export default function LibraryRegistrationForm() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const Base_Api = import.meta.env.VITE_BASE_API;
  const [formData, setFormData] = useState({
    libraryName: "",
    libraryType: "",
    description: "",
    logo: null,
    images: [],
    location: "",
    contactNumber: "",
    email: "",
    password: "",
    timingFrom: "",
    timingTo: "",
    services: [],
    totalBooks: "",
  });

  const libraryTypes = [
    "Public Library",
    "Academic Library",
    "School Library",
    "Special Library",
    "Digital Library",
    "Research Library",
  ];

  const availableServices = [
    "News paper Hindi + English ",
    "Currant affairs magazines (monthly) ",
    "R-O water",
    "fully air conditioned ",
    "High speed wifi ",
    "24 x 7",
    "Clean Environment ",
    "Power Backup ",
    "Group Discussion room",
    "Personal Locker ",
    "CANTEEN ",
    "CAFETERIA  ",
    "PIN Board ",
    "Seperate Space for Laptop ",
    "Provide Some Novels and Book's  ",
    "Power switch & Light  ",
    "Rest Room ",
    "CCTV Surveillance ",
    "Parking ",
    "Personal mentorship & Guidence ",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      if (name === "logo") {
        setFormData((prev) => ({ ...prev, [name]: files[0] }));
      } else if (name === "images") {
        setFormData((prev) => ({ ...prev, [name]: Array.from(files) }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const formDataToSend = new FormData();
    formDataToSend.append("libraryName", formData.libraryName);
    formDataToSend.append("libraryType", formData.libraryType);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("logo", formData.logo);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("totalBooks", formData.totalBooks);
    formDataToSend.append("contactNumber", formData.contactNumber);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("timingFrom", formData.timingFrom);
    formDataToSend.append("timingTo", formData.timingTo);

    // Loop through image files and append
    formData.images.forEach((img) => {
      formDataToSend.append("images", img);
    });

    // Convert services array to string
    formDataToSend.append("services", JSON.stringify(formData.services));

    const res = await axios.post(`${Base_Api}/api/libraries`, formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      toast.success(res?.data?.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Library registration failed!");
  }

  // Reset form
  setFormData({
    libraryName: "",
    libraryType: "",
    description: "",
    logo: null,
    images: [],
    location: "",
    contactNumber: "",
    email: "",
    password: "",
    timingFrom: "",
    timingTo: "",
    services: [],
    totalBooks: "",
  });
};


  return (
    <div className="min-h-screen dark:bg-gray-900  dark:text-white">
      <HeroHead text={"Library Registration "} />

      {/* Registration Form */}
      <section className="py-16">
        <div className=" mx-auto  sm:px-6 lg:px-8">
          <div className="bg-gray0 rounded-2xl  p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold  mb-4">
                Registration and no commission
              </h2>
              <p className="dark:text-gray-400 ">
                Please fill in all the required information about your library
              </p>
            </div>

            <div onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 mb-2">
                    Library Name *
                  </label>
                  <input
                    type="text"
                    name="libraryName"
                    value={formData.libraryName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3  dark:bg-gray-700 border  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  dark:text-white  dark:placeholder-gray-400"
                    placeholder="Enter library name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium  dark:text-gray-300 mb-2">
                    Library Type *
                  </label>
                  <select
                    name="libraryType"
                    value={formData.libraryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3  dark:bg-gray-700 border  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  dark:text-white"
                  >
                    <option value="">Select library type</option>
                    {libraryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* <div>
                  <label className="block text-sm font-medium  dark:text-gray-300 mb-2">
                    Unique ID *
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-3 h-5 w-5  dark:text-gray-400" />
                    <input
                      type="text"
                      name="uniqueId"
                      value={formData.uniqueId}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3  dark:bg-gray-700 border  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  dark:text-white  placeholder-gray-400"
                      placeholder="Library unique identifier"
                    />
                  </div>
                </div> */}

                <div>
                  <label className="block text-sm font-medium  dark:text-gray-300 mb-2">
                    Total Number of Books
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-3 h-5 w-5  dark:text-gray-400" />
                    <input
                      type="number"
                      name="totalBooks"
                      value={formData.totalBooks}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3  dark:bg-gray-700 border  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  dark:text-white placeholder-gray-400"
                      placeholder="e.g., 5000"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium  dark:text-gray-300 mb-2">
                  Library Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3  dark:bg-gray-700 border  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  dark:text-white placeholder-gray-400"
                  placeholder="Describe your library, its mission, and what makes it special..."
                />
              </div>

              {/* File Uploads */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium  dark:text-gray-300 mb-2">
                    Library Logo
                  </label>
                  <div className="border-2 border-dashed  dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                    <Upload className="mx-auto h-12 w-12  dark:text-gray-400 mb-4" />
                    <input
                      type="file"
                      name="logo"
                      onChange={handleInputChange}
                      accept="image/*"
                      required
                      className="hidden"
                      id="logo-upload"
                    />
                    <label htmlFor="logo-upload" className="cursor-pointer">
                      <span className="text-blue-400 hover:text-blue-300">
                        Upload logo
                      </span>
                      <p className=" dark:text-gray-400 text-sm mt-1">
                        PNG, JPG up to 5MB
                      </p>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium  dark:text-gray-300 mb-2">
                    Library Images
                  </label>
                  <div className="border-2 border-dashed  dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                    <Upload className="mx-auto h-12 w-12  dark:text-gray-400 mb-4" />
                    <input
                      type="file"
                      name="images"
                      onChange={handleInputChange}
                      accept="image/*"
                      multiple
                      className="hidden"
                      id="images-upload"
                    />
                    <label htmlFor="images-upload" className="cursor-pointer">
                      <span className="text-blue-400 hover:text-blue-300">
                        Upload images
                      </span>
                      <p className=" dark:text-gray-400 text-sm mt-1">
                        Multiple images allowed
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium  dark:text-gray-300 mb-2">
                    Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5  dark:text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3  dark:bg-gray-700 border  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  dark:text-white placeholder-gray-400"
                      placeholder="Full address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium  dark:text-gray-300 mb-2">
                    Contact Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5  dark:text-gray-400" />
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3  dark:bg-gray-700 border  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  dark:text-white placeholder-gray-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium  dark:text-gray-300 mb-2">
                    Email ID *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5  dark:text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3  dark:bg-gray-700 border  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  dark:text-white placeholder-gray-400"
                      placeholder="library@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium  dark:text-gray-300 mb-2">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-12  dark:bg-gray-700 border  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  dark:text-white placeholder-gray-400"
                      placeholder="Create secure password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3  dark:text-gray-400  dark:hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Timing */}
              <div>
                <label className="block text-sm font-medium  dark:text-gray-300 mb-4">
                  Library Timing *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-5 w-5  dark:text-gray-400" />
                      <input
                        type="time"
                        name="timingFrom"
                        value={formData.timingFrom}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3  dark:bg-gray-700 border  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  dark:text-white"
                      />
                      <label className="absolute -top-2 left-4  dark:bg-gray-800 bg-white px-2 text-xs  dark:text-gray-400">
                        From
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3 h-5 w-5  dark:text-gray-400" />
                      <input
                        type="time"
                        name="timingTo"
                        value={formData.timingTo}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3  dark:bg-gray-700 border  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  dark:text-white"
                      />
                      <label className="absolute -top-2 left-4  dark:bg-gray-800 bg-white px-2 text-xs  dark:text-gray-400">
                        To
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Offered */}
              <div>
                <label className="block text-sm font-medium  dark:text-gray-300 mb-4">
                  Services Offered *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {availableServices.map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-4 h-4 text-blue-600  dark:bg-gray-700  dark:border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-sm  dark:text-gray-300">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Membership Fees */}
              {/* <div>
                <label className="block text-sm font-medium t dark:ext-gray-300 mb-2">
                  Membership Fees *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 h-5 w-5  dark:text-gray-400" />
                  <input
                    type="text"
                    name="membershipFees"
                    value={formData.membershipFees}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3  dark:bg-gray-700 border  dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent  dark:text-white placeholder-gray-400"
                    placeholder="e.g., $50/year or Free"
                  />
                </div>
              </div> */}

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600  text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Register Library
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
