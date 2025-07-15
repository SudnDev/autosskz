import { Instagram, MessageCircle, Star, Truck } from "lucide-react";
import React from "react";

function Footer() {
    return (
        <footer className="footer-background relative">
            <div className="relative container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Section */}
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800">Контакты</h2>
                        <ContactInfo />
                        <SocialLinks />
                    </div>

                    {/* Menu Section */}
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800">Меню</h2>
                        <MenuSection />
                    </div>

                    {/* Company Info Section */}
                    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-6 text-gray-800">О компании</h2>
                        <CompanyInfo />
                        <div className="mt-8 flex items-center justify-start space-x-8">
                            <Logo name="goodwork" />
                            <Logo name="zvezda" />
                        </div>
                        <p className="text-sm text-gray-600 mt-4">© ТОО "АвтоСпецСервисКЗ", {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
            <LegalDisclaimer />
        </footer>
    );
}

const ContactInfo = () => {
    return (
        <div className="space-y-3 text-gray-700">
            <div>
                <p className="text-sm font-medium">Телефон:</p>
                <a href="tel:77024487217" className="text-base hover:text-blue-600 transition-colors">
                    +7 702 448 7217
                </a>
            </div>

            <div>
                <p className="text-sm font-medium">Электронная почта:</p>
                <a href="mailto:avtospetsserviskz@yandex.kz" className="text-base hover:text-blue-600 transition-colors">
                    avtospetsserviskz@yandex.kz
                </a>
            </div>

            <div>
                <p className="text-sm font-medium">Адрес главного офиса:</p>
                <p className="text-base">г. Караганда, Улица Терешковой, 1г</p>
            </div>

            <div>
                <p className="text-sm font-medium">Время работы главного офиса:</p>
                <p className="text-base">Будние дни 9:00 - 18:00 (обед 13:00 - 14:00)</p>
                <p className="text-base">Суббота 10:00 - 15:00</p>
            </div>
        </div>
    );
};

const SocialLinks = () => {
    return (
        <div className="mt-4 flex space-x-4">
            <a
                href="https://www.instagram.com/autoss.kz/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-gray-200 hover:bg-gray-300 transition-colors p-2 rounded-full"
                aria-label="Instagram"
            >
                <Instagram size={20} className="text-gray-700 hover:text-red-600 transition-colors" />
            </a>
            <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon bg-gray-200 hover:bg-gray-300 transition-colors p-2 rounded-full"
                aria-label="WhatsApp"
            >
                <MessageCircle size={20} className="text-gray-700 hover:text-red-600 transition-colors" />
            </a>
        </div>
    );
};

const menuItems = [
    { id: 1, name: 'Каталог техники', href: '/catalog' },
    { id: 2, name: 'Фронтальные погрузчики', href: '/catalog/FRONT_LOADER' },
    { id: 3, name: 'Телескопические погрузчики', href: '/catalog/TELESCOPIC_HANDLER' },
    { id: 4, name: 'Экскаватор-погрузчики', href: '/catalog/BACKHOE_LOADER' },
    { id: 5, name: 'Мини-погрузчики', href: '/catalog/MINI_LOADER' },
    { id: 6, name: 'Дизельные погрузчики', href: '/catalog/DIESEL_LOADER' },
    { id: 7, name: 'Аккумуляторные погрузчики', href: '/catalog/BATTERY_POWERED_LOADER' },
    { id: 8, name: 'Строительные погрузчики', href: '/catalog/CONSTRUCTIONAL_LOADER' },
    { id: 9, name: 'Погрузчики для леса', href: '/catalog/FOREST_LOADER' },
    { id: 10, name: 'Погрузчики для снега', href: '/catalog/SNOW_LOADER' },
    { id: 11, name: 'Запчасти для погрузчиков', href: '/spares' },
    { id: 12, name: 'Сервис и гарантия', href: '/service-&-warranty' },
    { id: 13, name: 'Доставка', href: '/delivery' },
    { id: 14, name: 'Контакты', href: '/contacts' },
];

const MenuSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {menuItems.map((item) => (
                <a
                    key={item.id}
                    href={item.href}
                    className="menu-item block text-gray-700 hover:text-red-600 transition-colors duration-200 text-sm"
                >
                    {item.name}
                </a>
            ))}
        </div>
    );
};

const CompanyInfo = () => {
    return (
        <p className="text-gray-700 leading-relaxed">
            Более 11 лет опыта в сфере продажи и обслуживания спецтехники. Надежные фронтальные погрузчики из Китая от официального дилера для любых задач.
        </p>
    );
};

type LogoProps = {
    name: 'goodwork' | 'zvezda';
};

const Logo: React.FC<LogoProps> = ({ name }) => {
    if (name === 'goodwork') {
        return (
            <div className="flex items-center">
                <Truck className="h-6 w-6 text-red-600" />
                <span className="ml-1 font-bold text-gray-900">GOOD<span className="text-red-600">WORK</span></span>
            </div>
        );
    }

    if (name === 'zvezda') {
        return (
            <div className="flex items-center">
                <Star className="h-6 w-6 text-red-600" />
                <span className="ml-1 font-bold text-gray-900">ZVEZDA</span>
            </div>
        );
    }

    return null;
};

const LegalDisclaimer = () => {
    return (
        <div className="bg-gray-900/5 backdrop-blur-sm py-4">
            <div className="container mx-auto px-4">
                <p className="text-xs text-gray-600 leading-relaxed">
                    Любая информация, представленная на данном сайте, носит исключительно информационный характер и не является публичной офертой в соответствии со статьей 395 Гражданского кодекса Республики Казахстан. Все права на публикуемые на сайте материалы принадлежат ТОО "АвтоСпецСервис КЗ". Для получения точной информации о наличии и стоимости указанных товаров и/или услуг, пожалуйста, свяжитесь с нами через форму обратной связи или по телефону +7 702 448 7217.
                </p>
            </div>
        </div>
    );
};

export default Footer;