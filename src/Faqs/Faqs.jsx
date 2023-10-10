import React from "react";
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Faqs = () => {
  return (
    
    <div className="max-w-lg mx-auto mt-10">
      <Collapse accordion>
        <Panel header="Q: Can I vote in the Cary 2023 election?" key="1">
          <p className="text-gray-700">
            You can check your registration status on the State Board of Elections website. Here are some resources to help you:
            <br />
            <a href="https://www.ncsbe.gov/registering/who-can-register" target="_blank" rel="noopener noreferrer">Who can register?</a>
            <br />
            <a href="https://www.ncsbe.gov/voting/voter-lookup" target="_blank" rel="noopener noreferrer">What is my district?</a>
            <br />
            Complete the online application through the DMV: <a href="https://www.ncdot.gov/dmv/offices-services/online/Pages/voter-registration-application.aspx" target="_blank" rel="noopener noreferrer">Voter Registration Application</a>
            <br />
            Submit a mail-in application: <a href="https://www.ncsbe.gov/registering/how-register/complete-your-registration-mail" target="_blank" rel="noopener noreferrer">Complete Your Registration Mail</a>
            <br />
            *The voter registration deadline is September 15, 2023.
          </p>
        </Panel>
        <Panel header="Q: How can I get involved with the campaign?" key="2">
          <p className="text-gray-700">
            Reach out to us at info@sarika4cary.com to get involved!
            <br />
            Sign up to volunteer: We need help making phone calls, knocking on doors, delivering yard signs, and working the polls on election day.
            <br />
            Request a yard sign to display your support in your front yard or outside of your business.
            <br />
            Follow us on social media:
            <br />
            Facebook: <a href="https://www.facebook.com/sarikaforcarytowncouncil" target="_blank" rel="noopener noreferrer">@sarikaforcarytowncouncil</a>
            <br />
            Instagram: <a href="https://www.instagram.com/sarika4cary" target="_blank" rel="noopener noreferrer">@sarika4cary</a>
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Faqs;
