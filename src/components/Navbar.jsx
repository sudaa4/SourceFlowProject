export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-8 py-4 flex items-center justify-between">
      
      {/* Company name */}
      <div className="text-xl font-bold text-blue-600">
        Software Recruitment co. 
      </div>

      {/* Navigation links */}
    <ul className="flex items-center gap-6 text-gray-700">
    {["For jobseekers", "For Clients", "Sectors", "Resources"].map((item) => (
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
    ))}
    </ul>


      {/* Action buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
          Upload CV
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </nav>
  );
}