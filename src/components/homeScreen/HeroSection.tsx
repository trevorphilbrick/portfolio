import{ useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [height, setHeight] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const ref = useRef<any>(null)

  const renderRow = (iterative: number) => {
    const rowArray = []
    for (let i = 0 ; i < width/40 - 1 ; i++) {
      rowArray.push( 
      <div className="dot-container" id={`row${iterative}Pos${i}`}>
      <div className="dot"></div>
      </div>)
    }
    console.log(rowArray.length)
    return rowArray
  }

  document.onmouseover = function(e: any) {
    console.log(e.target.id);
  }
  const renderGrid = () => {
    const columnArray = []
    for (let i = 0 ; i < height/40 - 1; i++) {
      columnArray.push(<div style={{display: "flex"}}>{renderRow(i)}</div>)
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
