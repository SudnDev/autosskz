import { useParams } from "react-router-dom";
import {techItems} from "../../consts/techItems.ts";
import NotFoundPage from "../Errors/NotFoundPage.tsx";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {TechCategory} from "../../types/TechCategory.ts";
import {useModal} from "../../components/OfferModal.tsx";
import { useState } from "react";

const TechItemPage = () => {
    const { showModal } = useModal();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { category, itemId } = useParams();

    const techItem = techItems.find((techItem) => techItem.id === itemId);

    if (!techItem) {
        return <NotFoundPage />
    }

    const enumValue = TechCategory[category as keyof typeof TechCategory];

    if (!enumValue || !techItem.category.includes(enumValue)) {
        return <NotFoundPage />;
    }

    return (
        <div className="min-h-screen bg-[#DFFFEE]/20">
            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                    <a href="/" className="hover:text-orange-500">Главная страница</a>
                    <span>/</span>
                    <a href="/catalog" className="hover:text-orange-500">Каталог техники</a>
                    <span>/</span>
                    <a href={`/catalog/${category}`} className="hover:text-orange-500">{techItem.category}</a>
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
                                        onClick={() => setCurrentImageIndex(index)} // 👈 добавляем обработчик
                                        className={`aspect-square rounded-lg overflow-hidden ${
                                            index === currentImageIndex ? 'ring-2 ring-orange-500' : ''
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
                                <p className="text-gray-600">{techItem.category}</p>
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

                            <div className="bg-[#DFFFEE]/30 rounded-2xl p-6">
                                <div className="text-3xl font-bold text-gray-900 mb-4">
                                    {techItem.price.toLocaleString('RU-ru')} ₽ <span className="text-sm font-normal text-gray-600">с НДС</span>
                                </div>
                                <button
                                    className="w-full bg-orange-500 text-white rounded-xl py-3 font-medium hover:bg-orange-600 transition-colors"
                                    onClick={() => showModal(<></>)}
                                >
                                    Получить предложение
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
                                <button className="text-orange-500 hover:text-orange-600 font-medium">
                                    ↓ Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechItemPage;