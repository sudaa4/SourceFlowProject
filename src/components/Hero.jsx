export default function Hero() {
  return (
    <section
      className="relative text-white py-20 overflow-hidden"
      style={{ backgroundColor: "#064EA4" }} // Page background
    >
      {/* Top-left pink circle */}
      <div
        className="absolute -top-32 -left-32 w-64 h-64 rounded-full"
        style={{ backgroundColor: "#F99D76" }}
      ></div>

      {/* Bottom-right yellow circle */}
      <div
        className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full"
        style={{ backgroundColor: "#FCDF69" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-2 items-center gap-10">
        
        {/* Left: Search area */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Elevate your Career
          </h1>

          <div className="bg-white rounded-lg p-4 flex">
            <input
              type="text"
              placeholder="Search job roles, skills, or companies"
              className="flex-1 px-4 py-2 text-gray-700 outline-none"
            />
            <button
              className="px-6 py-2 rounded-md text-white hover:brightness-110"
              style={{ backgroundColor: "#FCDF69" }}
            >
              Search
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div>
          <img
            src="src\assets\2a5555ba9e7463bd63b976b8b0101bf9fc4e0467.jpg" 
            alt="Hero illustration"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
}

