import React from "react";
import { Link } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { GrFormView } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'




function Students() {


    const [students, setStudents] = useState([]);
    const [query, setQuery] = useState("")
    const [filteredItems, setFilteredItems] = useState([]);
   
    

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

//filter by name
    useEffect(function () {
        if (query.length) {
            const filterUsers = students.filter((student) => {
                return (student.StudentName).toLowerCase().includes(query.toLowerCase());
            });
            setFilteredItems(filterUsers)
        } else {
            setFilteredItems([])
        }
    }, [query]);

//Delete student

    function deleteStudent(StudentID) {
        Swal.fire({
            title: "Are you sure you want to delete this student?",
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: "#1e1b4b",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/Api/Students/delete/${StudentID}`)
                    .then(function (res) {
                        toast.success("Student delete Successfully!")
                        console.log(res.data)
                    }).catch(function (err) {
                        console.log(err)
                        toast.warning('Failed to delete student!')
                    })
            }
        });
    }


    return (
        <div >
            <div className=" py-1 px-6 flex space-x-20">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">STUDENTS</h3>
                    <p className="text-gray-600 mt-2">
                        Here, you can effortlessly add, search, edit, and update Student personal information with ease.
                    </p>
                </div>
                <div className="inline-flex items-center ">
                    <IoMdPersonAdd className="text-3xl" />
                    <Link to="/AddStudent"><h3 className="px-3 ">Add Student</h3></Link>
                </div>
                <div className="inline-flex items-center">
                    <div className="inline-flex space-x-2 items-center">
                        <input type="search" placeholder="  Search Student Name"
                            className="px-3 border-2 rounded-full border-neutral-500 "
                            onChange={(e)=>{
                                setQuery(e.target.value)
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
    <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
        
        <div className="table-body" style={{ maxHeight: "420px", overflowY: "auto" }}>
            <table className="w-full text-sm text-left">
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
                        <th className="py-3 px-6">Action</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                    {filteredItems.length > 0 ? filteredItems.map((student) =>
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
                                <div className="inline-flex px-2 items-center">
                                    <Link to={`/Edit/${student.StudentID}`}><MdEdit className="text-2xl" /></Link>
                                    <button  onClick={()=>deleteStudent(student.StudentID)} className="px-3" type="button"><MdDeleteForever className="text-2xl" /></button>
                                    <Link to={`/Detail/${student.StudentID}`}><GrFormView className="text-3xl" /></Link>
                                </div>
                            </td>
                        </tr>) :
                        students.map(student => (
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
                                    <div className="inline-flex px-1 items-center">
                                        <Link to={`/Edit/${student.StudentID}`}><MdEdit className="text-2xl" /></Link>
                                        <button  onClick={()=>deleteStudent(student.StudentID)} className="px-3" type="button"><MdDeleteForever className="text-2xl" /></button>
                                        <Link to={`/Detail/${student.StudentID}`}><GrFormView className="text-3xl" /></Link>
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
export default Students;
