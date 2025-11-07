import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import notFoundImage from "@/assets/notFoundImage.png";
import { MoveRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: message */}
          <div>
            <h1 className="text-[120px] leading-none font-semibold text-[#0E81C5]">
              404
            </h1>
            <p className="mt-6 text-lg max-w-sm font-medium text-gray-900">
              We are sorry, but the page you requested was not found
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex gap-3 items-center justify-center rounded-xl bg-[#2941A1] hover:bg-[#2941A1]/90 text-white px-6 py-3 font-semibold shadow-md"
            >
              Back To Home <MoveRight />
            </Link>
          </div>

          {/* Right: image */}
          <div className="relative w-full h-[420px] overflow-hidden rounded-bl-[140px]">
            <Image
              src={notFoundImage}
              alt="Not found"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
