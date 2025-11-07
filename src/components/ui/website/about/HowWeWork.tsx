import Image from "next/image";
import image1 from "@/assets/about/about1.png";
import image2 from "@/assets/about/about2.png";
import image3 from "@/assets/about/about3.png";
import image4 from "@/assets/about/about4.png";

import icon1 from "@/assets/about/icon1.png";
import icon2 from "@/assets/about/icon2.png";
import icon3 from "@/assets/about/icon3.png";
import icon4 from "@/assets/about/icon4.png";

const steps = [
  {
    number: "01",
    title: "Concept & Details",
    description:
      "It is a long established fact will be distracted. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: image1,
    icon: icon1,
  },
  {
    number: "02",
    title: "Idea for Work",
    description:
      "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.",
    image: image2,
    icon: icon2,
  },
  {
    number: "03",
    title: "Design",
    description:
      "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.",
    image: image3,
    icon: icon3,
  },
  {
    number: "04",
    title: "Perfection",
    description:
      "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.",
    image: image4,
    icon: icon4,
  },
];

const HowWeWork = () => {
  return (
    <div className="px-[15%]">
      <section className="w-full bg-[#eef6fb] py-16 md:py-24 rounded-[40px] overflow-hidden shadow-sm">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
              How We Work
            </h2>
            <p className="mt-3 text-xs md:text-sm text-gray-600 max-w-2xl mx-auto">
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>

          <div className="space-y-10 md:space-y-16">
            {steps.map((step, idx) => {
              const isImageLeft = idx % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center"
                >
                  {/* Left column */}
                  {isImageLeft ? (
                    <div className="order-1">
                      <div className="overflow-hidden rounded-tl-[40px] rounded-br-[40px] bg-white shadow-sm">
                        <Image
                          width={867868500}
                          height={868666500}
                          src={step.image}
                          alt={`${step.title} image`}
                          className="w-[600px] h-[400px] object-cover"
                          placeholder="empty"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="order-1">
                      <div className="max-w-sm">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <Image
                            width={867868500}
                            height={868666500}
                            src={step.icon}
                            alt="icon"
                            className="w-14 h-14"
                          />
                          <span className="text-3xl md:text-4xl font-semibold text-gray-800">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-xs md:text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Right column */}
                  {isImageLeft ? (
                    <div className="order-2">
                      <div className="max-w-sm md:ml-auto">
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <Image
                            width={867868500}
                            height={868666500}
                            src={step.icon}
                            alt="icon"
                            className="w-14 h-14"
                          />
                          <span className="text-3xl md:text-4xl font-semibold text-gray-800">
                            {step.number}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-xs md:text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="order-2">
                      <div className="overflow-hidden rounded-tl-[40px] rounded-br-[40px] bg-white shadow-sm md:ml-auto">
                        <Image
                          width={867868500}
                          height={868666500}
                          src={step.image}
                          alt={`${step.title} image`}
                          className="w-[600px] h-[400px] object-cover"
                          placeholder="empty"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="my-10 flex items-center justify-center">
        <button className="bg-[#0e77b4] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0a69a3] transition-colors duration-200">
          Estimate Your Project
        </button>
      </div>
    </div>
  );
};

export default HowWeWork;
