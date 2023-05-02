import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Layout/Header/Header";
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
    </>
  );
};

export default Layout;
