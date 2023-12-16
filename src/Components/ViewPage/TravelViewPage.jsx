import React, { useEffect, useRef, useState } from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { AspectRatio, Box, Button, CardOverflow } from "@mui/joy";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Chip from "@mui/joy/Chip";
import Stepper from "@mui/joy/Stepper";
import Step from "@mui/joy/Step";
import StarIcon from "@mui/icons-material/Star";
import StepIndicator from "@mui/joy/StepIndicator";
import Stack from "@mui/joy/Stack";
import { stepClasses } from "@mui/joy/Step";
import { stepIndicatorClasses } from "@mui/joy/StepIndicator";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Rating } from "@mui/material";

function TravelViewPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedDay, setSelectedDay] = useState("Day1");

  const handleButtonClick = (day) => {
    setSelectedDay(day);
  };
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
  const div1 = { minWidth: 300, flexGrow: 1, height: "500px" };
  if (windowWidth <= 467) {
    div1.height = "200px";
  }
  const back = {
    width: "25px",
    height: "25px",
  };

  const price = {
    fontSize: "26px",
    width: "20%",
    borderRadius: "15px",
    border: "2px solid rgb(205 116 212)",
  };
  if (windowWidth <= 476) {
    price.width = "35%";
    price.fontSize = "11px";
    price.marginLeft = "-11px";
  }
  const planeCode = {
    fontSize: "26px",
    width: "11%",
    borderRadius: "15px",
    marginLeft: "88%",
    border: "2px solid rgb(205 116 212)",
  };
  if (windowWidth <= 476) {
    planeCode.width = "26%";
    planeCode.fontSize = "17px";
    planeCode.marginLeft = "217px";
  }
  const chipCode = {
    fontSize: "26px",
  };
  if (windowWidth <= 476) {
    planeCode.fontSize = "17px";
  }
  const cardImg = {
    minWidth: 200,
    height: "400px",
    borderRadius: "5px",
    position: "relative",
  };
  const arrowStyle = {
    position: "relative",
    width: "600px", // Adjust the width as needed
    height: "20px", // Adjust the height as needed
    borderBottom: "2px solid black", // Arrow stem
  };
  if (windowWidth <= 467) {
    arrowStyle.width = "100px";
  }

  const arrowHeadStyle = {
    position: "absolute",
    top: "110%",
    left: "101%",
    transform: "translate(-100%, -50%)",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "10px 0 10px 15px", // Adjust the size of the arrowhead
    borderColor: "transparent transparent transparent black", // Adjust the color
  };
  if (windowWidth <= 467) {
    cardImg.width = "320px";
    cardImg.height = "130px";
  }
  const cardw = {
    width: "100%",
    maxWidth: "100%",

    borderRadius: "5px",
    backgroundColor: "rgb(241 240 240)",
  };
  if (windowWidth <= 467) {
    cardw.width = "100%";
  }
  const imgCard2 = {
    height: "400px",
    borderRadius: "5px",
    objectFit: "cover",
  };
  if (windowWidth <= 467) {
    imgCard2.width = "100%";
    imgCard2.height = "130px";
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
  const cardName = {
    fontSize: "25px",
  };
  if (windowWidth <= 467) {
    cardName.fontSize = "15px";
    cardName.marginTop = "-16px";
  }
  return (
    <div className="">
      <div className="px-3 py-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={back}
          fill="currentColor"
          className="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </div>
      <div>
        <Card className="rounded-0" component="li" sx={div1}>
          <CardCover className="rounded-0">
            <video
              className="rounded-0"
              autoPlay
              loop
              muted
              poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source
                src="https://assets.codepen.io/6093409/river.mp4"
                type="video/mp4"
              />
            </video>
          </CardCover>
          <CardContent>
            <Typography
              className="card text-black p-1 fw-bold px-2"
              textColor="#fff"
              mt={{ xs: 19, sm: 53 }}
              style={price}
            >
              Rs.499780<span style={{ color: "gray" }}>/person</span>
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <div className="d-flex gap-2 align-items-center justify-content-center py-2">
          <Button
            style={{
              position: "relative",
              fontStyle: "normal",
              border: "2px solid #c974d5",
              color: selectedDay === "Day1" ? "white" : "black",
              background:
                selectedDay === "Day1"
                  ? "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)"
                  : "white",
            }}
            size="lg"
            onClick={() => handleButtonClick("Day1")}
          >
            <div
              className="fw-bold"
              style={{
                fontSize: "13px",
                WebkitBackgroundClip: "text",
                display: "inline-block",
              }}
            >
              Day 1
            </div>
          </Button>
          <Button
            style={{
              position: "relative",
              fontStyle: "normal",
              border: "2px solid #c974d5",
              color: selectedDay === "Day2" ? "white" : "black",
              background:
                selectedDay === "Day2"
                  ? "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)"
                  : "white",
            }}
            size="lg"
            onClick={() => handleButtonClick("Day2")}
          >
            <div
              className="fw-bold"
              style={{
                WebkitBackgroundClip: "text",
                fontSize: "13px",
                display: "inline-block",
              }}
            >
              Day 2
            </div>
          </Button>
          <Button
            style={{
              position: "relative",
              fontStyle: "normal",
              border: "2px solid #c974d5",
              color: selectedDay === "Day3" ? "white" : "black",
              background:
                selectedDay === "Day3"
                  ? "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)"
                  : "white",
            }}
            size="lg"
            onClick={() => handleButtonClick("Day3")}
          >
            <div
              className="fw-bold"
              style={{
                fontSize: "13px",
                WebkitBackgroundClip: "text",
                display: "inline-block",
              }}
            >
              Day 3
            </div>
          </Button>
          <Button
            style={{
              position: "relative",
              fontStyle: "normal",
              border: "2px solid #c974d5",
              color: selectedDay === "Day4" ? "white" : "black",
              background:
                selectedDay === "Day4"
                  ? "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)"
                  : "white",
            }}
            size="lg"
            onClick={() => handleButtonClick("Day4")}
          >
            <div
              className="fw-bold"
              style={{
                fontSize: "13px",
                WebkitBackgroundClip: "text",
                display: "inline-block",
              }}
            >
              Day 4
            </div>
          </Button>
        </div>
        <h6 className="px-2 fw-bold" style={{ fontSize: "14px" }}>
          Detailed itinerary for 4-day trip to Himachal Pradesh
        </h6>
        {selectedDay && (
          <div>
            {selectedDay === "Day1" && (
              <div className="day1-content container py-2">
                <Stepper
                  orientation="vertical"
                  sx={{
                    width: "100%",

                    [`& .${stepClasses.root}:has(+ .${stepClasses.active})::after`]:
                      {
                        color: "primary.500",
                        backgroundColor: "transparent",
                        backgroundImage:
                          "radial-gradient(gray 2px, transparent 2px)",
                        backgroundSize: "7px 7px 7px 7px",
                        backgroundPosition: "center left",
                      },
                  }}
                >
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                        onClick={() => handleButtonClick("Day1")}
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          7:00 AM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-airplane"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599" />
                        </svg>
                        <strong>Book Journey</strong>to Shimla
                      </p>
                      <Card className="mb-5" sx={cardw}>
                        <CardOverflow className="p-2" sx={cardImg}>
                          <img
                            src="https://img.freepik.com/free-photo/place-flying-sunset-sky_1112-1132.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                            loading="lazy"
                            alt=""
                            style={imgCard2}
                          />
                          <Typography
                            className="card text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -5, sm: -6 }}
                            style={planeCode}
                          >
                            SIA9386
                          </Typography>
                        </CardOverflow>

                        <CardContent>
                          <div className="d-flex align-items-center justify-content-between">
                            <div style={{ lineHeight: "5px" }}>
                              <h6>Departure</h6>
                              <p>7:00 AM </p>
                              <p style={{ fontSize: "90%" }}>Bangluru</p>
                            </div>
                            <div className="" style={arrowStyle}>
                              <div style={arrowHeadStyle}></div>
                            </div>
                            <div style={{ lineHeight: "5px" }}>
                              <h6>Departure</h6>
                              <p>7:00 AM </p>
                              <p style={{ fontSize: "90%" }}>Bangluru</p>
                            </div>
                          </div>
                          <div className="d-flex  align-items-center justify-content-between">
                            <div>Rs.499780/person</div>
                            <div>
                              {" "}
                              <Button
                                style={{
                                  position: "relative",
                                  fontStyle: "normal",
                                  color: "white",
                                  background:
                                    "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)",
                                }}
                                size="sm"
                              >
                                <div
                                  className="fw-bold px-1"
                                  style={{
                                    fontSize: "13px",
                                    WebkitBackgroundClip: "text",
                                    display: "inline-block",
                                  }}
                                >
                                  View Site
                                </div>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Step>
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                        onClick={() => handleButtonClick("Day1")}
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          2:30 PM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <strong>Accommodation</strong>at Snow Valley Resort
                      </p>
                      <Card className="mb-5" sx={cardw}>
                        <CardOverflow className="p-2" sx={cardImg}>
                          <img
                            src="https://img.freepik.com/free-photo/sunset-pool_1203-3192.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                            loading="lazy"
                            alt=""
                            style={imgCard2}
                          />
                          <Typography
                            className="d-flex gap-1 text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -5, sm: -6 }}
                            style={chipCode}
                          >
                            <Chip>This is a chip</Chip>
                            <Chip>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="gold"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 2L14.85 8.3L22 9.3L17 14L18.85 20L12 17.5L5.15 20L7 14L2 9.3L9.15 8.3L12 2z" />
                                </svg>
                                <Box className="ms-1">4.4</Box>
                              </Box>
                            </Chip>
                          </Typography>
                          <Typography
                            className="card text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -3, sm: -4 }}
                            style={planeCode}
                          >
                            SIA9386
                          </Typography>
                        </CardOverflow>

                        <CardContent>
                          <div className=" ">
                            <Chip className="bg-white ms-1">hill View</Chip>
                            <Chip className="bg-white ms-1">Free Wifi</Chip>
                            <Chip className="bg-white ms-1">Swimming Pool</Chip>
                            <Chip className="bg-white ms-1">breakfast</Chip>
                            <Chip className="bg-white ms-1">fitness</Chip>
                          </div>
                          <div className="d-flex  align-items-center justify-content-between">
                            <div>Rs.4997/Night</div>
                            <div>
                              {" "}
                              <Button
                                style={{
                                  position: "relative",
                                  fontStyle: "normal",
                                  color: "white",
                                  background:
                                    "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)",
                                }}
                                size="sm"
                              >
                                <div
                                  className="fw-bold px-1"
                                  style={{
                                    fontSize: "13px",
                                    WebkitBackgroundClip: "text",
                                    display: "inline-block",
                                  }}
                                >
                                  View Site
                                </div>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Step>
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          4:00 PM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <strong>Explore Attraction </strong>to Shimla temple
                      </p>
                      <Card className="mb-5" sx={cardw}>
                        <CardOverflow className="p-2" sx={cardImg}>
                          <img
                            src="https://img.freepik.com/free-photo/backpacker-deogyusan-mountains-winter_335224-465.jpg?w=900&t=st=1702418905~exp=1702419505~hmac=f93477c92ef1952f5b81ab539273a90b51da05cd67843d6bea786f8d33d89323"
                            loading="lazy"
                            alt=""
                            style={imgCard2}
                          />
                          <Typography
                            className="d-flex gap-1 text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -5, sm: -6 }}
                            style={chipCode}
                          >
                            <Chip> Shimla</Chip>
                            <Chip>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="gold"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 2L14.85 8.3L22 9.3L17 14L18.85 20L12 17.5L5.15 20L7 14L2 9.3L9.15 8.3L12 2z" />
                                </svg>
                                <Box className="ms-1">4.4</Box>
                              </Box>
                            </Chip>
                          </Typography>
                          <Typography
                            className="card text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -3, sm: -4 }}
                            style={planeCode}
                          >
                            SIA9386
                          </Typography>
                        </CardOverflow>

                        <CardContent>
                          <div className=" ">
                            <Chip className="bg-white ms-1">
                              Timing 6 Am - 12 Am
                            </Chip>
                            <Chip className="bg-white ms-1">Free Wifi</Chip>
                            <Chip className="bg-white ms-1">No dress code</Chip>
                            <Chip className="bg-white ms-1">breakfast</Chip>
                          </div>
                          <div className="d-flex  align-items-center justify-content-between">
                            <div>Free</div>
                            <div>
                              {" "}
                              <Button
                                style={{
                                  position: "relative",
                                  fontStyle: "normal",
                                  color: "white",
                                  background:
                                    "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)",
                                }}
                                size="sm"
                              >
                                <div
                                  className="fw-bold px-1"
                                  style={{
                                    fontSize: "13px",
                                    WebkitBackgroundClip: "text",
                                    display: "inline-block",
                                  }}
                                >
                                  View Site
                                </div>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Step>
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          4:00 PM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <strong>Explore Attraction </strong>to Shimla Church
                      </p>
                      <Card className="mb-5" sx={cardw}>
                        <CardOverflow className="p-2" sx={cardImg}>
                          <img
                            src="https://img.freepik.com/free-photo/small-church-cap-malheureux-mauritius-winter_181624-13330.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                            loading="lazy"
                            alt=""
                            style={imgCard2}
                          />
                          <Typography
                            className="d-flex gap-1 text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -5, sm: -6 }}
                            style={chipCode}
                          >
                            <Chip> Shimla</Chip>
                            <Chip>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="gold"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 2L14.85 8.3L22 9.3L17 14L18.85 20L12 17.5L5.15 20L7 14L2 9.3L9.15 8.3L12 2z" />
                                </svg>
                                <Box className="ms-1">4.4</Box>
                              </Box>
                            </Chip>
                          </Typography>
                          <Typography
                            className="card text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -3, sm: -4 }}
                            style={planeCode}
                          >
                            SIA9386
                          </Typography>
                        </CardOverflow>

                        <CardContent>
                          <div className=" ">
                            <Chip className="bg-white ms-1">
                              Timing 6 Am - 12 Am
                            </Chip>
                            <Chip className="bg-white ms-1">Free Wifi</Chip>
                            <Chip className="bg-white ms-1">No dress code</Chip>
                            <Chip className="bg-white ms-1">breakfast</Chip>
                          </div>
                          <div className="d-flex  align-items-center justify-content-between">
                            <div>Free</div>
                            <div>
                              {" "}
                              <Button
                                style={{
                                  position: "relative",
                                  fontStyle: "normal",
                                  color: "white",
                                  background:
                                    "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)",
                                }}
                                size="sm"
                              >
                                <div
                                  className="fw-bold px-1"
                                  style={{
                                    fontSize: "13px",
                                    WebkitBackgroundClip: "text",
                                    display: "inline-block",
                                  }}
                                >
                                  View Site
                                </div>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Step>
                </Stepper>
              </div>
            )}
            {selectedDay === "Day2" && (
              <div className="day2-content container py-2">
                <Stepper
                  orientation="vertical"
                  sx={{
                    width: "100%",

                    [`& .${stepClasses.root}:has(+ .${stepClasses.active})::after`]:
                      {
                        color: "primary.500",
                        backgroundColor: "transparent",
                        backgroundImage:
                          "radial-gradient(gray 2px, transparent 2px)",
                        backgroundSize: "7px 7px 7px 7px",
                        backgroundPosition: "center left",
                      },
                  }}
                >
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          2:30 PM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <strong>Accommodation</strong>at green Valley Shimla
                      </p>
                      <Card className="mb-5" sx={cardw}>
                        <CardOverflow className="p-2" sx={cardImg}>
                          <img
                            src="https://img.freepik.com/premium-photo/background-green-grass-field-hills-blue-sky-2d-illustration_67092-1664.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                            loading="lazy"
                            alt=""
                            style={imgCard2}
                          />
                          <Typography
                            className="d-flex gap-1 text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -5, sm: -6 }}
                            style={chipCode}
                          >
                            <Chip>Lake</Chip>
                            <Chip>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="gold"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 2L14.85 8.3L22 9.3L17 14L18.85 20L12 17.5L5.15 20L7 14L2 9.3L9.15 8.3L12 2z" />
                                </svg>
                                <Box className="ms-1">4.4</Box>
                              </Box>
                            </Chip>
                          </Typography>
                          <Typography
                            className="card text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -3, sm: -4 }}
                            style={planeCode}
                          >
                            SIA9386
                          </Typography>
                        </CardOverflow>

                        <CardContent>
                          <div className="d-flex  align-items-center justify-content-between">
                            <div>Free</div>
                            <div>
                              {" "}
                              <Button
                                style={{
                                  position: "relative",
                                  fontStyle: "normal",
                                  color: "white",
                                  background:
                                    "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)",
                                }}
                                size="sm"
                              >
                                <div
                                  className="fw-bold px-1"
                                  style={{
                                    fontSize: "13px",
                                    WebkitBackgroundClip: "text",
                                    display: "inline-block",
                                  }}
                                >
                                  View Site
                                </div>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Step>
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          4:00 PM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <strong>culinaty </strong>Delight
                      </p>
                      <Card className="mb-5 w-100  ">
                        <span className="mt-0">Lunch: Hotem NearBy</span>
                        <div className=" d-flex align-items-center gap-2 w-100 ">
                          <Card
                            sx={{
                              width: "50%",
                              maxWidth: "50%",
                              boxShadow: "lg",
                            }}
                          >
                            <CardOverflow>
                              <AspectRatio
                                sx={{ minWidth: "100%", height: "100%" }}
                              >
                                <img
                                  src="https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                                  loading="lazy"
                                  sx={{ minWidth: "100%", height: "200px" }}
                                  alt=""
                                />
                              </AspectRatio>
                            </CardOverflow>
                            <CardContent>
                              <Typography level="body-xs">
                                Hotel Darbar
                              </Typography>
                              <span>Rs.150/person</span>
                            </CardContent>
                          </Card>

                          <Card
                            sx={{
                              width: "50%",
                              maxWidth: "50%",
                              boxShadow: "lg",
                            }}
                          >
                            <CardOverflow>
                              <AspectRatio
                                sx={{ minWidth: "70%", height: "100%" }}
                              >
                                <img
                                  src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                                  loading="lazy"
                                  sx={{ minWidth: "70%", height: "200px" }}
                                  alt=""
                                />
                              </AspectRatio>
                            </CardOverflow>
                            <CardContent>
                              <Typography level="body-xs">
                                Hotel Darbar
                              </Typography>
                              <span>Rs.150/person</span>
                            </CardContent>
                          </Card>

                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              style={{
                                backgroundColor: "black",
                                borderRadius: "20px",
                              }}
                              viewBox="0 0 1536 1536"
                            >
                              <g transform="rotate(90 768 768)">
                                <path
                                  fill="white"
                                  d="m1165 1011l102-102q19-19 19-45t-19-45L813 365q-19-19-45-19t-45 19L269 819q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l307-307l307 307q19 19 45 19t45-19m371-243q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </Card>
                    </Stack>
                  </Step>
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          4:00 PM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <strong>Explore Attraction </strong>to Manali
                      </p>
                      <Card className="mb-5" sx={cardw}>
                        <CardOverflow className="p-2" sx={cardImg}>
                          <img
                            src="https://img.freepik.com/free-photo/mesmerizing-view-houses-fields-covered-snow-surrounded-by-mountains-trees_181624-13827.jpg?w=900&t=st=1702421062~exp=1702421662~hmac=e92e0a2a086d89569da2a94795ef080bc0ef60df010575cc4fb4c636984a0bd9"
                            loading="lazy"
                            alt=""
                            style={imgCard2}
                          />
                          <Typography
                            className="d-flex gap-1 text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -5, sm: -6 }}
                            style={chipCode}
                          >
                            <Chip> Shimla lake</Chip>
                            <Chip>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="gold"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 2L14.85 8.3L22 9.3L17 14L18.85 20L12 17.5L5.15 20L7 14L2 9.3L9.15 8.3L12 2z" />
                                </svg>
                                <Box className="ms-1">4.4</Box>
                              </Box>
                            </Chip>
                          </Typography>
                          <Typography
                            className="card text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -3, sm: -4 }}
                            style={planeCode}
                          >
                            SIA9386
                          </Typography>
                        </CardOverflow>

                        <CardContent>
                          <div className="d-flex  align-items-center justify-content-between">
                            <div>Free</div>
                            <div>
                              {" "}
                              <Button
                                style={{
                                  position: "relative",
                                  fontStyle: "normal",
                                  color: "white",
                                  background:
                                    "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)",
                                }}
                                size="sm"
                              >
                                <div
                                  className="fw-bold px-1"
                                  style={{
                                    fontSize: "13px",
                                    WebkitBackgroundClip: "text",
                                    display: "inline-block",
                                  }}
                                >
                                  View Site
                                </div>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Step>
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          4:00 PM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <strong>Explore Attraction </strong>to Shimla Church
                      </p>
                      <Card className="mb-5" sx={cardw}>
                        <CardOverflow className="p-2" sx={cardImg}>
                          <img
                            src="https://img.freepik.com/free-photo/dolomites-mountains-with-snow_181624-8296.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                            loading="lazy"
                            alt=""
                            style={imgCard2}
                          />
                          <Typography
                            className="d-flex gap-1 text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -5, sm: -6 }}
                            style={chipCode}
                          >
                            <Chip> Shimla</Chip>
                            <Chip>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="gold"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 2L14.85 8.3L22 9.3L17 14L18.85 20L12 17.5L5.15 20L7 14L2 9.3L9.15 8.3L12 2z" />
                                </svg>
                                <Box className="ms-1">4.4</Box>
                              </Box>
                            </Chip>
                          </Typography>
                          <Typography
                            className="card text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -3, sm: -4 }}
                            style={planeCode}
                          >
                            SIA9386
                          </Typography>
                        </CardOverflow>

                        <CardContent>
                          <div className=" ">
                            <Chip className="bg-white ms-1">
                              Timing 6 Am - 12 Am
                            </Chip>
                            <Chip className="bg-white ms-1">Free Wifi</Chip>
                            <Chip className="bg-white ms-1">No dress code</Chip>
                            <Chip className="bg-white ms-1">breakfast</Chip>
                          </div>
                          <div className="d-flex  align-items-center justify-content-between">
                            <div>Free</div>
                            <div>
                              {" "}
                              <Button
                                style={{
                                  position: "relative",
                                  fontStyle: "normal",
                                  color: "white",
                                  background:
                                    "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)",
                                }}
                                size="sm"
                              >
                                <div
                                  className="fw-bold px-1"
                                  style={{
                                    fontSize: "13px",
                                    WebkitBackgroundClip: "text",
                                    display: "inline-block",
                                  }}
                                >
                                  View Site
                                </div>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Step>
                </Stepper>
              </div>
            )}
            {selectedDay === "Day3" && (
              <div className="day3-content container py-2">
                <Stepper
                  orientation="vertical"
                  sx={{
                    width: "100%",

                    [`& .${stepClasses.root}:has(+ .${stepClasses.active})::after`]:
                      {
                        color: "primary.500",
                        backgroundColor: "transparent",
                        backgroundImage:
                          "radial-gradient(gray 2px, transparent 2px)",
                        backgroundSize: "7px 7px 7px 7px",
                        backgroundPosition: "center left",
                      },
                  }}
                >
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                        onClick={() => handleButtonClick("Day1")}
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          2:30 PM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <strong>Accommodation</strong>at lake
                      </p>
                      <Card className="mb-5" sx={cardw}>
                        <CardOverflow className="p-2" sx={cardImg}>
                          <img
                            src="https://img.freepik.com/free-photo/lake-mountains_1204-504.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                            loading="lazy"
                            alt=""
                            style={imgCard2}
                          />
                          <Typography
                            className="d-flex gap-1 text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -5, sm: -6 }}
                            style={chipCode}
                          >
                            <Chip>Lake</Chip>
                            <Chip>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="gold"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 2L14.85 8.3L22 9.3L17 14L18.85 20L12 17.5L5.15 20L7 14L2 9.3L9.15 8.3L12 2z" />
                                </svg>
                                <Box className="ms-1">4.4</Box>
                              </Box>
                            </Chip>
                          </Typography>
                          <Typography
                            className="card text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -3, sm: -4 }}
                            style={planeCode}
                          >
                            SIA9386
                          </Typography>
                        </CardOverflow>

                        <CardContent>
                          <div className="d-flex  align-items-center justify-content-between">
                            <div>Free</div>
                            <div>
                              {" "}
                              <Button
                                style={{
                                  position: "relative",
                                  fontStyle: "normal",
                                  color: "white",
                                  background:
                                    "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)",
                                }}
                                size="sm"
                              >
                                <div
                                  className="fw-bold px-1"
                                  style={{
                                    fontSize: "13px",
                                    WebkitBackgroundClip: "text",
                                    display: "inline-block",
                                  }}
                                >
                                  View Site
                                </div>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Step>
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          4:00 PM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <strong>Explore Attraction </strong>to Shimla Lake
                      </p>
                      <Card className="mb-5" sx={cardw}>
                        <CardOverflow className="p-2" sx={cardImg}>
                          <img
                            src="https://img.freepik.com/premium-photo/river-with-rocks-trees-background_1001749-12365.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                            loading="lazy"
                            alt=""
                            style={imgCard2}
                          />
                          <Typography
                            className="d-flex gap-1 text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -5, sm: -6 }}
                            style={chipCode}
                          >
                            <Chip> Shimla lake</Chip>
                            <Chip>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="gold"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 2L14.85 8.3L22 9.3L17 14L18.85 20L12 17.5L5.15 20L7 14L2 9.3L9.15 8.3L12 2z" />
                                </svg>
                                <Box className="ms-1">4.4</Box>
                              </Box>
                            </Chip>
                          </Typography>
                          <Typography
                            className="card text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -3, sm: -4 }}
                            style={planeCode}
                          >
                            SIA9386
                          </Typography>
                        </CardOverflow>

                        <CardContent>
                          <div className="d-flex  align-items-center justify-content-between">
                            <div>Free</div>
                            <div>
                              {" "}
                              <Button
                                style={{
                                  position: "relative",
                                  fontStyle: "normal",
                                  color: "white",
                                  background:
                                    "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)",
                                }}
                                size="sm"
                              >
                                <div
                                  className="fw-bold px-1"
                                  style={{
                                    fontSize: "13px",
                                    WebkitBackgroundClip: "text",
                                    display: "inline-block",
                                  }}
                                >
                                  View Site
                                </div>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Step>
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          4:00 PM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <strong>culinaty </strong>Delight
                      </p>
                      <Card className="mb-5 w-100  ">
                        <span className="mt-0">Lunch: Hotem NearBy</span>
                        <div className=" d-flex align-items-center gap-2 w-100 ">
                          <Card
                            sx={{
                              width: "50%",
                              maxWidth: "50%",
                              boxShadow: "lg",
                            }}
                          >
                            <CardOverflow>
                              <AspectRatio
                                sx={{ minWidth: "100%", height: "100%" }}
                              >
                                <img
                                  src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                                  loading="lazy"
                                  sx={{ minWidth: "100%", height: "200px" }}
                                  alt=""
                                />
                              </AspectRatio>
                            </CardOverflow>
                            <CardContent>
                              <Typography level="body-xs">
                                Hotel Darbar
                              </Typography>
                              <span>Rs.150/person</span>
                            </CardContent>
                          </Card>

                          <Card
                            sx={{
                              width: "50%",
                              maxWidth: "50%",
                              boxShadow: "lg",
                            }}
                          >
                            <CardOverflow>
                              <AspectRatio
                                sx={{ minWidth: "70%", height: "100%" }}
                              >
                                <img
                                  src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                                  loading="lazy"
                                  sx={{ minWidth: "70%", height: "200px" }}
                                  alt=""
                                />
                              </AspectRatio>
                            </CardOverflow>
                            <CardContent>
                              <Typography level="body-xs">
                                Hotel Darbar
                              </Typography>
                              <span>Rs.150/person</span>
                            </CardContent>
                          </Card>

                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              style={{
                                backgroundColor: "black",
                                borderRadius: "20px",
                              }}
                              viewBox="0 0 1536 1536"
                            >
                              <g transform="rotate(90 768 768)">
                                <path
                                  fill="white"
                                  d="m1165 1011l102-102q19-19 19-45t-19-45L813 365q-19-19-45-19t-45 19L269 819q-19 19-19 45t19 45l102 102q19 19 45 19t45-19l307-307l307 307q19 19 45 19t45-19m371-243q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </Card>
                    </Stack>
                  </Step>
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          4:00 PM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <strong>Explore Attraction </strong>to Shimla Church
                      </p>
                      <Card className="mb-5" sx={cardw}>
                        <CardOverflow className="p-2" sx={cardImg}>
                          <img
                            src="https://img.freepik.com/free-photo/dolomites-mountains-with-snow_181624-8296.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                            loading="lazy"
                            alt=""
                            style={imgCard2}
                          />
                          <Typography
                            className="d-flex gap-1 text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -5, sm: -6 }}
                            style={chipCode}
                          >
                            <Chip> Shimla</Chip>
                            <Chip>
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="gold"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M12 2L14.85 8.3L22 9.3L17 14L18.85 20L12 17.5L5.15 20L7 14L2 9.3L9.15 8.3L12 2z" />
                                </svg>
                                <Box className="ms-1">4.4</Box>
                              </Box>
                            </Chip>
                          </Typography>
                          <Typography
                            className="card text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -3, sm: -4 }}
                            style={planeCode}
                          >
                            SIA9386
                          </Typography>
                        </CardOverflow>

                        <CardContent>
                          <div className=" ">
                            <Chip className="bg-white ms-1">
                              Timing 6 Am - 12 Am
                            </Chip>
                            <Chip className="bg-white ms-1">Free Wifi</Chip>
                            <Chip className="bg-white ms-1">No dress code</Chip>
                            <Chip className="bg-white ms-1">breakfast</Chip>
                          </div>
                          <div className="d-flex  align-items-center justify-content-between">
                            <div>Free</div>
                            <div>
                              {" "}
                              <Button
                                style={{
                                  position: "relative",
                                  fontStyle: "normal",
                                  color: "white",
                                  background:
                                    "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)",
                                }}
                                size="sm"
                              >
                                <div
                                  className="fw-bold px-1"
                                  style={{
                                    fontSize: "13px",
                                    WebkitBackgroundClip: "text",
                                    display: "inline-block",
                                  }}
                                >
                                  View Site
                                </div>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Step>
                </Stepper>
              </div>
            )}
            {selectedDay === "Day4" && (
              <div className="day4-content container py-2">
                <Stepper
                  orientation="vertical"
                  sx={{
                    width: "100%",

                    [`& .${stepClasses.root}:has(+ .${stepClasses.active})::after`]:
                      {
                        color: "primary.500",
                        backgroundColor: "transparent",
                        backgroundImage:
                          "radial-gradient(gray 2px, transparent 2px)",
                        backgroundSize: "7px 7px 7px 7px",
                        backgroundPosition: "center left",
                      },
                  }}
                >
                  <Step
                    active
                    completed
                    orientation="vertical"
                    indicator={
                      <StepIndicator>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-record-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                          <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        </svg>
                      </StepIndicator>
                    }
                  >
                    <Typography>
                      <Button
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          border: "2px solid #c974d5",
                          color: "black",
                          background: "white",
                        }}
                        size="sm"
                        onClick={() => handleButtonClick("Day1")}
                      >
                        <div
                          className="fw-bold"
                          style={{
                            fontSize: "13px",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          8:00 AM
                        </div>
                      </Button>
                    </Typography>

                    <Stack spacing={1}>
                      <p className="d-flex  align-items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-airplane"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599" />
                        </svg>
                        <strong>Return Journey</strong>to Bengluru
                      </p>
                      <Card className="mb-5" sx={cardw}>
                        <CardOverflow className="p-2" sx={cardImg}>
                          <img
                            src="https://img.freepik.com/free-psd/plane-mockup_1310-1053.jpg?w=900&t=st=1702419785~exp=1702420385~hmac=3d1d88007a4e8126ba6de7d983a1adafa1975ff3068ca852499773cbb8e0b7e5"
                            loading="lazy"
                            alt=""
                            style={imgCard2}
                          />
                          <Typography
                            className="card text-black  fw-bold px-1"
                            textColor="#fff"
                            mt={{ xs: -5, sm: -6 }}
                            style={planeCode}
                          >
                            SIA9386
                          </Typography>
                        </CardOverflow>

                        <CardContent>
                          <div className="d-flex align-items-center justify-content-between">
                            <div style={{ lineHeight: "5px" }}>
                              <h6>Departure</h6>
                              <p>8:00 AM </p>
                              <p style={{ fontSize: "90%" }}>Manali</p>
                            </div>
                            <div className="" style={arrowStyle}>
                              <div style={arrowHeadStyle}></div>
                            </div>
                            <div style={{ lineHeight: "5px" }}>
                              <h6>Departure</h6>
                              <p>3:00 PM </p>
                              <p style={{ fontSize: "90%" }}>Bangluru</p>
                            </div>
                          </div>
                          <div className="d-flex  align-items-center justify-content-between">
                            <div>Rs.9780/person</div>
                            <div>
                              {" "}
                              <Button
                                style={{
                                  position: "relative",
                                  fontStyle: "normal",
                                  color: "white",
                                  background:
                                    "linear-gradient(180deg, #c974d5 0%, #548df7 70%, #548df7 100%)",
                                }}
                                size="sm"
                              >
                                <div
                                  className="fw-bold px-1"
                                  style={{
                                    fontSize: "13px",
                                    WebkitBackgroundClip: "text",
                                    display: "inline-block",
                                  }}
                                >
                                  View Site
                                </div>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Stack>
                  </Step>
                </Stepper>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default TravelViewPage;
