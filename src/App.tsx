import "./App.css";
import "antd/dist/antd.css";
import MultiDatePicker from "./component/multidatepicker/MultiDatePicker";
import YearPicker from "./component/yearpicker/YearPicker";
import { useState } from "react";

function App() {
  const yearArray = [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
  ];
  const [open, setOpen] = useState(false);
  const showDatePicker = () => {
    setOpen(!open);
  };
  return (
    <div className="App">
      <MultiDatePicker />
    </div>
  );
}

export default App;
