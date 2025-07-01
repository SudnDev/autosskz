import { useModal } from "../OfferModal.tsx";
import { useNavigate } from "react-router-dom";

function Header() {
    const { showModal } = useModal();

    const navigate = useNavigate();

    return (
        <header className="sticky top-0 bg-white flex h-24 z-10000 w-full lg:w-4/5 max-sm:justify-center x-center mx-auto rounded-b-4xl lg:rounded-5xl">

            <div className="grid max-sm:grid-rows-3 grid-rows-2 lg:pl-6 pt-3 max-sm:pt-8 mb-5 w-full">
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between w-full gap-4">
                    <a href="/">
                        <img
                            src="/header/logo.png"
                            alt="Авто Спец Сервис КЗ"
                            className="h-9 mt-2 lg:h-14 drop-shadow-lg"
                            style={{ animationDuration: "15s" }}
                        />
                    </a>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 pr-3">
                        <a className="flex items-center gap-2 max-lg:hidden" href="mailto:avtospetsserviskz@yandex.kz" target="_blank">
                            <img src="/header/email.png" alt="Email" className="w-6 h-6" />
                            <span className="text-gray-700 font-bold text-xl">avtospetsserviskz@yandex.kz</span>
                        </a>
                        <a className="flex items-center gap-2" href="tel:+77024487217" target="_blank">
                            <img src="/header/phone.png" alt="Phone Number" className="w-6 h-6" />
                            <span className="text-gray-700 font-bold text-xl">+7 702 448 7217</span>
                        </a>
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
                            className="relative overflow-hidden max-sm:hidden hover:text-white border-2 border-orange-400 hover:bg-orange-500 font-medium rounded-2xl text-sm px-3 py-1.5 text-center transition-colors duration-300 cursor-pointer"
                        >
                            <span className="relative z-10">Связаться</span>
                            <span className="absolute top-0 left-[-75px] h-full w-[100px] rotate-[35deg] bg-orange-500 opacity-100 pointer-events-none animate-shine z-0" />
                        </button>
                    </div>
                </div>

                <div className="mt-1 hidden lg:inline-block">
                    <button className="relative px-6 py-2 text-black text-lg font-medium group cursor-pointer">
                        Каталог техники
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-85"></span>
                    </button>
                    <button className="relative px-6 py-2 text-black text-lg font-medium group cursor-pointer">
                        Запчасти для погрузчиков
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-85"></span>
                    </button>
                    <button className="relative px-6 py-2 text-black text-lg font-medium group cursor-pointer">
                        Сервис и гарантия
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-85"></span>
                    </button>
                    <button className="relative px-6 py-2 text-black text-lg font-medium group cursor-pointer">
                        Доставка
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-85"></span>
                    </button>
                    <button
                        onClick={() => navigate("/contacts")}
                        className="relative px-6 py-2 text-black text-lg font-medium group cursor-pointer"
                    >
                        Контакты
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-85"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;