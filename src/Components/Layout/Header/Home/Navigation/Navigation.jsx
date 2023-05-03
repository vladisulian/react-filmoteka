import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.svg";
import { memo } from "react";
const Navigation = memo(() => {
  return (
    <>
      <nav>
        <NavLink to={""}>
          <img src={logo} alt="site logo" />
        </NavLink>
        <NavLink to={""}>Home</NavLink>
        <NavLink to={"library"}>Library</NavLink>
      </nav>
    </>
  );
});

export default Navigation;
