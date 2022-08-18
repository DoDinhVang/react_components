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

  const hanleDatePickerChange = (year: number) => {
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
  const rangyear = (year: number) => {
    return year > parseInt(moment(new Date()).format("YYYY"));
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
        suffixIcon={<>bames</>}
        showArrow={true}
        tagRender={renderTag}
        onDropdownVisibleChange={(open) => {
          if (open) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "auto";
          }
        }}
        dropdownRender={() => {
          return (
            <YearPicker
              hideInput={true}
              onChange={hanleDatePickerChange}
              rangeDisable={rangyear}
            />
          );
        }}
      ></Select>
    </>
  );
}
