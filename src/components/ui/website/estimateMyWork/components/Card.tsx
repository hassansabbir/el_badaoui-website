"use client";

import * as React from "react";
import Image from "next/image";

type CardItem = { id: string; title: string; image?: any };

type CardProps = {
  item: CardItem;
  selected?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ item, selected, onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border bg-[#EFF9FF] hover:bg-[#e6f4ff] transition-colors duration-200 overflow-hidden text-left ${
        selected ? "ring-2 ring-blue-600" : "ring-1 ring-black/5"
      }`}
    >
      <div className="relative aspect-[4/3] w-full bg-white">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
      <div className="px-4 py-3">
        <p className="text-center text-sm font-medium text-gray-800">
          {item.title}
        </p>
        {children}
      </div>
    </button>
  );
};

export default Card;
