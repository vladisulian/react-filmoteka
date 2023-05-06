import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";

const Logo = memo(() => {
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
      <Link to={""} className="js-logo">
        <img src={logo} className="logo-image" alt="site logo" />
        {!mobileDevice && <p className="logo-text">Filmoteka</p>}
      </Link>
    </>
  );
});

export default Logo;
