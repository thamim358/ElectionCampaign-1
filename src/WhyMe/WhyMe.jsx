import React, { useState, useEffect, useRef } from "react";
import "../Header/Header.scss";
import WOW from "wow.js"
import logoimg from "../img/flyer1.png";


function WhyMe() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);
  return (
    <>
<div className="section " id="whyme">
        <p className=" text-4xl lg:text-6xl text-orange-600 mt-5 font-bold text-center wow rotateIn">
          WHY ME?
        </p>

        <div className=" sm:mx-5 p-10  flex flex-col lg:flex-row justify-center items-center  ">
          <div className="image">
            <img
              className="photos  mt-4 lg:mt-8 lg:mr-8 mb-4 lg:mb-8 rounded-2xl"
              src={logoimg}
              alt="Logo Image"
            />
          </div>

          <div className="context lg:mr-8 mt-10">
            <ul className="list-disc marker:text-black-500">
              <div className="pl-4 lg:pl-9 wow slideInUp">
                <div className="text-2xl lg:text-3xl text-orange-600 mb-4 font-bold font-sans ">
                  MORRISVILLE SMART CITY COMMITTEE
                  <div className="text-left px-4 lg:px-10">
                    <li>
                      <p className="text-lg lg:text-xl text-black mb-2 lg:mb-4 font-bold font-sans">
                        4 YEARS AS A COMMITTEE MEMBER
                      </p>
                    </li>
                    <li>
                      <p className="text-lg lg:text-xl text-black mb-2 lg:mb-4 font-bold font-sans">
                        EXECUTED SMART CITY SHUTTLE AND APP
                      </p>
                    </li>
                  </div>
                </div>
              </div>

              <div className="pl-4 lg:pl-9 wow slideInUp">
                <div className="text-2xl lg:text-3xl text-orange-600 mb-4 font-bold font-sans">
                  COVID-19 RELIEF INITIATIVE
                  <div className="text-left px-4 lg:px-10">
                    <li>
                      <p className="text-lg lg:text-xl text-black mb-2 lg:mb-4 font-bold font-sans">
                        LED OXYGEN PLAN PROJECT FOR HOSPITALS
                      </p>
                    </li>
                    <li>
                      <p className="text-lg lg:text-xl text-black mb-2 lg:mb-4 font-bold font-sans">
                        COORDINATED VACCINE ACCESSIBILITY FOR 5K+ PEOPLE
                      </p>
                    </li>
                  </div>
                </div>
              </div>

              <div className="pl-4 lg:pl-9 wow slideInUp">
                <div className="text-2xl lg:text-3xl text-orange-600 mb-4 font-bold font-sans">
                  COMMUNITY VOLUNTEER
                  <div className="text-left px-4 lg:px-10">
                    <li>
                      <p className="text-lg lg:text-xl text-black mb-2 lg:mb-4 font-bold font-sans">
                        4 YEARS AS AN HOA BOARD MEMBER
                      </p>
                    </li>
                    <li>
                      <p className="text-lg lg:text-xl text-black mb-2 lg:mb-4 font-bold font-sans">
                        MITIGATED SCHOOL-ZONING
                      </p>
                    </li>
                    <li>
                      <p className="text-lg lg:text-xl text-black mb-2 lg:mb-4 font-bold font-sans">
                        ADVANCED NEIGHBORHOOD ENVIRONMENTAL PROTECTIONS
                      </p>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyMe;
