import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Components/Header/Header";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useHistory } from "react-router-dom";
import BackButton from "../Components/Header/BackButton";
import { mailAction } from "../Store/MailSlice";
import classes from './ComposeMail.module.css';

const ComposeMail = () => {
  const history = useHistory();
  const dispatch=useDispatch();
  const loggedInEmail = useSelector((state) => state.auth.email);

  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  let bodyText;

  const onEditorStateChange = (event) => {
    bodyText = event.getCurrentContent().getPlainText();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const mail = emailInputRef.current.value;
    const subject = subjectInputRef.current.value;
    const mailid = mail.split('@')[0];
    
    const input={
          mail: loggedInEmail,
          subject: subject,
          text: bodyText,
          seen:false,
}
    fetch(
      `https://mail-box-3d7e2-default-rtdb.firebaseio.com/mail/${mailid}Inbox.json`,
      {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          console.log("resp1", resp);
          dispatch(mailAction.sendMail(input))
          return resp.json();
        } else {
          return resp.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        console.log(data.name);

      })
      .catch((err) => {
        alert(err);
      });


    fetch(
      `https://mail-box-3d7e2-default-rtdb.firebaseio.com/mail/${loggedInEmail}SentMail.json`,
      {
        method: "POST",
        body: JSON.stringify({
          mail: mailid,
          subject: subject,
          text: bodyText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          console.log("resp1", resp);
          return resp.json();
        } else {
          return resp.json().then((data) => {
            console.log(data);
          });
        }
      })
      .then((data) => {
        console.log(data.name);
        alert("Mail sent successfully...")
        history.replace("/inboxdisplay");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <Header />
      <BackButton/>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>To:</label>
          <input
            type="email"
            id="email"
            placeholder="mail id"
            ref={emailInputRef}
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="subject"> Subject</label>
          <input
            type="text"
            id='subject'
            placeholder="Subject"
            ref={subjectInputRef}
            required
          />
        </div>
        <div  className={classes.control}>
          <Editor
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default ComposeMail;