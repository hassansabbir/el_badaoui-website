import aboutBanner from "@/assets/about/luxurious-living-room.jpg";
import Container from "@/components/layout/Container";
import Image from "next/image";

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

const AboutBannerAndTitle = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={aboutBanner}
          alt="About Us Banner"
          width={9771200}
          height={9797600}
          className="w-full h-[700px] rounded-bl-[200px] object-cover"
        />
        <div className="absolute -bottom-28 rounded-t-3xl bg-white p-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold">
          <h1>About Us</h1>
        </div>
      </div>

      <Container>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

export default AboutBannerAndTitle;
