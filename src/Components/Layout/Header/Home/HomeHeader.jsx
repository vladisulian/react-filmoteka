import "./HomeHeader.scss";
import Navigation from "./Navigation/Navigation";
import SearchBar from "./SearchBar/SearchBar";
const HomeHeader = () => {
  // TODO create only ONE(1) header for library and homepage
  return (
    <header className="home-header ">
      
      <Navigation />
      <SearchBar />
    </header>
  );
};
export default HomeHeader;
