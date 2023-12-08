import { Hidden } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";

function MostSearched() {
  const [fontSize, setFontSize] = useState("20px");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setFontSize("45px");
      } else if (width >= 992) {
        setFontSize("40px");
      } else if (width >= 768) {
        setFontSize("30px");
      } else {
        setFontSize("20px");
      }
    };

    // Initial call to set the font size on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const borderStyle = {
    width: "25%",
    height: "5%",
    padding: "2px",
    overflow: "hidden",
    border: `3px solid transparent`,
    borderImage:
      "linear-gradient(120deg, #e9d2ef 0%, #c067bc 50%, #669fec 100%)",
    borderImageSlice: "1",
  };
  const textStyle = {
    fontSize: "10px",
  };

  // Media query for desktop screens
  if (window.innerWidth >= 1200) {
    textStyle.fontSize = "24px";
  }
  return (
    <div className="text-white container px-4 mb-5 ">
      <div
        className="mb-2 px-2 pt-0 text-black"
        style={{ backgroundColor: "white" }}
      >
        <div className="">
          <div
            className="fw-bold mt-3 mb-2  "
            style={{
              position: "relative",
              fontSize: "30px",
              fontStyle: "normal",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              <h5
                className="fw-bold mb-4"
                style={{ fontSize, maxWidth: "800px", margin: "0 auto" }}
              >
                Most Searched Storecode Today!
              </h5>
            </span>
          </div>
          <div
            className="d-flex align-items-center justify-content-center "
            style={{ gap: "70px" }}
          >
            <div className="text-center me-1" style={borderStyle}>
              <div style={{ position: "relative" }}>
                <img
                  src="https://images.unsplash.com/photo-1541260894924-7ff059b93d54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3QlMjBtYW58ZW58MHx8MHx8fDA%3D"
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "90px",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background:
                      "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  <p className=" text-white fw-bold mb-0" style={textStyle}>
                    PRODUCT
                  </p>
                </span>
              </div>
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                <p className="fw-bold mb-0" style={textStyle}>
                  SIA5976
                </p>
              </span>
            </div>

            <div className="text-center me-1  " style={borderStyle}>
              <div style={{ position: "relative" }}>
                <img
                  src="https://img.freepik.com/premium-photo/asian-man-being-ready-his-vacation_8087-2633.jpg"
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "90px",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background:
                      "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  <p className=" text-white fw-bold mb-0" style={textStyle}>
                    TRAVEL
                  </p>
                </span>
              </div>
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  display: "inline-block",
                }}
              >
                <p className="fw-bold mb-0" style={textStyle}>
                  SIA5976
                </p>
              </span>
            </div>
          </div>
          <div className="px-3  ">
            <div className="d-flex align-items-center justify-content-center gap-1  ">
              <div className="text-center me-1 " style={borderStyle}>
                <img
                  src="https://images.unsplash.com/photo-1608748010899-18f300247112?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  <p className="fw-bold mb-0  " style={textStyle}>
                    SIA5976
                  </p>
                </span>
              </div>
              <div className="text-center me-2 " style={borderStyle}>
                <img
                  src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  <p className="fw-bold mb-0 " style={textStyle}>
                    SIA5899
                  </p>
                </span>
              </div>
              <div className="text-center ms-2 " style={borderStyle}>
                <img
                  src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  <p className="fw-bold mb-0 " style={textStyle}>
                    SIA5920
                  </p>
                </span>
              </div>
              <div className="text-center ms-1 " style={borderStyle}>
                <img
                  src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYXZlbCUyMG1lbiUyMDklM0ExMnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  <p className="fw-bold mb-0 " style={textStyle}>
                    SIA5989
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-3"></hr>
      </div>
    </div>
  );
}

export default MostSearched;
