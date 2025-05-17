import { Outlet } from "react-router-dom";
import Header from "./Header.tsx";

function Layout() {
    return (
        <div>
            <Header />
            <div className="absolute top-[-1.5rem] left-[8rem] w-[124px] h-[124px] bg-white rounded-full clip-left z-100" />
            <div className="absolute top-[-1.5rem] right-[8rem] w-[124px] h-[124px] bg-white rounded-full clip-right z-100" />
            <main>
                <Outlet /> {/* Здесь будут рендериться страницы */}
            </main>
        </div>
    );
}

export default Layout;