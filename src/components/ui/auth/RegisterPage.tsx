"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import Logo from "@/assets/auth/loginLogo.png";

const RegisterPage: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl ring-1 ring-white/30 p-6 sm:p-8">
      <div className="mb-6 text-center">
        <div className="mb-3 flex justify-center">
          <Image
            width={98989797}
            height={98989797}
            src={Logo}
            alt="Enr Services"
            className="h-auto w-[130px]"
          />
        </div>
        <h2 className="text-2xl font-semibold text-white">Create an account</h2>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <label className="text-xs text-white">Name*</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your  name"
          className="w-full rounded-full bg-white/90 px-4 py-3 text-sm outline-none ring-1 ring-white/40 placeholder:text-gray-400"
        />
      </div>

      {/* Email */}
      <div className="mt-4 space-y-2">
        <label className="text-xs text-white">Email*</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-full bg-white/90 px-4 py-3 text-sm outline-none ring-1 ring-white/40 placeholder:text-gray-400"
        />
      </div>

      {/* Password */}
      <div className="mt-4 space-y-2">
        <label className="text-xs text-white">Password*</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            className="w-full rounded-full bg-white/90 px-4 py-3 pr-10 text-sm outline-none ring-1 ring-white/40 placeholder:text-gray-400"
          />
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-gray-600 hover:bg-white"
          >
            {/* Eye icon inline */}
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.12.186-2.196.525-3.2M21.475 7A9.97 9.97 0 0122 9c0 5.523-4.477 10-10 10-.695 0-1.372-.069-2.025-.2M3 3l18 18M14.121 14.121A3 3 0 119.879 9.879"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.25 12s3.75-6.75 9.75-6.75 9.75 6.75 9.75 6.75-3.75 6.75-9.75 6.75S2.25 12 2.25 12z"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
        <p className="text-[10px] text-white/80">
          Must be at least 8 characters.
        </p>
      </div>

      {/* Confirm Password */}
      <div className="mt-4 space-y-2">
        <label className="text-xs text-white">Confirm Password*</label>
        <div className="relative">
          <input
            type={showConfirm ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Create a password"
            className="w-full rounded-full bg-white/90 px-4 py-3 pr-10 text-sm outline-none ring-1 ring-white/40 placeholder:text-gray-400"
          />
          <button
            type="button"
            aria-label={showConfirm ? "Hide password" : "Show password"}
            onClick={() => setShowConfirm((v) => !v)}
            className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-gray-600 hover:bg-white"
          >
            {showConfirm ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.12.186-2.196.525-3.2M21.475 7A9.97 9.97 0 0122 9c0 5.523-4.477 10-10 10-.695 0-1.372-.069-2.025-.2M3 3l18 18M14.121 14.121A3 3 0 119.879 9.879"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.25 12s3.75-6.75 9.75-6.75 9.75 6.75 9.75 6.75-3.75 6.75-9.75 6.75S2.25 12 2.25 12z"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
        <p className="text-[10px] text-white/80">
          Must be at least 8 characters.
        </p>
      </div>

      {/* Sign up button */}
      <button
        type="button"
        className="mt-5 w-full rounded-full bg-[#2941A1] cursor-pointer px-4 py-3 text-sm font-medium text-white shadow-md hover:bg-[#2941A1]/90"
      >
        Sign Up
      </button>

      {/* Google sign up */}
      <button
        type="button"
        className="mt-3 w-full rounded-full cursor-pointer bg-white/90 px-4 py-3 text-sm text-gray-800 ring-1 ring-white/40 hover:bg-white"
      >
        <span className="inline-flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="h-4 w-4"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.651,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.847,1.158,7.963,3.042l5.657-5.657C33.31,6.053,28.883,4,24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20C44,22.651,43.86,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.814C14.655,16.157,19.004,13,24,13c3.059,0,5.847,1.158,7.963,3.042l5.657-5.657C33.31,6.053,28.883,4,24,4C16.318,4,9.795,8.335,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.217,0,9.852-1.997,13.389-5.257l-6.164-5.208C29.127,35.985,26.715,37,24,37c-5.205,0-9.619-3.317-11.285-7.946l-6.492 5.005C9.693,39.556,16.327,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.711,2.005-1.965,3.742-3.697,5.033l6.164,5.208C39.982,35.833,44,30.352,44,24C44,22.651,43.86,21.35,43.611,20.083z"
            />
          </svg>
          Sign up with Google
        </span>
      </button>

      {/* Footer link */}
      <p className="mt-3 text-center text-xs text-white/80">
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;
