import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { lazy } from "react";
import Layout from "./components/utils/Layout.tsx";

import './index.css';
import {ModalProvider} from "./components/OfferModal.tsx";

const MainPage = lazy(() => import("./pages/MainPage"));
const TechItemPage = lazy(() => import("./pages/Catalog/TechItemPage"));
const NotFoundPage = lazy(() => import("./pages/Errors/NotFoundPage"));

function App() {

    console.log("Solution for АвтоСпецСервис by SudnDev (https://sudndev.github.io/SudnDev/)")

    return (
      <ModalProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />} >
                  <Route index element={<MainPage />} />

                  <Route path="/catalog/:category/:itemId" element={<TechItemPage />} />

                  <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Router>
      </ModalProvider>
    )
}

export default App