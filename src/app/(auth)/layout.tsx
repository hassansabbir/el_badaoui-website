import Image from "next/image";
import type { ReactNode } from "react";

import LeftIllustration from "../../assets/auth/LoginPageLeftSideImage.png";
import RightBg from "../../assets/auth/loginPageRightSideBg.png";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left illustration */}
      <div className="hidden md:flex items-center justify-center bg-white">
        <Image
          src={LeftIllustration}
          alt="Authentication illustration"
          className="w-[80%] h-auto"
          priority
        />
      </div>

      {/* Right background with overlay and card slot */}
      <div className="relative flex items-center justify-center p-6 md:p-8">
        <Image
          src={RightBg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

        <div className="relative z-10 w-full max-w-md">
          {/* Each auth page provides its own card content here */}
          {children}
        </div>
      </div>
    </section>
  );
}
