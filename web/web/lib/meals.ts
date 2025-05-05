import {Meal} from "../types/ifMeals";

export const mealList:Meal[] = [
    {
        id: "1",
        name: "Hähnchen mit Reis",
        ingredients: ["Hähnchenbrust", " Reis", " Brokkoli"],
        imageUrl: "images/chicken-rice.jpg",
        isAlternative: false
    },
    {
        id: "2",
        name: "Spaghetti Bolognese",
        ingredients: ["Spaghetti", "Hackfleisch", "Tomatensauce"],
        imageUrl: "/images/spaghetti.jpg",
        isAlternative: true,
      },
      {
        id: "3",
        name: "Quinoa-Salat",
        ingredients: ["Quinoa", "Paprika", "Gurke", "Olivenöl"],
        imageUrl: "/images/quinoa.jpg",
        isAlternative: true,
      },
]