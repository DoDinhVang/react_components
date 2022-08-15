import React, { useState } from "react";
import { Calendar, DatePicker, Select, TagProps } from "antd";
import styles from "./styles.module.css";
import moment from "moment";
import { RangePickerProps } from "antd/lib/date-picker";
import YearPicker from "../yearpicker/YearPicker";

const { Option } = Select;
export default function MultiDatePicker() {
  const [arrValue, setArrayValue] = useState<string[]>([
    "2022",
    "2021",
    "2019",
    "2018",
    "2017",
    "2016",
  ]);
  const [open, setOpen] = useState(false);
  const showDatePicker = () => {
    setOpen(!open);
  };
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  const hanleDatePickerChange = (date: any) => {
    const year = parseInt(moment(date).format("YYYY"));
    setArrayValue(getYears(year, 5));
  };
  const getYears = (endYear: number, numberYears: number) => {
    const years: string[] = [endYear.toString()];
    for (let index = 1; index < numberYears; index++) {
      years.push((endYear - index).toString());
    }
    return years;
  };
  const renderTag = ({ value }: any) => {
    console.log("valueProps", value);
    return <span>{value}, </span>;
  };
  
  return (
    <>
      <Select
        className={styles.select}
        mode="multiple"
        allowClear={false}
        clearIcon={""}
        style={{ width: "291px", height: "45px" }}
        placeholder="Please select"
        value={arrValue}
        onChange={handleChange}
        onClick={showDatePicker}
        suffixIcon={<>bames</>}
        showArrow={true}
        tagRender={renderTag}
        dropdownRender={() => {
          return (
            <YearPicker
              yearArray={[]}
              hideInput={true}
              openPicker={showDatePicker}
              isOpenPicker={true}
              rangYears={["2022", "2021", "2019", "2018", "2017"]}
              // activeIcon={img src}
              // icon={img src}
              // leftIcon={img src}
              // rightIcon={img src}
              minRange={1800}
              maxRange={2100}
            />
           
          );
        }}
      ></Select>
     
    </>
  );
}
