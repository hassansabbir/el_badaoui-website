"use client";

import Container from "@/components/layout/Container";
import { MoveRight } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e);
  };

  return (
    <section className="py-40">
      <Container>
        <div className="rounded-2xl bg-[#EFF9FF] p-8 sm:p-12 shadow-sm ring-1 ring-black/5">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Creative project? Let&apos;s have
              <span className="block mt-2">a productive talk.</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="mt-12 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="text-sm text-gray-600">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder=""
                  className="mt-2 w-full bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none px-0 py-3 text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-gray-600">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder=""
                  className="mt-2 w-full bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none px-0 py-3 text-gray-900"
                />
              </div>
            </div>

            <div className="mt-10">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Hello, I am interested in.."
                className="w-full bg-transparent border-b border-gray-300 focus:border-blue-500 outline-none px-0 py-3 text-gray-900 placeholder:text-gray-500"
              />
            </div>

            <div className="mt-12 flex items-center justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-3 cursor-pointer rounded-xl bg-[#0E81C5] text-white px-6 py-3 shadow-[0_10px_0_#cde4f5] hover:translate-y-px hover:shadow-[0_9px_0_#cde4f5] transition-transform duration-150"
              >
                <span className="font-medium">Send Now</span>
                <MoveRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
