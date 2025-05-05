// app/fridge/page.tsx
import React from "react";
import FridgeItemCard from "../../../components/FridgeItemCard"; // Pfad ggf. anpassen
import { fridgeItem } from "../../../lib/fridgeItems";

const FridgePage = () => {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kühlschrank</h1>
      {fridgeItem.map((item, index) => (
        <FridgeItemCard key={index} {...item} />
      ))}
    </main>
  );
};

export default FridgePage;
