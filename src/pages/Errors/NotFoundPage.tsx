import Header from "../../components/utils/Header.tsx";
import Footer from "../../components/utils/Footer.tsx";

const NotFoundPage = () => {
    return (
        <div>
            <Header />
            <div className="absolute top-[-1.5rem] left-[8rem] w-[124px] h-[124px] bg-white rounded-full clip-left z-100" />
            <div className="absolute top-[-1.5rem] right-[8rem] w-[124px] h-[124px] bg-white rounded-full clip-right z-100" />
            <section className="relative w-full h-screen overflow-x-hidden -mt-25">

                <div className="absolute inset-0 w-full h-full bg-[#DFFFEE] z-10" />

                <div className="absolute inset-0 flex justify-center items-center w-full h-full" />

                {/* Контент hero */}
                <div className="relative z-20 container mx-auto px-4 h-full">
                    <div className="flex flex-col lg:flex-row items-center justify-center h-full py-12 gap-8">
                        <div className="w-full lg:w-1/2 text-center">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.4)' }}>
                                Страница не найдена!
                                <br/>
                                (404 NOT FOUND)
                            </h1>
                            <a href="/">
                                <button
                                    type="button"
                                    className="relative overflow-hidden max-sm:hidden hover:text-white border-2 border-orange-400 hover:bg-orange-500 font-medium rounded-2xl text-lg px-3 py-1.5 text-center transition-colors duration-300 cursor-pointer"
                                >
                                    <span className="relative z-10">На главную</span>
                                    <span className="absolute top-0 left-[-75px] h-full w-[200px] rotate-[35deg] bg-orange-500 opacity-100 pointer-events-none animate-shine z-0" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100" id="footer">
                <Footer />
            </section>
        </div>
    );
}

export default NotFoundPage;