import React from "react";

const AdminReadOnlyRow = ({contact}) => {
  return (
    <tr>
      <td className="rows">{contact.examInstanceID}</td>
      <td className="rows">{contact.examDate}</td>
      <td className="rows">{contact.examName}</td>
      <td className="rows">{contact.examScore}</td>
      <td className="rows">{contact.vrlink}</td>
    </tr>
  );   
};

export default AdminReadOnlyRow;