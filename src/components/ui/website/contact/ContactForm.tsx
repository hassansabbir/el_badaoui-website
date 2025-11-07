import Container from "@/components/layout/Container";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const ContactForm = () => {
  return (
    <div className="my-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-16">
          {/* Left: form */}
          <form className="lg:col-span-2 flex flex-col h-full">
            <h2 className="text-3xl font-semibold">Get In Touch</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Likewise, a range of activities enriches life, blending vigor with
              balance. The result is a lifestyle that’s not only dynamic but
              also deeply rewarding.
            </p>

            <div className="mt-8 space-y-6 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Ali"
                    className="w-full rounded-xl border-2 border-blue-400 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Tufan"
                    className="w-full rounded-xl border-2 border-blue-400 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="w-full rounded-xl border-2 border-blue-400 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+90 123 456 789"
                    className="w-full rounded-xl border-2 border-blue-400 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  rows={8}
                  className="w-full rounded-xl border-2 border-blue-400 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 rounded-xl cursor-pointer bg-red-500 hover:bg-red-600 text-white px-8 py-4 font-semibold shadow-md w-fit"
            >
              Send Message
            </button>
          </form>

          {/* Right: contact details card */}
          <aside className="rounded-2xl bg-blue-800 hover:shadow-2xl hover:scale-95 hover:transition-all text-white p-8 h-full">
            <h3 className="text-lg font-semibold">Contact details</h3>
            <p className="mt-3 text-white/80 text-sm">
              Likewise, a range of activities enriches life, blending vigor with
              balance. The result is a lifestyle that’s not only dynamic but
              also deeply rewarding.
            </p>

            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-white/80">
                    123 Queensberry Street, North
                  </p>
                  <p className="text-sm text-white/80">
                    Melbourne VIC3051, Australia.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-white/80">ali@boxcars.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-white/80">+76 956 123 456</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-medium">Follow us</p>
              <div className="mt-4 flex items-center gap-4 text-white/90">
                <Facebook className="w-5 h-5" />
                <Twitter className="w-5 h-5" />
                <Instagram className="w-5 h-5" />
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
