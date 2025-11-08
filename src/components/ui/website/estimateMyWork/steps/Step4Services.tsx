"use client";

import * as React from "react";

type Service = { id: string; label: string };

type Props = {
  services: Service[];
  serviceId: string | null;
  setServiceId: (id: string) => void;
  projectName: string;
  pieceName: string;
  floorArea: string;
};

const Step4Services: React.FC<Props> = ({
  services,
  serviceId,
  setServiceId,
  projectName,
  pieceName,
  floorArea,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#EFF9FF] rounded-2xl p-6 ring-1 ring-black/5">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Project Name</h3>
          <div className="mt-2 flex items-center gap-2 bg-white border rounded-md px-3 py-2">
            <input
              value={projectName}
              readOnly
              className="flex-1 outline-none text-sm"
            />
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-800">
            Pieces Information
          </h3>
          <div className="mt-2 flex flex-col gap-3">
            <div className="flex items-center gap-2 bg-white border rounded-md px-3 py-2">
              <input
                value={pieceName}
                readOnly
                className="flex-1 outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-2 bg-white border rounded-md px-3 py-2">
              <input
                value={floorArea}
                readOnly
                className="flex-1 outline-none text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EFF9FF] rounded-2xl p-6 ring-1 ring-black/5">
        <div className="space-y-3">
          {services.map((s) => (
            <label
              key={s.id}
              className={`flex items-center gap-3 bg-white border rounded-md px-3 py-2 cursor-pointer ${
                serviceId === s.id ? "ring-2 ring-blue-600" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={serviceId === s.id}
                onChange={() => setServiceId(s.id)}
                className="h-4 w-4 text-blue-600"
              />
              <span className="text-sm text-gray-800">{s.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step4Services;
