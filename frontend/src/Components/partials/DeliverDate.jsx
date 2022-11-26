import React, {useState} from "react";
import DatePicker from "react-datepicker"
import "../newOrder"


 function DeliverDate(){
  const [startDate, setStartDate] = useState('');
  const handleDate = value => {
    setStartDate(value);
    
    console.log(value)
  };

  return <div className="text-center fs-6">
    <span className="datum d-block m-auto">Leverans Datum</span>
    <DatePicker className="input-group date" 
    placeholderText='Leverans Datum' 
    dateFormat='yyyy/MM/dd' 
    selected={startDate} 
    onChange={handleDate} />
  </div>;
}
export default DeliverDate