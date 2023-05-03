import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.svg";
import { memo, useEffect, useState } from "react";
import("./Navigation.scss");

const Navigation = memo(() => {
  const [mobileDevice, setmobileDevice] = useState(true);

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
        <NavLink to={""}>
          <img src={logo} className="logo-image" alt="site logo" />
          {!mobileDevice && <p className="logo-text">Filmoteka</p>}
        </NavLink>
        <NavLink to={""}>Home</NavLink>
        <NavLink to={"library"}>Library</NavLink>
      </nav>
    </>
  );
});

export default Navigation;
