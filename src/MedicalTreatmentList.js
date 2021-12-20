//React imported
import React from "react";

function MedicalTreatmentList(props) {
  const MedicalTreatmentList = props.MedicalTreatmentListJson;
//JSON date for the instances to be displayed in App.js
  const items = JSON.parse(MedicalTreatmentList);

//array map operator used to list items. attributes are defined in App.js
  const MedicalTreatmentL = items.map(item => 
  <li> 
    {item.id}, {item.CourseId}, {item.type}, {item.category}, {item.name}, {item.date}
  </li>
  );
  
 //MedicalTreatmentL printed as a list. The records are defined in App.js 
  return (
    <div>
    Treatment Records as a list: 
    {MedicalTreatmentL}
    </div>
  )
}

//component exported
export default MedicalTreatmentList;