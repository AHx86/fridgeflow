export interface Meal{
    id:string;
    name:string;
    ingredients:string[];
    imageUrl?:string;
    isAlternative:boolean;
}