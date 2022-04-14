import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men's",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649758945/skkkk_hbfvwm.png",
  },
  {_id: uuid(),
    categoryName: "Women's",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649758945/men_qznkwy.png",
  },
  {
    _id: uuid(),
    categoryName: "Children",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649758945/kids_qe0g4d.png",
  },
  {
    _id: uuid(),
    categoryName: "Sets",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649758945/sets_lo0uj3.png",
  },
  

];