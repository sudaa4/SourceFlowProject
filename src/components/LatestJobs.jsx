import JobCard from "./JobCard";
import jobs from "../data/jobs";

export default function LatestJobs() {
  return (
    <section className="bg-blue-100 py-20">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-14 animate-slideIn">
        Latest Jobs
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}



