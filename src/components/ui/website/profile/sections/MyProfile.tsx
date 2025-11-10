"use client";
import { useState } from "react";

export default function MyProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      address,
      postalCode,
      city,
    };
    console.log("Profile saved", payload);
    // Integrate API call here when backend is ready
  };

  const baseInput =
    "w-full bg-transparent border-b border-yellow-300 py-2 outline-none focus:border-yellow-400";
  const labelText = "text-xs text-gray-500 mb-2";

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Your personal information
      </h2>

      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* First Name */}
        <div>
          <p className={labelText}>First Name</p>
          <input
            className={baseInput}
            placeholder="Give Your First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        {/* Last Name */}
        <div>
          <p className={labelText}>Last Name</p>
          <input
            className={baseInput}
            placeholder="Give Your Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <p className={labelText}>Email</p>
          <input
            className={baseInput}
            placeholder="Give Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone */}
        <div>
          <p className={labelText}>Phone</p>
          <input
            className={baseInput}
            placeholder="Give Your Phone Number"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Address */}
        <div>
          <p className={labelText}>Address</p>
          <input
            className={baseInput}
            placeholder="Give Your Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Code postal */}
        <div>
          <p className={labelText}>Code postal</p>
          <input
            className={baseInput}
            placeholder="Give Your Postal Code"
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>

        {/* City */}
        <div>
          <p className={labelText}>City</p>
          <input
            className={baseInput}
            placeholder="Give Your City"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-[#F22542] text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
