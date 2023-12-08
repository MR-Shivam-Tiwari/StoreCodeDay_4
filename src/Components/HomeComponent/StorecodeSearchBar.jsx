import { Button, Input } from "@mui/joy";
import React from "react";

function StorecodeSearchBar() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "20px",
  };

  const cardStyles = [
    {
      backgroundColor: "#c8bed9",
      transform: "rotate(-7deg)",
      marginTop: "60px",
      marginBottom: "20px",
      borderRadius: "20px",
      //   marginRight:"-30px",
      width: "280px",
      height: "300px",
    },
    {
      background:
        "linear-gradient(180deg, #dc479a 0%, #8d49c1 70%, #2F6CE5 100%)",
      transform: "rotate(8deg)",
      width: "280px",
      marginLeft: "35px",
      marginTop: "-300px",
      borderRadius: "20px",
      height: "300px",
      //   marginBottom:"-40px"
    },
    {
      backgroundColor: "#FFF",
      border: "8px solid #e4deeb ",
      marginTop: "-282px",
      width: "300px",
      borderRadius: "30px",
    },
  ];

  return (
    <div style={containerStyle}>
      <div>
        {cardStyles.map((style, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              height: "330px",
              borderRadius: "10px",
              overflow: "hidden",
              position: "relative",
              ...style,
            }}
          >
            <div className="text-center fw-bold py-4 " style={{}}>
              <div>
                <p className="mt-4 " style={{fontSize:"18px", lineHeight:"5px"}}>Shop With</p>
                <h1 className="fw-bold ">STORECODE</h1>
              </div>
              <div className="px-3 mt-5 mb-4">
                <Input
                  placeholder="      ENTER PRODUCT CODE"
                  variant=""
                  inputProps={{
                    style: {
                      fontSize: "14px",
                      textAlign: "center",
                      color: "your_placeholder_text_color",
                    },
                  }}
                  sx={{
                    "--Input-radius": "0px",
                    borderBottom: "2px solid",
                    borderColor: "neutral.outlinedBorder",
                    "&:hover": {
                      borderColor: "neutral.outlinedHoverBorder",
                    },
                    "&::before": {
                      border: "1px solid var(--Input-focusedHighlight)",
                      transform: "scaleX(0)",
                      left: 0,
                      right: 0,
                      bottom: "-2px",
                      top: "unset",
                      transition: "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                      borderRadius: 0,
                    },
                    "&:focus-within::before": {
                      transform: "scaleX(1)",
                    },
                  }}
                />
              </div>
              <div>
                <Button
                  size="lg"
                  style={{
                    position: "relative",
                    fontStyle: "normal",
                    width: "140px",
                    height: "55px",
                    lineHeight: "-0.3px",
                    borderRadius:"12px",
                    background:
                      "linear-gradient(90deg, #2a84ee 0%, #1f3dca 70%, #1f3dca 100%)",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      WebkitBackgroundClip: "text",
                      display: "inline-block",
                      fontSize: "20px",
                    }}
                  >
                    Search
                  </div>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StorecodeSearchBar;
