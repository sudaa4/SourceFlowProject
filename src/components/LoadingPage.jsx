import { useEffect } from "react";

const LoadingPage = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // loading duration (ms)

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#064EA4] text-white relative overflow-hidden">
      
      {/* Decorative circles */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#F99D76] opacity-80"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#FCDF69] opacity-90"></div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-3">
          SourceFlow
        </h1>

        <p className="text-sm md:text-base opacity-80 mb-10">
          Connecting talent with the right opportunities
        </p>

        {/* Loader */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-[#FCDF69] rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-[#FCDF69] rounded-full animate-bounce [animation-delay:150ms]"></span>
          <span className="w-3 h-3 bg-[#FCDF69] rounded-full animate-bounce [animation-delay:300ms]"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
