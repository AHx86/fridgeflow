export const defaultLeftDays: Record<string, { openBased: boolean; days: number }> = {
    meatProd: { openBased: true, days: 1},
    milkProd: { openBased: true, days:1 },
    vegetablesProd: { openBased: false, days: 4},
    other: {openBased: true, days: 2}
}