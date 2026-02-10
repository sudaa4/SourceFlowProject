import { useEffect } from "react";

const LoadingPage = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // loading duration (ms)

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#048C7A] text-white relative overflow-hidden">
      
      {/* Decorative circles */}
      <div className="absolute -top-40 -left-32 w-80 h-80 rounded-full bg-[#05AD98] opacity-50 blur-3xl transform rotate-12"></div>
      <div className="absolute -bottom-40 -right-32 w-96 h-96 rounded-full bg-[#FFB347] opacity-50 blur-3xl transform -rotate-6"></div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-3">
          Software Recruitment co.
        </h1>

        <p className="text-sm md:text-base opacity-80 mb-10">
          Connecting talent with the right opportunities
        </p>

        {/* Loader */}
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-[#FFB347] rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-[#FFB347] rounded-full animate-bounce [animation-delay:150ms]"></span>
          <span className="w-3 h-3 bg-[#FFB347] rounded-full animate-bounce [animation-delay:300ms]"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;


