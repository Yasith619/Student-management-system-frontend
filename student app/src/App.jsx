import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Students from "./Pages/Student";
import Subjects from "./Pages/Subjects";
import Semesters from "./Pages/Semesters";
import Marks from "./Pages/Marks";
import AddStudent from "./components/Students/AddStudent";
import EditStudent from "./components/Students/EditStudent";
import { TfiMenuAlt } from "react-icons/tfi";
import { PiStudent } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { RiCalendarEventLine } from "react-icons/ri";
import { LuGraduationCap } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { useState } from "react";



function App() {
  const [open, setOpen] = useState(true);

  return (
     <div>  
      <div class="flex">
      <div>
        <div className={`p-8  h-screen bg-menu-color shadow-lg duration-700 ${open ? "w-60" : "w-20"}  relative`}>
          <div className="flex items-center justify-center h-16 bg-menu-color">
            <TfiMenuAlt className="text-menu-text-color absolute top-2 right-5 h-10 w-10 cursor-pointer" onClick={() => setOpen(!open)} />
            <span class={`text-menu-text-color text-lg  font-semibold ${!open && "scale-0"}`}>Dashboard</span>
          </div>


          <div className={"flex-col space-y-5"}>
            <div className="inline-flex items-center">
              <IoHomeOutline className="text-menu-text-color text-3xl " />
              <Link to="/" className={`block py-1 px-6 rounded-md hover:bg-m-h-color  text-menu-text-color  ${!open && "scale-0"}`}>HOME</Link>
            </div>

            <div className="inline-flex items-center">
              <PiStudent className="text-menu-text-color text-3xl " />
              <Link to="/Students" className={`block py-1 px-6 rounded-md hover:bg-m-h-color  text-menu-text-color  ${!open && "scale-0"}`}>STUDENTS</Link>
            </div>
            <div className="inline-flex items-center">
              <RiCalendarEventLine className="text-menu-text-color text-3xl block float-left" />
              <Link to="/Semesters" className={`block py-1 px-6 rounded-md hover:bg-m-h-color  text-menu-text-color  ${!open && "scale-0"}`}>SEMESTER</Link>
            </div>

            <div className="inline-flex items-center">
              <LuGraduationCap  className="text-menu-text-color text-3xl block float-left" />
              <Link to="/Subjects" className={`block py-1 px-6 rounded-md hover:bg-m-h-color  text-menu-text-color  ${!open && "scale-0"}`}>SUBJECTS</Link>
            </div>

            <div className="inline-flex items-center">
              <VscGraph className="text-menu-text-color text-3xl block float-left" />
              <Link to="/Marks" className={`block py-1 px-6 rounded-md hover:bg-m-h-color  text-menu-text-color  ${!open && "scale-0"}`}>MARKS</Link>
            </div>

            <div className="inline-flex items-center">
              <AiOutlineLogout className="text-menu-text-color text-3xl block float-left" />
              <Link to="/" className={`block py-1 px-6 rounded-md hover:bg-m-h-color  text-menu-text-color  ${!open && "scale-0"}`}>LOGOUT</Link>
            </div>


          </div>

        </div>
      </div>



      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/Students" element={<Students />}></Route>
        <Route path="/Subjects" element={<Subjects />}></Route>
        <Route path="/Semesters" element={<Semesters />}></Route>
        <Route path="/Marks" element={<Marks />}></Route>
        <Route path="/AddStudent" element={<AddStudent />}></Route>
        <Route path="/EditStudent/:StudentID" element={< EditStudent/>}></Route>
      </Routes>

    </div>
     </div>

    


  )
}

export default App
