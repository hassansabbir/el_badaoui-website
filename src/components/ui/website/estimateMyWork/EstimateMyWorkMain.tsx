"use client";

import * as React from "react";
import Container from "@/components/layout/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StepHeader from "./components/StepHeader";
import Step1Categories from "./steps/Step1Categories";
import Step2Rooms from "./steps/Step2Rooms";
import Step3Elements from "./steps/Step3Elements";
import Step4Services from "./steps/Step4Services";
import Step5Ready from "./steps/Step5Ready";
import { categories, subcategories, elements, services } from "./data";

const EstimateMyWorkMain = () => {
  const [step, setStep] = React.useState(1);
  const [categoryId, setCategoryId] = React.useState<string | null>(null);
  const [roomCounts, setRoomCounts] = React.useState<Record<string, number>>(
    {}
  );
  const [projectName, setProjectName] = React.useState("New project");
  const [pieceName, setPieceName] = React.useState("Living room");
  const [floorArea, setFloorArea] = React.useState("250 m²");
  const [elementChecks, setElementChecks] = React.useState<
    Record<string, boolean>
  >({});
  const [serviceId, setServiceId] = React.useState<string | null>(null);

  const next = () => setStep((s) => Math.min(5, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const toggleElement = (label: string) => {
    setElementChecks((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const incRoom = (id: string) => {
    setRoomCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };
  const decRoom = (id: string) => {
    setRoomCounts((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] ?? 0) - 1),
    }));
  };

  return (
    <section className="py-14">
      <Container>
        {step <= 4 && <StepHeader step={step} />}

        {/* Step content */}
        {step === 1 && (
          <Step1Categories
            categories={categories}
            selectedId={categoryId}
            onSelect={setCategoryId}
          />
        )}

        {step === 2 && (
          <Step2Rooms
            rooms={subcategories}
            roomCounts={roomCounts}
            onInc={incRoom}
            onDec={decRoom}
          />
        )}

        {step === 3 && (
          <Step3Elements
            elements={elements}
            elementChecks={elementChecks}
            toggleElement={toggleElement}
            projectName={projectName}
            setProjectName={setProjectName}
            rooms={subcategories}
            roomCounts={roomCounts}
            pieceName={pieceName}
            setPieceName={setPieceName}
            floorArea={floorArea}
            setFloorArea={setFloorArea}
          />
        )}

        {step === 4 && (
          <Step4Services
            services={services}
            serviceId={serviceId}
            setServiceId={(id) => setServiceId(id)}
            projectName={projectName}
            pieceName={pieceName}
            floorArea={floorArea}
          />
        )}

        {step === 5 && <Step5Ready />}

        {/* Navigation */}
        {step <= 4 ? (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              disabled={step === 1}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border bg-white text-gray-800 disabled:opacity-50"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex items-center cursor-pointer gap-2 px-6 py-3 rounded-md bg-[#2941A1] text-white hover:bg-[#2941A1]/90"
            >
              Continue
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="mt-10 flex items-center justify-center">
            <button
              type="button"
              className="px-8 py-3 rounded-md cursor-pointer bg-[#2941A1] text-white hover:bg-[#2941A1]/90"
              onClick={() => {
                // Placeholder: submit or navigate
                console.log("See My Estimate clicked");
              }}
            >
              See My Estimate
            </button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default EstimateMyWorkMain;
