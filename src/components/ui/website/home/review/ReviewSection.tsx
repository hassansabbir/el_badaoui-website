"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";

type Review = {
  id: string;
  name: string;
  role: string;
  avatar?: string; // optional image URL
  rating: number; // 1-5
  time: string; // e.g., "2 weeks ago"
  title: string;
  text: string;
};

// Fake JSON-like data
const reviews: Review[] = [
  {
    id: "r1",
    name: "John Doe",
    role: "Homeowner",
    rating: 5,
    time: "2 weeks ago",
    title: "Smooth Process",
    text: "Enr Services transformed our outdated kitchen into a modern, functional space. Their team was professional, timely, and delivered exceptional results. We couldn't be happier with the outcome!",
  },
  {
    id: "r2",
    name: "Sarah Johnson",
    role: "Business Owner",
    rating: 5,
    time: "2 weeks ago",
    title: "Amazing Support",
    text: "The experience was seamless from start to finish. Clear communication, great craftsmanship, and attention to detail made a real difference.",
  },
  {
    id: "r3",
    name: "Mike Brown",
    role: "Developer",
    rating: 5,
    time: "2 weeks ago",
    title: "Trusted Platform",
    text: "Reliable service and outstanding results. They delivered on time and exceeded expectations with quality and professionalism.",
  },
  {
    id: "r4",
    name: "Emily Clark",
    role: "Property Manager",
    rating: 5,
    time: "3 weeks ago",
    title: "Highly Recommend",
    text: "Top-notch team. The project was well-managed and the workmanship was excellent. Will definitely work with them again.",
  },
  {
    id: "r5",
    name: "Emily Clark",
    role: "Property Manager",
    rating: 5,
    time: "3 weeks ago",
    title: "Highly Recommend",
    text: "Top-notch team. The project was well-managed and the workmanship was excellent. Will definitely work with them again.",
  },
  {
    id: "r6",
    name: "Sarah Johnson",
    role: "Business Owner",
    rating: 5,
    time: "2 weeks ago",
    title: "Amazing Support",
    text: "The experience was seamless from start to finish. Clear communication, great craftsmanship, and attention to detail made a real difference.",
  },
  {
    id: "r7",
    name: "Mike Brown",
    role: "Developer",
    rating: 5,
    time: "2 weeks ago",
    title: "Trusted Platform",
    text: "Reliable service and outstanding results. They delivered on time and exceeded expectations with quality and professionalism.",
  },
];

const Stars = ({ rating }: { rating: number }) => {
  const total = 5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="rounded-2xl md:h-[270px] bg-white shadow-sm ring-1 ring-black/5 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600">
            {review.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">{review.name}</p>
            <p className="text-xs text-gray-500">{review.role}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-gray-500">{review.time}</span>
          <Stars rating={review.rating} />
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-base font-semibold text-gray-900">
          {review.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {review.text}
        </p>
      </div>
    </div>
  );
};

const ReviewSection = () => {
  return (
    <div className="bg-[#F6F2EE] py-28">
      <div className="flex items-center justify-center text-center mb-10">
        <h1 className="text-3xl font-bold max-w-md">
          What the People Thinks About Us
        </h1>
      </div>
      <div className="px-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 24 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
            1280: { slidesPerView: 4, spaceBetween: 50 },
          }}
          pagination={{ clickable: true, el: ".reviews-pagination" }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.id}>
              <ReviewCard review={r} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="reviews-pagination" />
      </div>
    </div>
  );
};

export default ReviewSection;
