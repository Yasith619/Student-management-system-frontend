import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";



function EditMarks() {

//get id and Student Id from URl

    let { ID, StudentID } = useParams()

    const [marks, setMarks] = useState({
        ID: "",
        StudentID: "",
        AcadamicYear: "",
        SubjectID: "",
        SemesterNO: "",
        Mark: "",
        Grade: ""
    });
    const navigate = useNavigate();

//get Marks by Student id
    useEffect(function () {
        function getMarks() {
            axios.get(`http://localhost:3000/Api/Marks/get/${StudentID}`)
                .then(function (res) {
                    setMarks({
                        ID: res.data.Data[0].ID,
                        StudentID: res.data.Data[0].StudentID,
                        AcadamicYear: res.data.Data[0].AcadamicYear,
                        SubjectID: res.data.Data[0].SubjectID,
                        SemesterNO: res.data.Data[0].SemesterNO,
                        Mark: res.data.Data[0].Mark,
                        Grade: res.data.Data[0].Grade

                    })
                    console.log('get marks successfully')
                }).catch(function (err) {
                    console.log(err)
                })
        }
        getMarks();
    }, [])

//update marks by  col id
    function updateMarks(e) {
        e.preventDefault();
        axios.put(`http://localhost:3000/Api/Marks/update/${ID}`, marks)
            .then(function (res) {
                toast.success("Mark update Successfully!")
                navigate('/Marks')
                console.log('update sucess')
               

            }).catch(function (error) {
                console.log(error)
                toast.warning('Mark canot update!')
            })
    }



    return (


        <div>
            <div className="m-5 w-full">
                <div className="p-9 rounded border items-center border-gray-200 w-full " >
                    <section className="mb-6">
                        <h1 className="font-sans text-lg font-medium text-center">Update Student ID  {StudentID} Marks </h1>
                    </section>
                    <form onSubmit={updateMarks}>
                        <div className="grid grid-cols-1 gap-6">
                            <section className="divide-y divide-gray-200">
                                <div>
                                    <label className="text-sm text-gray-700 block  font-medium">ID</label>
                                    <input required value={marks.ID} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Student ID"

                                    />
                                </div>

                                <div>
                                    <label className="text-sm text-gray-700 block  font-medium">Student ID</label>
                                    <input required value={marks.StudentID} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Student ID"

                                    />
                                </div>

                                <div>
                                    <label className="block  text-gray-700  font-medium" >Academic Year</label>
                                    <input required value={marks.AcadamicYear} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 
                        block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Academic Year"
                                        onChange={(e) => {
                                            setMarks({ ...marks, AcadamicYear: e.target.value })
                                        }}
                                    />
                                </div>

                                <div>
                                    <label className="block  text-gray-700  font-medium">Subject ID</label>
                                    <input required value={marks.SubjectID} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 
                        block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Subject ID"

                                    />


                                </div>

                                <div>
                                    <label className="block  text-gray-700  font-medium">Semester</label>
                                    <input required maxLength={1} value={marks.SemesterNO} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"  placeholder="Enter Sem No"
                                        onChange={(e) => {
                                            setMarks(({ ...marks, SemesterNO: e.target.value }))
                                        }}
                                    />
                                </div>

                                <div>
                                    <label className="block  text-gray-700  font-medium" >Mark</label>
                                    <input required maxLength={2} value={marks.Mark} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                     focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Mark"
                                        onChange={(e) => {
                                            setMarks(({ ...marks, Mark: e.target.value }))
                                        }}
                                    />
                                </div>

                                <div>
                                    <label className="block  text-gray-700  font-medium" >Grade</label>
                                    <input required maxLength={1} value={marks.Grade} type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                     focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Grade"
                                        onChange={(e) => {
                                            setMarks(({ ...marks, Grade: e.target.value }))
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
        </div>
    )
}
export default EditMarks;