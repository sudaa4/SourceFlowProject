const variants = {
  yellow: "bg-yellow-300 text-blue-900",
  blue: "bg-blue-800 text-white",
  orange: "bg-orange-300 text-blue-900",
};

export default function JobCard({ variant }) {
  return (
    <div
      className={`rounded-3xl p-8 flex flex-col justify-between min-h-[420px] ${variants[variant]}`}
    >
      {/* Top content */}
      <div>
        <span className="inline-flex items-center gap-1 bg-white/80 text-xs px-3 py-1 rounded-full mb-4">
          🐍 Python
        </span>

        <h3 className="text-2xl font-bold mb-4">
          Software Engineer
        </h3>

        <ul className="space-y-2 text-sm mb-6">
          <li className="flex items-center gap-2">📍 London</li>
          <li className="flex items-center gap-2">💰 £65,000</li>
        </ul>

        <p className="text-sm opacity-80 leading-relaxed">
          Odio mi amet commodo convallis nunc. Tincidunt
          mauris eu egestas eget in aliquam.
        </p>
      </div>

      {/* Bottom content */}
      <div>
        <button className="w-full bg-white text-blue-800 py-3 rounded-full font-semibold mt-8 hover:bg-gray-100 transition">
          View this job
        </button>

        <p className="text-xs mt-4 opacity-70">
          Posted on 29/08/2023
        </p>
      </div>
    </div>
  );
}

