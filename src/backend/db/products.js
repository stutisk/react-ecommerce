import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title:
    "Kirke by Tiziana Terenzi ",
  brand: "Tiziana Terenzi",
  image:
    "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649930316/download_207x207_d0s8b8.webp",
  price: 371,
  Soldby: "Cloudtail India",
  category: "men",
  rating: 3,
  inStock: true,
 deliverydetails: "FREE delivery: Sunday, April 17"
  },
  {
    _id: uuid(),
    title:
    "Givenchy Blue Label , 120ml",
  brand: "Blue Label",
  image:
    "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649930571/blue-label_bmhp4h.jpg",
  price: 800.00,
  Soldby: "Cloudtail India",
  category: "men & children",
  rating: 4,
  inStock: true,
 deliverydetails: "FREE delivery: Friday, April 15"
  },
  {
    _id: uuid(),
    title:
    "Kenneth Cole Black  - 100 Ml",
  brand: "Kenneth",
  image:
    "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649930095/Kenneth-Cole-Black_295x295_jirxjf.webp",
  price: 14300,
  Soldby: " BGorgeous.",
  category: "men",
  rating: 5,
  inStock: true,
 deliverydetails: "FREE delivery: April 18 - 20"
  },
  {
    _id: uuid(),
    title:
    "Supreme Bouquet ",
  brand: "ROYAL CREED",
  image:
    "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649930571/Yves_Saint_Laurent_LE_VESTIAIRE_SUPREME_BOUQUET_U_001_207x207_wknrld.webp",
  price: 11750,
  Soldby: " Yves Saint Laurent ",
  category: "men",
  rating: 1,
  inStock: true,
 deliverydetails: "FREE delivery: Monday, April 18"
  },
  {
    _id: uuid(),
    title:
    "Tom Ford Velvet Orchid ",
  brand: "Velvet-orchid",
  image:
    "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649933238/velvet-orchid_233x233_il1wt9.jpg",
  price: 1999,
  Soldby: " Royal Creed ",
  category: "women & children",
  rating: 4,
  inStock: true,
 deliverydetails: "FREE delivery: Monday, April 18"
  },
  {
    _id: uuid(),
    title:
    "Viva La Juicy Glacé ",
  brand: "Velvet-orchid",
  image:
    "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649933489/f201_295x295_xrnmlj.webp",
  price: 1599,
  Soldby: " Royal Creed ",
  category: "women",
  rating: 2,
  inStock: true,
 deliverydetails: "FREE delivery: Monday, April 30"
  },

  {
    _id: uuid(),
    title:
    "Chanel Coco Noir ",
  brand: "Velvet-orchid",
  image:
    "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649933720/coco-noir_239x239_borpoj.webp",
  price: 199,
  Soldby: " Royal Creed ",
  category: "women",
  rating: 4.5,
  inStock: true,
 deliverydetails: "FREE delivery: Monday, April 28"
  },

  {
    _id: uuid(),
    title:
    "MiStO set 1 ",
  brand: "Velvet-orchid",
  image:
    "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649934092/set1_lnstup.webp",
  price: 2999,
  Soldby: " Royal Creed ",
  category: "sets",
  rating: 4.5,
  inStock: true,
 deliverydetails: "FREE delivery: Monday, May 1"
  },
  {
    _id: uuid(),
    title:
    "MiStO set 2 ",
  brand: "VaVa",
  image:
    "https://res.cloudinary.com/dvbw8xujd/image/upload/v1649934092/set2_nun7db.webp",
  price: 2555,
  Soldby: " Royal Creed ",
  category: "sets",
  rating: 4.7,
  inStock: true,
 deliverydetails: "FREE delivery: Monday, May 1"
  },



  
  
];