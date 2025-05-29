import { useState } from "react";
import { techItems } from "../consts/techItems.ts";
import { TechBrand } from "../types/TechBrand.ts";
import * as Slider from '@radix-ui/react-slider';
import { Zap, Shield, Wrench, Award } from 'lucide-react';
import MainPageHeroImage from "../components/TiltImage.tsx";
import { useModal } from "../components/OfferModal.tsx";

const MainPage = () => {
    const { showModal } = useModal();

    const itemsPerPage = 4;
    const [page] = useState(0);

    const currentItems = techItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

    const scrollToModels = () => {
        const section = document.getElementById("models");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [weightRange, setWeightRange] = useState([400, 2400]);
    const [volumeRange, setVolumeRange] = useState([200, 1300]);
    const [selectedBrands, setSelectedBrands] = useState({
        [TechBrand.GoodWork]: false,
        [TechBrand.Zvezda]: false,
        [TechBrand.Volna]: false
    });

    const filteredProducts = currentItems.filter(product => {
        const rawWeight = Number(product.specifications["Грузоподъемность (макс.), кг"]);
        const rawVolume = Number(product.specifications["Объем ковша, л"]);

        const matchesWeight = !isNaN(rawWeight) &&
            rawWeight >= weightRange[0] &&
            rawWeight <= weightRange[1];

        const matchesVolume = !isNaN(rawVolume) &&
            rawVolume >= volumeRange[0] &&
            rawVolume <= volumeRange[1];


        const matchesBrand = Object.values(selectedBrands).every(v => !v) ||
            (product.brand == TechBrand.GoodWork  && selectedBrands.GoodWork) ||
            (product.brand == TechBrand.Zvezda && selectedBrands.Zvezda) ||
            (product.brand == TechBrand.Volna && selectedBrands.Volna);

        return matchesWeight && matchesVolume && matchesBrand;
    });

    const heroBlocks = [
        {
            text: "Надёжность на высшем уровне",
            icon: Shield,
            color: "text-orange-500"
        },
        {
            text: "Высокая эффективность работы",
            icon: Zap,
            color: "text-orange-500"
        },
        {
            text: "Проверенное качество деталей",
            icon: Wrench,
            color: "text-orange-500"
        },
        {
            text: "11 лет успешных поставок",
            icon: Award,
            color: "text-orange-500"
        }
    ];

    return (
        <div>
            <section className="relative w-full h-screen overflow-x-hidden -mt-25">
                {/* Фон-картинка */}
                <div
                    style={{ backgroundImage: "url('./mainPage/background.jpg')" }}
                    className="absolute inset-0 w-full h-full bg-cover bg-center blur-md z-0"
                />

                {/* Цветной полупрозрачный слой */}
                <div className="absolute inset-0 w-full h-full bg-[#DFFFEE] opacity-50 z-10" />

                <div className="absolute inset-0 flex justify-center items-center w-full h-full" />

                {/* Контент hero */}
                <div className="relative z-20 container mx-auto px-4 h-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between h-full py-12 gap-8">
                        <div className="w-full lg:w-1/2 text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.4)' }}>
                                Надёжный помощник для вашего бизнеса — по разумной цене
                            </h1>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {heroBlocks.map((block, i) => {
                                    const Icon = block.icon;
                                    return (
                                        <div
                                            key={i}
                                            className="relative rounded-2xl p-4 text-center font-semibold
                                                bg-white/70 backdrop-blur-sm shadow-lg
                                                hover:shadow-orange-500/20 hover:rotate-1
                                                transition-all duration-300 group"
                                        >
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="p-2 rounded-full bg-orange-50 group-hover:bg-orange-100 transition-colors">
                                                    <Icon className={`w-6 h-6 ${block.color} group-hover:rotate-12 transition-transform duration-300`} />
                                                </div>
                                                <span className="text-sm text-gray-700">{block.text}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <button
                                onClick={scrollToModels}
                                className="relative overflow-hidden mt-6 hover:text-white border-2 border-blue-500 hover:bg-blue-500 font-medium rounded-2xl text-base sm:text-lg px-4 py-1.5 text-center active:scale-95 transition-colors duration-300"
                            >
                                <span className="relative z-10">Посмотреть модели</span>
                                <span className="absolute top-0 left-[-150px] h-full w-[200px] rotate-[35deg] bg-blue-500 opacity-100 pointer-events-none animate-shine z-0" />
                            </button>
                        </div>

                        <div className="w-full lg:w-1/2 flex justify-center items-center">
                            <div className="relative w-full max-w-lg">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-600 rounded-2xl blur opacity-30"></div>
                                <MainPageHeroImage />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Мини каталог */}
            <section className="bg-white py-12 md:py-16 inset-3" id="models">
                <div className="relative top-[-100px] sm:top-[-150px] left-0 w-full h-20 sm:h-24 bg-white z-10 clip-path-wave rounded-t-full text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight drop-shadow-lg pt-6 sm:pt-10">
                        Популярная техника
                    </h1>
                    <a href="/" className="inline-block mt-2 px-2.5 py-1.5 relative overflow-hidden hover:text- border-2 border-gray-300 font-medium rounded-3xl text-lg hover:border-orange-500 hover:text-orange-500 text-center active:scale-95 transition-colors duration-300">
                        <span className="relative z-10">Перейти в каталог →</span>
                        <span className="absolute top-0 left-[-150px] h-full w-[200px] rotate-[35deg] bg-gray-300 opacity-100 pointer-events-none animate-shine z-0" />
                    </a>
                </div>

                {/* Фильтры */}
                <div className="mt-8 bg-orange-50/50 rounded-2xl p-6 shadow-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div>
                            <p className="font-medium mb-4 text-gray-700">Грузоподъёмность</p>
                            <div className="px-2">
                                <Slider.Root
                                    className="relative flex items-center select-none touch-none h-5"
                                    value={weightRange}
                                    onValueChange={setWeightRange}
                                    min={400}
                                    max={2400}
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
                                    max={1300}
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

                {/* Карточки товаров */}
                <div className="mt-2 flex justify-center items-center min-h-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <div key={product.id} className="bg-[#F0FBF7] rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
                                <div className="relative">
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        {product.tag && (
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium
                                                        ${product.tag === 'Новинка' ? 'bg-emerald-500 text-white' :
                                                product.tag === 'Акция' ? 'bg-red-500 text-white' :
                                                    'bg-yellow-500 text-white'}`}>
                                                        {product.tag}
                                                    </span>
                                        )}
                                    </div>
                                </div>

                                <div className="p-4">
                                    <div className="mb-3">
                                        <h3 className="text-lg font-bold">{product.name}</h3>
                                        <p className="text-sm text-gray-600">{product.category}</p>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Масса, кг:</span>
                                            <span className="font-medium">{product.specifications["Масса, кг"]}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Грузоподъемность (макс.), кг:</span>
                                            <span className="font-medium">{product.specifications["Грузоподъемность (макс.), кг"]}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Объем ковша, л:</span>
                                            <span className="font-medium">{product.specifications["Объем ковша, л"]}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Двигатель:</span>
                                            <span className="font-medium">{product.engine_specifications["Тип питания двигателя"]}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        {product.newPrice ? (
                                            <>
                                                <p className="-mt-2 text-sm line-through text-gray-400">{product.price.toLocaleString('RU-ru')} ₽</p>
                                                <p className="-mt-4 text-xl font-bold text-orange-500">{product.newPrice.toLocaleString('RU-ru')} ₽</p>
                                            </>
                                        ) : (
                                            <p className="text-xl font-bold text-gray-900">{product.price.toLocaleString('RU-ru')} ₽</p>
                                        )}
                                        <div className="grid grid-cols-2 gap-2">
                                            <button
                                                type="button"
                                                className="relative overflow-hidden max-sm:hidden hover:text-black border-2 border-gray-300 hover:border-gray-400 font-medium rounded-2xl text-sm px-3 py-1.5 text-center transition-colors duration-300"
                                            >
                                                <span className="relative z-10">Подробнее →</span>
                                                <span className="absolute top-0 left-[-75px] h-full w-[100px] rotate-[35deg] bg-gray-500 opacity-100 pointer-events-none animate-shine z-0" />
                                            </button>
                                            <button
                                                onClick={() => showModal(<></>)}
                                                className="relative overflow-hidden max-sm:hidden hover:text-black border-2 hover:bg-red-500 border-red-500 hover:border-red-600 font-medium rounded-2xl text-sm px-3 py-1.5 text-center transition-colors duration-300"
                                            >
                                                <span className="relative z-10">Получить предложение</span>
                                                <span className="absolute top-0 left-[-75px] h-full w-[100px] rotate-[35deg] bg-red-600 opacity-100 pointer-events-none animate-shine z-0" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainPage;