import React, {useState} from "react";
import { TechItem } from "../../types/TechItem.ts";
import Header from "../utils/Header.tsx";
import AnimatedDetails from "./Details/AnimatedDetails.tsx";
import {useModal} from "../OfferModal.tsx";
import ItemCard from "./ItemCard.tsx";
import * as Slider from "@radix-ui/react-slider";
import {TechBrand} from "../../types/TechBrand.ts";
import Footer from "../utils/Footer.tsx";

type TechListProps = {
    items: TechItem[];
    categoryName: string;
};

const TechList: React.FC<TechListProps> = ({ items, categoryName }) => {
    const { showModal } = useModal();

    const [weightRange, setWeightRange] = useState([400, 3000]);
    const [volumeRange, setVolumeRange] = useState([200, 2000]);
    const [selectedBrands, setSelectedBrands] = useState({
        [TechBrand.GoodWork]: false,
        [TechBrand.Zvezda]: false,
        [TechBrand.Volna]: false,
        [TechBrand.Iskra]: false
    });

    const filteredProducts = items.filter(item => {
        const rawWeight = Number(item.specifications["Грузоподъемность (макс.), кг"]);
        const rawVolume = Number(item.specifications["Объем ковша, л"]);

        const matchesWeight = !isNaN(rawWeight) &&
            rawWeight >= weightRange[0] &&
            rawWeight <= weightRange[1];

        const matchesVolume = !isNaN(rawVolume) &&
            rawVolume >= volumeRange[0] &&
            rawVolume <= volumeRange[1];


        const matchesBrand = Object.values(selectedBrands).every(v => !v) ||
            (item.brand == TechBrand.GoodWork  && selectedBrands.GoodWork) ||
            (item.brand == TechBrand.Zvezda && selectedBrands.Zvezda) ||
            (item.brand == TechBrand.Volna && selectedBrands.Volna) ||
            (item.brand == TechBrand.Iskra && selectedBrands.Iskra);

        return matchesWeight && matchesVolume && matchesBrand;
    });

    return (
        <div className="relative min-h-screen">
            <div className="absolute w-full h-full bg-[#DFFFEE]"/>

            <Header />
            <div className="absolute top-[-1.5rem] left-[8rem] w-[124px] h-[124px] bg-white rounded-full clip-left z-100" />
            <div className="absolute top-[-1.5rem] right-[8rem] w-[124px] h-[124px] bg-white rounded-full clip-right z-100" />

            <div className={`min-h-screen flex flex-wrap items-stretch p-4 gap-4 justify-center`}>
                <div className="relative container flex-1 min-w-[300px] max-w-[300px]">
                    <div className="lg:min-h-screen bg-white rounded-3xl shadow-lg overflow-hidden px-4 py-8">
                        <AnimatedDetails label="Разделы">
                            <div className="bg-orange-50 p-3 rounded-md w-64">
                                <div className="text-base font-semibold text-black mb-2">
                                    <a
                                        href="/catalog"
                                        className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Все погрузчики</a>
                                </div>

                                <div className="text-base font-semibold text-black mb-2">
                                    <a
                                        href="/catalog/FRONT_LOADER"
                                        className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Фронтальные погрузчики</a>
                                </div>

                                <div className="mb-2">
                                    <span className="inline-block bg-orange-500 text-xs text-black font-semibold px-2 py-0.5 rounded mb-1">
                                        Размер:
                                    </span>
                                    <ul className="ml-4 text-sm">
                                        <li><a
                                            href="/catalog/FRONT_LOADER_MINI"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            - Мини-погрузчики</a></li>
                                        <li><a
                                            href="/catalog/FRONT_LOADER_UNIVERSAL"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            - Универсальные</a></li>
                                        <li><a
                                            href="/catalog/FRONT_LOADER_GREAT"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            - Большие</a></li>
                                    </ul>
                                </div>

                                <div className="mb-2">
                                    <span className="inline-block bg-orange-500 text-xs text-black font-semibold px-2 py-0.5 rounded mb-1">
                                        Грузоподъемность:
                                    </span>
                                    <ul className="ml-4 text-sm text-black">
                                        <li><a
                                            href="/catalog/FRONT_LOADER_1_TON"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            - 1 тонна</a></li>
                                        <li><a
                                            href="/catalog/FRONT_LOADER_2_TON"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            - 2 тонны</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <span className="inline-block bg-orange-500 text-xs text-black font-semibold px-2 py-0.5 rounded mb-1">Объем ковша:</span>
                                    <ul className="ml-4 text-sm text-black">
                                        <li><a
                                            href="/catalog/FRONT_LOADER_1M3"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            - Ковш 1 м3</a></li>
                                    </ul>
                                </div>

                                <div className="text-base font-semibold text-black mt-2">
                                    <a
                                        href="/catalog/TELESCOPIC_HANDLER"
                                        className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Телескопические погрузчики</a>
                                </div>

                                <div className="text-base font-semibold text-black mt-2">
                                    <a
                                        href="/catalog/BACKHOE_LOADER"
                                        className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        Эскаватор-погрузчики
                                    </a>
                                </div>

                                <div>
                                    <span className="inline-block bg-orange-500 text-xs text-black font-semibold px-2 py-0.5 rounded mt-3">Подборки:</span>
                                    <ul className="ml-1 text-sm text-black">
                                        <li><a
                                            href="/catalog/MINI_LOADER"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            Мини-погрузчики</a></li>
                                        <li><a
                                            href="/catalog/DIESEL_LOADER"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            Дизельные погрузчики</a></li>
                                        <li><a
                                            href="/catalog/BATTERY_POWERED_LOADER"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            Аккумуляторные погрузчики</a></li>
                                        <li><a
                                            href="/catalog/CONSTRUCTIONAL_LOADER"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            Строительные погрузчики</a></li>
                                        <li><a
                                            href="/catalog/AGRICULTURAL_LOADER"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            Сельхоз погрузчики</a></li>
                                        <li><a
                                            href="/catalog/FOREST_LOADER"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            Погрузчики для леса</a></li>
                                        <li><a
                                            href="/catalog/SNOW_LOADER"
                                            className="relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-24"
                                        >
                                            Погрузчики для снега</a></li>
                                    </ul>
                                </div>
                            </div>
                        </AnimatedDetails>
                        <AnimatedDetails label="Фильтры">
                            <div className="bg-orange-50 p-3 rounded-md w-64">
                                <div className="grid grid-cols-1 gap-6">
                                    <div>
                                        <p className="font-medium mb-4 text-gray-700">Грузоподъёмность</p>
                                        <div className="px-2">
                                            <Slider.Root
                                                className="relative flex items-center select-none touch-none h-5"
                                                value={weightRange}
                                                onValueChange={setWeightRange}
                                                min={400}
                                                max={3000}
                                                step={50}
                                            >
                                                <Slider.Track className="bg-orange-200 border-1 border-orange-900 relative grow rounded-full h-2">
                                                    <Slider.Range className="absolute bg-orange-500 rounded-full h-full" />
                                                </Slider.Track>
                                                <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-orange-500 rounded-full hover:bg-orange-50 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-orange-500" />
                                                <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-orange-500 rounded-full hover:bg-orange-50 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-orange-500" />
                                            </Slider.Root>
                                            <div className="flex justify-between mt-2 text-sm text-gray-600">
                                                <span>{weightRange[0]} кг</span>
                                                <span>{weightRange[1]} кг</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-medium mb-4 text-gray-700">Объём ковша</p>
                                        <div className="px-2">
                                            <Slider.Root
                                                className="relative flex items-center select-none touch-none h-5"
                                                value={volumeRange}
                                                onValueChange={setVolumeRange}
                                                min={200}
                                                max={2000}
                                                step={50}
                                            >
                                                <Slider.Track className="bg-orange-200 border-1 border-orange-900 relative grow rounded-full h-2">
                                                    <Slider.Range className="absolute bg-orange-500 rounded-full h-full" />
                                                </Slider.Track>
                                                <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-orange-500 rounded-full hover:bg-orange-50 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-orange-500" />
                                                <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-orange-500 rounded-full hover:bg-orange-50 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-orange-500" />
                                            </Slider.Root>
                                            <div className="flex justify-between mt-2 text-sm text-gray-600">
                                                <span>{volumeRange[0]} л</span>
                                                <span>{volumeRange[1]} л</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-medium mb-4 text-gray-700">Бренд</p>
                                        <div className="space-y-2">
                                            {Object.entries(selectedBrands).map(([brand, checked]) => (
                                                <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                                                    <div className="relative w-5 h-5">
                                                        <input
                                                            type="checkbox"
                                                            checked={checked}
                                                            onChange={() => setSelectedBrands(prev => ({
                                                                ...prev,
                                                                [brand as keyof typeof prev]: !prev[brand as keyof typeof prev]
                                                            }))}
                                                            className="peer absolute opacity-0 w-5 h-5"
                                                        />
                                                        <div className="w-5 h-5 border-2 border-orange-500 rounded transition-colors peer-checked:bg-orange-500 peer-checked:border-orange-500" />
                                                        <div className="absolute top-1/2 left-1/2 w-3 h-1 border-2 border-white border-t-0 border-r-0 rotate-[-45deg] opacity-0 peer-checked:opacity-100 transform -translate-x-1/2 -translate-y-1/2" />
                                                    </div>
                                                    <span className="text-sm text-gray-700 group-hover:text-orange-600 transition-colors">{brand}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedDetails>
                    </div>
                </div>

                <div className="relative container flex-[3] min-w-[300px] min-h-screen">
                    <div className="lg:min-h-screen bg-white rounded-3xl shadow-lg overflow-hidden px-4 py-8">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4 tracking-wide">
                            {categoryName}
                        </h1>
                        <div className="mt-2 flex justify-center items-center min-h-100">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {filteredProducts.map(item => (
                                    <ItemCard key={item.id} item={item} showModal={showModal} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-gray-100" id="footer">
                <Footer />
            </section>
        </div>
    );
};

export default TechList;
