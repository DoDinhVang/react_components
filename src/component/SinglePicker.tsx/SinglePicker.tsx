import React, { useState } from "react";
import { Select } from "antd";
import YearPicker from "../yearpicker/YearPicker";
import moment from "moment";
export default function SinglePicker() {
  const rangyear = (year: number) => {
    return year > parseInt(moment(new Date()).format("YYYY"));
  };
  const [year, setYear] = useState<number>();
  const handleChangePicker = (year:number)=>{
      setYear(year);
  }
  return (
    <div>
      <Select
        value={year}
        suffixIcon={<>hey</>}
        style={{ width: "300px" }}
        onDropdownVisibleChange={(open) => {
          if (open) {
            document.body.style.overflow = "hidden";
            
          } else {
            document.body.style.overflow = "auto";
          }
        }}
        dropdownRender={() => {
          return <YearPicker hideInput={true} rangeDisable={rangyear}  onChange = {handleChangePicker}/>;
        }}
      />
    </div>
  );
}
