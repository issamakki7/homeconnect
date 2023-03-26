import React from "react";

const ProfileReadOnlyRow = ({contact}) => {
  return (
    <tr>
      <td className="rows">{contact.examInstanceID}</td>
      <td className="rows">{contact.examDate}</td>
      <td className="rows">{contact.examName}</td>
      <td className="rows">{contact.examScore}</td>
    </tr>
  );   
};

export default ProfileReadOnlyRow;