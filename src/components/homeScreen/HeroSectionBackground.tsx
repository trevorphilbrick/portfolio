import { useEffect, useRef, useState } from "react";

const HeroSectionBackground = () => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [hovered, setHovered] = useState<string>("");
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

  const renderGrid = () => {
    const columnArray = [];
    for (let i = 0; i < height / 40 - 1; i++) {
      columnArray.push(<div style={{ display: "flex" }}>{renderRow(i)}</div>);
    }
    return columnArray;
  };

  document.onmouseover = (e: any) => {
    setHovered(e.target.id);
  };

  useEffect(() => {
    setHeight(ref?.current?.clientHeight);
    setWidth(ref?.current?.clientWidth);
  }, [windowWidth]);

  useEffect(() => {
    const coordArray = hovered.split("-");

    const row: number | undefined = Number(coordArray[1]);
    const pos: number | undefined = Number(coordArray[3]);
    const selected = document.getElementById(hovered);
    const above = document.getElementById(`row-${row - 1}-Pos-${pos}`);
    const below = document.getElementById(`row-${row + 1}-Pos-${pos}`);
    const left = document.getElementById(`row-${row}-Pos-${pos - 1}`);
    const right = document.getElementById(`row-${row}-Pos-${pos + 1}`);
    const aboveLeft = document.getElementById(`row-${row - 1}-Pos-${pos - 1}`);
    const aboveRight = document.getElementById(`row-${row - 1}-Pos-${pos + 1}`);
    const belowLeft = document.getElementById(`row-${row + 1}-Pos-${pos - 1}`);
    const belowRight = document.getElementById(`row-${row + 1}-Pos-${pos + 1}`);

    const selectedArray = [above, below, left, right];
    const secondaryArray = [aboveLeft, aboveRight, belowLeft, belowRight];

    document.querySelectorAll<any>('[id^="row-"]').forEach((el) => {
      el.classList.remove("secondary-hovered");
      el.classList.remove("hovered");
      el.classList.remove("selected");
    });

    if (
      above ||
      below ||
      left ||
      right ||
      selected ||
      aboveLeft ||
      aboveRight ||
      belowLeft ||
      belowRight
    ) {
      if (selected?.id.split("-")[0] === "row") {
        selected?.classList.add("selected");
      }

      selectedArray.forEach((el) => {
        el?.classList.add("hovered");
      });

      secondaryArray.forEach((el) => {
        el?.classList.add("secondary-hovered");
      });
    }
  }, [hovered, setHovered]);

  return (
    <div className="hero-section-background" ref={ref}>
      {renderGrid()}
    </div>
  );
};

export default HeroSectionBackground;
