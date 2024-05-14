import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";



function MarksDetails() {

    let { StudentID, SemesterNO } = useParams()

    const [marks, setMarks] = useState([])
    const[studentDetails,setStudentDetails]=useState([]);

    useEffect(function () {
        function getMarks() {
            axios.get(`http://localhost:3000/Api/Marks/get/${StudentID}/${SemesterNO}`)
                .then(function (res) {
                    setMarks(res.data.Data)
                    console.log('successfully Marks!')
                    console.log(res.data.Data)
                }).catch(function (err) {
                    console.log(err)
                })
        }
        getMarks();

    }, [])
    useEffect(function () {

        function getStudentDetailById() {
            axios.get(`http://localhost:3000/Api/Students/select/${StudentID}`)
                .then(function (res) {
                    setStudentDetails(res.data.Data)
                    console.log(res.data.Data)
                }).catch(function (err) {
                    console.log(err)
                })
        }
        getStudentDetailById();

    }, []) 


    return (
        <div className="inline-flex">

            
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl mx-auto">
                {
                    studentDetails.map(studentDetail =>
                        <div>
                            <h1 className="text-gray-700 mb-4 text-m leading-6 font-medium ">Student ID - {StudentID}</h1>
                            <h1 className="text-gray-700 mb-4 text-m leading-6 font-medium">Semester - {SemesterNO} </h1>
                            <h1 className="text-gray-700 mb-4 text-m leading-6 font-medium">Student Name - {studentDetail.StudentName}</h1>
                            <h1 className="text-gray-700 mb-4 text-m leading-6 font-medium ">Academic Year - {studentDetail.AcadamicYear}</h1>
                        </div>
                    )
                }
            </div>

            <div>
                <table>
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Subject ID</th>
                            <th className="py-3 px-6">Mark</th>
                            <th className="py-3 px-6">Grade</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {marks.map((mark) =>
                            <tr key={mark.SubjectID} >
                                <td className="px-6 py-4 whitespace-nowrap">{mark.SubjectID}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{mark.Mark}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{mark.Grade}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MarksDetails;