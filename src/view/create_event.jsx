// import dependecies here
import $ from "jquery";
import { useState } from "react";

// import View components here
import Navbar from "../partials/navbar";

// import CSS files here
import "../CSS/event_create.css";

// import Javascript file here


const CreateEvent = ()=>{

  var date = "";
  let [time,setTime]               = useState({});
  let [venue,setVenue]             = useState("");
  let [phone,setPhone]             = useState("");
  let [eventType,setEventType]     = useState("cultural");
  let [eventName,setEventName]     = useState("");
  let [description,setDescription] = useState("");

  function handleSubmit(event)
  {
    let dateComp = document.getElementById("date");

    event.preventDefault();
    console.log(dateComp.value,time,venue,phone,eventType,eventName,description);
    console.log(dateComp.value && time && venue && phone && eventType && description && eventName);
    if(dateComp.value && time && venue && phone && eventType && eventName && description)
    {
      $.ajax({
        url:"http://localhost:8080/post/events",
        method:"POST",
        data:{
          phone,
          time       : time,
          venue      : venue,
          name       : eventName,
          type       : eventType,
          description: description,
          date       : dateComp.value,
        }
      })
      .then((data)=>{
        console.log(data);
        window.location.assign("/");
      })
      .catch((err)=>{
        dateComp.value = "";
        setTime("");
        setPhone("");
        setVenue("");
        setEventType("");
        setEventName("");
        setDescription("");
      })
    }

  }

  function handleChange(event)
  {
    if(event.target.id === "event-name"){
      setEventName(event.target.value);
    }

    if(event.target.id === "event-details"){
      setDescription(event.target.value);
    }

    if(event.target.id === "venue")
    {
      setVenue(event.target.value);
    }

    if(event.target.id === "date")
    {
      date = event.target.value;
      console.log(date);
      console.log(event.target.value);
    }

    if(event.target.id === "time")
    {
      setTime(event.target.value);
    }

    if(event.target.id === "event-type")
    {
      setEventType(event.target.value);
    }

    if(event.target.id === "phone-1")
    {
      setPhone(event.target.value)
    }
  }

  return(
    <>
      <Navbar/>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Create Event</h1>
          <div className="field-container event-name">
            <input onChange={handleChange} value={eventName} type="text" name="event-name" id="event-name"/>
          </div>
          <div className="field-container details-field">
            <textarea onChange={handleChange} value={description} name="event-details" id="event-details" cols="30" rows="5"></textarea>
          </div>
          <div className="field-container venue">
            <input onChange={handleChange} value={venue} type="text" name="venue" id="venue"/>
          </div>
          <div className="field-container row-fields">
            <div>
              <input onChange={handleChange} type="date" name="date" id="date"/>
            </div>
            <div>
              <input onChange={handleChange} value={time} type="time" name="time" id="time"/>
            </div>
          </div>
          <div className="field-container event-type">
            <select name="event-type" id="event-type" value={eventType} onChange={handleChange}>
              <option value="cultural">cultural</option>
              <option value="co-curricular">co-curricular</option>
              <option value="Hackathon">Hackathon</option>
              <option value="technical">technical</option>
            </select>
          </div>
          <div id="phone-field-container" className="field-container phone">
            <section>
              <h4>Add contact numbers</h4>
            </section>
            <input onChange={handleChange} value={phone} type="number" name="phone-1" id="phone-1"/>
          </div>
          <button className="form-btn">Create Event</button>
        </form>
      </div>
    </>
  )
};

export default CreateEvent;
