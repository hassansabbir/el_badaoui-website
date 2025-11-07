import Container from "@/components/layout/Container";
import FloatingHeading from "./FloatingHeading";

const featureItems = [
  {
    title: "Interior Work",
    desc: "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Project Plan",
    desc: "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
  {
    title: "Realization",
    desc: "There are many variations of the passages of lorem Ipsum from available, majority.",
  },
];

const EstimateYourWorkMain = () => {
  return (
    <div className="my-10 mb-20">
      <Container>
        <div className="relative">
          <FloatingHeading />
        </div>

        <div className="bg-orange-50 p-4 rounded-2xl max-w-2xl mx-auto">
          <p className="text-center text-lg rounded-lg sm:text-xl bg-white p-7 font-medium text-gray-700">
            Get a quick idea of how much your plumbing project may cost before
            booking a service. Just select the type of work, enter a few
            details, and our estimator.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <button className="bg-[#F22542] hover:bg-[#F22542]/80 text-white block px-4 py-4 rounded-md text-base font-medium transition-colors duration-200 mt-2">
            Estimate Your Work
          </button>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureItems.map((item) => (
            <div key={item.title}>
              <div
                className={`rounded-2xl shadow-[0_8px_0_#e5e7eb] border bg-gray-50 border-gray-100 hover:bg-[#0E81C5] hover:text-white transition-colors duration-200 h-64 w-full flex items-center justify-center text-center p-8`}
              >
                <div>
                  <h3 className={`text-xl font-semibold`}>{item.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed`}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default EstimateYourWorkMain;
