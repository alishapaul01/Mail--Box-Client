import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import InboxDisplay from "./InboxDisplay";

const InboxMail = () => {
  const [inbox, setInbox] = useState([]);
  const loggedInEmail = useSelector((state) => state.auth.email);
  const updatedLoggedInEmail = loggedInEmail;
  useEffect(() => {
    getMail()
  }, []);
  const getMail = async () => {
    try {
      const response = await fetch(
        `https://mail-box-3d7e2-default-rtdb.firebaseio.com/mail/${updatedLoggedInEmail}Inbox.json`
      );
     // console.log(response);
      const data = await response.json();
      //console.log(data);
        const array = [];
        
        for (const key in data) {
          array.push({
            id: key,
            mail: data[key].mail,
            subject: data[key].subject,
            text: data[key].text,
            seen:data[key].seen
          });
        }
        setInbox(array);
       // console.log(array);
      
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <InboxDisplay data={inbox} />

    </div>
  );
};

export default InboxMail;