export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        <div>
          <h3 className="font-bold mb-4">Software Recruitment Co.</h3>
          <p className="text-sm opacity-70">
            Connecting top tech talent with industry leaders.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Homepage</li>
            <li>For jobseekers</li>
            <li>For clients</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Sectors</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Software Engineering</li>
            <li>DevOps</li>
            <li>Cloud</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Recruitment</li>
            <li>Consulting</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
