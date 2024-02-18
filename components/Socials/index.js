import React from "react";
import Button from "../Button";
import yourData from "../../data/portfolio.json";
import CopyToClipboardButton from "./Copy";
import * as MUIIcons from "@mui/icons-material";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {React.createElement(MUIIcons[social.icon], {
            color: "black",
            fontSize: "large",
          })}
        </Button>
      ))}
      <CopyToClipboardButton textToCopy="150107jasmine@gmail.com"></CopyToClipboardButton>
    </div>
  );
};

export default Socials;
