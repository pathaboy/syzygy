"use client";

import Image from "next/image";

const founders = [
  {
    name: "Naveen Patha",
    title: "Co-Founder / Brand and Direction",
    image: "/assets/naveen-color.jpg",
    linkedin: "https://www.linkedin.com/in/naveen-patha",
  },
  {
    name: "Priyanshu Srivastava",
    title: "Co-Founder / Design and Post Production",
    image: "/assets/priyanshu-color.jpg",
    linkedin: "https://swarlok.vercel.app",
  },
];

export default function Founders() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">
          The People Behind Syzygy
        </h2>

        {/* Description */}
        <p className="mx-auto mb-16 max-w-xl text-justify text-sm leading-relaxed opacity-80 md:text-base">
          Syzygy was built by{" "}
          <span className="font-semibold">Priyanshu Srivastava</span> and{" "}
          <span className="font-semibold">Naveen Patha</span>. College mates
          turned long-term collaborators, with a combined decade of hands-on
          experience in video editing, post-production workflows, and
          execution-heavy projects. That experience has been streamlined into a
          team built for reliable delivery, quality, and scale.
        </p>

        {/* Founders */}
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group/founder flex flex-col items-center"
            >
              {/* Avatar */}
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${founder.name} LinkedIn`}
              >
                <div className="relative mb-6 h-40 w-40 cursor-pointer transition-transform duration-300 hover:scale-105">
                  {/* 4px Shining Silver Border */}
                  <div
                    className="
                      absolute inset-0 rounded-full
                      border-[2px]
                      border-[#C0C0C0]
                      shadow-[0_0_15px_rgba(192,192,192,0.6),0_0_30px_rgba(192,192,192,0.3)]
                      transition-all duration-500
                      group-hover/founder:shadow-[0_0_25px_rgba(192,192,192,0.8),0_0_45px_rgba(192,192,192,0.5)]
                    "
                  />

                  {/* Image */}
                  <div className="relative h-full w-full rounded-full p-[2px]">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="
                          object-cover
                          grayscale
                          transition-all duration-500
                          group-hover/founder:grayscale-0
                        "
                      />
                    </div>
                  </div>
                </div>
              </a>

              {/* Name */}
              <h3 className="mb-2 text-lg font-semibold md:text-xl">
                {founder.name}
              </h3>

              {/* Title */}
              <p className="text-center text-xs opacity-70 md:text-sm">
                {founder.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
