import React, { useState } from 'react'
;
import TraiCam from './component/TraiCam';
import TraiOi from './component/TraiOi';
import TraiTao from './component/TraiTao';
// import TraiTao from './component/TraiTao';
export default function TraiCai() {

  const [loaiTraiCay, setLoaiTraiCay] = useState("");
  return (
    <div style = {{width: "50%", margin: "0 auto"}}>
      <h1 style={{textAlign: "center"}}>Tìm hiểu về các loại trái cây</h1>
      <div>
        <img onClick={() => {
          setLoaiTraiCay("apple")
        }} style={{ marginRight: '30px', height: "120px" }} src={require('./assets/images/apple.jpg').default} alt="guava"></img>
        <img onClick={() => {
          setLoaiTraiCay("guava")
        }} style={{ marginRight: '30px', height: "120px" }} src={require('./assets/images/guava.jpg').default} alt="guava"></img>
        <img onClick={() => {
          setLoaiTraiCay("orange")
        }} style={{ marginRight: '30px', height: "120px" }} src={require('./assets/images/orange.jpg').default} alt="guava"></img>
      </div>
      <div>
        {
          loaiTraiCay === "apple" ? <TraiTao loaiTraiCay = {loaiTraiCay}/>
            : loaiTraiCay === "guava" ? <TraiOi loaiTraiCay = {loaiTraiCay}/>
              : loaiTraiCay === "orange" ? <TraiCam loaiTraiCay = {loaiTraiCay}/>
                : ""
        }
      </div>
    </div>
  )
}
