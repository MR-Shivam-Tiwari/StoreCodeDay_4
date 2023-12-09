import React, { useEffect, useState } from "react";
import MenImg from "./img_2/Capture1.PNG";
import Girlimg from "./img_2/girlimg.PNG";
import BoyImg from "./img_2/boyimg.PNG";
import commas from "./img_2/20231209_180651.png";
import { Button } from "@mui/joy";
function TestiMonials() {
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
    fontSize: "14px",
    padding: "10px",
    width: "100%",
    textAlign: "start",
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
      <div
      style={{
        background: "linear-gradient(0deg, #670133 10%, #000000)",
        padding: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      }}
      >
      <div
        className="rounded-4 px-2"
        style={{
          background: "linear-gradient(0deg, #163693 10%, #a50150)",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="text-center text-white">
          <h3 className="fw-bold mt-0" style={HeadLine2}>
            TESTIMONIALS
          </h3>
          <p className="" style={HeadLine}>
            Seek advice from those who've experienced it firsthand.
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3 mt-4 ">
          <div className="border bg-white text-black rounded-4 mt-4">
            <div>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={MenImg}
                  alt="avtar"
                  style={{
                    width: "70%",
                    marginTop: "25px",
                  }}
                />
              </div>
              <div className="text-center">
                <h3 className="fw-bold" style={Name}>
                  Arjun Patel
                </h3>
                <p style={profession}>Shopper</p>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-4">
                <img src={commas} alt="" style={commasstyle} />
              </div>
              <div className="p-2 ">
                <p className="" style={para}>
                  Storecode has revolutionized my sopping by integrating
                  influencers and personalized codes, making the process
                  effortless and enjoyable. The unique codes lead to deals, and
                  the seamless integration of influencers
                </p>
              </div>
            </div>
          </div>
          <div className="border bg-white text-black rounded-4 mb-5 ">
            <div>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={Girlimg}
                  alt="avtar"
                  style={{
                    width: "70%",
                    marginTop: "25px",
                  }}
                />
              </div>
              <div className="text-center">
                <h3 className="fw-bold" style={Name}>
                  Ananya Sharma
                </h3>
                <p style={profession}>Influencer</p>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-4">
                <img src={commas} alt="" style={commasstyle} />
              </div>
              <div className="p-2 ">
                <p className="" style={para}>
                  What truly sets StoreCode apart is the seamless integration of
                  influencers into the shopping experince. The personilezed
                  codes provided by influencers not only guide me to fantatistic
                  deal but also contribute to their success
                </p>
              </div>
            </div>
          </div>
          <div className="border bg-white text-black rounded-4 mt-4 ">
            <div>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={BoyImg}
                  alt="avtar"
                  style={{
                    width: "70%",
                    marginTop: "25px",
                  }}
                />
              </div>
              <div className="text-center">
                <h3 className="fw-bold" style={Name}>
                  Aarav Kapoor
                </h3>
                <p style={profession}>Shopper</p>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-4">
                <img src={commas} alt="" style={commasstyle} />
              </div>
              <div className="p-2 ">
                <p className="" style={para}>
                  Navigating through the app is a breeze , and finding products
                  with those unique codes? It's like a treasure hunt made easy .
                  Whether it's grabbing the coolest tech gear or the trendist
                  fashion items , the app's personilized
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{backgroundColor:"#ff007f"}}>
          <div className=" d-flex align-items-center justify-content-center gap-2 p-2">
            <div className="fw-bold text-white" style={HeadLine3}>WISH TO BE A GUIDE AT STORECODE?</div>
            <div>
              <Button style={{ height:"10px", fontSize:"12px", backgroundColor:"#16348a"}}>REGISTER</Button>
            </div>
          </div>
        </div>
      </div>
      <hr className="" style={{color:"transparent"}}></hr>
    </div>
    </div>
  );
}

export default TestiMonials;
