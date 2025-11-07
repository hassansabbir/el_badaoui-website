import Container from "@/components/layout/Container";
import project1 from "@/assets/home/project1.png";
import project2 from "@/assets/home/project2.png";
import project3 from "@/assets/home/project3.png";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const OurProjects = () => {
  return (
    <div>
      <div className="bg-[#EFF9FF]">
        <Container>
          <div className="pb-40 pt-20 space-y-40">
            <h1 className="text-4xl text-center mb-20 font-bold text-gray-800 my-5">
              Our Projects
            </h1>
            <div className="flex items-center justify-center gap-10 w-full">
              <div className="w-[50%]">
                <h1 className="text-2xl font-bold text-gray-800 my-5">
                  A painting company for your interior and exterior work
                </h1>
                <p className="my-10">
                  Monsieur Peinture is, above all, a painting company. Our core
                  business is painting. To achieve this, we have built a
                  community of the best painters over the years. Thus, we work
                  exclusively with professional, meticulous, careful, and
                  organized painters. Beyond these qualities, we know which
                  types of projects our craftsmen are most skilled and
                  experienced on. Indeed, the skills and techniques vary
                  depending on whether it&apos;s interior painting for a private
                  home, painting large areas in offices, or even a facade
                  renovation. For all your painting projects, we have the
                  solution.
                </p>
                <button className="bg-[#F22542] flex cursor-pointer hover:bg-[#F22542]/80 text-white gap-4 px-4 py-4 rounded-md text-base font-medium transition-colors duration-200 mt-4">
                  Painting quote <MoveRight />
                </button>
              </div>
              <div className="w-[50%]">
                <Image
                  src={project1}
                  alt="Project 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-10 w-full">
              <div className="w-[50%]">
                <Image
                  src={project2}
                  alt="Project 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
                />
              </div>
              <div className="w-[50%]">
                <h1 className="text-2xl font-bold text-gray-800 my-5">
                  Interior painting work
                </h1>
                <p className="my-10">
                  Monsieur Peinture is, above all, a painting company. Our core
                  business is painting. To achieve this, we have built a
                  community of the best painters over the years. Thus, we work
                  exclusively with professional, meticulous, careful, and
                  organized painters. Beyond these qualities, we know which
                  types of projects our craftsmen are most skilled and
                  experienced on. Indeed, the skills and techniques vary
                  depending on whether it&apos;s interior painting for a private
                  home, painting large areas in offices, or even a facade
                  renovation. For all your painting projects, we have the
                  solution.
                </p>
                <button className="bg-[#0E81C5] flex cursor-pointer hover:bg-[#0E81C5]/80 text-white gap-4 px-4 py-4 rounded-md text-base font-medium transition-colors duration-200 mt-4">
                  Renovation quote <MoveRight />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-10 w-full">
              <div className="w-[50%]">
                <h1 className="text-2xl font-bold text-gray-800 my-5">
                  Facade renovation
                </h1>
                <p className="my-10">
                  Monsieur Peinture is, above all, a painting company. Our core
                  business is painting. To achieve this, we have built a
                  community of the best painters over the years. Thus, we work
                  exclusively with professional, meticulous, careful, and
                  organized painters. Beyond these qualities, we know which
                  types of projects our craftsmen are most skilled and
                  experienced on. Indeed, the skills and techniques vary
                  depending on whether it&apos;s interior painting for a private
                  home, painting large areas in offices, or even a facade
                  renovation. For all your painting projects, we have the
                  solution.
                </p>
                <button className="bg-[#F2B705] flex hover:bg-[#F2B705]/80 text-black cursor-pointer gap-4 px-4 py-4 rounded-md text-base font-medium transition-colors duration-200 mt-4">
                  Painting quote <MoveRight />
                </button>
              </div>
              <div className="w-[50%]">
                <Image
                  src={project1}
                  alt="Project 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-10 w-full">
              <div className="w-[50%]">
                <Image
                  src={project1}
                  alt="Project 1"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
                />
              </div>
              <div className="w-[50%]">
                <h1 className="text-2xl font-bold text-gray-800 my-5">
                  A painting company for your interior and exterior work
                </h1>
                <p className="my-10">
                  Monsieur Peinture is, above all, a painting company. Our core
                  business is painting. To achieve this, we have built a
                  community of the best painters over the years. Thus, we work
                  exclusively with professional, meticulous, careful, and
                  organized painters. Beyond these qualities, we know which
                  types of projects our craftsmen are most skilled and
                  experienced on. Indeed, the skills and techniques vary
                  depending on whether it&apos;s interior painting for a private
                  home, painting large areas in offices, or even a facade
                  renovation. For all your painting projects, we have the
                  solution.
                </p>
                <button className="bg-[#AC5FA2] flex cursor-pointer hover:bg-[#AC5FA2]/80 text-white gap-4 px-4 py-4 rounded-md text-base font-medium transition-colors duration-200 mt-4">
                  Painting quote <MoveRight />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="flex items-center my-10 justify-center">
        <button className="bg-[#2941A1] text-center cursor-pointer hover:bg-[#2941A1]/80 text-white gap-4 px-4 py-4 rounded-md text-base font-medium transition-colors duration-200 mt-4">
          Estimate Your Projects
        </button>
      </div>
    </div>
  );
};

export default OurProjects;
