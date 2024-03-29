import { Product } from "./product";
import { Content } from '@angular/compiler/src/render3/r3_ast';

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Grooming', price: 60, desc: ' Our Grooming package includes a trim, wash, blowdry and pawdicure. Book now to avoid disappointment', img: '../../../content/images/Grooming.jpg' },
  { id: 2, name: 'Facial', price: 30, desc: 'Pamper your pooch with one of our facials. Choose from Peanut Butter Delight, Gravy Goddess or Banana Surprise', img: '../../../content/images/Facial.jpg'},
  { id: 3, name: 'Pawdicure', price: 20, desc: 'All four paws will have their nails cut, filed and polished in a colour of your choice. Add nail art for those special occasions!', img: '../../../content/images/Pawdicure.jpg'},
  { id: 4, name: 'Massage', price: 20, desc: 'Give them a taste of luxury with our massage for their temple, behind the ear and under their chin as well as their back', img: '../../../content/images/Massage.jpg'}
];
