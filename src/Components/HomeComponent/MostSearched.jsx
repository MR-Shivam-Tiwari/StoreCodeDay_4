import { Card, CardContent, Hidden, Typography } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./MosteSearched.css";
import CardCover from "@mui/joy/CardCover";
import product1 from './img/product1.jpg'
import product2 from "./img/product2.jpg";
import product3 from "./img/product3.png";
import product4 from "./img/product4.jpg";
import product5 from "./img/product5.jpg";
import travel1 from './img/travel1.jpg'
import travel2 from './img/travel2.jpg'
import travel3 from './img/travel3.jpg'
import travel4 from './img/travel4.jpg'
import travel5 from './img/travel5.jpg'
function MostSearched({ isDarkMode }) {
  const [fontSize, setFontSize] = useState("20px");
  const [images] = useState([product1, product2, product3, product4, product5]);
  const [images2] = useState([travel1, travel2, travel3, travel4, travel5]);
  
  const [activeImage, setActiveImage] = useState(2);

  const handleImageClick = (index) => {
    if (activeImage === index) {
      setActiveImage(null);
    } else {
      setActiveImage(index);
    }
  };
  const [activeImage2, setActiveImage2] = useState(2);

  const handleImageClick2 = (index) => {
  if (activeImage2 === index) {
      setActiveImage2(null);
    } else {
      setActiveImage2(index);
    }
  };
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
  const borderStyle2 = {
    width: "25%",
    height: "5%",
    padding: "2px",
    overflow: "hidden",
    marginBottom: "-70px",
    border: `3px solid transparent`,
    backgroundColor: "white",
    borderImage:
      "linear-gradient(120deg, #e9d2ef 0%, #c067bc 50%, #669fec 100%)",
    borderImageSlice: "1",
  };
  const textStyle2 = {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#670133",
    textShadow:
      "3px 0 0 #670133, -3px 0 0 #670133, 0 3px 0 #670133, 0 -3px 0 #670133",
  };
  if (window.innerWidth >= 1200) {
    textStyle2.fontSize = "40px";
  }
  const textStyle = {
    fontSize: "10px",
  };

  // Media query for desktop screens
  if (window.innerWidth >= 1200) {
    textStyle.fontSize = "24px";
  }
  return (
    <div className="text-white container px-4 mb-5 ">
      <div className="mb-2 px-2 pt-0 text-black">
        <div className="">
          <div
            className="fw-bold mt-3 mb-2 text-center  "
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
                className="fw-bold  mb-4"
                style={{
                  fontSize,
                  maxWidth: "800px",
                  margin: "0 auto",
                }}
              >
                Most Searched Storecode Today!
              </h5>
            </span>
          </div>
          <div className="product d-flex align-items-center justify-content-center ">
            {images.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`imag${index + 1}`}
                className={`product-img ${
                  activeImage === index ? "hovered" : ""
                }`}
                onClick={() => handleImageClick(index)}
              />
              
            ))}
          </div>
          <div className="product d-flex align-items-center justify-content-center mt-5">
            {images2.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`imag${index + 1}`}
                className={`product-img ${
                  activeImage2 === index ? "hovered" : ""
                }`}
                onClick={() => handleImageClick2(index)}
              />
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostSearched;
