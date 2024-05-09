import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";



function EditStudent() {


    let { StudentID } = useParams()

    const [studentDetails, setStudentDeatail] = useState({
        StudentID: "",
        StudentName: "",
        Gender: "",
        Birthday: "",
        Address: "",
        Email: "",
        PhoneNumber: "",
        AcadamicYear: ""
    });


    const navigate = useNavigate();

    // Get student by ID
    useEffect(function () {
        function getStudentDetail() {
            axios.get(`http://localhost:3000/Api/Students/select/${StudentID}`)
                .then(function (res) {
                    setStudentDeatail({
                        StudentID: res.data.Data[0].StudentID,
                        StudentName: res.data.Data[0].StudentName,
                        Gender: res.data.Data[0].Gender,
                        Birthday: res.data.Data[0].Birthday,
                        Address: res.data.Data[0].Address,
                        Email: res.data.Data[0].Email,
                        PhoneNumber: res.data.Data[0].PhoneNumber,
                        AcadamicYear: res.data.Data[0].AcadamicYear


                    })
                    console.log(res.data.Data)
                }).catch(function (err) {
                    console.log(err)
                })
        }
        getStudentDetail();

    }, [])

    //update student by ID
    function updateStudent(e) {
        e.preventDefault();
        axios.put(`http://localhost:3000/Api/Students/update/${StudentID}`, studentDetails)
            .then(function (res) {
                toast.success("Student update Successfully!")
                navigate('/Students')
                console.log(res.data)

            }).catch(function (error) {
                console.log(error)
                alert('Student canot add !')
                toast.warning('Student canot update!')
            })
    }



    return (
        <div className="m-5 w-full">
            <div className="p-9 rounded border items-center border-gray-200 w-full " >
                <section className="mb-6">
                    <h1 className="font-sans text-lg font-medium text-center">Update Student Details </h1>
                </section>

                <form onSubmit={updateStudent} >


                    <div className="grid grid-cols-2 gap-6">
                        <section className="divide-y divide-gray-200">
                            <h2 >Personal details </h2>
                            <div>
                                <label className="text-sm text-gray-700 block  font-medium">ID</label>
                                <input required value={studentDetails.StudentID} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Student ID"
                                    onChange={(e) => setStudentDeatail({ ...studentDetails, StudentID: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium" >Full Name</label>
                                <input required value={studentDetails.StudentName} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 
                        block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Full Name"
                                    onChange={(e) => setStudentDeatail({ ...studentDetails, StudentName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Gender </label>
                                <input required value={studentDetails.Gender} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 
                        block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Gender"
                                    onChange={(e) => setStudentDeatail({ ...studentDetails, Gender: e.target.value })}
                                />


                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Birthday</label>
                                <input required value={studentDetails.Birthday} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                    onChange={(e) => setStudentDeatail({ ...studentDetails, Birthday: e.target.value })}
                                />
                            </div>

                        </section>

                        <section className="divide-y divide-gray-200">
                            <h2>Contact deatils</h2>
                            <div>
                                <label className="block  text-gray-700  font-medium" >Addres</label>
                                <input required maxLength={35} value={studentDetails.Address} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                     focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Address"
                                    onChange={(e) => setStudentDeatail({ ...studentDetails, Address: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Email</label>
                                <input required value={studentDetails.Email} type="email" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                     focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"  placeholder="kamal@gmail.com"
                                    onChange={(e) => setStudentDeatail({ ...studentDetails, Email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Phone Number</label>
                                <input required minLength={10} value={studentDetails.PhoneNumber} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                     focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Phone Number"
                                    onChange={(e) => setStudentDeatail({ ...studentDetails, PhoneNumber: e.target.value })}
                                />
                            </div>

                        </section>
                        <section className="divide-y divide-gray-200">
                            <h2 className="">Other details</h2>
                            <div>
                                <label className="block  text-gray-700  font-medium">Academic Year</label>
                                <input required value={studentDetails.AcadamicYear} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Academic Year"
                                    onChange={(e) => setStudentDeatail({ ...studentDetails, AcadamicYear: e.target.value })}
                                />
                            </div>

                        </section>


                    </div>


                    <div className=" mt-6 flex justify-center">
                        <div>
                            <button className="py-2 px-8
                 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Update</button>
                        </div>
                    </div>
                </form>



            </div>
        </div>
    )
}
export default EditStudent;