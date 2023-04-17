import React from "react";

const AdminEditableRow = ({
  contact,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>{contact.proctorID}</td>
      <td>{contact.examInstanceID}</td>
      <td></td>
      <td>
        <button className="admin-btn" type="submit">
          Save
        </button>
        <button className="admin-btn" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default AdminEditableRow;