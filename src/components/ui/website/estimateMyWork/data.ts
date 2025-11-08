export type CardItem = { id: string; title: string; image?: string };

export const categories: CardItem[] = [
  {
    id: "cat-interior",
    title: "Interior Painting",
    image:
      "https://www.paintcorps.com/wp-content/uploads/2023/03/benefits-of-interior-painting.jpg",
  },
  {
    id: "cat-floor",
    title: "Laying Floor Covering",
    image:
      "https://media.istockphoto.com/id/170040982/photo/installing-hardwood-floor.jpg?s=612x612&w=0&k=20&c=XSl8Z7zlLIyseV1Idv0bTbqLDcA9x-f5VNpdXwEr8rw=",
  },
  {
    id: "cat-renovation",
    title: "Complete Renovation",
    image:
      "https://www.hammercontractors.com/wp-content/uploads/3218-Oliver-St-NW_0041-scaled.jpg",
  },
  {
    id: "cat-facade",
    title: "Facade renovation",
    image:
      "https://s3-ap-southeast-1.amazonaws.com/atap-main/gallery-full/82e4113f-eb12-4a9e-8cf2-69ec98eb2df8/house-facade-renovation-segambut.jpg",
  },
  {
    id: "cat-kitchen",
    title: "Kitchen renovation",
    image:
      "https://www.marthastewart.com/thmb/Tz9bsiwnGaS9_E1SQkDJR9e8TYo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kettle-cove-home-tour-kitchen-02-1219-807b2474519e4ef3ab67674f9bc7f0c1.jpg",
  },
  {
    id: "cat-thermal",
    title: "Thermal insulation",
    image: "https://thermtest.com/wp-content/uploads/thermal-insulation.jpg",
  },
  {
    id: "cat-water",
    title: "Water Damage",
    image: "https://source.unsplash.com/800x600/?water-damage,wall",
  },
  {
    id: "cat-decor",
    title: "Decorative Paint",
    image: "https://source.unsplash.com/800x600/?decorative,paint,wall-art",
  },
  {
    id: "cat-others",
    title: "Others",
    image: "https://source.unsplash.com/800x600/?home,interior",
  },
];

export const subcategories: CardItem[] = [
  {
    id: "room-living",
    title: "Living Room",
    image: "https://source.unsplash.com/800x600/?living-room,interior",
  },
  {
    id: "room-wc",
    title: "WC",
    image: "https://source.unsplash.com/800x600/?toilet,bathroom",
  },
  {
    id: "room-kitchen",
    title: "Kitchen",
    image: "https://source.unsplash.com/800x600/?kitchen,interior",
  },
  {
    id: "room-bathroom",
    title: "Bathroom",
    image: "https://source.unsplash.com/800x600/?bathroom,interior",
  },
  {
    id: "room-corridor",
    title: "Corridor",
    image: "https://source.unsplash.com/800x600/?hallway,corridor",
  },
  {
    id: "room-master",
    title: "Master Bedroom",
    image: "https://source.unsplash.com/800x600/?master-bedroom,interior",
  },
  {
    id: "room-bedroom",
    title: "Bedroom",
    image: "https://source.unsplash.com/800x600/?bedroom,interior",
  },
  {
    id: "room-desk",
    title: "Desk",
    image: "https://source.unsplash.com/800x600/?home-office,desk",
  },
  {
    id: "room-others",
    title: "Others",
    image: "https://source.unsplash.com/800x600/?home,interior",
  },
];

export const elements = [
  "Walls",
  "Ceilings",
  "Doors",
  "Windows",
  "Ground",
  "Others",
];

export const services = [
  { id: "sv-paint", label: "Painting only" },
  { id: "sv-full", label: "Filling + coating + painting" },
];
