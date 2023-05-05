import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../Images/logo.svg";
import { memo, useEffect, useState, useRef } from "react";
import("./Navigation.scss");

const Navigation = memo(() => {
  const [mobileDevice, setmobileDevice] = useState(true);

  const homeLinkRef = useRef(null);

  const location = useLocation();
  const onHomepage = location.pathname === "/react-filmoteka";

  useEffect(() => {
    // Homelink .active class don't work how i want it need to work.
    // Thats why i create this hook, who handle change homelink class

    //? If we're on homepage - add class .active to homelink
    //? Else remove it
    onHomepage
      ? homeLinkRef.current.classList.add("active")
      : homeLinkRef.current.classList.remove("active");
  }, [onHomepage]);

  useEffect(() => {
    // function used for dynamic creating Filmoteka title
    const handleResize = () => {
      window.innerWidth > 767 ? setmobileDevice(false) : setmobileDevice(true);
    };
    handleResize();
    // create eventListener resize, use handleResize function as callback
    window.addEventListener("resize", handleResize);

    // remove eventListener in Unmounting stage, handleResize as callback
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav>
        <Link to={""}>
          <img src={logo} className="logo-image" alt="site logo" />
          {!mobileDevice && <p className="logo-text">Filmoteka</p>}
        </Link>
        <Link to={""} ref={homeLinkRef}>
          Home
        </Link>
        <NavLink to={"library"}>Library</NavLink>
      </nav>
    </>
  );
});

export default Navigation;
