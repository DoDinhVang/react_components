import React, { useState } from "react";
import { Calendar, DatePicker, Select, TagProps } from "antd";
import styles from "./styles.module.css";
import moment from "moment";
import { RangePickerProps } from "antd/lib/date-picker";

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
  const [datePickerOpen, setDatePickerOpen] = useState(false);
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
  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    return current > moment().endOf("day");
  };
  return (
    <Select
      className={styles.select}
      mode="multiple"
      allowClear={false}
      clearIcon={""}
      style={{ width: "291px", height: "45px" }}
      placeholder="Please select"
      value={arrValue}
      onChange={handleChange}
      onClick={() => {
        setDatePickerOpen(true);
      }}
      suffixIcon={<>bames</>}
      showArrow={true}
      tagRender={renderTag}
      dropdownRender={() => {
        return (
          <DatePicker
            onChange={hanleDatePickerChange}
            open={datePickerOpen}
            onOpenChange={setDatePickerOpen}
            className={styles.datePicker}
            picker="year"
            format={"YYYY"}
            suffixIcon={<></>}         
            dateRender={(currentDate) => {
              console.log("current",  currentDate.year().toString() );
              const style: React.CSSProperties = {};
              const year = currentDate.year().toString();
              if (
                year === arrValue[0] ||
                year === arrValue[1] ||
                year === arrValue[2] ||
                year === arrValue[3] ||
                year === arrValue[4]
              ) {
                style.border = "1px solid #1890ff";
                style.borderRadius = "50%";
                return (
                  <div className="ant-picker-cell-inner" style={style}>
                    {year}
                  </div>
                );
              } else {
                return <div className="ant-picker-cell-inner" style={{background: "red"}}>{year}</div>;
              }
            }}
          />
        );
      }}
    ></Select>
  );
}
