import React from "react";
import { useParams } from "react-router-dom";

function EditMarks(){


    let { StudentID } = useParams()




    return(

      
        <div> Student ID ={StudentID}</div>
    )
}
export default EditMarks;