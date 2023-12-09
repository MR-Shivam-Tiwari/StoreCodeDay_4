import React from "react";
import FirstImage from "./img/willustration.png";
import SecondImg from "./img/indian-rupee.png";
import ThirdImg from "./img/sales-promotion.png";
import { useState } from "react";
import { useEffect } from "react";
import styled from "@emotion/styled";
const rhombusStyle = {
  width: "220px",
  height: "220px",
  backgroundColor: "#FFF",
  transform: "rotate(45deg)",
  margin: "50px",
  position: "relative",
  borderRadius: "30px",
};
const BlueCard = {
  backgroundColor: "#023fac",
  width: "50%",
  padding: "5px 20px 0px 20px",
  borderRadius: "20px 0px 20px 0px",
};

function FirstDiv() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const BlueCard = {
    backgroundColor: "#023fac",
    width: "50%",
    padding: "5px 20px 0px 20px",
    borderRadius: "20px 0px 20px 0px",
  };
  if (windowWidth <= 467) {
    BlueCard.width = "60%";
  }

  const para = {
    marginLeft: "70px",
    width: "65%",
  };
  if (windowWidth <= 467) {
    para.width = "70%";
    para.marginLeft = "60px";
  }
  return (
    <div className="">
      <div style={rhombusStyle}>
        <div
          className="card"
          style={{
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
            top: "35px", // Adjust as needed to move the text down
            left: "10px", // Adjust as needed to move the text to the right
            fontWeight: "bold",
          }}
        >
          1
        </div>
        <div>
          <img
            src={FirstImage}
            alt=""
            style={{
              width: "100%",
              transform: "rotate(-45deg)",
              margin: "50px",
              position: "relative",
              marginTop: "-10px",
              marginLeft: "-15px",
            }}
          />
        </div>
      </div>
      <div className="text-center" style={{ marginLeft: "-20px" }}>
        <div className="d-flex align-items-center justify-content-center">
          <div className="text-white card  " style={BlueCard}>
            <h6>Redirects Shoppers to Purchasing Site</h6>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-white text-center" style={para}>
            Each unique code guides buyers to the product purchase site
          </p>
        </div>
      </div>
    </div>
  );
}

function Benifits() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    color: "white",
    overflow: "auto", // This will hide the scroll bar
    position: "relative", // Ensure position relative for positioning the invisible scrollbar overlay
  };

  const scrollbarStyle = {
    width: "0px",
    background: "transparent",
    border: "none",
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%", // Adjust height as needed
  };

  return (
    <div className="text-white container px-4 mt-4">
      <div
        className="text-center card rounded-3 p-2"
        style={{ backgroundColor: "#252525" }}
      >
        <h3 className="fw-bold text-white mt-3 mb-5">
          1 <span style={{ color: "#8bb4f2" }}>CODE</span> 1{" "}
          <span style={{ color: "#fe0182" }}>BENEFITS</span>
        </h3>
        <div
          className="d-flex align-items-center gap-4  text-white"
          style={containerStyle}
        >
          <div>
            <FirstDiv />
          </div>
          <div>
            <div className="">
              <div style={rhombusStyle}>
                <div
                  className="card"
                  style={{
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
                    top: "35px", // Adjust as needed to move the text down
                    left: "10px", // Adjust as needed to move the text to the right
                    fontWeight: "bold",
                  }}
                >
                  2
                </div>
                <div>
                  <img
                    src={SecondImg}
                    alt=""
                    style={{
                      width: "100%",
                      transform: "rotate(-45deg)",
                      margin: "50px",
                      position: "relative",
                      marginTop: "-20px",
                      marginLeft: "-30px",
                    }}
                  />
                </div>
              </div>
              <div className="text-center" style={{ marginLeft: "-25px" }}>
                <div className="d-flex align-items-center justify-content-center">
                  <div
                    className="text-white card  "
                    style={{
                      backgroundColor: "#023fac",
                      width: "50%",
                      padding: "5px 20px 0px 20px",
                      borderRadius: "20px 0px 20px 0px",
                    }}
                  >
                    <h6>Commission for Guides</h6>
                  </div>
                </div>
                <div className="mt-3">
                  <p
                    className="text-white text-center"
                    style={{ marginLeft: "70px", width: "65%" }}
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
                <div
                  className=""
                  style={{
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
                    top: "35px", // Adjust as needed to move the text down
                    left: "10px", // Adjust as needed to move the text to the right
                    fontWeight: "bold",
                  }}
                >
                  3
                </div>
                <div>
                  <img
                    src={ThirdImg}
                    alt=""
                    style={{
                      width: "100%",
                      transform: "rotate(-45deg)",
                      margin: "50px",
                      position: "relative",
                      marginTop: "-20px",
                      marginLeft: "-10px",
                    }}
                  />
                </div>
              </div>
              <div className="text-center" style={{ marginLeft: "-25px" }}>
                <div className="d-flex align-items-center justify-content-center">
                  <div
                    className="text-white card  "
                    style={{
                      backgroundColor: "#023fac",
                      width: "50%",
                      padding: "5px 20px 0px 20px",
                      borderRadius: "20px 0px 20px 0px",
                    }}
                  >
                    <h6>Discounts for Buyers</h6>
                  </div>
                </div>
                <div className="mt-3">
                  <p
                    className="text-white text-center"
                    style={{ marginLeft: "70px", width: "65%" }}
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
