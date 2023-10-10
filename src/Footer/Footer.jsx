import React, { useEffect} from "react";
import "../Header/Header.scss";
import WOW from "wow.js"


function Footer() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);
  return (
    <>
 <footer class="dashboard  px-10 mt-5 py-4">
        <div class="container mx-auto text-center">
          <div className="text-white text-3xl lg:text-4xl font-sans font-extrabold wow slideInDown">
            SUBBA
          </div>
          <div className="text-orange-600 text-3xl lg:text-4xl font-sans font-extrabold wow slideInDown">
            MADIREEDY
          </div>
          <p class="text-white text-xs font-sans font-base mt-5 wow slideInDown">
            Paid for by Subba 4 Community Services 113 Elmhaven Way, Morrisville
            NC 27560 919-238-9172
          </p>
          <p class="text-white text-xs font-sans font-sm mt-5 wow slideInDown">
            NORTH CAROLINA LAW REQUIRES POLITICAL COMMITTEES TO REPORT THE NAME,
            MAILING ADDRESS, JOB TITLE OR PROFESSION AND NAME OF EMPLOYER,
            SPECIFIC FIELD FOR EACH INDIVIDUAL WHOSE CONTRIBUTION AGGREGATE IS
            IN EXCESS OF $50 IN AN ELECTION. CONTRIBUTIONS MAY NOT EXCEED $6,400
            PER PERSON PER ELECTION CYCLE. NORTH CAROLINA LAW PROHIBITS THE
            SOLICITATION OF LOBBYISTS, CORPORATIONS, AND FOREIGN NATIONALS.
            PLEASE DISREGARD THIS SOLICITATION IF IT REACHED YOU IN ERROR.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
