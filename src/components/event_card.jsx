// import packages here
import { BiMap , BiTimeFive } from "react-icons/bi";
import { BsCalendar2DayFill } from "react-icons/bs";

import { NavLink } from "react-router-dom";

// import CSS files

const EventCard = (prop)=>{
  return(
    <>
        <div className="event">
          <h2> <a href="/event/8468289389784/details">{prop.Name}</a> </h2>
          <div className="event-schedule">
            <section className="event-date">
              <BsCalendar2DayFill className="react-icon"/>
              {prop.Date.toString().slice(0,10)}
            </section>
            <section className="time">
              <BiTimeFive className="react-icon"/>
              {prop.Time}
            </section>
            <section className="event-venue">
              <BiMap className="react-icon"/>
              {prop.Venue}
            </section>
            </div>
          <p>{prop.Description}</p>
        </div>
    </>
  );
}

export default EventCard;
