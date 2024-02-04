import data from "../../data/portfolio.json";
import Header from "./header";
import Footer from "./footer";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useRef } from "react";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
      <h1 className="text-2xl pl-10">USB type-C charging monitor</h1>
      <div className="flex flex-row items-center">
        <div className="basis-1/2">
          <img
            className="p-8"
            src={`/images/${projects[index].imageSrc}`}
            alt={projects[index].title}
          />
        </div>
        <div className="basis-1/2">
          <img
            className="p-8"
            src="/images/2/example_use.jpg"
            alt="example use of the project"
          />
        </div>
      </div>
      <div className="justify-start text-xl pl-8">Here is the schematic</div>
      <img
        className="justify-self-center p-8"
        src="/images/2/schematic.png"
        alt="schematic of the project"
      />
      <div className="justify-start text-xl pl-8">Top side of the PCB</div>
      <img
        className="justify-self-center p-8"
        src="/images/2/top.png"
        alt="top view"
      />
      <div className="justify-start text-xl pl-8">Bottom side of the PCB</div>
      <img
        className="justify-self-center p-8 "
        src="/images/2/bottom.png"
        alt="bottom view"
      />
      <Footer />
    </div>
  );
}

export default ProjectPage;
