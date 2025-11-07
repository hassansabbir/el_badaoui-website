import Container from "@/components/layout/Container";

type StatItem = { value: number; label: string };

const stats: StatItem[] = [
  { value: 20, label: "Years Of Experience" },
  { value: 85, label: "Success Project" },
  { value: 15, label: "Active Project" },
  { value: 95, label: "Happy Customers" },
];

const HomeStates = () => {
  return (
    <section className="bg-[#F22542] text-white py-16">
      <Container>
        <div className="flex items-center justify-center">
          <div className="flex flex-col md:flex-row md:divide-x md:divide-white/30">
            {stats.map((s, idx) => (
              <div key={s.label} className="px-10 py-6 text-center">
                <div className="text-5xl font-semibold">{s.value}</div>
                <div className="mt-3 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeStates;
