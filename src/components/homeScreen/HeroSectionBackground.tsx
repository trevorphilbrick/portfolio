import { useEffect, useRef, useState } from "react";

const HeroSectionBackground = () => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [allDots, setAllDots] = useState<any[]>([]);
  const windowWidth = window.innerWidth;
  const ref = useRef<any>(null);

  const renderRow = (iterative: number) => {
    const rowArray = [];
    for (let i = 0; i < width / 40 - 1; i++) {
      rowArray.push(
        <div className="dot-container" id={`row-${iterative}-Pos-${i}`}>
          <div className="dot"></div>
        </div>
      );
    }
    return rowArray;
  };

  useEffect(() => {
    ref.current.childNodes.forEach((row: any) => {
      console.log(typeof row);
      row.childNodes.forEach((el: any) => {
        setAllDots((prev) => [...prev, el]);
      });
    });
  }, [ref?.current?.childNodes]);

  const renderGrid = () => {
    const columnArray = [];
    for (let i = 0; i < height / 40 - 1; i++) {
      columnArray.push(<div style={{ display: "flex" }}>{renderRow(i)}</div>);
    }
    return columnArray;
  };

  useEffect(() => {
    setHeight(ref?.current?.clientHeight);
    setWidth(ref?.current?.clientWidth);
  }, [windowWidth]);

  document.onmousemove = (e: any) => {
    const x = e.pageX;
    const y = e.pageY;
    allDots.forEach((el) => {
      const elX = el.offsetLeft;
      const elY = el.offsetTop;
      const elWidth = el.offsetWidth;
      const elHeight = el.offsetHeight;
      if (x > elX && x < elX + elWidth && y > elY && y < elY + elHeight) {
        el.classList.add("selected");
      } else if (
        x > elX - 22 &&
        x < elX + elWidth + 22 &&
        y > elY - 22 &&
        y < elY + elHeight + 22
      ) {
        el.classList.add("secondary-hovered");
        el.classList.remove("hovered");
        el.classList.remove("selected");
        el.classList.remove("outer-hovered");
      } else if (
        x > elX - 65 &&
        x < elX + elWidth + 65 &&
        y > elY - 65 &&
        y < elY + elHeight + 65
      ) {
        el.classList.add("outer-hovered");
        el.classList.remove("hovered");
        el.classList.remove("selected");
        el.classList.remove("secondary-hovered");
      } else {
        el.classList.remove("hovered");
        el.classList.remove("selected");
        el.classList.remove("secondary-hovered");
        el.classList.remove("outer-hovered");
      }
    });
  };

  return (
    <div className="hero-section-background" ref={ref}>
      {renderGrid()}
    </div>
  );
};

export default HeroSectionBackground;
