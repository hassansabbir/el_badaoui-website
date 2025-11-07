import contactImage from "@/assets/contact/contactImg.png";
import Image from "next/image";
import ContactForm from "./ContactForm";

const ContactMainPage = () => {
  return (
    <div>
      <div className="relative h-[650px] w-full overflow-hidden">
        <Image
          src={contactImage}
          alt="Luxurious living room background"
          fill
          priority
          className="object-cover rounded-bl-[200px]"
        />
        <div className="absolute bg-white px-8 py-7 rounded-2xl -bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className=" text-4xl font-semibold">Contact Us</h1>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMainPage;
