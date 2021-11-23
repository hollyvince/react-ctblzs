import React from "react";


function MedicalTreatment(prop){

function clickHandler () {
  window.alert("Click from inside the MedicalTreatment comp")
  
}

  return(
  <div>
  {prop.treatId}
    <button style = {{color:"green"}}
    onClick = {clickHandler}>
      Click here</button>
  </div>
  );
  } 
export default MedicalTreatment;
