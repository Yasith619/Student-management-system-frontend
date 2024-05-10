import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddChart } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";




function Marks(){

const[marks ,setMarks]=useState([]);

useEffect(function(){
    function getMarks(){
        axios.get('http://localhost:3000/Api/Marks/get')
        .then(function(res){
            setMarks(res.data.Data)
            console.log('successfully Marks!')
            console.log(res.data.Data)
        }).catch(function(err){
            console.log(err)        
        })
    }
    getMarks();
    
},[])







    return(
        <div>
            <div className=" py-1 px-6 flex space-x-20">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Marks & Grades</h3>
                    <p className="text-gray-600 mt-2">
                        Here, you can effortlessly add, search, edit, and update Student Marks with ease.
                    </p>
                </div>
                <div className="inline-flex items-center ">
                    <MdOutlineAddChart className="text-3xl" />
                    <Link to="/AddStudentMarks"><h3 className="px-3 ">Add Marks</h3></Link>
                </div>
                <div className="inline-flex items-center">
                    <div className="inline-flex space-x-2 items-center">
                        <input type="search" placeholder="  Search Student ID"
                            className="px-3 border-2 rounded-full border-neutral-500 "
                            onChange={(e)=>{
                                setQuery(e.target.value)
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8" >
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">

                    <div className="table-body" style={{ maxHeight: "420px", overflowY: "auto" }}>
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                                <tr>
                                    <th className="py-3 px-6">ID</th>
                                    <th className="py-3 px-6">Student ID</th>
                                    <th className="py-3 px-6">Academic Year</th>
                                    <th className="py-3 px-6">Subject ID</th>
                                    <th className="py-3 px-6">Semester No</th>
                                    <th className="py-3 px-6">Mark</th>
                                    <th className="py-3 px-6">Grade</th>
                                    <th className="py-3 px-6">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 divide-y">
                                {
                                    marks.length > 0 ? marks.map(mark => (
                                        <tr key={mark.ID}>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.ID}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.StudentID}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.AcadamicYear}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.SubjectID}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.SemesterNO}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.Mark}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.Grade}</td>

                                            <td>
                                                <div className="inline-flex px-1 items-center">
                                                    <Link to={`/EditStudentMarks/${mark.StudentID}`}><MdEdit className="text-2xl" /></Link>
                                                    <button className="px-3" type="button"><MdDeleteForever className="text-2xl" /></button>
                                                    <Link to={`/ViewMarksDetails/${mark.StudentID}`}><GrFormView className="text-3xl" /></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td>no data</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Marks;