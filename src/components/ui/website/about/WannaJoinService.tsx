import Image from "next/image";
import { ArrowRight } from "lucide-react";
import wannaJoinImage from "@/assets/about/aboutService.png";

const WannaJoinService = () => {
  return (
    <section className="mb-20">
      <div className="relative h-[700px] w-full overflow-hidden">
        <Image
          src={wannaJoinImage}
          alt="Luxurious living room background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-xl w-full text-center rounded-2xl border border-white/30 bg-white/20 backdrop-blur-sm p-8 md:p-10">
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              Wanna join the Enr Services?
            </h2>
            <p className="mt-3 text-white/80 text-sm">
              It is a long established fact will be distracted.
            </p>
            <button className="mt-6 inline-flex items-center cursor-pointer gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 font-medium shadow-md">
              Contact With Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WannaJoinService;
