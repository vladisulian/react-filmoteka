import { useLocation } from "react-router";
import HomeHeader from "./Home/HomeHeader";
import("./Header.scss");
const Header = () => {
  const location = useLocation();

  const showHomeHeader = location.pathname === "/react-filmoteka";
  const showLibraryHeader = location.pathname === "/react-filmoteka/library";

  return (
    <>
      {/* {showHomeHeader && <HomeHeader />}
      {showLibraryHeader && <LibHeader />} */}
      <HomeHeader />
    </>
  );
};

export default Header;
