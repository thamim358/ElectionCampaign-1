import React, { useState, useEffect, useRef } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import invest from "../img/investment2.png";
import increase from "../img/increaseicon.png";
import aid from "../img/Aided.png";

function MyPlan() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <div className="section" id="myplan">
        <div className="Name text-6xl text-orange-600 mt-5 pt-5 font-bold text-center wow rotateIn">
          MY PLAN
        </div>
        <div className="flex flex-wrap justify-center mt-5 p-10 h-full sm:h-auto">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 wow slideInLeft">
            <div className="dashboard drop-shadow-xl rounded-3xl flex flex-col justify-between h-full">
              <img
                className="w-36 h-14 mx-auto mt-5"
                src={invest}
                alt="Image 1"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-center text-orange-600 mb-2">
                  INVEST
                </h3>
                <div className="text-sm font-bold text-center mb-4 text-slate-500">
                  IN THE COMMUNITY AND THE FUTURE GENERATION
                </div>
                <p className="text-center mt-3 text-white font-sans">
                  By prioritizing investments in our community and future
                  generations, we can build a stronger foundation for a brighter
                  future. This means providing quality education, accessible
                  healthcare, and fostering inclusivity. It also means
                  channeling resources into innovative research, sustainable
                  practices, and environmental conservation. Together, we can
                  create a prosperous and sustainable town for generations to
                  come.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 wow slideInUp">
            <div className="dashboard drop-shadow-xl rounded-3xl flex flex-col justify-between h-full">
              <img
                className="w-14 h-14 mx-auto mt-5"
                src={increase}
                alt="Image 1"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-center text-orange-600">
                  INCREASE
                </h3>
                <div className="text-sm font-bold text-center mb-4 text-slate-500 mb-2">
                  COMMUNITY ENGAGEMENT
                </div>
                <p className="text-center mt-3 text-white">
                  Fostering increased community engagement is vital for building
                  stronger bonds and empowering our society. By promoting active
                  participation, collaboration, and inclusivity, we can create a
                  vibrant community that thrives on collective efforts, leading
                  to a brighter future for all. Through open dialogue, civic
                  involvement, and support for community initiatives, we tap
                  into the collective wisdom and creativity of our diverse
                  population, empowering individuals to become catalysts for
                  positive change.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4 wow slideInRight">
            <div className="dashboard drop-shadow-xl rounded-3xl flex flex-col justify-between h-full">
              <img className="w-16 h-16 mx-auto mt-5" src={aid} alt="Image 1" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-center text-orange-600">
                  AID
                </h3>
                <div className="text-sm font-bold text-center text-slate-500">
                  ENVIRONMENTAL MANAGEMENT
                </div>
                <div className="text-center mt-3 text-white font-extralight pb-12">
                  Promoting effective environmental management is crucial for a
                  sustainable future. By embracing sustainable practices,
                  conservation efforts, and responsible resource management, we
                  can protect our town's health and preserve biodiversity.
                  Through collective action, innovation, and advocacy, we have
                  the power to create a greener, cleaner, and stronger town for
                  generations to come.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyPlan;
