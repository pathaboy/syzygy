"use client";
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-foreground/10">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Company Name */}
          <div

            className="flex flex-col items-center md:items-start gap-3"
          >
            <Image src="https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/logo.gif" alt="Logo" width={150} height={100} />
          </div>

          {/* Copyright and Details */}
          <div
            className="text-center md:text-right"
          >
            <p className="text-xs opacity-60 mb-1">
              © {currentYear} Syzygy. All rights reserved.
            </p>
            <p className="text-xs opacity-60">
              Process-Driven Video Post Production
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className="mt-8 pt-8 border-t border-foreground/5 text-center"
        >
          <p className="text-xs opacity-40">Built with precision and care</p>
        </div>
      </div>
    </footer>
  );
}
