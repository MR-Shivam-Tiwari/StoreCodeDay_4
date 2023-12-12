import { Avatar } from "@mui/joy";
import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import blueCard from "./dfggf.PNG";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

function ProductViewPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      // Check if window width is less than or equal to 400
      if (newWidth <= 400) {
        // Refresh the page
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const div1 = {
    width: "100%",
    height: "520px",
    background:
      "linear-gradient(120deg, #2f31a2 0%,  #fff 20%, #fff 40%, #fff 100%)",
  };

  if (windowWidth <= 467) {
    div1.height = "270px";
  }
  const cardStyle = {
    position: "relative",
    width: "100%",
    marginTop: "-70px",
    borderRadius: "25px",
    border: "4px solid white ",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
    marginLeft: "10px",
    height: "500px",
    overflow: "hidden",
  };
  if (windowWidth <= 467) {
    cardStyle.height = "270px";
    cardStyle.marginTop = "-152%";
    cardStyle.position = "absolute";
  }
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.5)",
  };

  const centerContentStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  };

  const youtubeLogoStyle = {
    width: "100px",
    height: "100px",
    marginBottom: "10px",
  };
  if (windowWidth <= 467) {
    youtubeLogoStyle.height = "60px";
    youtubeLogoStyle.width = "60px";
  }
  const smallCardStyle = {
    position: "absolute",
    top: "25%   ",
    width: "35%",
    left: "100px",
    backgroundColor: "black",
    borderRadius: "15px",
    padding: "10px",
    border: "4px solid white ",
  };
  if (windowWidth <= 467) {
    smallCardStyle.height = "11%";
    smallCardStyle.width = "50%";
    smallCardStyle.top = "9%";
    smallCardStyle.marginLeft = "-32%";
    smallCardStyle.border = "2px solid white ";
    smallCardStyle.borderRadius = "10px ";
  }
  const avtaR = {
    width: "10%",
    height: "10%",
    padding: "10px",
  };
  if (windowWidth <= 467) {
    avtaR.height = "12px";
    avtaR.width = "12px";
    avtaR.padding = "0px";
  }
  const paddingsmall = {
    padding: "10px",
  };
  if (windowWidth <= 467) {
    paddingsmall.padding = "0px";
  }
  const bluetext = { color: "blue", marginLeft: "20px" };
  if (windowWidth <= 467) {
    bluetext.marginLeft = "10px";
    bluetext.fontSize = "10px";
    bluetext.marginTop = "10px";
  }
  const para = { color: "gray", padding: "20px" };
  if (windowWidth <= 467) {
    para.padding = "3px";
    para.marginLeft = "8px";
    para.fontSize = "7px";
    para.marginTop = "-17px";
  }
  const cardw = {
    width: "400px",
    maxWidth: "100%",
    
    borderRadius: "30px",
    backgroundColor: "rgb(241 240 240)",
  };
  if (windowWidth <= 467) {
    cardw.width = "180px";
    cardw.height = "270px";
    cardw.borderRadius = "20px";
  }
  const cardImg = {
    minWidth: 200,
    height: "400px",
    borderRadius: "20px",
    position: "relative",
  };
  if (windowWidth <= 467) {
    cardImg.width = "180px";
    cardImg.height = "200px";
  }
  const imgCard2 = {
    height: "400px",
    borderRadius: "20px",
    objectFit: "cover",
  };
  if (windowWidth <= 467) {
    imgCard2.width = "162px";
    imgCard2.height = "180px";
  }
  const blurCard = {
    borderRadius: "25px",
    height: "200px",
    width: "400px",
    objectFit: "cover",
  };
  if (windowWidth <= 467) {
    blurCard.width = "180px";
    blurCard.height = "80px";
    blurCard.borderRadius = "12px";
    blurCard.marginBottom = "-42px";
    blurCard.marginTop = "-62px";
  }
  const cardName = {
    fontSize: "25px",
  };
  if (windowWidth <= 467) {
    cardName.fontSize = "15px";
    cardName.marginTop = "-16px";
  }
  const heart = {
    padding: "15px",
  };
  if (windowWidth <= 467) {
    heart.padding = "7px";
    heart.marginTop = "-30px";
  }
  const offper = {
    position: "absolute",
    top: "20%",
    right: "8px",
    transform: "translateY(-50%)",
    padding: "0px 20px 0px 20px",
    borderRadius: "20px 0px 0px 20px",
    background:
      "linear-gradient(90deg, rgb(44 47 161) 0%, rgb(44 47 161) 50%, rgb(165 75 221) 100%)",
  };
  if (windowWidth <= 467) {
    offper.right = "30px";
    offper.padding = "0px 5px 0px 5px";
  }
  const buttonCard = {
    borderRadius: "20px",
    height: "80px",
    width: "230px",
    fontSize: "30px",

    border: "15px solid #fef8f8",
    background:
      "linear-gradient(90deg, rgb(44 47 161) 0%, rgb(44 47 161) 50%, rgb(165 75 221) 100%)",
  };
  if (windowWidth <= 467) {
    buttonCard.width = "110px";
    buttonCard.height = "50px";
    buttonCard.fontSize = "10px";
    buttonCard.borderRadius = "13px";
    buttonCard.border = "7px solid #fef8f8";
    buttonCard.marginTop = "-37px ";
  }
  const gap = {
    gap:"100px"
  }
  if(windowWidth <= 467){
    gap.gap="20px"
  }

  return (
    <div
      className="container "
     
    >
      <div style={div1}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div style={cardStyle}>
            <img
              src="https://img.freepik.com/free-photo/portrait-woman-recording-video_23-2148586389.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
              alt="mage"
              style={imageStyle}
            />
            <div style={overlayStyle}></div>
            <div style={centerContentStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                color="red"
                style={youtubeLogoStyle}
                fill="currentColor"
                className="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </div>
          </div>
          <div className="shadow-lg" style={smallCardStyle}>
            <div
              className="d-flex align-items-center justify-content-between "
              style={paddingsmall}
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                style={avtaR}
              />

              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
                size="small"
              />
            </div>

            <p style={bluetext}>$/214325776/-</p>
            <p className="  " style={para}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio?
              Lorem ipsum dolor sit
            </p>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <div className="d-flex align-items-center justify-content-center p-3 " style={gap}> 
          <div className="mt-3">
            {" "}
            <Card className="mb-5" sx={cardw}>
              <CardOverflow className="p-2" sx={cardImg}>
                <img
                  src="https://img.freepik.com/free-photo/indian-picture-woman-hands-mehendi-tradition-decoration_155003-3325.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                  loading="lazy"
                  alt=""
                  style={imgCard2}
                />
                <div className="py-0 " style={offper}>
                  <p
                    className="text-white fw-bold"
                    style={{ margin: 0, fontSize: "10px" }}
                  >
                    10% off
                  </p>
                </div>
              </CardOverflow>

              <CardContent>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4
                      className="fw-bold"
                      href="#product-card"
                      fontWeight="md"
                      color="neutral"
                      textColor="text.primary"
                      overlay
                      style={cardName}
                    >
                      Product A400
                    </h4>
                    <p className="fw-bold " style={{ color: "gray" }}>
                      $50.00
                    </p>
                  </div>
                  <div className="card  shadow-sm rounded-5" style={heart}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      color="red"
                      fill="currentColor"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ marginBottom: "-42px" }}
              >
                <Button
                  variant="solid"
                  className="text-white "
                  color=""
                  style={buttonCard}
                >
                  <div
                    style={{
                      color: "white",
                      display: "inline-block",
                    }}
                  >
                    S1A5899
                  </div>
                </Button>
              </div>
            </Card>
            <Card className="mb-5" sx={cardw}>
              <CardOverflow className="p-2" sx={cardImg}>
                <img
                  src="https://img.freepik.com/premium-photo/beautiful-indian-woman-smiling-giving-happy-expression_54391-7264.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                  loading="lazy"
                  alt=""
                  style={imgCard2}
                />
                <div className="py-0 " style={offper}>
                  <p
                    className="text-white fw-bold"
                    style={{ margin: 0, fontSize: "10px" }}
                  >
                    10% off
                  </p>
                </div>
              </CardOverflow>

              <CardContent>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4
                      className="fw-bold"
                      href="#product-card"
                      fontWeight="md"
                      color="neutral"
                      textColor="text.primary"
                      overlay
                      style={cardName}
                    >
                      Product A400
                    </h4>
                    <p className="fw-bold " style={{ color: "gray" }}>
                      $50.00
                    </p>
                  </div>
                  <div className="card  shadow-sm rounded-5" style={heart}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      color="red"
                      fill="currentColor"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ marginBottom: "-42px" }}
              >
                <Button
                  variant="solid"
                  className="text-white "
                  color=""
                  style={buttonCard}
                >
                  <div
                    style={{
                      color: "white",
                      display: "inline-block",
                    }}
                  >
                    S1A5899
                  </div>
                </Button>
              </div>
            </Card>
            <Card className="mb-5" sx={cardw}>
              <CardOverflow className="p-2" sx={cardImg}>
                <img
                  src="https://img.freepik.com/free-photo/cheerful-traditional-indian-woman-white-background-studio-shot_1157-48206.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                  loading="lazy"
                  alt=""
                  style={imgCard2}
                />
                <div className="py-0 " style={offper}>
                  <p
                    className="text-white fw-bold"
                    style={{ margin: 0, fontSize: "10px" }}
                  >
                    10% off
                  </p>
                </div>
              </CardOverflow>

              <CardContent>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4
                      className="fw-bold"
                      href="#product-card"
                      fontWeight="md"
                      color="neutral"
                      textColor="text.primary"
                      overlay
                      style={cardName}
                    >
                      Product A400
                    </h4>
                    <p className="fw-bold " style={{ color: "gray" }}>
                      $50.00
                    </p>
                  </div>
                  <div className="card  shadow-sm rounded-5" style={heart}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      color="red"
                      fill="currentColor"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ marginBottom: "-42px" }}
              >
                <Button
                  variant="solid"
                  className="text-white "
                  color=""
                  style={buttonCard}
                >
                  <div
                    style={{
                      color: "white",
                      display: "inline-block",
                    }}
                  >
                    S1A5899
                  </div>
                </Button>
              </div>
            </Card>
          </div>
          <div className="mt-3">
            {" "}
            <div className="mb-5 " style={{ marginTop: "-90%" }}>
              <img src={blueCard} alt="" style={blurCard} />
            </div>
            <Card className="mb-5" sx={cardw}>
              <CardOverflow className="p-2" sx={cardImg}>
                <img
                  src="https://img.freepik.com/free-photo/cute-brunette-white-sweater-city_1157-18467.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                  loading="lazy"
                  alt=""
                  style={imgCard2}
                />
                <div className="py-0 " style={offper}>
                  <p
                    className="text-white fw-bold"
                    style={{ margin: 0, fontSize: "10px" }}
                  >
                    10% off
                  </p>
                </div>
              </CardOverflow>

              <CardContent>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4
                      className="fw-bold"
                      href="#product-card"
                      fontWeight="md"
                      color="neutral"
                      textColor="text.primary"
                      overlay
                      style={cardName}
                    >
                      Product A400
                    </h4>
                    <p className="fw-bold " style={{ color: "gray" }}>
                      $50.00
                    </p>
                  </div>
                  <div className="card  shadow-sm rounded-5" style={heart}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      color="red"
                      fill="currentColor"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ marginBottom: "-42px" }}
              >
                <Button
                  variant="solid"
                  className="text-white "
                  color=""
                  style={buttonCard}
                >
                  <div
                    style={{
                      color: "white",
                      display: "inline-block",
                    }}
                  >
                    S1A5899
                  </div>
                </Button>
              </div>
            </Card>
            <Card className="mb-5" sx={cardw}>
              <CardOverflow className="p-2" sx={cardImg}>
                <img
                  src="https://img.freepik.com/free-photo/cheerful-girl-cashmere-sweater-laughs-against-backdrop-blossoming-sakura-portrait-woman-yellow-hoodie-city-spring_197531-17886.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                  loading="lazy"
                  alt=""
                  style={imgCard2}
                />
                <div className="py-0 " style={offper}>
                  <p
                    className="text-white fw-bold"
                    style={{ margin: 0, fontSize: "10px" }}
                  >
                    10% off
                  </p>
                </div>
              </CardOverflow>

              <CardContent>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4
                      className="fw-bold"
                      href="#product-card"
                      fontWeight="md"
                      color="neutral"
                      textColor="text.primary"
                      overlay
                      style={cardName}
                    >
                      Product A400
                    </h4>
                    <p className="fw-bold " style={{ color: "gray" }}>
                      $50.00
                    </p>
                  </div>
                  <div className="card shadow-sm rounded-5" style={heart}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      color="red"
                      fill="currentColor"
                      class="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  </div>
                </div>
              </CardContent>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ marginBottom: "-42px" }}
              >
                <Button
                  variant="solid"
                  className="text-white "
                  color=""
                  style={buttonCard}
                >
                  <div
                    style={{
                      color: "white",
                      display: "inline-block",
                    }}
                  >
                    S1A5899
                  </div>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductViewPage;
