import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<MainLayout />}
        >
          {/* Ruta para páginas encontradas */}
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<About />} />
          <Route path="/proyectos" element={<Project />} />
          <Route path="/contacto" element={<Contact />} />
          {/* Ruta para páginas no encontradas */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
