import moment from "moment";
import React from "react";

function DateAndTime() {
  return (
    <div>
      <p>Current date and time: {moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  );
}

export default DateAndTime;
