import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";



function AddStudent() {




    const [StudentID, setStudentID] = useState("")
    const [StudentName, setStudentName] = useState("")
    const [Gender, setGender] = useState('')
    const [Birthday, setBirthday] = useState("")
    const [Address, setAddress] = useState("")
    const [Email, setEmail] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [AcadamicYear, setAcadamicYear] = useState("")
    const navigate = useNavigate();

 // Send student data to backend
    console.log(Gender)
    console.log(StudentName)

    function sendData(e) {
        e.preventDefault();
        

        const studentData = {
            StudentID,
            StudentName,
            Gender,
            Birthday,
            Address,
            Email,
            PhoneNumber,
            AcadamicYear
        }
        
        axios.post('http://localhost:3000/Api/Students/add', studentData)
            .then(function (res) {
                navigate('/Students')
                console.log(res)
                toast.success("Student added Succesfuly!")
            }).catch(function (error) {
                console.log(error)
                //alert('Student canot add !')
                toast.warning('Student canot add!')
            })
    }
 
    


    return (


        <div className="m-5 w-full">
            <div className="p-9 rounded border items-center border-gray-200 w-full " >
                <section className="mb-6">
                    <h1 className="font-sans text-lg font-medium text-center">Add a New Student</h1>
                </section>
                <form onSubmit={sendData}>
                    <div className="grid grid-cols-2 gap-6">
                        <section className="divide-y divide-gray-200">
                            <h2 >Personal details </h2>
                            <div>
                                <label className="text-sm text-gray-700 block  font-medium">ID</label>
                                <input required  id="StudentID" type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                             focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Student ID"
                                    onChange={(e) => {
                                        setStudentID(e.target.value)
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium" >Full Name</label>
                                <input required id="StudentName" type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 
                            block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Full Name"
                                    onChange={(e) => {
                                        setStudentName(e.target.value)
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Gender </label>
                                <input required id="Gender" type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 
                            block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Gender"
                                    onChange={(e) => {
                                        setGender(e.target.value)
                                    }}
                                />


                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Birthday</label>
                                <input required type="date" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                             focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" id="Birthday"
                                    onChange={(e) => {
                                        setBirthday(e.target.value)
                                    }}
                                />
                            </div>

                        </section>

                        <section className="divide-y divide-gray-200">
                            <h2>Contact deatils</h2>
                            <div>
                                <label className="block  text-gray-700  font-medium" >Addres</label>
                                <input required maxLength={35} id="Address" type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Address"
                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Email</label>
                                <input required id="Email" type="email" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"  placeholder="kamal@gmail.com"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Phone Number</label>
                                <input required minLength={10} id="PhoneNumber" type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Phone Number"
                                    onChange={(e) => {
                                        setPhoneNumber(e.target.value)
                                    }}
                                />
                            </div>

                        </section>
                        <section className="divide-y divide-gray-200">
                            <h2 className="">Other details</h2>
                            <div>
                                <label className="block  text-gray-700  font-medium">Academic Year</label>
                                <input required  id="AcademicYear" type="text"  className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                             focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Academic Year"
                                    onChange={(e) => {
                                        setAcadamicYear(e.target.value)
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
export default AddStudent;