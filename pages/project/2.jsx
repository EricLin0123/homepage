import data from "../../data/portfolio.json";
import Header from "./header";
import Footer from "./footer";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useRef } from "react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const { projects } = data;
const index = 1;

function ProjectPage() {
  const Router = useRouter();

  const GoHome = (e) => {
    e.preventDefault();
    Router.push("/");
  };

  return (
    <div className="grid justify-items-stretch">
      <Header />
      <h1 className="text-2xl pl-10">{projects[index].title}</h1>
      <img
        className="justify-self-center py-8"
        src={`/images/${projects[index].imageSrc}`}
        alt={projects[index].title}
      />
      <div className="justify-self-center text-xl">
        {projects[index].description}
      </div>
      <div className="justify-self-center text-xl">
        Detail description and open-source file coming soon ...
      </div>
      <Footer />
    </div>
  );
}

export default ProjectPage;
