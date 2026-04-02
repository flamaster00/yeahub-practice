import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="wrapper">
      <Header className="header"/>
      <main className="main">
        <Outlet />
      </main>
      <Footer className="footer"/>
    </div>
  );
};
