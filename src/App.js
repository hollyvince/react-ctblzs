import React from "react";
import "./style.css";

import MedicalTreatment from "./MedicalTreatment";
import MedicalTreatmentPanel from "./MedicalTreatmentPanel";

function Welcome(prop){
  return(
    <div>
      Hi {prop.name}:) 
    </div>
  );
}

export default function App() {
  return(
    <div>
      <Welcome name = "Holly"/>
      <MedicalTreatment treatId = "11"/>
      <MedicalTreatmentPanel treatCourseId = "11"/>
    </div>
  );
}
