import React, { useState, useEffect } from "react";
import "./ProfileTable.css";
import data from "./mock-data-profile.json";
import ProfileReadOnlyRow from "./ProfileReadOnlyRow";
import axios from "axios";

function YourBidsTable() {
  const [contacts, setContacts] = useState([]);
  const [selectUNI, setSelectUNI] = useState("");
  const [clicked, setClicked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [data, setData] = useState([]);
  const [clicked1, setClicked1] = useState(false);

  // useEffect(() => {
  //   //to get the user stored in the local storage
  //   const user = JSON.parse(localStorage.getItem("currentUser"));

  //   if (user) {
  //     setCurrentUser(user);

  //     const id = user.studentID;
  //     axios.get(`http://localhost:5000/students/${id}`).then((response) => {
  //       setContacts(response.data);
  //     });

  //     axios.get(`http://localhost:5000/university`).then((response) => {
  //       setData(response.data);
  //     });
  //   }
  // }, []);

  function handleClick() {
    setClicked(!clicked);
  }
  function handleClick1() {
    setClicked1(!clicked1);
    document.getElementById("disappears").innerHTML = "";
  }

  return (
    <div className="profile-tablecontainer">
      <h1>Your Bids</h1>

      <hr className="horizontal-line"></hr>

      <form className="profile-form">
      <table className="table-design">
          <thead className="table-head">
            <tr className="table-row">
              <th className="table-h">Bid ID</th>
              <th className="table-h">House ID</th>
              <th className="table-h">House Name</th>
              <th className="table-h">House Price</th>
              <th className="table-h">Bid Value</th>
              <th className="table-h">Status</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <ProfileReadOnlyRow contact={contact} />
            ))}
          </tbody>
        </table>
      </form>

      <form className="unisubmission"></form>
    </div>
  );
}

export default YourBidsTable;
