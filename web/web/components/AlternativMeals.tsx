import React from 'react';
import {mealList} from "../lib/meals";
//import Image from 'next/image';

const AlterNativeMealsCard = () => {
    const altMeals = mealList.filter((meal) => meal.isAlternative);
    if(altMeals.length === 0) return null;

  return (
    <div className="mt-10 w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Alternative Vorschläge</h2>
      <div className="space-y-4">
        {altMeals.map((meal, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-4 flex items-center">
     
            <div>
              <div className="text-md font-semibold">{meal.name}</div>
              <div className="text-sm text-gray-600">
                <p>Nutzt: {meal.ingredients.join(', ')}</p>
              </div>
              <div className="text-xs text-red-500 mt-1">
                <p>Zutaten laufen bald ab</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlterNativeMealsCard;