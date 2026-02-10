const variants = {
  yellow: "bg-yellow-300 text-blue-900",
  blue: "bg-blue-800 text-white",
  orange: "bg-orange-300 text-blue-900",
};

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition">
      <h3 className="text-xl font-bold text-blue-900 mb-2 
  transition-colors duration-300
  group-hover:text-blue-700">
        {job.title}
      </h3>

      <p className="text-sm text-gray-500 mb-4">
        {job.type} • {job.location}
      </p>

      <p className="text-gray-600 mb-4">
        {job.description}
      </p>

      <p className="font-semibold text-blue-800">
        {job.salary}
      </p>
    </div>
  );
}


