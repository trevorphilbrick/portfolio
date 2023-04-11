import { useEffect, useRef, useState } from "react";

const HeroSectionBackground = () => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [allDots, setAllDots] = useState<any[]>([]);
  const ref = useRef<any>(null);

  // Used to render rows of dots
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

  // Used to render columns of rows of dots
  const renderGrid = () => {
    const columnArray = [];
    for (let i = 0; i < height / 40 - 1; i++) {
      columnArray.push(<div style={{ display: "flex" }}>{renderRow(i)}</div>);
    }
    return columnArray;
  };

  //  Used to set the height and width of the background when the component mounts
  useEffect(() => {
    setHeight(ref?.current?.clientHeight);
    setWidth(ref?.current?.clientWidth);
  }, []);

  // Used to set the height and width of the background when the window is resized
  window.addEventListener("resize", () => {
    setHeight(ref?.current?.clientHeight);
    setWidth(ref?.current?.clientWidth);
  });

  // Used to set all the dots in the background to an array
  useEffect(() => {
    ref.current.childNodes.forEach((row: any) => {
      row.childNodes.forEach((el: any) => {
        setAllDots((prev) => [...prev, el]);
      });
    });
  }, [ref?.current?.childNodes]);

  // Used to add the appropriate hovered class to the dot that the mouse is over
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
        el.classList.add("inner-hovered");
        el.classList.remove("hovered");
        el.classList.remove("selected");
        el.classList.remove("center-hovered");
        el.classList.remove("outer-hovered");
      } else if (
        x > elX - 65 &&
        x < elX + elWidth + 65 &&
        y > elY - 65 &&
        y < elY + elHeight + 65
      ) {
        el.classList.add("center-hovered");
        el.classList.remove("hovered");
        el.classList.remove("selected");
        el.classList.remove("inner-hovered");
        el.classList.remove("outer-hovered");
      } else if (
        x > elX - 100 &&
        x < elX + elWidth + 100 &&
        y > elY - 100 &&
        y < elY + elHeight + 100
      ) {
        el.classList.add("outer-hovered");
        el.classList.remove("hovered");
        el.classList.remove("selected");
        el.classList.remove("inner-hovered");
        el.classList.remove("center-hovered");
      } else {
        el.classList.remove("hovered");
        el.classList.remove("selected");
        el.classList.remove("inner-hovered");
        el.classList.remove("center-hovered");
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
