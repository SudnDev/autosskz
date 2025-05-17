import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { lazy } from "react";
import Layout from "./pages/utils/Layout.tsx";

import './index.css';

const MainPage = lazy(() => import("./pages/MainPage"));

function App() {

    console.log("Solution for АвтоСпецСервис by SudnDev (https://sudndev.github.io/SudnDev/)")

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </Router>
    )
}

export default App