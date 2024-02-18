import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

function isCourtesy(courtesy) {
  if (courtesy) {
    return <>Courtesy:&nbsp;&nbsp; {courtesy}</>;
  }
}

const ArticleCard = ({ img, name, description, courtesy, handleClick }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
          mounted && theme === "dark"
            ? "hover:bg-slate-800"
            : "hover:bg-slate-50"
        } hover:scale-105 link`}
        onClick={handleClick}
      >
        <div className="flex justify-around flex-row">
          <img className="rounded-lg w-1/5" src={`${img}`} alt="Pic"></img>
          <div className="w-3/5">
            <div className="flex justify-between flex-col h-full">
              <div className="text-2xl">
                {name ? name : "Title of the article"}
              </div>
              <div className="text-base">
                {description ? description : "description of the article"}
              </div>
              <div className="text-base text-slate-400">
                {isCourtesy(courtesy)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;

// C:\Users\15010\Desktop\mypage\pages\article\1\thumbnail.png
// pages\article\1\thumbnail.png
