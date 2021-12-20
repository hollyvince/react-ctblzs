// React and CSS style sheet imported into App.js
import React from "react";
import "./style.css";
// 3 Components imported into App.js
import MedicalTreatment from "./MedicalTreatment";
import MedicalTreatmentPanel from "./MedicalTreatmentPanel";
import MedicalTreatmentList from "./MedicalTreatmentList";

//App component defined  
export default function App() {
//Json records relating to MedicalTreatmentList defined. 
  const jsonRecords = [{id: "A23", CourseId: "Classic", type: "Emergency", category: "Medium", name: "Apple", date: "03/04/2021"}];
  const recordsText = JSON.stringify(jsonRecords);

  return(
    <div>
      {/* MedicalTreatment component: attributes deifned and printed in App.js */}
      <MedicalTreatment treatId = "11" 
      treatCourseId = "12 years"
      type = "Logistics" 
      category = "High"
      name = "Holly"
      startDate = "12/09/2021"/>
      <br/>
      {/* MedicalTreatmentList added to App.js to ensure it is printed */}
      <MedicalTreatmentList MedicalTreatmentListJson = {recordsText} />
      <br/>
      {/* MedicalTreatmentPanel added to App.js to ensure it is printed */}
      <MedicalTreatmentPanel />
              
    </div>
  );
}
