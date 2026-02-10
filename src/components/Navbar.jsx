import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#048C7A] shadow-sm px-4 sm:px-8 py-4 flex items-center justify-between relative">
      
      {/* Company name */}
      <div className="text-xl font-bold text-white">
        Software Recruitment co. 
      </div>

      {/* Hamburger button (mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-white"
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
        <ul className="flex items-center gap-6 text-white">
          {["For jobseekers", "For Clients", "Sectors", "Resources"].map(
            (item) => (
              <li
                key={item}
                className="group flex items-center gap-1 cursor-pointer hover:text-[#05AD98] transition"
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
          <button className="px-4 py-2 border border-[#05AD98] text-white font-bold rounded transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#05AD98]">
            Upload CV
          </button>
          <button className="bg-[#05AD98] hover:bg-[#048C7A] text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#048C7A] shadow-md md:hidden z-10 flex flex-col gap-4 p-4">
          <ul className="flex flex-col gap-4 text-white">
            {["For jobseekers", "For Clients", "Sectors", "Resources"].map(
              (item) => (
                <li
                  key={item}
                  className="flex items-center gap-1 cursor-pointer hover:text-[#05AD98] transition font-bold"
                >
                  <span className="font-bold">{item}</span>
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
            <button className="px-4 py-2 bg-[#05AD98] text-white rounded-md hover:bg-[#048C7A] w-full">
              Upload CV
            </button>
            <button className="px-4 py-2 bg-[#05AD98] text-white rounded-md hover:bg-[#048C7A] w-full">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
