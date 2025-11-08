"use client";

import * as React from "react";
import { Pencil, X } from "lucide-react";
import type { CardItem } from "../data";

type Props = {
  elements: string[];
  elementChecks: Record<string, boolean>;
  toggleElement: (label: string) => void;
  projectName: string;
  setProjectName: (v: string) => void;
  // Step 2 selections
  rooms: CardItem[];
  roomCounts: Record<string, number>;
  // legacy props kept for compatibility (not used for inputs here)
  pieceName: string;
  setPieceName: (v: string) => void;
  floorArea: string;
  setFloorArea: (v: string) => void;
};

const Step3Elements: React.FC<Props> = ({
  elements,
  elementChecks,
  toggleElement,
  projectName,
  setProjectName,
  rooms,
  roomCounts,
  pieceName,
  setPieceName,
  floorArea,
  setFloorArea,
}) => {
  const selectedRooms = React.useMemo(() => {
    return rooms.filter((r) => (roomCounts[r.id] ?? 0) > 0);
  }, [rooms, roomCounts]);

  const [roomAreas, setRoomAreas] = React.useState<Record<string, string>>({});
  const [modalRoom, setModalRoom] = React.useState<CardItem | null>(null);
  const [modalValue, setModalValue] = React.useState<string>("");

  const openModal = (room: CardItem) => {
    setModalRoom(room);
    setModalValue(roomAreas[room.id] ?? "");
  };
  const closeModal = () => {
    setModalRoom(null);
    setModalValue("");
  };
  const saveArea = () => {
    if (!modalRoom) return;
    setRoomAreas((prev) => ({ ...prev, [modalRoom.id]: modalValue }));
    closeModal();
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-[#EFF9FF] rounded-2xl p-6 ring-1 ring-black/5">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">Project Name</h3>
          <div className="mt-2 flex items-center gap-2 bg-white border rounded-md px-3 py-2">
            <input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="flex-1 outline-none text-sm"
            />
            <Pencil className="h-4 w-4 text-gray-500" />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-800">
            Pieces Information
          </h3>
          <div className="mt-2 flex flex-col gap-3">
            {selectedRooms.length === 0 && (
              <div className="text-xs text-gray-600">No rooms selected in Step 2.</div>
            )}
            {selectedRooms.map((r) => {
              const count = roomCounts[r.id] ?? 0;
              const area = roomAreas[r.id];
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => openModal(r)}
                  className="flex items-center justify-between bg-white border rounded-md px-3 py-2 text-left cursor-pointer hover:bg-gray-50"
                >
                  <span className="text-sm text-gray-800">{r.title}</span>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-600 px-2 text-xs font-medium text-white">
                      {count}
                    </span>
                    <span className="text-xs text-gray-600">
                      {area ? `${area} m²` : "Set area"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-[#EFF9FF] rounded-2xl p-6 ring-1 ring-black/5">
        <div className="space-y-3">
          {elements.map((el) => (
            <label
              key={el}
              className="flex items-center gap-3 bg-white border rounded-md px-3 py-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={!!elementChecks[el]}
                onChange={() => toggleElement(el)}
                className="h-4 w-4 text-blue-600"
              />
              <span className="text-sm text-gray-800">{el}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Modal for setting floor area */}
      {modalRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={closeModal} />
          <div className="relative z-10 w-full max-w-md rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <h4 className="text-sm font-semibold text-gray-900">
                Set floor area – {modalRoom.title}
              </h4>
              <button
                type="button"
                className="p-1 rounded-md hover:bg-gray-100"
                onClick={closeModal}
                aria-label="Close"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div className="px-5 py-4">
              <label className="text-xs text-gray-700">Floor area (m²)</label>
              <input
                type="number"
                inputMode="decimal"
                step="0.1"
                min={0}
                placeholder="e.g., 25"
                value={modalValue}
                onChange={(e) => setModalValue(e.target.value)}
                className="mt-2 w-full rounded-md border px-3 py-2 text-sm outline-none"
              />
            </div>
            <div className="flex items-center justify-end gap-2 px-5 py-4 border-t">
              <button
                type="button"
                className="rounded-md border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
                onClick={saveArea}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step3Elements;
