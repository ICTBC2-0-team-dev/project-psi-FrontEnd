import DatePicker from "react-datepicker";
import React,{useState} from "react";

const DataPiker = () => {
  // function data picker
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd/MM/yyyy"
      className="form-control"
    />
  );
};

export default DataPiker;
