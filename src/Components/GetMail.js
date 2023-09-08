import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mailAction } from "../Store/MailSlice";
import SentMail from './SentMail'
import {sentActions} from '../Store/sentSlice'

const GetMail = () => {
  const [mail, setMail] = useState([]);
  const dispatch = useDispatch();
  const loggedInEmail = useSelector((state) => state.auth.email);
  const updatedLoggedInEmail = loggedInEmail

  useEffect(() => {
    displaymail();
  }, []);
  const displaymail = async () => {
    try {
      const response = await fetch(
        `https://mail-box-3d7e2-default-rtdb.firebaseio.com/mail/${updatedLoggedInEmail}SentMail.json/`
      );
      const data = await response.json();
      console.log("dataa", data);

      dispatch(mailAction.addedMail(data));
      dispatch(sentActions.onEmailSent(data))

      const array = [];
      for (const key in data) {
        array.push({
          id:key,
          mail: data[key].mail,
          subject: data[key].subject,
          text: data[key].text,
        });
      }
      setMail(array);
      console.log("arrray", array);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <SentMail data={mail} />
    </div>
  );
};

export default GetMail;