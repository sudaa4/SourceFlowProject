import JobCard from "./JobCard";

export default function LatestJobs() {
  return (
    <section className="bg-blue-100 py-20">
      {/* Section title */}
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-14">
        Latest Jobs
      </h2>

      {/* Job cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        <JobCard variant="yellow" />
        <JobCard variant="blue" />
        <JobCard variant="orange" />
      </div>

      {/* View more */}
      <div className="max-w-7xl mx-auto mt-12 px-6 text-right">
        <a
          href="#"
          className="text-blue-900 font-medium hover:underline"
        >
          View more jobs →
        </a>
      </div>
    </section>
  );
}

