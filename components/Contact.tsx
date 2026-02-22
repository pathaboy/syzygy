"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Contact Form",
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

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
        {/* 
        <form onSubmit={handleSubmit} className="mb-12 space-y-6">
          
          <div className="relative">
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Your email"
              className="w-full px-0 py-3 bg-transparent border-b-2 border-foreground/20 focus:border-foreground outline-none transition-all duration-300 text-base placeholder:text-foreground/40 placeholder:text-sm"
            />
          </div>

          
          <div className="relative">
            <textarea
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your message"
              rows={4}
              className="w-full px-0 py-3 bg-transparent border-b-2 border-foreground/20 focus:border-foreground outline-none transition-all duration-300 resize-none text-base placeholder:text-foreground/40 placeholder:text-sm"
            />
          </div>

         
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full py-4 px-6 border-2 border-current rounded-lg font-medium text-sm tracking-wide hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "idle" && "Send Message"}
            {status === "loading" && "Sending..."}
            {status === "success" && "Message Sent ✓"}
            {status === "error" && "Failed. Try Again"}
          </button>
        </form> 
        */}

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

        {/* Call Us */}
        <div className="text-center mt-8">
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
      </div>
    </section>
  );
}
