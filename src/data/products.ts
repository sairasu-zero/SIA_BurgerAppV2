import crispyChicken from '../assets/crispy-chicken.png'
import ultimateBacon from '../assets/ultimate-bacon.jpg'
import blackSheep from '../assets/black-sheep.jpg'
import veganBurger from '../assets/vegan-burger.jpg'

export interface Product {
  id: number
  name: string
  description: string
  rating: number
  image: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Crispy Chicken",
    description: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    image: crispyChicken
  },
  {
    id: 2,
    name: "Ultimate Bacon",
    description: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    image: ultimateBacon
  },
  {
    id: 3,
    name: "Black Sheep",
    description: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    image: blackSheep
  },
  {
    id: 4,
    name: "Vegan Burger",
    description: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    image: veganBurger
  }
]