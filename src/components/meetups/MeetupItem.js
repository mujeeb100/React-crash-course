import React from "react";
import classes from "../layout/MainNavigation.module.css";
import Card from "../ui/Card";
function MeetupItem(props) {
  return (
    <li className={classes.item}>
      {/* card component has been added */}
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>TO Favaroite</button>
        </div>
      </Card>
      {/* card component has been added */}
    </li>
  );
}

export default MeetupItem;
