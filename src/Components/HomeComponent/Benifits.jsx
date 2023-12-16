import React from "react";
import FirstImage from "./img/willustration.png";
import SecondImg from "./img/indian-rupee.png";
import ThirdImg from "./img/sales-promotion.png";
import { useState } from "react";
import { useEffect } from "react";
import styled from "@emotion/styled";

function Benifits() {
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
    backgroundColor: "#FFF",
    transform: "rotate(45deg)",
    margin: "50px",
    position: "relative",
    borderRadius: "30px",
  };
  if (windowWidth <= 450) {
    rhombusStyle.width = "40px";
    rhombusStyle.height = "40px";
    rhombusStyle.borderRadius = "10px";
    rhombusStyle.marginBottom = "60px";
  }
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
  if(windowWidth <= 450){
    containerStyle.marginTop='-50px'
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
    width: "100%",
    transform: "rotate(-45deg)",
    margin: "50px",
    position: "relative",
    marginTop: "-10px",
    marginLeft: "-15px",
  };
  if (windowWidth <= 467) {
    imgstyle.width = "35px";
    imgstyle.height = "35px";
    imgstyle.fontSize = "12px";
    imgstyle.marginBottom = "-55px";
    imgstyle.marginLeft = "0px";
  }

  return (
    <div className="text-white container  mt-4">
      <div
        className="text-center card rounded-3 p-2"
        style={{ backgroundColor: "#252525" }}
      >
        <h3 className="fw-bold text-white mt-3 mb-5">
          1 <span style={{ color: "#8bb4f2" }}>CODE</span> 1{" "}
          <span style={{ color: "#fe0182" }}>BENEFITS</span>
        </h3>
        <div
          className="d-flex align-items-center  justify-content-center  text-white"
          style={containerStyle}
        >
          <div>
            <div className="">
              <div style={rhombusStyle}>
                <div className="card" style={num}>
                  1
                </div>
                <div>
                  <img src={FirstImage} alt="" style={imgstyle} />
                </div>
              </div>
              <div className="text-center" style={{ marginLeft: "-20px" }}>
                <div className="d-flex align-items-center justify-content-center">
                  <div className="text-white card  " style={BlueCard}>
                    <h6 style={bluetext}>
                      Redirects Shoppers to Purchasing Site
                    </h6>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-white text-center" style={para}>
                    Each unique code guides buyers to the product purchase site
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <div style={rhombusStyle}>
                <div className="card" style={num}>
                  2
                </div>
                <div>
                  <img src={SecondImg} alt="" style={imgstyle} />
                </div>
              </div>
              <div className="text-center" style={{ marginLeft: "-25px" }}>
                <div className="d-flex align-items-center justify-content-center">
                  <div
                    className="text-white card  "
                    style={BlueCard}
                  >
                    <h6 style={bluetext}>Commission for Guides</h6>
                  </div>
                </div>
                <div className="mt-3">
                  <p
                    className="text-white text-center"
                    style={para}
                  >
                    Guides earn Commissions when codes are used for shopping
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <div style={rhombusStyle}>
                <div className="" style={num}>
                  3
                </div>
                <div>
                  <img src={ThirdImg} alt="" style={imgstyle} />
                </div>
              </div>
              <div className="text-center" style={{ marginLeft: "-25px" }}>
                <div className="d-flex align-items-center justify-content-center">
                  <div
                    className="text-white card  "
                    style={BlueCard}
                  >
                    <h6  style={bluetext}>Discounts for Buyers</h6>
                  </div>
                </div>
                <div className="mt-3">
                  <p
                    className="text-white text-center"
                    style={para}
                  >
                    Buyers get big discounts with Guide-assigned codes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <style>
            {`
          /* Hide the scrollbar for Chrome, Safari, and Edge */
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
        `}
          </style>
        </div>
      </div>
    </div>
  );
}

export default Benifits;
