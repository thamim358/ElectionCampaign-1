import React, { useState, useEffect, useRef } from "react";
import "../Header/Header.scss";
import maddy from "../img/election4.png";
import WOW from "wow.js"

function MeetSubba() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);
  return (
    <>
    <div className="section"id="aboutsection">
        <p className="Name text-6xl text-orange-600 mb-11 ml-4 pt-9 font-bold text-center wow slideInUp">
          MEET SUBBA MADIREDDY
        </p>

        <p className=" text-3xl leading-10 text-black ml-4 pl-9 font-bold  font-sans text-[#280137] wow slideInUp">
          A DEDICATED COMMUNITY ADVOCATE. A{" "}
          <span className="before:block  before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block ">
            <span className="relative text-white">CHAMPION</span>
          </span>{" "}
          FOR ENVIRONMENTAL MANAGEMENT. A VISIONARY LEADER FOR OUR TOWN.
        </p>

        <div className="flex flex-col md:flex-row mx-5 mt-5">
          <div className="md:w-2/3  pl-9 text-large font-sans mb-4 text-purple-950">
            <p className="wow slideInUp">
              <div className="">
                Subba Madireddy is a passionate individual committed to making a
                positive impact on our community and future generations. As a
                member of the town council, Subba plans to invest his time and
                power inot creating a better future and involvement to address
                the pressing issues we face.
              </div>
            </p>
            <p className="wow slideInUp">
              <div className="mt-5">
                Subba is particularly focused on environmental management
                causes. He recognizes the urgent need to protect our natural
                resources, reduce pollution, and promote sustainable practices.
                With his extensive knowledge and experience, Subba has decided
                to use his position to advocate for policies that prioritize
                environmental conservation and preservation.
              </div>
            </p>

            <p className="mt-5 wow slideInUp">
              Beyond his political aspirations, Subba is a dedicated advocate
              for community well-being. He understands that a thriving community
              is built on the foundation of its residents, and he aims to foster
              a sense of unity and collaboration among citizens. Through active
              engagement and open communication, Subba envisions a town where
              everyone's voice is heard and valued.
            </p>
            <p className="mt-5 wow slideInUp">
              Subba's dedication to public service is driven by his belief in
              the power of collective action and the potential for positive
              change. He understands that by harnessing the energy and ideas of
              our community, we can make strategic investments that will shape a
              prosperous future for generations to come.
            </p>
            <p className="mt-5 wow slideInUp">
              Subba Madireddy is ready to lead our town towards a brighter
              tomorrow. With his passion, vision, and unwavering commitment to
              community and environmental causes, he will strive to create a
              town that we can all be proud of.
            </p>
          </div>

          <div className="md:w-1/2 mt-5 md:mt-0 items-center">
            <img
              className=" photos mx-auto md:ml-auto md:mr-0 mb-5 md:mb-0 max-w-full h-auto"
              src={maddy}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetSubba;
