export default function Contact() {

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com/syzygy.teams" },
    { name: "Twitter", url: "https://x.com/syzygy_teams" },
    { name: "Linkedin", url: "https://www.linkedin.com/company/syzygystudio" },
    {
      name: "Whatsapp",
      url: "https://wa.me/919175342316?text=Hi%2C%20saw%20your%20website%20and%20was%20curious%20about%20how%20Syzygy%20can%20help%20me%20in%20Content%20and%20Editing.%20Could%20you%20share%20some%20details%3F",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 border-t border-foreground/10"
    >
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
          Get in Touch
        </h2>

        {/* Description */}
        <p className="text-center text-sm md:text-base opacity-80 mb-12">
          For inquiries related to video post production, samples, or workflow
          alignment.
        </p>

        {/* Email Display */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-wider opacity-60 mb-2">
            Email to
          </p>
          <a
            href="mailto:syzygy.teams@gmail.com"
            className="text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300"
          >
            syzygy.teams@gmail.com
          </a>
        </div>
        {/* Call Us */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-wider opacity-60 mb-2">
            Or Call Us At
          </p>
          <a
            href="tel:+919175342316"
            className="text-lg md:text-xl font-medium hover:opacity-70 transition-opacity duration-300"
          >
            +91 91753 42316
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-foreground/20 mb-12" />

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium opacity-70 hover:opacity-100 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
