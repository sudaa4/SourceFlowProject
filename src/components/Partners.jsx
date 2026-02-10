import Marquee from "react-fast-marquee";

export default function Partners() {
  const logos = [
    { src: "/microsoft.jpg", alt: "Microsoft Logo", link: "https://www.microsoft.com" },
    { src: "/Oracle.png", alt: "Oracle Logo", link: "https://www.oracle.com/asean/" },
    { src: "/salesforce.png", alt: "Salesforce Logo", link: "https://www.salesforce.com/ap/" },
    { src: "/cloudfare.png", alt: "Cloudflare Logo", link: "https://www.cloudflare.com/" },
    { src: "/vmware.png", alt: "VMWare Logo", link: "https://www.vmware.com" },
    { src: "/Google.png", alt: "Google Logo", link: "https://about.google" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-center text-2xl font-semibold mb-10 text-[#048C7A]">
          Trusted by leading companies
        </h2>

        {/* Desktop marquee */}
        <div className="hidden md:block">
          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            {logos.map((logo, index) => (
              <a
                key={index}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center mx-6 group overflow-visible min-h-[5rem] min-w-[14rem]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto transition-transform duration-300 ease-out transform group-hover:scale-125"
                  style={{ transitionDelay: `${index * 100}ms` }}
                />
              </a>
            ))}
          </Marquee>
        </div>

        {/* Mobile marquee (reverse) */}
        <div className="block md:hidden">
          <Marquee gradient={false} speed={50} pauseOnHover={true} direction="right">
            {logos.map((logo, index) => (
              <a
                key={index}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center justify-center mx-6 group overflow-visible min-h-[5rem] min-w-[14rem]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto transition-transform duration-300 ease-out transform group-hover:scale-125"
                  style={{ transitionDelay: `${index * 100}ms` }}
                />
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}


