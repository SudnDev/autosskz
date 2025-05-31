import { useParams } from "react-router-dom";
import {techItems} from "../../consts/techItems.ts";
import NotFoundPage from "../Errors/NotFoundPage.tsx";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {TechCategory} from "../../types/TechCategory.ts";
import {useModal} from "../../components/OfferModal.tsx";
import { useState } from "react";
import Header from "../../components/utils/Header.tsx";

const TechItemPage = () => {
    const { showModal } = useModal();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [tab, setTab] = useState<'description' | 'specifications' | 'equipment'>('description');
    const { category, itemId } = useParams();

    const techItem = techItems.find((techItem) => techItem.id === itemId);

    if (!techItem) {
        return <NotFoundPage />
    }

    const enumValue = TechCategory[category as keyof typeof TechCategory];

    if (!enumValue || !techItem.category.includes(enumValue)) {
        return <NotFoundPage />;
    }

    const scrollToDetails = () => {
        const section = document.getElementById("details");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="relative min-h-screen">
            <div className="absolute w-full h-full bg-[#DFFFEE]"/>

            <Header />
            <div className="absolute top-[-1.5rem] left-[8rem] w-[124px] h-[124px] bg-white rounded-full clip-left z-100" />
            <div className="absolute top-[-1.5rem] right-[8rem] w-[124px] h-[124px] bg-white rounded-full clip-right z-100" />

            <section className="relative w-full overflow-x-hidden">

                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <a href="/" className="hover:text-orange-500">Главная страница</a>
                        <span>/</span>
                        <a href="/catalog" className="hover:text-orange-500">Каталог техники</a>
                        <span>/</span>
                        <a href={`/catalog/${category}`} className="hover:text-orange-500">{enumValue}</a>
                        <span>/</span>
                        <span className="text-gray-400">{techItem.name}</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8">
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                            {/* Image Gallery */}
                            <div className="space-y-4">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                                    <img
                                        src={techItem.images[currentImageIndex]}
                                        alt={`${String(techItem.id)}.png`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 rounded-lg text-sm">
                                        {currentImageIndex + 1} / {techItem.images.length}
                                    </div>
                                    <button
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                                        onClick={() => setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
                                        onClick={() => setCurrentImageIndex((prev) => prev + 1 < techItem.images.length ? prev + 1 : prev)}
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                                <div className="grid grid-cols-8 gap-2">
                                    {techItem.images.slice(0, 8).map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`aspect-square rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_12px_4px_rgba(96,165,250,0.7)] ${
                                                index === currentImageIndex ? 'shadow-[0_0_12px_4px_rgba(96,165,250,0.7)]' : ''
                                            }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${String(techItem.id)} view ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900">{techItem.name}</h1>
                                    <p className="text-gray-600">{techItem.category[0]}</p>
                                </div>

                                <div className="flex items-start gap-4">
                                    {techItem.tag && (
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium
                                                            ${techItem.tag === 'Новинка' ? 'bg-emerald-500 text-white' :
                                            techItem.tag === 'Акция' ? 'bg-red-500 text-white' :
                                                'bg-yellow-500 text-white'}`}>
                                                            {techItem.tag}
                                                        </span>
                                    )}
                                </div>

                                <div className="bg-[#DFFFEE] rounded-2xl p-6">
                                    <div className="text-3xl font-bold bg-[#DFFFEE] mb-4">
                                        {techItem.price.toLocaleString('RU-ru')} ₽ <span className="text-sm font-normal text-gray-600">с НДС</span>
                                    </div>
                                    <button
                                        onClick={() => showModal(<></>)}
                                        className="relative overflow-hidden max-sm:hidden hover:text-white border-2 border-orange-400 hover:bg-orange-500 font-medium rounded-2xl text-sm px-3 py-1.5 text-center transition-colors duration-300"
                                    >
                                        <span className="relative z-10">Получить предложение</span>
                                        <span className="absolute top-0 left-[-75px] h-full w-[100px] rotate-[35deg] bg-orange-500 opacity-100 pointer-events-none animate-shine z-0" />
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-gray-600">Масса погрузчика:</p>
                                            <p className="font-medium">{techItem.specifications["Масса, кг"]} кг</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Грузоподъёмность (макс.):</p>
                                            <p className="font-medium">{techItem.specifications["Грузоподъемность (макс.), кг"]} кг</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Объём ковша:</p>
                                            <p className="font-medium">{techItem.specifications["Объем ковша, л"]} л</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Мощность двигателя:</p>
                                            <p className="font-medium">{techItem.engine_specifications["Мощность двигателя, л.с."]} л.с.</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Высота разгрузки:</p>
                                            <p className="font-medium">{techItem.specifications["Высота разгрузки, мм"]} мм</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Габаритные размеры (ДxШxВ):</p>
                                            <p className="font-medium">{techItem.specifications["Длина, мм"]}x{techItem.specifications["Ширина, мм"]}x{techItem.specifications["Высота, мм"]} мм</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={scrollToDetails}
                                        className="text-orange-500 hover:text-orange-600 font-medium">
                                        ↓ Подробнее
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative w-full overflow-x-hidden" id="details">
                <div className="container mx-auto px-4 py-8">
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                        <div className="flex gap-4">
                            <button
                                onClick={() => setTab('description')}
                                className={`flex-1 px-4 py-2 text-center font-medium border-b-2 transition-colors ${
                                    tab === 'description'
                                        ? 'text-gray-900 border-orange-500'
                                        : 'text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-200'
                                }`}
                            >
                                Описание
                            </button>
                            <button
                                onClick={() => setTab('specifications')}
                                className={`flex-1 px-4 py-2 text-center font-medium border-b-2 transition-colors ${
                                    tab === 'specifications'
                                        ? 'text-gray-900 border-orange-500'
                                        : 'text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-200'
                                }`}
                            >
                                Характеристики
                            </button>
                            <button
                                onClick={() => setTab('equipment')}
                                className={`flex-1 px-4 py-2 text-center font-medium border-b-2 transition-colors ${
                                    tab === 'equipment'
                                        ? 'text-gray-900 border-orange-500'
                                        : 'text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-200'
                                }`}
                            >
                                Комплектация
                            </button>
                        </div>

                        <div className="container mx-auto px-6 py-8">
                            {tab === 'description' && (
                                <div className="whitespace-pre-wrap">
                                    <span>{techItem.description}</span>
                                </div>
                            )}

                            {tab === 'specifications' && (
                                <div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                                        <h1 className="text-2xl text-gray-700">Общие характеристики</h1><br/>
                                        {Object.entries(techItem.specifications).map(([label, value]) => (
                                            <div key={label} className="flex justify-between border-b py-1">
                                                <span className="font-medium text-gray-700">{label}</span>
                                                <span className="text-gray-900">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-4">
                                        <h1 className="text-2xl text-gray-700">Двигатель</h1><br/>
                                        {Object.entries(techItem.engine_specifications).map(([label, value]) => (
                                            <div key={label} className="flex justify-between border-b py-1">
                                                <span className="font-medium text-gray-700">{label}</span>
                                                <span className="text-gray-900">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {tab === 'equipment' && (
                                <div>
                                    <ul className="space-y-2">
                                        {techItem.equipment.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-blue-500 font-semibold mr-2">{index + 1}.</span>
                                                <span className="font-medium text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TechItemPage;