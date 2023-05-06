import "./HomeHeader.scss";
import Navigation from "./Navigation/Navigation";
import SearchBar from "./SearchBar/SearchBar";
const HomeHeader = () => {
  return (
    <header className="home-header ">
      
      <Navigation />
      <SearchBar />
    </header>
  );
};
export default HomeHeader;
