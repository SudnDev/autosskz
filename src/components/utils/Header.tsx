import {useModal} from "../OfferModal.tsx";

function Header() {
    const { showModal } = useModal();

    return (
        <header className="sticky top-0 bg-white flex h-24 z-10000 w-full lg:w-4/5 max-sm:justify-center x-center mx-auto rounded-b-4xl lg:rounded-5xl">

            <div className="grid max-sm:grid-rows-3 grid-rows-2 lg:pl-6 pt-3 max-sm:pt-8 mb-5 w-full">
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between w-full gap-4">
                    <h1
                        className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-400 to-red-700 bg-clip-text text-transparent drop-shadow-lg tracking-wide font-mono animate-pulse"
                        style={{ animationDuration: "15s" }}
                    >
                        Авто Спец Сервис КЗ
                    </h1>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 pr-3">
                        <a className="flex items-center gap-2 max-sm:hidden" href="/public">
                            <img src="/header/email.png" alt="Email" className="w-6 h-6" />
                            <span className="text-gray-700 font-bold text-xl">autospec@service.kz</span>
                        </a>
                        <a className="flex items-center gap-2" href="/public">
                            <img src="/header/phone.png" alt="Phone Number" className="w-6 h-6" />
                            <span className="text-gray-700 font-bold text-xl">8 800 800-80-80</span>
                        </a>
                        <button
                            onClick={() => showModal(<></>)}
                            className="relative overflow-hidden max-sm:hidden hover:text-white border-2 border-orange-400 hover:bg-orange-500 font-medium rounded-2xl text-sm px-3 py-1.5 text-center transition-colors duration-300"
                        >
                            <span className="relative z-10">Заказать звонок</span>
                            <span className="absolute top-0 left-[-75px] h-full w-[100px] rotate-[35deg] bg-orange-500 opacity-100 pointer-events-none animate-shine z-0" />
                        </button>
                    </div>
                </div>

                <div className="mt-1 hidden md:inline-block md:visible">
                    <button className="relative px-6 py-2 text-black text-lg font-medium group">
                        Каталог техники
                        <span
                            className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-85"></span>
                    </button>
                    <button className="relative px-6 py-2 text-black text-lg font-medium group">
                        Запчасти для погрузчиков
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-85"></span>
                    </button>
                    <button className="relative px-6 py-2 text-black text-lg font-medium group">
                        Сервис и гарантия
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-85"></span>
                    </button>
                    <button className="relative px-6 py-2 text-black text-lg font-medium group">
                        Контакты
                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-teal-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-85"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;