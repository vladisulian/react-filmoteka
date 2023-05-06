import { memo } from "react";
import heartSVG from "./heart.svg";
import("./Footer.scss");

const Footer = memo(() => {
  return (
    <>
      <footer>
        <p>© 2023 | All Rights Reserved |</p>
        <p>
          Developed with <img src={heartSVG} alt="GoIT heart" /> by GoIT
          Students
        </p>
      </footer>
    </>
  );
});

export default Footer;
