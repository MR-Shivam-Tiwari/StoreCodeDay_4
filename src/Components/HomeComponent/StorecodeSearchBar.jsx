import { Button, Input } from "@mui/joy";
import React from "react";
import { useState } from "react";
import axios from "axios";
function StorecodeSearchBar({ isDarkMode }) {
  const [link, setLink] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [searchCode, setSearchCode] = useState("");
  const [error, setError] = useState(null);
  const [redirectLink, setRedirectLink] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3002/api/generate-link",
        {
          code: searchCode,
        }
      );

      const link = response.data.link;

      // Redirect to the link if it exists
      if (link) {
        setRedirectLink(link);
        window.open(link, "_blank"); // Open the link in a new tab
        setSearchCode(""); // Clear the searchCode after searching
      } else {
        setError("Code not found");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const generateCode = async () => {
    try {
      const response = await axios.post("http://localhost:3002/api/generate", {
        link,
      });
      setGeneratedCode(response.data.code);
    } catch (error) {
      console.error("Error generating code:", error);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "20px",
  };

  const cardStyles = [
    {
      backgroundColor: isDarkMode ? "#3c1d6d" : "#c8bed9",
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
      fontSize:"20px"
      //   marginBottom:"-40px"
    },
    {
      backgroundColor: isDarkMode ? "#3c1d6d" : "white",
      border: "6px solid #e4deeb ",
      marginTop: "-282px",
      width: "300px",
      borderRadius: "30px",
      
    },
  ];

  return (
    <div>
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
                  <p
                    className="mt-4 "
                    style={{ fontSize: "18px", lineHeight: "5px", color: isDarkMode ? "white" : "black" }}
                  >
                    Shop With
                  </p>
                  <h2 className="fw-bold " style={{color: isDarkMode ? "white" : "black"}}>STORECODE</h2>
                </div>
                <div className="px-3 mt-5 mb-4">
                  <Input
                    placeholder="      ENTER PRODUCT CODE"
                    variant=""
                    style={{
                      backgroundColor: isDarkMode ? "#3c1d6d" : "white",
                    }}
                    value={searchCode}
                    onChange={(e) => setSearchCode(e.target.value)}
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
                        transition:
                          "transform .15s cubic-bezier(0.1,0.9,0.2,1)",
                        borderRadius: 0,
                      },
                      "&:focus-within::before": {
                        transform: "scaleX(1)",
                      },
                      "&::placeholder": {
                        color: isDarkMode ? "white" : "black",
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
                      borderRadius: "12px",

                      background: `linear-gradient(to right, ${
                        isDarkMode ? "#b71674" : "  #2d83e7"
                      } 20%, ${isDarkMode ? "#35265f" : "#1e3ec3"} 100%)`,
                    }}
                    onClick={handleSearch}
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
      <div className="text-danger text-center fw-bold">
        {error && <p>Error: {error}</p>}
      </div>
      <div className="container px-4 mb-4">
        <div
          className=""
          style={{ border: "3px solid #e49cdf", borderRadius: "12px" }}
        >
          <div
            className=""
            style={{ border: "2px solid white ", borderRadius: "12px" }}
          >
            <div
              className="card text-center "
              style={{
                borderRadius: "12px",
                background: `linear-gradient(to bottom, ${
                  isDarkMode ? "#0f358a" : "  #e9d2ef"
                } 10%, ${isDarkMode ? "#EF175F" : "#d6dffc"} 100%)`,
              }}
            >
              <h5 className="py-3 fw-bold" style={{color: isDarkMode ? "white" : "black"}}>Get a code for your link</h5>
              <div
                className="px-4 mb-5"
                style={{ display: "flex", alignItems: "center" }}
              >
                <Input
                style={{backgroundColor: isDarkMode ? "transparent" : "white"}}
                  sx={{
                    border: "1px solid #e49cdf",
                    borderRadius: "8px 8px 8px 8px ",
                    flex: 1,
                    marginRight: "-2px", // Adjust this value to fine-tune the alignment
                  }}
                  value={link}
                  endDecorator={
                    <Button
                    className=""
                    onClick={generateCode}
                    style={{
                      fontStyle: "normal",
                      background: `linear-gradient(to bottom, ${
                        isDarkMode ? "#201a64" : " #cb50a6"
                      } 20%, ${isDarkMode ? "#211f37" : "#97a9ef"} 100%)`
                      , borderRadius:isDarkMode ? '25px' : '5px'
                    }}
                  >
                    <div
                      style={{
                        color: "white",
                        WebkitBackgroundClip: "text",
                        display: "inline-block",
                      }}
                    >
                      Get Code
                    </div>
                  </Button>
                  }
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Paste your link here.."
                />
              
              </div>
              <div className="container px-4 mb-4">
                {/* Display generated code here */}
                {generatedCode && (
                  <div
                    className="card p-3"
                    style={{
                      borderRadius: "12px",
                      marginTop: "20px",
                    }}
                  >
                    <p className="fw-bold">Generated Code:</p>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={generatedCode}
                        readOnly
                      />
                      <Button
                        className=" "
                        variant="outlined"
                        type="button"
                        onClick={copyToClipboard}
                      >
                        Copy
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorecodeSearchBar;
