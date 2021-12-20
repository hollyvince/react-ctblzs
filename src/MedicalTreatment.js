//React imported
import React from "react";

//MedicalTreatment component defined
function MedicalTreatment(props){

  // creates a function called toString containing the props of MedicalTreatment. Props are defined in App.js and are printed further down 'MedicalTreatment'
  function toString(){ 
    return "[ Treatment ID: " + props.treatId + "," +
           " Treatment Course ID: " + props.treatCourseId + "," +
           " Type: " + props.type + "," +
           " Category: " + props.category + "," +
           " Name: " + props.name + "," +
           " Start Date: " + props.startDate + "]" ;
  }  
  
  // Prints the toString function containing the props 
    return(
    <div>
     {toString(props)}
    </div>
  ); 
  }
  ;
export default MedicalTreatment;
