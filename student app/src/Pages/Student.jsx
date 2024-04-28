import React from "react";
import { Link } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { MdPersonSearch } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";


function Students() {

    const [students, setStudents] = useState([]);

    useEffect(function () {
        function getStudentsList() {
            axios.get('http://localhost:3000/Api/Students/get')
                .then(function (res) {
                    setStudents(res.data.Data)
                    console.log(res.data.Data)
                }).catch(function (err) {
                    console.log(err)
                });
        }
        getStudentsList()
    }, []);



    return (
        <div className="w-full " >

            <div className=" py-6 px-6 flex space-x-20">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">STUDENTS</h3>
                    <p className="text-gray-600 mt-2">
                    Here, you can effortlessly add, search, edit, and update Student personal information with ease.
                    </p>
                </div>

                <div className="inline-flex items-center ">
                    <IoMdPersonAdd className="text-3xl" />
                    <Link to="/AddStudent"><h3 className="px-3">Add Student</h3></Link>
                </div>

                <div className="inline-flex items-center">
                    <form action="">
                        <div className="inline-flex items-center">
                            <MdPersonSearch className="text-4xl" />
                            <input type="text" placeholder="Search Student by ID" 
                            className="p-2 border-2 rounded-full border-neutral-500 " />
                        </div>
                    </form>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">StudentID</th>
                                <th className="py-3 px-6">Student Name</th>
                                <th className="py-3 px-6">Gender</th>
                                <th className="py-3 px-6">Birthday</th>
                                <th className="py-3 px-6">Address</th>
                                <th className="py-3 px-6">Email</th>
                                <th className="py-3 px-6">Phone Number</th>
                                <th className="py-3 px-6">Academic Year</th>
                                <th className="py-3 px-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                          {
                             students.length >0 ? students.map(student => (
                                <tr key={student.StudentID}>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.StudentID}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.StudentName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.Gender}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.Birthday}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.Address}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.Email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.PhoneNumber}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.AcadamicYear}</td>
                                    <td>
                                        <div  className="inline-flex items-center">
                                        <Link to={`/EditStudent${student.StudentID}`}><MdEdit className="text-2xl " /></Link>
                                        <button className="px-5" type="button">< MdDeleteForever className="text-2xl "/></button>
                                        </div>
                                        
                                    </td>
                                </tr>
                            )): (
                                <tr>
                                <td className="px-6 py-4 whitespace-nowrap ">No data or Server was disconented !</td>
                            </tr>
                            )
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Students;
//