import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEvent from "../Components/AddEvent";

function Home() {
  const [eventsList, setEventsList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const getEventsList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/event/viewall"
      );
      console.log("Here: ", response.data);
      setEventsList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //const navigate = useNavigate();
  useEffect(() => {
    getEventsList();
  }, []);

  return (
    <div>
      <nav className="nav-bar">
        <div className="nav-bar-center">
          <ul>
            <li>
              <button className="nav-btn">ALL EVENTS</button>
            </li>
            <li>
              <button className="nav-btn">MY EVENTS</button>
            </li>
            <li>
              <button className="nav-btn">TRENDING</button>
            </li>
          </ul>
        </div>
        <div className="create-event">
          <button className="button btn-green" onClick={togglePopup}>
            CREATE AN EVENT
          </button>
        </div>
      </nav>
      {isOpen && <AddEvent handleClose={togglePopup} />}
      <header className="header_filter">
        <h1>
          Welcome, Malik <br />
        </h1>
        <span>WHAT IS CUISINE YOU WANT TO TRY</span>
        <div className="search-form">
          <input type="text" placeholder="search" />
          <button className="button">Search</button>
        </div>
      </header>
      <section className="event-section">
        {eventsList.map((theEvent) => {
          return (
            <article key={theEvent.id} className="event">
              <div className="left-side">
                <div className="content">
                  <h2>{theEvent.title}</h2>
                  <span>{theEvent.event_date} </span>
                  <span> {theEvent.location}</span>
                </div>
                <p>Description</p>
              </div>
              <div className="right-side">
                <button className="button">Attend</button>
                <button className="button">Save For Later</button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
