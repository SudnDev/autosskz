import TechList from "../../components/Catalog/TechList.tsx";
import {techItems} from "../../consts/techItems.ts";

const AllCatalogPage = () => {
    return <TechList items={techItems} categoryName={"Каталог техники"} />;
};


export default AllCatalogPage;