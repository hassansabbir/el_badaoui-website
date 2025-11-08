"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import Card from "../components/Card";
import { CardItem } from "../data";

type Props = {
  rooms: CardItem[];
  roomCounts: Record<string, number>;
  onInc: (id: string) => void;
  onDec: (id: string) => void;
};

const Step2Rooms: React.FC<Props> = ({ rooms, roomCounts, onInc, onDec }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {rooms.map((r) => {
        const count = roomCounts[r.id] ?? 0;
        return (
          <Card key={r.id} item={r}>
            <div className="mt-3 flex items-center justify-center gap-3">
              <button
                type="button"
                className="h-7 w-7 flex items-center justify-center cursor-pointer rounded-md border bg-white text-gray-700 hover:bg-gray-50"
                onClick={() => onDec(r.id)}
                aria-label={`Decrease ${r.title}`}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm font-medium">{count}</span>
              <button
                type="button"
                className="h-7 w-7 flex items-center justify-center cursor-pointer rounded-md border bg-white text-gray-700 hover:bg-gray-50"
                onClick={() => onInc(r.id)}
                aria-label={`Increase ${r.title}`}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Step2Rooms;
