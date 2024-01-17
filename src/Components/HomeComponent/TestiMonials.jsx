import React, { useEffect, useState } from "react";
import MenImg from "./img_2/Capture1.PNG";
import Girlimg from "./img_2/girlimg.PNG";
import BoyImg from "./img_2/boyimg.PNG";
import commas from "./img_2/20231209_180651.png";
import { Avatar, Button } from "@mui/joy";
import { Rating } from "@mui/material";
function TestiMonials({ isDarkMode }) {
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
  const Name = {
    fontSize: "20px",
  };
  if (windowWidth <= 426) {
    Name.fontSize = "10px";
  }
  const HeadLine = {
    fontSize: "30px",
  };
  if (windowWidth <= 426) {
    HeadLine.fontSize = "12px";
  }
  const HeadLine3 = {
    fontSize: "30px",
  };
  if (windowWidth <= 426) {
    HeadLine3.fontSize = "11px";
  }
  const HeadLine2 = {
    fontSize: "30px",
  };
  if (windowWidth <= 426) {
    HeadLine2.fontSize = "12px";
  }
  const profession = {
    fontSize: "14px",
    marginTop: "-7px",
  };
  if (windowWidth <= 426) {
    profession.fontSize = "10px";
  }
  const commasstyle = {
    width: "35px",
  };
  if (windowWidth <= 426) {
    commasstyle.width = "10px";
    commasstyle.marginTop = "-35px";
  }
  const para = {
    fontSize: "20px",
    padding: "19px",
    width: "100%",
    textAlign: "start",
    color: "gray",
  };
  if (windowWidth <= 426) {
    para.fontSize = "4px";
    para.lineHeight = "4px";
    para.marginTop = "-20px";
    para.marginBottom = "-1px";
    para.padding = "2px";
  }
  return (
    <div className="text-white container mt-4 ">
      <div>
        <div
          className="rounded-4 px-2"
          // style={{
          //   background: "linear-gradient(0deg, #163693 10%, #a50150)",
          //   padding: "20px",
          //   boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          // }}
        >
          <div className="text-center text-white">
            <span
              className="fw-bold mt-0"
              style={{
                background:
                  "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              <p className="fw-bold mb-0" style={{ fontSize: "45px" }}>
                TESTIMONIALS
              </p>
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-3 mt-4 mb-4 ">
            <div
              className="border bg-white text-black rounded-4 mt-4"
              style={{ height: "550px" }}
            >
              <div>
                <div
                  className="  "
                  style={{
                    height: "180px",
                    borderRadius: "15px 15px 40% 40%",
                    backgroundColor: "#e3bee7",
                  }}
                ></div>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ marginTop: "-140px" }}
                >
                  <Avatar
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1705512426~exp=1705513026~hmac=738c14ce52c3b92d5b1c689bdd048c80ef94a16e189e67ba0ea62b04bcbd6f00"
                    style={{ width: "200px", height: "200px" }}
                  ></Avatar>
                </div>
                <div className="text-center mt-3">
                  <h3 className="fw-bold" style={Name}>
                    Aman Sharma
                  </h3>
                  <p style={profession}>Influencer</p>
                </div>
                <div className="d-flex  align-items-center justify-content-center">
                  <Rating
                    name="size-small"
                    style={{ color: "#fb379e" }}
                    defaultValue={5}
                    size="small"
                  />
                </div>
                <div className="p-2 ">
                  <p className="" style={para}>
                    Storecode has revolutionized my sopping by integrating
                    influencers and personalized codes, making the process
                    effortless and enjoyable. The unique codes lead to deals,
                    and the seamless integration of influencers
                  </p>
                </div>
              </div>
            </div>
            <div
              className="border bg-white text-black rounded-4 mt-4 w-150"
              style={{ height: "650px" }}
            >
              <div>
                <div
                  className="  "
                  style={{
                    height: "180px",
                    borderRadius: "15px 15px 40% 40%",
                    backgroundColor: "#e3bee7",
                  }}
                ></div>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ marginTop: "-140px" }}
                >
                  <Avatar
                    src="https://img.freepik.com/free-photo/lady-with-brown-eyes-is-smiling-red-wall_197531-16958.jpg?size=626&ext=jpg&uid=R128301811&ga=GA1.1.1744357875.1693396610&semt=sph"
                    style={{ width: "200px", height: "200px" }}
                  ></Avatar>
                </div>
                <div className="text-center mt-5">
                  <h3 className="fw-bold" style={Name}>
                    Ananya Sharma
                  </h3>
                  <p style={profession}>Influencer</p>
                </div>
                <div className="d-flex mb-4  align-items-center justify-content-center">
                  <Rating
                    name="size-small"
                    style={{ color: "#fb379e" }}
                    defaultValue={5}
                    size="small"
                  />
                </div>
                <div className="p-2 mt-4">
                  <p className="" style={para}>
                    Storecode has revolutionized my sopping by integrating
                    influencers and personalized codes, making the process
                    effortless and enjoyable. The unique codes lead to deals,
                    and the seamless integration of influencers
                  </p>
                </div>
              </div>
            </div>
            <div
              className="border bg-white text-black rounded-4 mt-4"
              style={{ height: "550px" }}
            >
              <div>
                <div
                  className="  "
                  style={{
                    height: "180px",
                    borderRadius: "15px 15px 40% 40%",
                    backgroundColor: "#e3bee7",
                  }}
                ></div>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ marginTop: "-140px" }}
                >
                  <Avatar
                    src="https://img.freepik.com/free-photo/front-view-man-working-as-real-estate-agent_23-2151064882.jpg?size=626&ext=jpg&uid=R128301811&ga=GA1.1.1744357875.1693396610&semt=sph"
                    style={{ width: "200px", height: "200px" }}
                  ></Avatar>
                </div>
                <div className="text-center mt-3">
                  <h3 className="fw-bold" style={Name}>
                    Ajey Singh
                  </h3>
                  <p style={profession}>Influencer</p>
                </div>
                <div className="d-flex   align-items-center justify-content-center">
                  <Rating
                    name="size-small"
                    style={{ color: "#fb379e" }}
                    defaultValue={5}
                    size="small"
                  />
                </div>
                <div className="p-2 ">
                  <p className="" style={para}>
                    Storecode has revolutionized my sopping by integrating
                    influencers and personalized codes, making the process
                    effortless and enjoyable. The unique codes lead to deals,
                    and the seamless integration of influencers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="card"
            style={{
              background: `linear-gradient(to bottom, ${
                isDarkMode ? "#913597" : "#ff007f"
              } 10%, ${isDarkMode ? "#2c406e" : "#ff007f"} 100%)`,
            }}
          >
            <div className=" d-flex align-items-center justify-content-center gap-2 p-2">
              <div className="fw-bold text-white" style={{ ...HeadLine3 }}>
                WISH TO BE A GUIDE AT STORECODE?
              </div>
              <div>
                <Button
                  style={{
                    height: "10px",
                    fontSize: "12px",
                    background: `linear-gradient(to right, ${
                      isDarkMode ? "#913597" : "#147CB8"
                    } 10%, ${isDarkMode ? "#4e85eb" : "#147CB8"} 100%)`,
                    borderRadius: isDarkMode ? "20px" : "5px",
                    border: "2px solid white",
                  }}
                >
                  REGISTER NOW
                </Button>
              </div>
            </div>
          </div>
        </div>
        <hr className="" style={{ color: "transparent" }}></hr>
      </div>
    </div>
  );
}

export default TestiMonials;
