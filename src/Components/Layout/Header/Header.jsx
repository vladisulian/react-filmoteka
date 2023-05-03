import { useLocation } from "react-router";
import HomeHeader from "./Home/HomeHeader";
import LibHeader from "./Library/LibHeader";
import("./Header.css");
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
