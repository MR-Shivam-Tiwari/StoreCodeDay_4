import React from "react";
import FirstImage from "./img/willustration.png";
import SecondImg from "./img/indian-rupee.png";
import ThirdImg from "./img/sales-promotion.png";
import { useState } from "react";
import { useEffect } from "react";
import styled from "@emotion/styled";
import greenbag from "./bag-coin.png";
import percent from "./percent.png";
function Benifits({ isDarkMode }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      // Check if window width is less than or equal to 400
      if (newWidth <= 450) {
        // Refresh the page
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const rhombusStyle = {
    width: "220px",
    height: "220px",
    transform: "rotate(45deg)",
    marginBottom: "150px",
    margin: "50px",
    border: "3px solid #2e3e65",
    borderRadius: "30px",
  };
  // if (windowWidth <= 450) {
  //   rhombusStyle.width = "40px";
  //   rhombusStyle.height = "40px";
  //   rhombusStyle.borderRadius = "10px";
  // }
  const BlueCard = {
    backgroundColor: "#023fac",
    width: "50%",
    padding: "5px 20px 0px 20px",
    borderRadius: "20px 0px 20px 0px",
  };
  if (windowWidth <= 450) {
    BlueCard.width = "50%";
    BlueCard.marginTop = "-60px";
    BlueCard.marginLeft = "25px";
    BlueCard.borderRadius = "10px 0px 10px 0px";
  }

  const para = {
    marginLeft: "70px",
    width: "65%",
  };
  if (windowWidth <= 450) {
    para.width = "60%";
    para.marginLeft = "45px";
    para.marginTop = "-28px";
    para.fontSize = "5px";
  }
  const bluetext = {};
  if (windowWidth <= 450) {
    bluetext.fontSize = "4px";
  }
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: "white",
    position: "relative", // Ensure position relative for positioning the invisible scrollbar overlay
  };
  if (windowWidth <= 450) {
    containerStyle.marginTop = "-50px";
  }
  const num = {
    borderRadius: "50%",
    width: "50px", // Adjust the size as needed
    height: "50px", // Ensure width and height are equal
    transform: "rotate(-45deg)",
    backgroundColor: "#023fac",
    margin: "50px",
    position: "relative",
    marginBottom: "-50px",
    marginLeft: "-55px",
    fontSize: "30px",
    color: "white",
    textAlign: "center",
    top: "5px", // Adjust as needed to move the text down
    left: "10px", // Adjust as needed to move the text to the right
    fontWeight: "bold",
  };
  if (windowWidth <= 467) {
    num.width = "15px";
    num.height = "15px";
    num.fontSize = "12px";
    num.marginBottom = "-32px";
    num.marginLeft = "-22px";
  }

  const imgstyle = {
    transform: "rotate(-45deg)",
    position: "relative",
  };
  // if (windowWidth <= 467) {
  //   imgstyle.width = "35px";
  //   imgstyle.height = "35px";
  //   imgstyle.fontSize = "12px";
  //   imgstyle.marginBottom = "-55px";
  //   imgstyle.marginLeft = "0px";
  // }
  const arrowStyle = {
    // Arrow stem
  };

  const arrowHeadStyle = {
    transform: "rotate(-180deg)",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "21px 0 21px 60px", // Adjust the size of the arrowhead
    borderColor: "transparent transparent transparent #2d3f66", // Adjust the color
  };
  const arrowHeadStyle2 = {
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "21px 0 21px 60px", // Adjust the size of the arrowhead
    borderColor: "transparent transparent transparent #2d3f66", // Adjust the color
  };
  return (
    <div
      className="text-white container  mt-4"
      style={{ background: isDarkMode ? "black" : "white" }}
    >
      <div className="text-center ">
        <div className=" text-center">
          <span
            className="fw-bold  mt-0"
            style={{
              background:
                "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
          >
            <p className="fw-bold mb-0" style={{ fontSize: "40px" }}>
              1 CODE 3 BENEFITS
            </p>
          </span>
        </div>
        <div
          className=" d-flex align-items-center justify-content-center gap-3  text-white"
          style={{ marginLeft: "180px" }}
        >
          <div className="box">
            <div className="d-flex align-items-center gap-5">
              <div style={rhombusStyle}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2769/2769257.png"
                  alt=""
                  style={{ ...imgstyle, width: "190px", marginLeft: "-20px" }}
                />
              </div>
              <div className="d-flex  ">
                <div className="mt-4" style={arrowHeadStyle}></div>
                <div
                  className="p-4  text-center "
                  style={{
                    background: `linear-gradient(to bottom, #5a2154 , #2d3f66 100%)`,
                    width: "60%",
                  }}
                >
                  <h2 className=" fw-bold  ">
                    Redirects shoppers to purchasing site
                  </h2>
                  <p className="" style={{ fontSize: "24px", color: "gray" }}>
                    Each unique code guides buyers to the product purchase site
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-5">
              <div className="d-flex  ">
                <div
                  className="p-5  text-center "
                  style={{
                    background: `linear-gradient(to bottom, #5a2154 , #2d3f66 100%)`,
                    width: "60%",
                  }}
                >
                  <h2 className=" fw-bold  ">Commission for guides</h2>
                  <p className="" style={{ fontSize: "24px", color: "gray" }}>
                    Guides earn commision when codes are used for shopping
                  </p>
                </div>
                <div className="mt-4" style={arrowHeadStyle2}></div>
              </div>
              <div style={{ ...rhombusStyle, marginLeft: "-180px" }}>
                <img
                  src={greenbag}
                  alt=""
                  style={{ ...imgstyle, width: "220px" }}
                />
              </div>
            </div>
            <div className="d-flex align-items-center gap-5">
              <div style={rhombusStyle}>
                <img
                  src={percent}
                  alt=""
                  style={{ ...imgstyle, width: "220px" }}
                />
              </div>
              <div className="d-flex  ">
                <div className="mt-4" style={arrowHeadStyle}></div>
                <div
                  className="p-4  text-center "
                  style={{
                    background: `linear-gradient(to bottom, #5a2154 , #2d3f66 100%)`,
                    width: "60%",
                  }}
                >
                  <h2 className=" fw-bold mt-4 mb-2 ">Discounts for buyers</h2>
                  <p className="" style={{ fontSize: "24px", color: "gray" }}>
                    Buyers enjoy significant discounts when using guide assigned
                    codes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benifits;
