import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-4 sm:px-8 py-4 flex items-center justify-between relative">
      
      {/* Company name */}
      <div className="text-xl font-bold text-blue-600">
        Software Recruitment co. 
      </div>

      {/* Hamburger button (mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation links & buttons (desktop) */}
      <div className="hidden md:flex md:items-center md:gap-6">
        <ul className="flex items-center gap-6 text-gray-700">
          {["For jobseekers", "For Clients", "Sectors", "Resources"].map(
            (item) => (
              <li
                key={item}
                className="group flex items-center gap-1 cursor-pointer hover:text-blue-600 transition"
              >
                <span>{item}</span>
                <svg
                  className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </li>
            )
          )}
        </ul>

        <div className="flex gap-4">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded transition duration-300 ease-in-out transform hover:scale-105">
            Upload CV
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-10 flex flex-col gap-4 p-4">
          <ul className="flex flex-col gap-4 text-gray-700">
            {["For jobseekers", "For Clients", "Sectors", "Resources"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition"
                >
                  <span>{item}</span>
                  <svg
                    className="w-3 h-3 mt-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </li>
              )
            )}
          </ul>

          <div className="flex flex-col gap-2 mt-2">
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 w-full">
              Upload CV
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 w-full">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
