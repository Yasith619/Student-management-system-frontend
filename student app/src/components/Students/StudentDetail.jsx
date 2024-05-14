import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";




function StudentDetail(){

let {StudentID}=useParams()

const[studentDetails,setStudentDetails]=useState([]);
const [marks, setMarks] = useState([])

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

    useEffect(function(){
        function getMarks() {
            axios.get(`http://localhost:3000/Api/Marks/get/${StudentID}`)
                .then(function (res) {
                    setMarks(res.data.Data)
                    console.log('successfully Marks!')
                    console.log(res.data.Data)
                }).catch(function (err) {
                    console.log(err)
                })
        }
        getMarks();
    },[])



    return (
        <div className="p-2 inline-flex space-x-4" >

            {
                    studentDetails.map((studentDetail) => (
                    
                   
                    <div class="bg-white rounded-lg shadow-lg p-6 max-w-xl mx-auto">
                       
                        <div class="border-b-2 border-gray-300 pb-8 mb-8 ">
                            <h2 className="text-2xl font-bold mb-4">Student Details</h2>
                            
                            <div class="text-gray-700 mb-4 text-m leading-6 font-medium">Academic Year : {studentDetail.AcadamicYear}</div>
                            <div class="text-gray-700 mb-4 text-m leading-6 font-medium">Student ID : {studentDetail.StudentID}</div>
                            <div class="text-gray-700 mb-4 text-m leading-6 font-medium">Student Name : {studentDetail.StudentName}</div>
                            <div class="text-gray-700 mb-4 text-m leading-6 font-medium">Gender : {studentDetail.Gender}</div>
                            <div class="text-gray-700 mb-4 text-m leading-6 font-medium">Birthday : {studentDetail.Birthday}</div>
                            <div class="text-gray-700 mb-4 text-m leading-6 font-medium">Address : {studentDetail.Address}</div>
                            <div class="text-gray-700 mb-4 text-m leading-6 font-medium">Email : {studentDetail.Email}</div>
                            <div class="text-gray-700 mb-4 text-m leading-6 font-medium">Phone Number : {studentDetail.PhoneNumber}</div>
                            
                            
                        </div>   
                    </div>
                )) 
            }
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Mark Sheet</h2>
                {
                    <table>
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                        <th className="py-3 px-6">Semester No</th>
                            <th className="py-3 px-6">Subject ID</th>
                            <th className="py-3 px-6">Mark</th>
                            <th className="py-3 px-6">Grade</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {marks.map((mark) =>
                            <tr key={mark.ID} >
                                 <td className="px-6 py-4 whitespace-nowrap">{mark.SemesterNO}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{mark.SubjectID}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{mark.Mark}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{mark.Grade}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
                }
            </div>

        </div>

    )
    
}

export default StudentDetail