"use client";

import Link from "next/link";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Image from "next/image";
import Cta from "./Cta";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group">
          <Image
            src="https://pub-b9db762600a24cd2a50cb385dae41ff9.r2.dev/syzygy/logo.gif"
            alt="Logo"
            width={200}
            height={150}
            className="grayscale max-sm:w-[150px]"
          />
        </Link>

        {/* Right side: Theme Toggle + CTA */}
        <div className="flex items-center gap-4">
          <AnimatedThemeToggler />
          <Cta />
        </div>
      </div>
    </header>
  );
}
