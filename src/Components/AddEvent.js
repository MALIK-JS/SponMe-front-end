import axios from "axios";
import React, { useState } from "react";

function AddEvent(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [description, setDescription] = useState("");

  const addEvent = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:8080/api/v1/event", {
        title: title,
        event_date: date,
        location: location,
        users_id: 1,
      });
      console.log("Success: ", response);
      closeWindow(e);
    } catch (err) {
      console.log(err);
    }
  };

  const closeWindow = (e) => {
    e.preventDefault();
    props.handleClose();
  };
  return (
    <div className="popup-box">
      <div className="box">
        <span
          className="close-icon"
          onClick={(e) => {
            closeWindow(e);
          }}
        >
          x
        </span>
        <h2>ADD AN EVENT</h2>
        <div className="wrapper-form">
          <form>
            <label>Title of the event</label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
            <label>Date of the event</label>
            <input
              type="Date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></input>
            <label>Location of the event</label>
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            ></input>
            <label>What's cuisine?</label>
            <input
              type="text"
              value={cuisine}
              onChange={(e) => {
                setCuisine(e.target.value);
              }}
            ></input>
            <label>Short description of the event</label>
            <input
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>
            <button className="button" onClick={(event) => addEvent(event)}>
              CREATE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEvent;
