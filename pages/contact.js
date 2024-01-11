import React from "react";
import Button from "../components/Button";
import yourData from "../data/portfolio.json";
import CopyToClipboardButton from "../components/Socials/Copy";
import * as MUIIcons from "@mui/icons-material";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";

const Socials = () => {
  const router = useRouter();
  return (
    <div
      className={`className="mt-2 laptop:mt-5" flex flex-wrap flex-col mob:flex-nowrap pl-10 link`}
    >
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          <div>
            {React.createElement(MUIIcons[social.icon], {
              color: "black",
              fontSize: "large",
            })}
          </div>
          &nbsp; {social.title}
        </Button>
      ))}
      <CopyToClipboardButton textToCopy="150107jasmine@gmail.com"></CopyToClipboardButton>
      <Button onClick={() => router.push("/")}>
        <HomeIcon fontSize="large" />
        &nbsp; Home
      </Button>
    </div>
  );
};

export default Socials;
