import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

function ShowStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/student");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card class="" style={{ width: "18rem",textAlign:"center",backgroundColor:"lightpink" }}>
      <Card.Body>
        {students.map((student) => (
          <div key={student.id}>
            <Card.Title >ID: {student.id}</Card.Title>
            <Card.Text style={{color:"white"}}>Name: {student.name}</Card.Text>
            <Card.Text>DOB: {student.dob}</Card.Text>
            <Card.Text>Gender: {student.gender}</Card.Text>
            <Card.Text>Address: {student.address}</Card.Text>
            <Card.Text>Mobile No: {student.mobileNumber}</Card.Text>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default ShowStudent;
