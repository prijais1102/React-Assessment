import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Head() {
  return (
    <div className="text-center bg-primary" >
      <h1>Student Management</h1>
      <nav>
        <Link style={{textDecoration:'none',color:'black'}} to="/">Home|</Link>
        <Link style={{textDecoration:'none',color:'black'}} to="/addstudent">AddStudent|</Link>
        <Link style={{textDecoration:'none',color:'black'}} to="/showstudent">ShowStudent</Link>
      </nav>
      <Outlet />
    </div>
  );
}
