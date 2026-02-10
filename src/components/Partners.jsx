export default function Partners() {
  const logos = [
    {
      src: "public/microsoft.jpg",
      alt: "Microsoft Logo",
      link: "https://www.microsoft.com", // redirect link
    },
    {
      src: "public/Oracle.png",
      alt: "Oracle Logo",
      link: "https://www.oracle.com/asean/",
    },
    {
      src: "public/salesforce.png",
      alt: "salesforce Logo",
      link: "https://www.salesforce.com/ap/",
    },
    {
      src: "public/cloudfare.png",
      alt: "Cloudflare Logo",
      link: "https://www.cloudflare.com/",
    },
    {
      src: "public/vmware.png",
      alt: "Company 5 Logo",
      link: "https://www.vmware.com",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-center text-2xl font-semibold mb-10">
          Trusted by leading companies
        </h2>

        {/* Horizontal scroll container */}
        <div className="flex space-x-8 overflow-x-auto scrollbar-hide py-4">
          {logos.map((logo, index) => (
            <a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 h-16 w-48 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 w-auto transition-transform duration-300 hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

