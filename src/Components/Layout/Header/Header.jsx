import { useLocation } from "react-router";
import HomeHeader from "./Home/HomeHeader";
import { memo } from "react";
import("./Header.scss");
const Header = memo(() => {
  const location = useLocation();

  const showHomeHeader = location.pathname === "/react-filmoteka";
  const showLibraryHeader = location.pathname === "/react-filmoteka/library";

  // TODO create only ONE(1) header for library and homepage

  return (
    <>
      {/* {showHomeHeader && <HomeHeader />}
      {showLibraryHeader && <LibHeader />} */}
      <HomeHeader />
    </>
  );
});

export default Header;
