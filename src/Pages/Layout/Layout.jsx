import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Layout/Header/Header";
import Footer from "../../Components/Layout/Footer/Footer";
import "./Layout.scss";

const Layout = () => {
  // TODO create a spinner for loading state
  return (
    <>
      <Suspense fallback={null}>
        <Header />
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
