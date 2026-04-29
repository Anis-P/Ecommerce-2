export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    location: "Bandra West, Mumbai",
    rating: 5,
    comment:
      "Vegetables arrive farm-fresh every single morning. Glossary has completely replaced my weekly mandi run. The packaging is sustainable and the delivery is always on time.",
    initials: "PS",
  },
  {
    id: "t2",
    name: "Arjun Mehta",
    location: "Koramangala, Bengaluru",
    rating: 5,
    comment:
      "The quality of the basmati rice and atta is outstanding. Better than my neighbourhood kirana store and the prices are honest. I have been a daily customer for six months.",
    initials: "AM",
  },
  {
    id: "t3",
    name: "Neha Iyer",
    location: "Adyar, Chennai",
    rating: 4,
    comment:
      "Love their dairy section — paneer is super fresh, and the alphonso mangoes during summer were unbeatable. Wish they delivered to a few more pin codes.",
    initials: "NI",
  },
  {
    id: "t4",
    name: "Rahul Khanna",
    location: "Defence Colony, Delhi",
    rating: 5,
    comment:
      "Customer support is excellent. Once a packet was missing and they refunded within minutes — no questions asked. That kind of trust is rare these days.",
    initials: "RK",
  },
];
