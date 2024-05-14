import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddChart } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";




function Marks(){


const[marks ,setMarks]=useState([]);
const[search,setSearch]=useState("")
const[filteredMarks,setFilteredMarks]=useState([])

//get marks list from backend
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

// filter marks

useEffect(function(){
    if (search.length ) {
        const filterMarks = marks.filter((marks) => {
            const StudentID=marks.StudentID ? marks.StudentID.toString().toLowerCase():''
            const SemesterNo=marks.SemesterNO ? marks.SemesterNO.toString().toLowerCase():''
            // const AcadamicYear=marks.AcadamicYear ? marks.AcadamicYear.toString().toLowerCase():''
            return (SemesterNo.includes(search.toLowerCase()) || StudentID.includes(search.toLowerCase()) )
        });
        setFilteredMarks(filterMarks)
    } else {
        setFilteredMarks([])
    }
},[search])

    return(
        <div>
            <div className=" py-1 px-6 flex space-x-20">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">Marks & Grades</h3>
                    <p className="text-gray-600 mt-2">
                        Here, you can effortlessly add, search, edit, and update marks of students with ease.
                    </p>
                    
                </div>
                <div className="inline-flex items-center ">
                    <MdOutlineAddChart className="text-3xl" />
                    <Link to="/AddStudentMarks"><h3 className="px-3 ">Add Marks</h3></Link>
                </div>
                <div className="inline-flex items-center">
                    <div className="inline-flex space-x-2 items-center">
                       
                         <input type="search"  placeholder="Search Student ID"
                            className=" border-2 rounded border-neutral-500 "
                            onChange={(e)=>{
                                setSearch(e.target.value)
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
                                    <th className="py-3 px-6">Semester No</th>
                                    <th className="py-3 px-6">Subject ID</th>
                                    <th className="py-3 px-6">Mark</th>
                                    <th className="py-3 px-6">Grade</th>
                                    <th className="py-3 px-6">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600 divide-y">
                                {
                                    filteredMarks.length > 0 ? filteredMarks.map((mark) =>
                                        <tr key={mark.ID}>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.ID}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.StudentID}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.AcadamicYear}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.SemesterNO}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.SubjectID}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.Mark}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.Grade}</td>
                                            <td>
                                                <div className="inline-flex px-2 items-center">
                                                <Link to={`/EditStudentMarks/${mark.StudentID}`}><MdEdit className="text-2xl" /></Link>
                                                    <button className="px-3" type="button"><MdDeleteForever className="text-2xl" /></button>
                                                    <Link to={`/ViewMarksDetails/${mark.StudentID}/${mark.SemesterNO}`}><GrFormView className="text-3xl" /></Link>
                                                </div>
                                            </td>
                                        </tr>) :
                                          marks.map(mark => (
                                        <tr key={mark.ID}>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.ID}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.StudentID}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.AcadamicYear}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.SemesterNO}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.SubjectID}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.Mark}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{mark.Grade}</td>

                                            <td>
                                                <div className="inline-flex px-1 items-center">
                                                    <Link to={`/EditStudentMarks/${mark.StudentID}`}><MdEdit className="text-2xl" /></Link>
                                                    <button className="px-3" type="button"><MdDeleteForever className="text-2xl" /></button>
                                                    <Link to={`/ViewMarksDetails/${mark.StudentID}/${mark.SemesterNO}`}><GrFormView className="text-3xl" /></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    )) 
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