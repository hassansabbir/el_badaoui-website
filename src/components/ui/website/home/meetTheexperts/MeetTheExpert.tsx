import Container from "@/components/layout/Container";
import Image from "next/image";

import expert1 from "@/assets/home/expert1.png";
import expert2 from "@/assets/home/expert2.png";
import expert3 from "@/assets/home/expert3.png";

type Expert = {
  id: string;
  name: string;
  role: string;
  photo: any;
};

const experts: Expert[] = [
  {
    id: "e1",
    name: "John Smith",
    role: "Senior Project Manager",
    photo: expert1,
  },
  { id: "e2", name: "Emily Davis", role: "Lead Architect", photo: expert2 },
  {
    id: "e3",
    name: "Michael Thompson",
    role: "Construction Specialist",
    photo: expert3,
  },
];

const MeetTheExpert = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Meet the Enr Experts
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Our team of skilled professionals brings unparalleled expertise and
            passion to every project. With years of experience in the
            construction industry, we are committed to delivering innovative
            solutions, exceptional craftsmanship, and outstanding results.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((e) => (
            <div
              key={e.id}
              className="rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="h-96 w-full">
                <Image
                  src={e.photo}
                  alt={`${e.name} portrait`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="px-6 py-5 text-center">
                <p className="text-lg font-semibold text-gray-900">{e.name}</p>
                <p className="text-sm text-gray-500">{e.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MeetTheExpert;
