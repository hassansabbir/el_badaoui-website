"use client";

import * as React from "react";

const titles = [
  "Select a category",
  "In which rooms do you want to perform this service?",
  "What are the elements to paint?",
  "What service for the walls?",
];
const subtitles = [
  "Choose the type of project you need.",
  "Kindly provide the total surface area of the parquet flooring to be restored.",
  "Kindly provide the total square footage of the walls to be painted.",
  "Kindly provide the total square footage of the walls to be painted.",
];

const StepHeader: React.FC<{ step: number }> = ({ step }) => {
  return (
    <div className="relative mb-10">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
          {titles[step - 1]}
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-gray-600">
          {subtitles[step - 1]}
        </p>
      </div>
      <div className="absolute right-0 top-0">
        <div className="w-10 h-10 rounded-full border-2 border-blue-600 text-blue-600 flex items-center justify-center text-xs font-semibold">
          {step}/4
        </div>
      </div>
    </div>
  );
};

export default StepHeader;