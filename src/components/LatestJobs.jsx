import JobCard from "./JobCard";
import jobs from "../data/jobs";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";


export default function LatestJobs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-[#BBBFBF] py-20 fade-up">
      <h2 className="text-4xl font-bold text-center text-[#048C7A] mb-14">
        Latest Jobs
      </h2>
      <div 
      ref={sectionRef}
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 ">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      {/* Find more jobs button */}
      <div className="mt-16 flex justify-center">
        <button className="group flex items-center gap-2 bg-[#05AD98] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#048C7A] transition">
          Find more jobs
          <ArrowRight
            size={20}
            className="transform transition group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>
  );
}



