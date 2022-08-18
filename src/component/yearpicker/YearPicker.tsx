import { Input } from "antd";
import moment from "moment";
import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.css";
// import CalendarIcon from 'assets/images/calendarIcon.svg';

interface IProps {
  onChange?: any;

  rangeDisable?: any;

  hideInput?: boolean;
}

const getYears = (startYear: number, endYear: number) => {
  const arrYear: number[] = [];

  for (let i = startYear; i <= endYear; i++) {
    arrYear.push(i);
  }

  return arrYear;
};

export default function YearPicker({
  onChange,
  rangeDisable,
  hideInput,
}: IProps) {
  const [selectedYear, setSelectedYear] = useState(
    parseInt(moment(new Date()).format("YYYY"))
  );

  const ref = useRef<any>(null);

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [selectedYear]);

  const renderYears = () => {
    return getYears(2000, 2050).map((year: number, idx: number) => {
      let isYearDisable;
      if (rangeDisable) {
        isYearDisable = rangeDisable(year);
      }
      return (
        <button
          type="button"
          disabled={isYearDisable}
          ref={year === selectedYear ? ref : null}
          onClick={() => {
            onChange(year);
            setSelectedYear(year);
          }}
          key={idx}
          style={{
            background: year === selectedYear ? "#A5D3AF" : "",
          }}
        >
          {year}
        </button>
      );
    });
  };

  return (
    <>
      <div
        className={styles.wrapper}
        onScroll={(e) => {
          // window.scrollTo(0,0)
          // preventDefault(e);
        }}
      >
        {renderYears()}
      </div>
    </>
  );
}
function preventDefault(e: React.UIEvent<HTMLDivElement, UIEvent>) {
  throw new Error("Function not implemented.");
}
