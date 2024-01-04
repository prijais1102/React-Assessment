import axios from "axios";
import React, { useState } from "react";
import ShowStudent from "./ShowStudent";

const validMessageMobile = [];
const validMessageName = [];
function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    address: "",
    mobileNumber: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    dob: "",
    gender: "",
    address: "",
    mobileNumber: "",
  });
  const validMobile = () => {
    if (formData.mobileNumber.length != 10) {
      validMessageMobile.push("Enter 10-digit mobile number");
    }
  };
  const validName = () => {
    for(let i=0;i<formData.name.length;i++)
    {
    if(!isNaN(formData.name[i]))
    {
      validMessageName.push("Enter valid name");
      break; 
    }
    }
  }

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value ? "" : `Please enter ${name}.`,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const errors = {};
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = `Please enter ${key}.`;
      }
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      axios.post("http://localhost:8000/student", formData);
    }
  };

  return (
    <div className="container d-center">
      <h2 className="text-center">Add Student</h2>
      <form onSubmit={submitHandler}>
        <div  className=" justify-content-center d-flex" >
          <label className="text-align-left">Name: </label>
          <input
            className="form-control w-25"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={validName}
          />
          <span>{formErrors.name}</span>
          <span>{validMessageName}</span>
        </div>
        <div className=" justify-content-center d-flex">
          <label>DOB: </label>
          <input
            className="form-control w-25"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
          <span>{formErrors.dob}</span>
        </div>
        <div className=" justify-content-center d-flex">
          <label>Gender: </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleInputChange}
            />
            Female
          </label>
          <span>{formErrors.gender}</span>
        </div>
        <br></br>
        <div className=" justify-content-center d-flex">
          <label>Address: </label>
          <input
            className="form-control w-25"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <span>{formErrors.address}</span>
        </div>
        <div className=" justify-content-center d-flex" >
          <label>Mobile Number: </label>
          <input
            className="form-control w-25"
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            onBlur={validMobile}
          />
          <span>{formErrors.mobileNumber}</span>
          <span>{validMessageMobile}</span>
        </div>
        <br>
        </br>
        <div className="justify-content-center d-flex">
        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
