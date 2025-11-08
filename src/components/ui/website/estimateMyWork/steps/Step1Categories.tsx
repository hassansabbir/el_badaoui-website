"use client";

import * as React from "react";
import Card from "../components/Card";
import { CardItem } from "../data";

type Props = {
  categories: CardItem[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

const Step1Categories: React.FC<Props> = ({ categories, selectedId, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((c) => (
        <Card
          key={c.id}
          item={c}
          selected={selectedId === c.id}
          onClick={() => onSelect(c.id)}
        />
      ))}
    </div>
  );
};

export default Step1Categories;