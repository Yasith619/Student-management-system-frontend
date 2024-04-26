import React from "react";
import { Link } from "react-router-dom";
import { IoMdPersonAdd } from "react-icons/io";
import { MdPersonSearch } from "react-icons/md";





function Students() {
    return (
        <div className="w-full " >

            <div className=" py-6 px-6 flex space-x-20">
            <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        STUDENTS
                    </h3>
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
                                <th className="py-3 px-6">Username</th>
                                <th className="py-3 px-6">Email</th>
                                <th className="py-3 px-6">Position</th>
                                <th className="py-3 px-6">Salary</th>
                                <th className="py-3 px-6">Salary</th>
                                <th className="py-3 px-6">Action</th>
                            </tr>
                        </thead>
                        {/*<tbody className="text-gray-600 divide-y">
                          {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                                </tr>
                            ))
                        }
                    </tbody>*/}
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Students;
//