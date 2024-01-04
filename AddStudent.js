import axios from 'axios';
import React, { useState } from 'react';
 
 
function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    address: '',
    mobileNumber: '',
  });
 
  const [formErrors, setFormErrors] = useState({
    name: '',
    dob: '',
    gender: '',
    address: '',
    mobileNumber: '',
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: value ? '' : `Please enter ${name}.`,
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
    
    // validateName(formData.name)
    // {
    //     // if(formData.name)

    // }
    
 
   
    if (Object.keys(errors).length === 0) {
       axios.post('http://localhost:8000/student', formData); 
    }
  };
 
 
 
  return (
    <div class="container d-center" >
      <h2>Add Student</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <span>{formErrors.name}</span>
        </div>
        <div>
          <label>Student DOB:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />
          <span>{formErrors.dob}</span>
        </div>
        <div>
          <label>Student Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleInputChange}
            />
            Female
          </label>
          <span>{formErrors.gender}</span>
        </div>
        <div>
          <label>Student Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <span>{formErrors.address}</span>
        </div>
        <div>
          <label>Mobile Number:</label>
          <input
            type="number"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
          />
          <span>{formErrors.mobileNumber}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
 
export default AddStudent;