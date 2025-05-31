import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lazy } from "react";

import './index.css';
import {ModalProvider} from "./components/OfferModal.tsx";

const MainPage = lazy(() => import("./pages/MainPage"));
const AllCatalogPage = lazy(() => import("./pages/Catalog/AllCatalogPage"));
const CatalogPage = lazy(() => import("./pages/Catalog/CatalogPage"));
const TechItemPage = lazy(() => import("./pages/Catalog/TechItemPage"));
const NotFoundPage = lazy(() => import("./pages/Errors/NotFoundPage"));

function App() {

    console.log("Solution for АвтоСпецСервис by SudnDev (https://sudndev.github.io/SudnDev/)");

    return (
        <ModalProvider>
            <Router>
                <Routes>
                    <Route index element={<MainPage />} />

                    <Route path="/catalog" element={<AllCatalogPage />}/>
                    <Route path="/catalog/:category" element={<CatalogPage />}/>
                    <Route path="/catalog/:category/:itemId" element={<TechItemPage />} />

                    <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
      </ModalProvider>
    )
}

export default App;