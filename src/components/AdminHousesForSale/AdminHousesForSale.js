import React, {useEffect,useState,Fragment} from 'react';
import AdminReadOnlyRow from "./AdminReadOnlyRow";
import AdminEditableRow from './AdminEditableRow';
import axios from "axios";
import { nanoid } from "nanoid";
import data from './mock-data-profile.json'

import './AdminHousesForSale.css';

function AdminHousesForSale(props) {
    const [contacts, setContacts] = useState([]);

    const [editFormData, setEditFormData] = useState({
      studentID: "",
      examInstanceID: "",
      examName: "",
      examScore: "",
    });
  
    const [editContactId, setEditContactId] = useState(null);

    useEffect(() => {
      axios.get("http://localhost:5000/admin").then((response) => {
        setContacts(response.data)
      });
    });

      const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };



    const handleEditFormSubmit = async (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        studentID: editFormData.studentID,
        examInstanceID: editFormData.examInstanceID,
        examName: editFormData.examName,
        examScore: editFormData.examScore
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.examInstanceID === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
      const examInstanceID = editFormData.examInstanceID;
      const studentID = editFormData.studentID;

      const response = await axios.put(`http://localhost:5000/admin/`, {
        examScore: editFormData.examScore,
        examInstanceID, studentID

      })
      if(response.data.message){
        alert(response.data.message);
      }
      if(response.status != 200){
        console.log("error !")
      }
    };

  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.examInstanceID);
  
      const formValues = {
        studentID: contact.studentID,
        examInstanceID: contact.examInstanceID,
        examName: contact.examName,
        examScore: contact.examScore,
        vrlink: contact.vrlink,
      };
  
      setEditFormData(formValues);

    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };



    const handleDeleteClick = async (contact) => {
      

     


      axios.delete(`http://localhost:5000/admin/`, {data: {examInstanceID: contact.examInstanceID, studentID: contact.studentID}}).then((response) => {
        setContacts(contacts.filter((val) => {
          return val.examInstanceID != contact.examInstanceID && val.studentID!=contact.studentID
        }))

    })


    };
    return (
      <div className="profile-tablecontainer">
        <h1>Houses For Sale</h1>
        <hr className="horizontal-line"></hr>

        <form className='profile-form' onSubmit={handleEditFormSubmit}>
          <table className="table-design">
            <thead className="table-head">
              <tr className="table-row">
              <th className="table-h">House ID</th>
              <th className="table-h">House Address</th>
              <th className="table-h">House Price</th>
              <th className="table-h">Company Visit Request</th>
              <th className="table-h">VR Space Link</th>
              </tr>
            </thead>
            <tbody>
              {data.map((contact) => (
                <Fragment>
                  {editContactId === contact.examInstanceID && editFormData.studentID === contact.studentID ? (
                    <AdminEditableRow
                      contact = {contact}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <AdminReadOnlyRow
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
  
      </div>
    );
  };
  

export default AdminHousesForSale;