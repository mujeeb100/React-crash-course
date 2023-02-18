import React from "react";
import NewMeetupForum from "../components/meetups/NewMeetupForum";
import { useNavigate } from "react-router-dom";

function NewMeetup() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-c5412-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForum onAddMeetUp={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
