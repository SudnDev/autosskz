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
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg font-semibold text-gray-800 mb-8">

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ServiceAndWarrantyPage;