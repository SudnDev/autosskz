import React from 'react';
import { TechItem } from "../../types/TechItem.ts";
import { useNavigate } from "react-router-dom";
import { TechCategory } from '../../types/TechCategory.ts';

interface ProductCardProps {
    item: TechItem;
    showModal: (content: React.ReactNode) => void;
}

function getTechCategoryKey(value: string): string | undefined {
    return Object.keys(TechCategory).find(
        key => TechCategory[key as keyof typeof TechCategory] === value
    );
}

const ItemCard: React.FC<ProductCardProps> = ({ item, showModal }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#DFFFEE] rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02]">
            <div className="relative">
                <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                    {item.tag && (
                        <span
                            className={`px-2 py-1 rounded-full text-xs font-medium
              ${
                                item.tag === 'Новинка'
                                    ? 'bg-emerald-500 text-white'
                                    : item.tag === 'Акция'
                                        ? 'bg-red-500 text-white'
                                        : 'bg-yellow-500 text-white'
                            }`}
                        >
              {item.tag}
            </span>
                    )}
                </div>
            </div>

            <div className="p-4">
                <div className="mb-3">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category[0]}</p>
                </div>

                <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Масса, кг:</span>
                        <span className="font-medium">{item.specifications["Масса, кг"]}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Грузоподъемность (макс.), кг:</span>
                        <span className="font-medium">{item.specifications["Грузоподъемность (макс.), кг"]}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Объем ковша, л:</span>
                        <span className="font-medium">{item.specifications["Объем ковша, л"]}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Двигатель:</span>
                        <span className="font-medium">{item.engine_specifications["Тип питания двигателя"]}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    {item.newPrice ? (
                        <>
                            <p className="-mt-2 text-sm line-through text-gray-400">{item.price.toLocaleString('RU-ru')} ₽</p>
                            <p className="-mt-4 text-xl font-bold text-orange-500">{item.newPrice.toLocaleString('RU-ru')} ₽</p>
                        </>
                    ) : (
                        <p className="text-xl font-bold text-gray-900">{item.price.toLocaleString('RU-ru')} ₽</p>
                    )}
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={() => navigate(`/catalog/${getTechCategoryKey(item.category[0])}/${item.id}`)}
                            className="relative overflow-hidden hover:text-black border-2 border-gray-300 hover:border-gray-400 font-medium rounded-2xl text-sm px-3 py-1.5 text-center transition-colors duration-300"
                        >
                            <span className="relative z-10">Подробнее →</span>
                            <span className="absolute top-0 left-[-75px] h-full w-[200px] rotate-[35deg] bg-gray-500 opacity-100 pointer-events-none animate-shine z-0" />
                        </button>
                        <button
                            onClick={() => showModal(<></>)}
                            className=" relative overflow-hidden max-sm:hidden hover:text-black border-2 hover:bg-red-500 border-red-500 hover:border-red-600 font-medium rounded-2xl text-sm px-3 py-1.5 text-center transition-colors duration-300"
                        >
                            <span className="relative z-10">Получить предложение</span>
                            <span className="absolute top-0 left-[-75px] h-full w-[200px] rotate-[35deg] bg-red-600 opacity-100 pointer-events-none animate-shine z-0" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;