import React from "react";
import Socials from "../../components/Socials";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <div className="mt-10">
            <Socials />
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made with referenced to{" "}
        <a href="https://github.com/chetanverma16/react-portfolio-template">
          <u>Chetan Verma</u>
        </a>
      </h1>
    </>
  );
};

export default Footer;
