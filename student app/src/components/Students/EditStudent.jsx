import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function EditStudent(){


let {StudentID}=useParams()

const[studentDetail,setStudentDeatail]=useState([]);

useEffect(function(){
function getStudentDetail(){
    axios.get(`http://localhost:3000/Api/Students/select/${StudentID}`)
    .then(function(res){
        setStudentDeatail(res.data)
        console.log(res.data)
    }).catch(function(err){
        console.log(err)
    })
}
getStudentDetail();

},[])        

    return(
       <div>
         <h2>id  </h2>
       </div>
    )
}
export default EditStudent;