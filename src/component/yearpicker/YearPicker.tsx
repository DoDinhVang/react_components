import React, { useState } from "react";
import "./styles.css";
interface IProps {
  minRange?: number;
  maxRange?: number;
  yearArray: string[];
  value?: string;
  leftIcon?: any;
  rightIcon?: any;
  activeIcon?: any;
  hideInput?: any;
  openPicker: any;
  isOpenPicker?: boolean;
  rangYears?: string[];
}
const getYearsArrayFromRange = (startYear: number, endYear: number) => {
  const yearTabs = [];
  for (let i = startYear; i <= endYear; i++) {
    yearTabs.push(i.toString());
  }
  return yearTabs;
};
const getYearsArray = (
  originalArray: string[],
  initailIndex: number,
  lastIndex: number
) => {
  let newArray = originalArray;
  newArray = newArray.slice(initailIndex, lastIndex);
  return newArray;
};

export default function YearPicker({
  minRange,
  maxRange,
  yearArray,
  value,
  leftIcon,
  rightIcon,
  hideInput,
  openPicker,
  isOpenPicker,
  rangYears,
}: IProps) {
  if (minRange && maxRange) {
    yearArray = getYearsArrayFromRange(minRange, maxRange);
  }
  console.log("isopen", isOpenPicker);
  const [state, setState] = useState({
    selectedValue: value ? value : new Date().getFullYear().toString(),
    selectedIndexArray: value
      ? yearArray.indexOf(value)
      : yearArray.indexOf(new Date().getFullYear().toString()),
    selectedArray: value
      ? getYearsArray(
          yearArray,
          yearArray.indexOf(value),
          yearArray.indexOf(value) + 12
        )
      : getYearsArray(
          yearArray,
          yearArray.indexOf(new Date().getFullYear().toString()),
          yearArray.indexOf(new Date().getFullYear().toString()) + 12
        ),
    originalArray: yearArray,
  });

  const getYearsList = () => {
    const { selectedValue, selectedArray } = state;
    return selectedArray.map((obj, index) => {
      // console.log("rangyear", rangYears[index])
      const styles: React.CSSProperties = {};
      if (selectedValue === obj) {
        styles.backgroundColor = "red";
        styles.color = "black";
      } else if (rangYears !== undefined) {
        for (let index = 0; index < rangYears.length; index++) {
          if (rangYears[index] === obj) {
            styles.backgroundColor = "red";
            styles.color = "black";
            break;
          }
        }
      }
      return (
        <span
          onClick={() =>
            setState({
              ...state,
              selectedValue: obj,
            })
          }
          key={index}
          style={styles}
        >
          <span className="StyledYear">{obj}</span>
          {(index + 1) % 4 === 0 && <br />}
        </span>
      );
    });
  };
  const incrementValue = () => {
    const { selectedIndexArray, originalArray } = state;
    if (selectedIndexArray + 12 <= originalArray.length - 1) {
      const newArray = getYearsArray(
        originalArray,
        selectedIndexArray + 11,
        selectedIndexArray + 12 * 2 - 1
      );
      setState({
        ...state,
        selectedArray: newArray,
        selectedIndexArray: selectedIndexArray + 12,
      });
    }
  };
  const decrementValue = () => {
    const { selectedIndexArray, originalArray } = state;
    if (selectedIndexArray - 12 >= 0) {
      const newArray = getYearsArray(
        originalArray,
        selectedIndexArray - 12,
        selectedIndexArray
      );
      setState({
        ...state,
        selectedArray: newArray,
        selectedIndexArray: selectedIndexArray - 12,
      });
    }
  };
  return (
    <div className="year-div">
      {!hideInput && (
        <div>
          <input type="text" value={state.selectedValue} />
          <img
            className="img-style"
            onClick={openPicker}
            src={""}
            alt="calender-icon"
          />
        </div>
      )}
      {!isOpenPicker?<></>: ( 
        <div className="Header">
          <div className="StyledHeader">
            <div className="StyledContainer">
              <span
                className={`clickable ${
                  state.selectedIndexArray - 12 >= 0 ? "" : "disabled"
                }`}
                onClick={decrementValue}
              >
                <img
                  src={leftIcon ? leftIcon : "<"}
                  className="wd-15"
                  alt="left-icon"
                />
              </span>
              <span>
                {state.selectedArray[0]}-
                {state.selectedArray[state.selectedArray.length - 1]}
              </span>
              <span
                className={`clickable ${
                  state.selectedIndexArray + 12 <=
                  state.originalArray.length - 1
                    ? ""
                    : "disabled"
                }`}
                onClick={incrementValue}
              >
                <img
                  src={rightIcon ? rightIcon : ""}
                  className="wd-15"
                  alt="right-icon"
                />
              </span>
            </div>
            <div className="StyledCalendarBody">{getYearsList()}</div>
          </div>
          <div className="BackDrop" onClick={openPicker} />
        </div>
      )}
    </div>
  );
}
