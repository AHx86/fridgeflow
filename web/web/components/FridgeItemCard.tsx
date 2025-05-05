"use client";

import React, {useState} from "react";
import {FridgeItem} from "../types/ifFridgeItem";
import {defaultLeftDays} from "../lib/defaultLeftDays";

const FridgeItemCard: React.FC<FridgeItem> = ({
    name,
    boughtAt,
    openedAt: initialOpenedAt,
    category
}) => {
    const [openedAt, setOpenedAt] = useState<string | undefined>(initialOpenedAt);
    
    // Fallback: Standardhaltbarkeit, falls keine gesetzt ist
    const shelfLifeInfo = defaultLeftDays[category];

    if (!shelfLifeInfo) {
        console.warn(`Keine Haltbarkeitsinfo für Kategorie "${category}" gefunden.`);
        return null; // oder setze einen Standardwert
      }
      
    const days = shelfLifeInfo.days;
    const baseDate = openedAt? new Date(openedAt) : new Date(boughtAt);
    const expiryDate = new Date(baseDate);
    expiryDate.setDate(baseDate.getDate() + days);

    const now = new Date();
    const remainingDays = Math.ceil((expiryDate.getTime() - now.getTime()) /(1000 * 60 * 60 * 24));

    const handleOpen: () => void = () => {
        const today = new Date().toISOString().split("T")[0];
        setOpenedAt(today);
    };
    return(
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-md mx-auto mt-4">
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-sm text-gray-600">🛒 Gekauft am: {boughtAt}</p>
    {openedAt ? (
      <>
        <p className="text-sm text-gray-600">📂 Geöffnet am: {openedAt}</p>
        <p className={`text-sm ${remainingDays <= 1 ? "text-red-600" : "text-green-600"}`}>
          ⏱️ Noch {remainingDays} {remainingDays === 1 ? "Tag" : "Tage"} haltbar
        </p>
      </>
    ) : (
      <button
        onClick={handleOpen}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
      >
        Öffnen
      </button>
    )}
  </div>
);
}

export default FridgeItemCard;
