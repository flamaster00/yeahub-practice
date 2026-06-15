import { Outlet } from "react-router-dom";

import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";

export const RootLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
