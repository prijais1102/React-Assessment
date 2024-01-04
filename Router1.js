import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import AddStudent from "./AddStudent";
import ShowStudent from "./ShowStudent";
import Head from "./Head";

export default function Router1() {
  return (
    <div>
     <BrowserRouter>
     <Head/>
        <Routes>
            <Route index element={<h2 className="text-center bg-success"> Home Page</h2> } />
            <Route path="/addstudent" element={<AddStudent/>} />
            <Route path="/showstudent" element={<ShowStudent/>} />
          
        </Routes>
        </BrowserRouter>
      
    </div>
  );
}
