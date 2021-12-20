// React imported
import React from "react";

//Functional component which stores props and returns JSX files
function MedicalTreatmentPanel (){

  // All atributes as react hooks. 'React.useState' creates setter methods for the attributes.
    const [treatId, settreatId] = React.useState("");
    const [treatCourseId, settreatCourseId] = React.useState("");
    const [type, settype] = React.useState("");
    const [category, setcategory] = React.useState("");
    const [name, setname] = React.useState("");
    const [startDate, setStartDate] = React.useState("");

// Click Handler function which relates to the 'preview' button. This enables inputted values to be previewed in an alert box, which will appear upon clicking the 'preview treatments' button. 
function showClickHandler(){
  window.alert("[" + "Treatment Id: "+ treatId +", Treatment Course Id: "+ treatCourseId + ", Type: " + type + ", Category: " + category + ", Name: " + name + ", Start Date: " + startDate + "]");
}  
// Click handler function which relates to the 'clear treatments buttons. This enables inputted values to be discarded.
function clearClickHandler () {
  settreatId("");
  settreatCourseId("");
  settype("");
  setcategory("");
  setname("");
  setStartDate("");
}  
  return (
    <div>
{/* Placeholder box for input messages. Using the input tag enables a free text field for all of the attributes defined in the MedicalTreatmentPanel component.*/}
  <input placeholder = "Enter Treatment Id" 
    value = {treatId} 
    onChange = {(e) =>  settreatId(e.target.value) } />
      <br/>
      <br/>
{/* Treatment Course Id input box */}
  <input placeholder = "Enter Treatment Course Id" 
    value = {treatCourseId} 
    onChange = {(e) =>  settreatCourseId(e.target.value) } />
      <br/>
      <br/>
{/* Type input box */}
  <input placeholder = "Enter Type" 
    value = {type} 
    onChange = {(e) =>  settype(e.target.value) } />
      <br/>
      <br/>
{/* Category input box */}
  <input placeholder = "Enter Category" 
    value = {category} 
    onChange = {(e) =>  setcategory(e.target.value) } />
      <br/>
      <br/>
{/* Name input box */}
  <input placeholder = "Enter Name" 
    value = {name} 
    onChange = {(e) =>  setname(e.target.value) } />
      <br/>
      <br/>
  {/* Date field, with input type as 'date' allowing for a date drop-down field */}
 {"Enter the date: "} <br/>
  <input type = "date"
   value = {startDate}
   onChange = { (e) => setStartDate(e.target.value) } />
      <br/>
      <br/>
  
{/* Prints the data inputted as it is typed. Each attribute sits on a new line for a clear view */}
  Data entered:<br/>
  - {treatId}<br/>
  - {treatCourseId}<br/>
  - {type}<br/>
  - {category}<br/>
  - {name}<br/>
  - {startDate}<br/>

 <br/>
  {/* Button for showing the data entered. Once clicked the treatments entered appear in a alert window (defined in the 'showClickHandler' function above'. Text is blue, button style is defined in style.css */}
  <button style={{color:"blue"}}
    onClick={showClickHandler}>Preview Treatments</button>
  {/* line breaks for clear presentation */}
  <br/>
  <br/>

  {/* Button for clearing data entry, once clicked data will clear from input boxes. Text is green and button style is defined in style.css */}
  <button style={{color:"green"}}
   onClick={clearClickHandler}>Clear Treatments</button>
</div>
  )
    }

// Component exported
export default MedicalTreatmentPanel;

