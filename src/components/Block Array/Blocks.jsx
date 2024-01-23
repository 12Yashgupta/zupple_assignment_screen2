import React, { useRef } from "react";
import "./blocks.css";
const Blocks = () => {
  const data = [
    {
      satVb: -9,
      minSatVb: 9,
      maxSatVb: 10,
      size: 1.21,
      noOfTransactions: 1680,
      time: -40,
    },
    {
      satVb: -10,
      minSatVb: 10,
      maxSatVb: 10,
      size: 1.31,
      noOfTransactions: 929,
      time: -30,
    },
    {
      satVb: -11,
      minSatVb: 10,
      maxSatVb: 12,
      size: 1.1,
      noOfTransactions: 1915,
      time: -20,
    },
    {
      satVb: -12,
      minSatVb: 12,
      maxSatVb: 536,
      size: 1.41,
      noOfTransactions: 2182,
      time: -10,
    },
    {
      satVb: -9,
      minSatVb: 9,
      maxSatVb: 10,
      size: 1.21,
      noOfTransactions: 1680,
      time: -40,
      serialNum: 667314,
    },
    {
      satVb: -10,
      minSatVb: 10,
      maxSatVb: 10,
      size: 1.31,
      noOfTransactions: 929,
      time: -30,
      serialNum: 667313,
    },
    {
      satVb: -11,
      minSatVb: 10,
      maxSatVb: 12,
      size: 1.1,
      noOfTransactions: 1915,
      time: -20,
      serialNum: 667312,
    },
    {
      satVb: -12,
      minSatVb: 12,
      maxSatVb: 536,
      size: 1.41,
      noOfTransactions: 2182,
      time: -10,
      serialNum: 667311,
    },
    {
      satVb: -9,
      minSatVb: 9,
      maxSatVb: 10,
      size: 1.21,
      noOfTransactions: 1680,
      time: -40,
      serialNum: 667314,
    },
    {
      satVb: -10,
      minSatVb: 10,
      maxSatVb: 10,
      size: 1.31,
      noOfTransactions: 929,
      time: -30,
      serialNum: 667313,
    },
    {
      satVb: -11,
      minSatVb: 10,
      maxSatVb: 12,
      size: 1.1,
      noOfTransactions: 1915,
      time: -20,
      serialNum: 667312,
    },
    {
      satVb: -12,
      minSatVb: 12,
      maxSatVb: 536,
      size: 1.41,
      noOfTransactions: 2182,
      time: -10,
      serialNum: 667311,
    },
    {
      satVb: -9,
      minSatVb: 9,
      maxSatVb: 10,
      size: 1.21,
      noOfTransactions: 1680,
      time: -40,
    },
    {
      satVb: -10,
      minSatVb: 10,
      maxSatVb: 10,
      size: 1.31,
      noOfTransactions: 929,
      time: -30,
    },
    {
      satVb: -11,
      minSatVb: 10,
      maxSatVb: 12,
      size: 1.1,
      noOfTransactions: 1915,
      time: -20,
    },
    {
      satVb: -12,
      minSatVb: 12,
      maxSatVb: 536,
      size: 1.41,
      noOfTransactions: 2182,
      time: -10,
    },
  ];
  
  const scrollableSectionRef = useRef(null);

  const handleMouseDown = () => {
    if (scrollableSectionRef.current) {
      // Toggle the hide-scrollbar class on mouse down
      scrollableSectionRef.current.classList.toggle("hide-scrollbar", true);

      // Add event listeners for mousemove and mouseup
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleMouseMove = () => {
    // Remove the hide-scrollbar class on mouse move
    if (scrollableSectionRef.current) {
      scrollableSectionRef.current.classList.remove("hide-scrollbar");
    }
  };

  const handleMouseUp = () => {
    // Remove event listeners on mouse up
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <section id="block-holder" ref={scrollableSectionRef} className="scrollable-section"
        onMouseDown={handleMouseDown}>
        <div className="blocks-section">
          {data.slice(0, 7).map((item, index) => (
            <>
              <div></div>
              <div className="block-left" key={index}>
                <p>{item.satVb} sat/vB</p>
                <p style={{ color: "yellow" }}>
                  {item.minSatVb} - {item.maxSatVb} sat/vB
                </p>
                <p style={{ fontSize: "15px" }}>
                  <b>{item.size} MB</b>
                </p>
                <p>{item.noOfTransactions} transactions </p>
                <p>In {item.time} minutes</p>
              </div>
            </>
          ))}
        </div>

        <div class="vertical"></div>

        <div className="blocks-section">
          {data.slice(7, 14).map((item, index) => (
            <>
            <div></div>
              <div className="block-right" key={index}>
                <p>{item.satVb} sat/vB</p>
                <p style={{ color: "yellow" }}>
                  {item.minSatVb} - {item.maxSatVb} sat/vB
                </p>
                <p style={{ fontSize: "15px" }}>
                  <b>{item.size} MB</b>
                </p>
                <p>{item.noOfTransactions} transactions </p>
                <p>In {item.time} minutes</p>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blocks;
