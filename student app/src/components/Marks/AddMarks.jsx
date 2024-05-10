import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


function AddMarks() {

    const [StudentID, setStudentID] = useState({})
    const [AcadamicYear, setAcadamicYear] = useState({})
    const [SubjectID, setSubjectID] = useState({})
    const [SemesterNO, setSemesterNO] = useState({})
    const [Mark, setMark] = useState({})
    const [Grade, setGrade] = useState({})

    const navigate = useNavigate();

    const StudentMarks = {
        StudentID,
        AcadamicYear,
        SubjectID,
        SemesterNO,
        Mark,
        Grade
    }

    function addMarks(e) {
        e.preventDefault();
        axios.post('http://localhost:3000/Api/Marks/add', StudentMarks)
            .then(function (res) {
                console.log(res)
                toast.success("Mark added Succesfuly!")
                navigate('/Marks')

            }).catch(function (err) {
                console.log(err)
                toast.warning('Mark canot add!')
            })
    }




    return (
        <div className="m-5 w-full">
            <div className="p-9 rounded border items-center border-gray-200 w-full " >
                <section className="mb-6">
                    <h1 className="font-sans text-lg font-medium text-center">Add Marks</h1>
                </section>
                <form onSubmit={addMarks}>
                    <div className="grid grid-cols-1 gap-6">
                        <section className="divide-y divide-gray-200">

                            <div>
                                <label className="text-sm text-gray-700 block  font-medium">Student ID</label>
                                <input required id="StudentID" type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Student ID"
                                    onChange={(e) => {
                                        setStudentID(e.target.value)
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium" >Academic Year</label>
                                <input required id="AcadamicYear" type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 
                        block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Academic Year"
                                    onChange={(e) => {
                                        setAcadamicYear(e.target.value)
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Subject ID</label>
                                <input required id="SubjectID" type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 
                        block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Subject ID"
                                    onChange={(e) => {
                                        setSubjectID(e.target.value)
                                    }}
                                />


                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Semester</label>
                                <input required maxLength={1} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" id="SemesterNo" placeholder="Enter Sem No"
                                    onChange={(e) => {
                                        setSemesterNO(e.target.value)
                                    }}


                                />


                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium" >Mark</label>
                                <input required maxLength={2} id="Address" type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                     focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Mark"
                                    onChange={(e) => {
                                        setMark(e.target.value)
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium" >Grade</label>
                                <input required maxLength={1} id="Address" type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                     focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Grade"
                                    onChange={(e) => {
                                        setGrade(e.target.value)
                                    }}
                                />
                            </div>

                        </section>




                    </div>
                    <div className=" mt-6 flex justify-center">
                        <div>
                            <button type="submit" className="py-2 px-8
                     bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Save</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default AddMarks;