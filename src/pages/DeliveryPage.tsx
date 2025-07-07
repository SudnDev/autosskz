import Header from "../components/utils/Header.tsx";
import Footer from "../components/utils/Footer.tsx";
import {useModal} from "../components/OfferModal.tsx";

const DeliveryPage = () => {
    const { showModal } = useModal();

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">

            <Header />

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                <div className="text-sm text-gray-600">
                    <a href="/" className="hover:text-blue-600 transition-colors">Главная страница</a>
                    <span className="mx-2">/</span>
                    <span className="text-gray-800">Доставка</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 pb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Доставка</h1>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg font-semibold text-gray-800 mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">🚚 Доставка по всей территории Казахстана</h1>

                    <div className="space-y-6 text-gray-700 text-lg">
                        <p>
                            Мы обеспечиваем быструю и надежную доставку всей техники по всей территории Республики Казахстан.
                        </p>

                        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">🔹 Отгрузка со склада в Караганде</h2>
                            <p>Вся техника находится на нашем складе в г. Караганда, откуда она оперативно отправляется в любой регион страны.</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">🔹 Доставка в любую точку РК</h2>
                            <p>Мы сотрудничаем с проверенными транспортными компаниями и организуем доставку по городам, посёлкам и отдалённым районам Казахстана.</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">🔹 Гибкие условия и сроки</h2>
                            <p>Сроки и стоимость доставки зависят от вашего региона. Мы подбираем оптимальные маршруты и предложим наиболее выгодные условия.</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">🔹 Помощь на каждом этапе</h2>
                            <p>Наши специалисты проконсультируют вас по всем вопросам, связанным с доставкой, помогут выбрать удобный способ транспортировки и предоставят всю необходимую информацию.</p>
                        </div>

                        <div className="mt-10 bg-blue-50 border border-blue-200 p-6 rounded-2xl text-center">
                            <p className="text-xl font-medium text-blue-900">
                                📦 Хотите узнать стоимость и сроки доставки в ваш регион?
                            </p>
                            <p className="mt-2 text-blue-800">Свяжитесь с нами — мы с радостью вас проконсультируем.</p>

                            {/* КНОПКА СВЯЗИ */}
                            <div className="mt-6 flex justify-center">
                                <button
                                    onClick={() =>
                                        showModal(
                                            <a
                                                href={`https://wa.me/77024487217`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                            >
                                                Написать в WhatsApp
                                            </a>
                                        )
                                    }
                                    className="relative overflow-hidden hover:text-white border-2 border-blue-400 hover:bg-blue-500 font-medium rounded-2xl text-sm px-6 py-2 text-center transition-colors duration-300 cursor-pointer"
                                >
                                    <span className="relative z-10">Связаться</span>
                                    <span className="absolute top-0 left-[-75px] h-full w-[100px] rotate-[35deg] bg-blue-500 opacity-100 pointer-events-none animate-shine z-0" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DeliveryPage;