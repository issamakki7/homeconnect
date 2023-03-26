import React, { useEffect, useState } from "react";
import "./ProfileCard.css";

function ProfileCard() {
  const [currentUser, setCurrentUser] = useState({});
  // useEffect(() => {
  //   //to get the user stored in the local storage
  //   const user = JSON.parse(localStorage.getItem("currentUser"));

  //   if (user) {
  //     setCurrentUser(user);
  //   }
  // }, []);

  return (
    <div>
      <header className="header-section">
        <h1 className="name-section">
          {currentUser.fName} {currentUser.lName}
        </h1>
        <h3>{currentUser.username}</h3>
      </header>

      <div className="basic-info">
        <h1>Personal Information</h1>

        <hr className="horiz-line"></hr>

        <div className="info-section">
          <div className="id-section">
            <h2 className="bold-text">Name: {currentUser.name}</h2>
          </div>

          <div className="email-section">
            <h2 className="bold-text">Email: {currentUser.email}</h2>
          </div>

          <div className="mobileno-section">
            <h2 className="bold-text">Mobile Number: {currentUser.mobileNo}</h2>
          </div>

          {/* <div className="classgrade-section">
            <h2 className="bold-text">Class: {currentUser.classYear}</h2>
          </div> */}
          
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
