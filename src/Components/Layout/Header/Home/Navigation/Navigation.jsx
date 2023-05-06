import { Link, NavLink, useLocation } from "react-router-dom";
import { memo, useEffect, useRef } from "react";
import Logo from "../../Logo/Logo";
import("./Navigation.scss");

const Navigation = memo(() => {
  const homeLinkRef = useRef(null);

  const location = useLocation();
  const onHomepage = location.pathname === "/react-filmoteka";

  // dynamic stylization home-link
  useEffect(() => {
    // Homelink .active class don't work how i want it need to work.
    // Thats why i create this hook, who handle change homelink class

    //? If we're on homepage - add class .active to homelink
    //? Else remove it
    onHomepage
      ? homeLinkRef.current.classList.add("active")
      : homeLinkRef.current.classList.remove("active");
  }, [onHomepage]);

  return (
    <>
      <nav className="container">
        <Logo />
        <div className="links-container">
          <Link to={""} ref={homeLinkRef}>
            Home
          </Link>
          <NavLink to={"library"}>Library</NavLink>
        </div>
      </nav>
    </>
  );
});

export default Navigation;
