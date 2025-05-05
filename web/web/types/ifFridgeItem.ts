export interface FridgeItem {
    name: string;
    quantity: number;       // Anzahl
    unit: string;           // stk/kg
    boughtAt: string;       // ISO-Datum
    openedAt?: string;      // Falls geöffnet
    leftDays?: number;      // Haltbarkeit ab Kaufdatum
    category: "meatProd" | "milkProd" | "vegetablesProd" | "others"
}