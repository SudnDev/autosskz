import { useParams } from 'react-router-dom';
import TechList from "../../components/Catalog/TechList.tsx";
import { techItems } from "../../consts/techItems.ts";
import { TechCategory } from "../../types/TechCategory.ts";

const CatalogPage = () => {
    const { category } = useParams();

    const categoryEnumValue = TechCategory[category as keyof typeof TechCategory];

    const filteredItems = techItems.filter(item => item.category.includes(categoryEnumValue));

    return <TechList items={filteredItems} categoryName={categoryEnumValue} />;
};

export default CatalogPage;