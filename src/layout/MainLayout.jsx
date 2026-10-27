import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function MainLayout({ theme, onToggleTheme }) {
  return (
    <div className="flex min-h-screen flex-col supports-[min-height:100dvh]:min-h-dvh">
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <main className="flex-1 bg-gray-100 dark:bg-gray-950">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
