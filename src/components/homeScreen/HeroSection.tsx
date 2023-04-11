import{ useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [height, setHeight] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const ref = useRef<any>(null)

  const renderRow = () => {
    const rowArray = []
    for (let i = 0 ; i < width/40 - 1 ; i++) {
      rowArray.push( 
      <div className="dot-container">
      <div className="dot"></div>
      </div>)
    }
    console.log(rowArray.length)
    return rowArray
  }

  const renderGrid = () => {
    const columnArray = []
    for (let i = 0 ; i < height/40 - 1; i++) {
      columnArray.push(<div style={{display: "flex"}}>{renderRow()}</div>)
    }
    console.log(columnArray.length)
    return columnArray
  }


  useEffect(() => {
    setHeight(ref?.current?.clientHeight)
    setWidth(ref?.current?.clientWidth)
    console.log(height, width)
  })
  return (
    <div className="hero-section" ref={ref}>
      {renderGrid()}
    </div>
  );
};

export default HeroSection;
