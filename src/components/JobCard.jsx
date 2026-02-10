export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition">
      <h3 className="text-xl font-bold text-[#048C7A] mb-2 transition-colors duration-300 group-hover:text-[#05AD98]">
        {job.title}
      </h3>

      <p className="text-sm text-[#878787] mb-4">
        {job.type} • {job.location}
      </p>

      <p className="text-[#878787] mb-4">
        {job.description}
      </p>

      <p className="font-semibold text-[#05AD98]">
        {job.salary}
      </p>
    </div>
  );
}


