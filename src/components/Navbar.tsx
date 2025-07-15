import { useState } from "react";
import { Menu, X } from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useModal} from "./OfferModal.tsx"; // можно заменить на свои иконки

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { showModal } = useModal();

    const mobileBtn =
        "w-full text-base text-gray-800 py-2 border-b border-gray-300 hover:bg-gray-100 transition";

    return (
        <nav className="bg-white shadow-md px-4">
            <button
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {isOpen && (
                <ul className="md:hidden mt-4 space-y-2 font-medium text-center">
                    <button
                        onClick={() => {
                            navigate("/catalog");
                            setIsOpen(false);
                        }}
                        className={mobileBtn}
                    >
                        Каталог техники
                    </button>
                    <button
                        onClick={() => {
                            navigate("/spares");
                            setIsOpen(false);
                        }}
                        className={mobileBtn}
                    >
                        Запчасти для погрузчиков
                    </button>
                    <button
                        onClick={() => {
                            navigate("/service-&-warranty");
                            setIsOpen(false);
                        }}
                        className={mobileBtn}
                    >
                        Сервис и гарантия
                    </button>
                    <button
                        onClick={() => {
                            navigate("/delivery");
                            setIsOpen(false);
                        }}
                        className={mobileBtn}
                    >
                        Доставка
                    </button>
                    <button
                        onClick={() => {
                            navigate("/contacts");
                            setIsOpen(false);
                        }}
                        className={mobileBtn}
                    >
                        Контакты
                    </button>

                    <button
                        onClick={() => showModal(
                            <a
                                href={`https://wa.me/77024487217`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Написать в WhatsApp
                            </a>
                        )}
                        className="relative overflow-hidden hover:text-white border-2 border-orange-400 hover:bg-orange-500 font-medium rounded-2xl text-sm px-3 py-2 text-center transition-colors duration-300 cursor-pointer mb-2"
                    >
                        <span className="relative z-10">Связаться</span>
                        <span className="absolute top-0 left-[-75px] h-full w-[300px] rotate-[35deg] bg-orange-500 opacity-100 pointer-events-none animate-shine z-0" />
                    </button>
                </ul>
            )}
        </nav>
    );
}