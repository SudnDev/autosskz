const MainPage = () => {

    const scrollToModels = () => {
        const section = document.getElementById("models");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const heroBlocks = [
        { text: "Надёжность на высшем уровне", color: "shadow-[0_0_20px_rgba(255,0,128,0.5)]", hover: "hover:-translate-y-2 hover:rotate-1" },
        { text: "Высокая эффективность работы", color: "shadow-[0_0_20px_rgba(0,255,255,0.5)]", hover: "hover:translate-x-2 hover:-rotate-2" },
        { text: "Проверенное качество деталей", color: "shadow-[0_0_20px_rgba(255,255,0,0.5)]", hover: "hover:-translate-x-2 hover:rotate-2" },
        { text: "Индивидуальная комплектация", color: "shadow-[0_0_20px_rgba(255,165,0,0.5)]", hover: "hover:translate-y-2 hover:-rotate-1" },
        { text: "Более 11 лет успешных поставок", color: "shadow-[0_0_20px_rgba(128,0,255,0.5)]", hover: "hover:-translate-y-1 hover:translate-x-1" },
        { text: "Поддержка по всей стране", color: "shadow-[0_0_20px_rgba(0,255,128,0.5)]", hover: "hover:rotate-3 hover:scale-105" },
    ];

    return (
        <div>
            <section className="relative w-full h-screen overflow-x-hidden -mt-25">
                {/* Фон-картинка */}
                <div
                    style={{ backgroundImage: "url('./mainPage/background.jpg')" }}
                    className="absolute inset-0 w-full h-full bg-cover bg-center blur-md z-0"
                />

                {/* Цветной полупрозрачный слой */}
                <div className="absolute inset-0 w-full h-full bg-[#DFFFEE] opacity-50 z-10" />

                <div className="absolute inset-0 flex justify-center items-center w-full h-full" />

                {/* Контент hero */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 py-12">
                    <div className="max-w-3xl mx-auto" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.4)' }}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Надёжный помощник для вашего бизнеса — по разумной цене
                        </h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6">
                            {heroBlocks.map((block, i) => (
                                <div
                                    key={i}
                                    className={`
                                        relative rounded-2xl p-3 sm:p-4 text-center text-xs sm:text-sm font-semibold text-white
                                        bg-neutral-900/20 backdrop-blur-lg
                                        shadow-[0_0_20px_rgba(0,255,255,0.5)]
                                        transition duration-500 ease-in-out transform
                                        ${block.hover}
                                        cursor-default
                                      `}
                                >
                                    {block.text}
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={scrollToModels}
                            className="relative overflow-hidden mt-6 hover:text-white border-2 border-blue-500 hover:bg-blue-600 font-medium rounded-2xl text-base sm:text-lg px-4 py-1.5 text-center active:scale-95 transition-transform"
                        >
                            <span className="relative z-10">Посмотреть модели</span>
                            <span className="absolute top-0 left-[-150px] h-full w-[200px] rotate-[35deg] bg-blue-600 opacity-100 pointer-events-none animate-shine z-0" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 md:py-16 inset-3" id="models">
                <div className="relative top-[-100px] sm:top-[-150px] left-0 w-full h-20 sm:h-24 bg-white z-10 clip-path-wave rounded-t-full">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 leading-tight drop-shadow-lg pt-6 sm:pt-10">
                        Популярная техника
                    </h1>
                </div>

                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h1>hello</h1>
                    <h1>hello</h1>
                    <h1>hello</h1>
                    <h1>hello</h1>
                    <h1>hello</h1>
                    <h1>hello</h1>
                </div>
            </section>
        </div>
    );
}

export default MainPage;