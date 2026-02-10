export default function Hero() {
  return (
    <section
      className="relative text-white py-20 overflow-hidden"
      style={{ backgroundColor: "#BBBFBF" }} // Page background
    >
      {/* Top-left teal circle */}
      <div
        className="absolute -top-32 -left-32 w-64 h-64 rounded-full"
        style={{ backgroundColor: "#05AD98" }}
      ></div>

      {/* Bottom-right warm accent circle */}
      <div
        className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full"
        style={{ backgroundColor: "#FFB347" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left: Search area */}
        <div className="text-center md:text-left">
          <h2 className="text-xl text-[#878787] mb-2">
            Software Recruitment Specialists
          </h2>

          <h1 className="opacity-0 animate-[fadeIn_1.0s_ease-out_forwards] text-4xl font-bold mb-6 text-[#048C7A]">
            Elevate your Career
          </h1>

          <div className="bg-white rounded-lg p-4 flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Search job roles, skills, or companies"
              className="flex-1 px-4 py-2 text-gray-700 outline-none rounded-md fade-up"
              style={{ animationDelay: "0.5s" }} 
            />
            <button
              className="px-6 py-2 rounded-md text-white hover:brightness-110 fade-up"
              style={{ backgroundColor: "#05AD98" , animationDelay: "0.8s"}}
            >
              Search
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
          <img
            src="/hero.jpg" 
            alt="Hero illustration"
            className="w-full max-w-md md:max-w-full rounded-3xl animate-[slideInRight_1.4s_ease-out_forwards]"
          />
        </div>

      </div>
    </section>
  );
}



