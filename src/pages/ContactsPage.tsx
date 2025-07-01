import { Phone, Download } from 'lucide-react';
import Header from "../components/utils/Header.tsx";
import Footer from "../components/utils/Footer.tsx";

const ContactsPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100">

            <Header />

            {/* Breadcrumb */}
            <div className="container mx-auto px-4 py-4">
                <div className="text-sm text-gray-600">
                    <a href="/" className="hover:text-blue-600 transition-colors">Главная страница</a>
                    <span className="mx-2">/</span>
                    <span className="text-gray-800">Контакты</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 pb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Контакты</h1>

                {/* Contact Departments */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Sales Department */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Отдел продаж</h2>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-red-500 mr-3" />
                                <div>
                                    <span className="text-sm text-gray-500">Телефон</span>
                                    <div className="border-b border-dotted border-gray-300 flex-1 mx-2"></div>
                                    <a href="tel:77024487217" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                                        +7 702 448 7217
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Parts Department */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Отдел запчастей</h2>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-red-500 mr-3" />
                                <div>
                                    <span className="text-sm text-gray-500">Телефон</span>
                                    <div className="border-b border-dotted border-gray-300 flex-1 mx-2"></div>
                                    <a href="tel:77000808215" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                                        +7 700 080 8215
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service Department */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Директор Гарш Владимир Александрович</h2>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-red-500 mr-3" />
                                <div>
                                    <span className="text-sm text-gray-500">Телефон</span>
                                    <div className="border-b border-dotted border-gray-300 flex-1 mx-2"></div>
                                    <a href="tel:77015238325" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                                        +7 701 523 8325
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Office and Requisites */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                        {/* Map Placeholder */}
                        <div className="aspect-[16/9] w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.7385314226756!2d73.12115267174913!3d49.82294832602279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4243470f8bf45cbb%3A0xd598f3463bb099bd!2z0KLQntCeICLQkNCy0YLQvtCh0L_QtdGG0KHQtdGA0LLQuNGBINCa0JfigJ0!5e1!3m2!1sru!2skz!4v1751351603221!5m2!1sru!2skz"
                                className="absolute top-0 left-0 w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Company Requisites */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-gray-800">Реквизиты</h2>
                            <button
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = '/documents/реквизиты.pdf'; // путь к файлу
                                    link.download = 'реквизиты.pdf'; // имя файла
                                    link.click();
                                }}
                                className="relative flex items-center space-x-1 overflow-hidden max-sm:hidden hover:text-white border-2 border-orange-400 hover:bg-orange-500 font-medium rounded-2xl text-sm px-3 py-1.5 text-center transition-colors duration-300 cursor-pointer"
                            >
                                <Download className="h-4 w-4" />
                                <span className="relative z-10">Скачать PDF</span>
                                <span className="absolute top-0 left-[-75px] h-full w-[100px] rotate-[35deg] bg-orange-500 opacity-100 pointer-events-none animate-shine z-0" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <span className="text-sm text-gray-500">Название</span>
                                <div className="border-b border-dotted border-gray-300 mb-1"></div>
                                <p className="font-semibold text-gray-800">Товарищество с ограниченной ответственностью «АвтоСпецСервис КЗ»</p>
                            </div>

                            <div>
                                <span className="text-sm text-gray-500">Юр.адрес</span>
                                <div className="border-b border-dotted border-gray-300 mb-1"></div>
                                <p className="font-semibold text-gray-800">Республика Казахстан, Карагандинская обл., г. Караганда, ул. Пичугина д.75</p>
                            </div>

                            <div>
                                <span className="text-sm text-gray-500">Фактический адрес</span>
                                <div className="border-b border-dotted border-gray-300 mb-1"></div>
                                <p className="font-semibold text-gray-800">Республика Казахстан, Карагандинская обл., г. Караганда, ул. Терешковой 1 Г</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <span className="text-sm text-gray-500">БИН</span>
                                    <div className="border-b border-dotted border-gray-300 mb-1"></div>
                                    <p className="font-semibold text-gray-800">170840004976</p>
                                </div>
                                <div>
                                    <span className="text-sm text-gray-500">Email</span>
                                    <div className="border-b border-dotted border-gray-300 mb-1"></div>
                                    <p className="font-semibold text-gray-800"> avtospetsserviskz@yandex.kz</p>
                                </div>
                            </div>

                            <div>
                                <span className="text-sm text-gray-500">Директор</span>
                                <div className="border-b border-dotted border-gray-300 mb-1"></div>
                                <p className="font-semibold text-gray-800">Гарш Владимир Александрович</p>
                            </div>

                            <div>
                                <span className="text-sm text-gray-500">Банк</span>
                                <div className="border-b border-dotted border-gray-300 mb-1"></div>
                                <p className="font-semibold text-gray-800">АО "First Heartland Jusan Bank"</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <span className="text-sm text-gray-500">БИК</span>
                                    <div className="border-b border-dotted border-gray-300 mb-1"></div>
                                    <p className="font-semibold text-gray-800">TSESKZKA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ContactsPage;