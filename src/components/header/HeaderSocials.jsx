import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { BsDribbble } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/umair-asif-dev-333/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/full-stack-dev-400" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
