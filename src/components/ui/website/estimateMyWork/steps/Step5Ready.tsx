"use client";

import * as React from "react";

const checklist = [
  "Free estimate, automatically calculated, with no commitment",
  "You can later validate the estimate with a Monsieur Peinture expert.",
  'By clicking on "See my estimate," you agree to our terms and conditions and data protection policy.',
  "Your personal data is protected; we never share it with third parties.",
];

const Step5Ready: React.FC = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [agree, setAgree] = React.useState(true);

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
          Your estimate is ready!
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-gray-600">
          To complete and view your estimate, please fill in the information
          below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#EFF9FF] rounded-2xl py-20 p-6 ring-1 ring-black/5">
        {/* Left checklist */}
        <div className="space-y-6 md:pr-6">
          {checklist.map((item) => (
            <label key={item} className="flex items-start gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="mt-0.5 h-4 w-4 rounded border border-blue-500 accent-blue-600"
              />
              <span className="text-sm text-gray-700">{item}</span>
            </label>
          ))}
        </div>

        {/* Right form */}
        <div className="md:border-l md:border-black/10 md:pl-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border rounded-md px-3 py-2">
              <label className="text-[11px] text-gray-600">First Name*</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 w-full outline-none text-sm"
                placeholder="Ali"
              />
            </div>
            <div className="bg-white border rounded-md px-3 py-2">
              <label className="text-[11px] text-gray-600">Last Name*</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 w-full outline-none text-sm"
                placeholder="Tufan"
              />
            </div>
          </div>
          <div className="mt-3 bg-white border rounded-md px-3 py-2">
            <label className="text-[11px] text-gray-600">Email*</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full outline-none text-sm"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white border rounded-md px-3 py-2">
              <label className="text-[11px] text-gray-600">Postal code*</label>
              <input
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="mt-1 w-full outline-none text-sm"
                placeholder="75001"
              />
            </div>
            <div className="bg-white border rounded-md px-3 py-2">
              <label className="text-[11px] text-gray-600">Phone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full outline-none text-sm"
                placeholder="+90 123 456 789"
              />
            </div>
          </div>
          <div className="mt-3 flex items-start gap-2 text-xs text-gray-700">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 h-4 w-4 text-blue-600"
            />
            <span>
              By continuing, you agree to Enr Services data
              <a href="#" className="text-blue-700 underline ml-1">
                protection policy
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5Ready;
