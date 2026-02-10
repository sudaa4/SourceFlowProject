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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left: Search area */}
        <div className="text-center md:text-left">
          <h2 className="text-xl text-gray-300 mb-2">
            Software Recruitment Specialists
          </h2>

          <h1 className="text-5xl font-bold text-white mb-6 animate-fadeUp">
            Elevate your Career
          </h1>

          <div className="bg-white rounded-lg p-4 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search job roles, skills, or companies"
              className="flex-1 px-4 py-2 text-gray-700 outline-none rounded-md"
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
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src="src/assets/2a5555ba9e7463bd63b976b8b0101bf9fc4e0467.jpg" 
            alt="Hero illustration"
            className="w-full max-w-md md:max-w-full rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
}


