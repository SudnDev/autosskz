import { TechCategory } from "./TechCategory.ts";
import { TechTag } from "./TechTag.ts";
import { TechBrand } from "./TechBrand.ts";

export type TechItem = {
    id: string;
    brand: TechBrand;
    name: string;
    tag: TechTag | null;
    price: string;
    newPrice: number | null;
    category: TechCategory[];
    images: string[];
    description: string;
    specifications: Record<string, string | number>;
    engine_specifications: Record<string, string | number>;
    equipment: string[];
};