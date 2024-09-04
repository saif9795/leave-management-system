

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react"

function DateInput() {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <div>
        <DatePicker
        className="rounded-pill  form-control d-flex flex-col col-auto "
        id="date{i1}"
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
        />
      </div>
    );
  }

export default DateInput;