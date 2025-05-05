import React from "react";
import { mealList } from "../lib/meals";
//import Image from "next/image";


const TodayMealCard = () => {
    const todayMeal = mealList.find((meal: { isAlternative: unknown; }) => !meal.isAlternative);

    if (!todayMeal) return null;

    return(
        <div className = "bg-white rounded-2xl shadow-md p-6 w-full max-w-xl mx-auto mt-8">
            <h2 className="text-xl font-semibold mb-4">Heute geplant</h2>
            
            <div className="text-lg font-medium">{todayMeal.name}</div>
            <div className="text-sm text-gray-600 mb-2">3 von 5 Zutaten vorhanden </div>
            <div className="text-sm">
              <p> <span className="font-semibold">Fehlt:</span> {todayMeal.ingredients}</p>
            </div>
            <div className="mt-2 text-sm text-red-500">Verbraucht 2 Zutaten, die bald ablaufen</div>
        </div>
    )
}

export default TodayMealCard;