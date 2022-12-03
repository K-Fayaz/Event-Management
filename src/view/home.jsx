// import packages here
import $ from "jquery";
import { useState , useEffect } from "react";

// import components here
import Navbar from "../partials/navbar";
import EventCard from "../components/event_card";

// import CSS files here
import "../CSS/indx.css";
import "../CSS/event_card.css";

const Home = ()=>{

  let [eventData,setEventData] = useState([]);

  useEffect(()=>{
    $.ajax({
      method:"GET",
      url:"http://localhost:8080/get/events"
    })
    .then((data)=>{
      setEventData(data);
      console.log(data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  return(
    <>
      <Navbar/>
      <div className="events-container">
        {
          eventData.map((data,index)=>{
            return(
              <EventCard key={data._id} Name={data.name} Description={data.description} Date={data.date} Time={data.time} Venue={data.venue} />
            )
          })
        }
      </div>
    </>
  )
}

export default Home;
