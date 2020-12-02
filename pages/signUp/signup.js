import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'


export default function loginPage() {
  console.log("inside login page")

  const initialFormData = Object.freeze({
  usr_email: "",
  login_password: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData.usr_email);
    // ... submit to API or something
    fetch(
      "https://GroupProjectGYM.zihaodong.repl.co/api/writeToDatabase", 
      {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.usr_email,
              _id: "useless",
              likedBy: "useless",
              action: "signup",
              password: formData.login_password,
              nickname: formData.user_nickname,
            }),
      }
    ).then(() => {
              //window.alert("Successfully Signed Up! Please Go back and log in...")
              console.log("loading...")
              Router.push("https://GroupProjectGYM.zihaodong.repl.co")
            })
  };

  return (
    <div>
      <h1>
        Sign in
        <button className="Home">
          <a href="..">
            Back
          </a>
        </button>
      </h1>
      <form id="signup">
        <ul>
          Email:    <input className="inputStr" type="email" name="usr_email" placeholder="example@xxx.xxx" onChange={handleChange}/>
        </ul>
        <ul>
          Password: <input className="inputStr" type="password" name="login_password" 
          placeholder="8-digit" onChange={handleChange}/>
        </ul>
        <ul>
          Nickname: <input className="inputStr" name="user_nickname"
          placeholder="preferred name" onChange={handleChange}/>
        </ul>
      </form>
      <button className="submitBtn" onClick={handleSubmit}>Sign Up</button>
      <style jsx> {`
        h1 {
          background: #3399ff;
          color: #ffffff;
        }
        .Home {
          background: #ffff00;
          position: absolute;
          top: 25px;
          right: 25px;
          width: 80px;
          height: 35px; 
        }
        .Home:hover{
          background: #3399ff;
        }
        .submitBtn {
          position: absolute;
          top: 195px;
          left: 50px;
        }
        a {
          color: #000000;
        }
      `}</style>
    </div>
  )
}