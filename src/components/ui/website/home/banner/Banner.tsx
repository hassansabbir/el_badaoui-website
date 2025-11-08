import Link from "next/link";
import Container from "@/components/layout/Container";

const Banner = () => {
  return (
    <section className="relative min-h-[calc(100vh-150px)] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/el_badaouiBannerVid.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <Container className="relative py-24 sm:py-32 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Building Excellence, Designing
            <span className="block mt-2">Tomorrow</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl">
            Our team of skilled professionals brings unparalleled expertise and
            passion to every project. With years of experience in the
            construction industry, we are committed to delivering innovative
            solutions, exceptional craftsmanship, and outstanding results.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-yellow-300 text-black px-6 py-3 shadow-[0_10px_0_#1c1c1c] hover:translate-y-[1px] hover:shadow-[0_9px_0_#1c1c1c] transition-transform duration-150"
            >
              <span className="font-medium">Contract Request</span>
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
