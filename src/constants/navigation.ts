import { NavItem, SocialLink, FooterSection } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];

export const footerSections: FooterSection[] = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Estimate Work", href: "/estimate-work" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Location", href: "/location" },
    ],
  },
  // {
  //   title: "Services",
  //   links: [
  //     { label: "Web Development", href: "/services/web-development" },
  //     { label: "Mobile Apps", href: "/services/mobile-apps" },
  //     { label: "UI/UX Design", href: "/services/design" },
  //     { label: "Consulting", href: "/services/consulting" },
  //   ],
  // },
  {
    title: "Contact",
    links: [
      { label: "55 East Birchwood Ave. Mohakhali, Dhaka 1212", href: "" },
      { label: "contact@ibrahim.com", href: "" },
      { label: "(123) 456 - 7890", href: "" },
    ],
  },
];
