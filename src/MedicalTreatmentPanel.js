import React from "react";


function MedicalTreatmentPanel(prop){


function toString(){
  return  "[ Treatment ID: " + prop.treatId + " Treatment Course ID: " + prop.treatCourseId + "]"
  ;
}  
return(
  <div>
   { toString()}
  </div>
);

}

export default MedicalTreatmentPanel;
