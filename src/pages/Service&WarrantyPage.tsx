import Header from "../components/utils/Header.tsx";
import Footer from "../components/utils/Footer.tsx";

const ServiceAndWarrantyPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">

            <Header />

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                <div className="text-sm text-gray-600">
                    <a href="/" className="hover:text-blue-600 transition-colors">Главная страница</a>
                    <span className="mx-2">/</span>
                    <span className="text-gray-800">Сервис и Гарантия</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 pb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Сервис и Гарантия</h1>
                <div className="space-y-8 font-semibold text-gray-800">
                    {/* Первый блок: фото справа */}
                    <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <div className="flex-1">
                            <div>
                                <p className="mb-2">Мы предоставляем гарантию на:</p>
                                <ul className="list-disc list-inside mb-2">
                                    <li>Двигатель (ДВС)</li>
                                    <li>Коробку переключения передач (АКПП)</li>
                                    <li>Гидравлическую систему и мосты</li>
                                </ul>
                                <p>
                                    Гарантия действует до <strong>2000 моточасов</strong> либо <strong>1 года</strong> с момента покупки техники — в зависимости от того, что наступит раньше.
                                </p>
                            </div>
                        </div>
                        <img
                            src="/serivcePage/photo1.jpg"
                            alt="Описание"
                            className="w-1/8 h-1/8 object-cover rounded-xl"
                        />
                    </div>

                    {/* Второй блок: фото слева */}
                    <div className="flex flex-row-reverse items-center space-x-reverse space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <div className="flex-1">
                            <div className="space-y-3">
                                <p>
                                    Перед продажей погрузчика у нас производится полная предпродажная подготовка. В нее входит:
                                    замена жидкостей, протяжка всего погрузчика, шприцевание/смазывание всех узлов сочленения, проверка и работа электрики.
                                </p>
                                <p>
                                    К сожалению, бывают случаи заводского брака, которые не всегда удается выявить сразу. Такие дефекты зачастую обнаруживаются
                                    только во время эксплуатации техники уже у клиента.
                                </p>
                                <p>
                                    Мы всегда идем навстречу нашим клиентам и стремимся как можно быстрее устранить неисправности. Наша цель — не только обеспечить
                                    качественное обслуживание, но и помочь в правильном выборе техники.
                                </p>
                            </div>
                        </div>
                        <img
                            src="/serivcePage/photo2.jpg"
                            alt="Описание"
                            className="w-1/8 h-1/8 object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceAndWarrantyPage;