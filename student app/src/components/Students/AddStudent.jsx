import React from "react";
function AddStudent() {



    return (


        <div className="m-5 w-full">
            <div className="p-9 rounded border items-center border-gray-200 w-full " >
                <section className="mb-6">
                    <h1 className="font-sans text-lg font-medium text-center">Add a New Student</h1>
                </section>
                <form action="">
                    <div className="grid grid-cols-2 gap-6">
                        <section className="divide-y divide-gray-200">
                            <h2 >Personal details </h2>
                            <div>
                                <label className="text-sm text-gray-700 block  font-medium">ID</label>
                                <input type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                             focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Student ID" />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium" >Full Name</label>
                                <input type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 
                            block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Full Name" />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Gender</label>
                                <select className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                             focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" id="">

                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Birthday</label>
                                <input type="date" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                             focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" id="" />
                            </div>

                        </section>

                        <section className="divide-y divide-gray-200">
                            <h2>Contact deatils</h2>
                            <div>
                                <label className="block  text-gray-700  font-medium" >Addres</label>
                                <input type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Address" />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Email</label>
                                <input type="email" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" id="" placeholder="kamal@gmail.com" />
                            </div>

                            <div>
                                <label className="block  text-gray-700  font-medium">Phone Number</label>
                                <input type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                         focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Phone Number" />
                            </div>

                        </section>
                        <section className="divide-y divide-gray-200">
                            <h2 className="">Other details</h2>
                            <div>
                                <label className="block  text-gray-700  font-medium">Academic Year</label>
                                <input type="text" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block
                             focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter Academic Year" />
                            </div>
                        </section>


                    </div>
                </form>
                <div className=" mt-6 flex justify-center">
                    <div>
                        <button type="submit" className="py-2 px-8
                         bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddStudent;