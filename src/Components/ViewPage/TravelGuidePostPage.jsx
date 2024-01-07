import React, { useEffect, useState } from "react";
import Navbar from "../HomeComponent/Navbar";
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
import { useCombinedContext, useDataContext } from "../DataContext";
import { useParams } from "react-router-dom";
import axios from "axios";

function TravelGuidePostPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedDay, setSelectedDay] = useState("Day1");
  const { id } = useParams();
  const [link, setLink] = useState("");
  const [error, setError] = useState(null);
  const [searchCode, setSearchCode] = useState("");
  const { data, loading ,isDarkMode } = useCombinedContext();
  const [redirectLink, setRedirectLink] = useState("");
  const [fetchedData, setFetchedData] = useState([]);
  // Check if data exists before destructuring
  const { item = "" } = data || {};
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3002/api/itinerary/getItineraries"
        );
        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const Storecode = item.googleMapLink;


  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:3002/api/get-link", {
        storecode: Storecode,
      });

      const link = response.data.link;

      if (link) {
        window.open(link, "_blank"); // Open the link in a new tab
      } else {
        setError("Storecode not found");
      }
    } catch (error) {
      setError(error.message);
    }
  };
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
  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator
  }
  const div1 = { minWidth: 300, flexGrow: 1, height: "500px" };
  if (windowWidth <= 467) {
    div1.height = "200px";
  }

  const price = {
    fontSize: "26px",
    width: "22%",
    borderRadius: "5px",
    backgroundColor: "rgb(255, 0, 127)",
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

  const cardw = {
    width: "100%",
    maxWidth: "100%",
    color: "white",

    borderRadius: "15px",
    backgroundImage:
      "linear-gradient(to bottom ,rgb(67 68 74) , rgb(30 30 32) )",
  };
  if (windowWidth <= 467) {
    cardw.width = "100%";
  }
  const imgCard2 = {
    height: "400px",
    borderRadius: "15px",
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
  const backButton = () => {
    window.history.back();
  };

  const Cropimg = {
    width: "50px",
    height: "50px",

    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    Cropimg.width = "28px";
    Cropimg.height = "28px";
    Cropimg.borderRadius = "4px";
  }

  const img = {
    height: "100%",
    width: "100%",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    img.width = "125px";
    img.height = "210px";
    img.borderRadius = "5px";
  }

  const smallcard = {
    width: "40px",
    marginLeft: "320px",
    marginTop: "-15px",
    backgroundColor: "#42434a",
    border: "2px solid white",
  };
  if (windowWidth <= 467) {
    smallcard.marginTop = "-15px";
    smallcard.marginLeft = "190px";
    smallcard.border = "2px solid white";
  }
  const search = {
    width: "250px",
    borderRadius: "20px",
    border: "2px solid #d49ee2",
  };
  if (windowWidth <= 467) {
    search.width = "170px";
    search.height = "5px";
  }
  const videocard = {
    borderRadius: "20px",
    width: "200px",
    height: "200px",
    border: "1px solid white",
  };
  if (windowWidth <= 467) {
    videocard.width = "100px";
    videocard.height = "100px";
  }
  const gapcard = {
    gap: "150px",
  };
  if (windowWidth <= 467) {
    gapcard.gap = "20px";
  }
  const videocard2 = {
    border: "1px solid white",
    fontSize: "14px",
    width: "200px",
    height: "50px",
    lineHeight: "6px",
    backgroundColor: "#45464c",
  };
  if (windowWidth <= 467) {
    videocard2.width = "100px";
    videocard2.height = "30px";
    videocard2.fontSize = "9px";
    videocard2.lineHeight = "0px";
  }

  return (
    <div>
      <div style={{
        backgroundColor: isDarkMode ? "#261450" : "white",
      }}>
        <div
          // style={{
          //   background:
          //     "linear-gradient(0deg, #f11c86 3px, rgb(3 23 55) 330px)",
          //   boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          // }}
        >
          <div className="text-black container px-2 ">
            <div className="d-flex align-items-center justify-content-between p-1 px-2">
              <div className="d-flex align-items-center " onClick={backButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  color="rgb(3 23 55)"
                  className="fw-bold "
                  style={{
                    backgroundColor: "rgb(255 0 127)",
                    borderRadius: "25px",
                  }}
                  fill="currentColor"
                  class="bi bi-arrow-left-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                  />
                </svg>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <h1
                  className=" "
                  style={{
                    fontSize: "30px",
                    fontWeight: "800",
                    marginTop: "5px",
                    fontFamily: "inherit",
                  }}
                >
                  <span style={{ color: "rgb(255 0 127)" }}>EXPLORE</span>{" "}
                </h1>
              </div>
              <div className="d-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  color="rgb(255 0 127)"
                  class="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </svg>
              </div>
            </div>

            <div className="px-1">
              <Card className="rounded-4" component="li" sx={div1}>
                <CardCover className="rounded-4">
                  <video
                    className="rounded-4"
                    autoPlay
                    loop
                    muted
                    poster={item.videoLink}
                  >
                    <source src={item.videoLink} type="video/mp4" />
                  </video>
                </CardCover>
                <CardContent>
                  <Typography
                    className="card text-white p-1 fw-bold px-2"
                    textColor="white"
                    mt={{ xs: 19, sm: 50 }}
                    style={price}
                  >
                    Rs.499780/person
                  </Typography>
                  <Typography
                    level="body-lg"
                    fontWeight="lg"
                    textColor="#fff"
                    mt={{ xs: -14, sm: -30 }}
                    ml={{ xs: 17, sm: 63 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      color="white"
                      fill="rgba(255,255,255,0.7)"
                      class="bi bi-play-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
                    </svg>
                  </Typography>
                  <Typography
                    level="body-lg"
                    fontWeight="lg"
                    textColor="#fff"
                    mt={{ xs: -5, sm: -5 }}
                    ml={{ xs: 37, sm: 127 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      color="gray"
                      fill="currentColor"
                      class="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className="d-flex gap-2 align-items-center justify-content-center py-3">
                <Button
                  className="px-4"
                  style={{
                    position: "relative",
                    fontStyle: "normal",
                    border: "2px solid rgb(255, 0, 127)",
                    background:
                      selectedDay === "Day1"
                        ? "rgb(255, 0, 127)"
                        : "rgb(3 23 55)",
                  }}
                  size="sm"
                  onClick={() => handleButtonClick("Day1")}
                >
                  <div
                    className="fw-bold d-flex"
                    style={{
                      fontSize: "11px",
                      WebkitBackgroundClip: "text",
                      display: "inline-block",
                    }}
                  >
                    Day 1
                  </div>
                </Button>
                {/* <Button
                  style={{
                    position: "relative",
                    fontStyle: "normal",
                    border: "2px solid rgb(255, 0, 127)",

                    background:
                      selectedDay === "Day2"
                        ? "rgb(255, 0, 127)"
                        : "rgb(3 23 55)",
                  }}
                  size="sm"
                  className="px-4"
                  onClick={() => handleButtonClick("Day2")}
                >
                  <div
                    className="fw-bold"
                    style={{
                      WebkitBackgroundClip: "text",
                      fontSize: "11px",
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
                    border: "2px solid rgb(255, 0, 127)",

                    background:
                      selectedDay === "Day3"
                        ? "rgb(255, 0, 127)"
                        : "rgb(3 23 55)",
                  }}
                  size="sm"
                  className="px-4"
                  onClick={() => handleButtonClick("Day3")}
                >
                  <div
                    className="fw-bold"
                    style={{
                      fontSize: "11px",
                      WebkitBackgroundClip: "text",
                      display: "inline-block",
                    }}
                  >
                    Day 3
                  </div>
                </Button> */}
                {/* <Button
                  style={{
                    position: "relative",
                    fontStyle: "normal",
                    border: "2px solid rgb(255, 0, 127)",

                    background:
                      selectedDay === "Day4"
                        ? "rgb(255, 0, 127)"
                        : "rgb(3 23 55)",
                  }}
                  size="sm"
                  className="px-4"
                  onClick={() => handleButtonClick("Day4")}
                >
                  <div
                    className="fw-bold"
                    style={{
                      fontSize: "11px",
                      WebkitBackgroundClip: "text",
                      display: "inline-block",
                    }}
                  >
                    Day 4
                  </div>
                </Button> */}
              </div>
              <h6
                className="px-1 fw-bold text-white"
                style={{ fontSize: "14px" }}
              >
                Detailed itinerary for 4-day trip to Himachal Pradesh
              </h6>
              {selectedDay && (
                <div className="">
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
                        {fetchedData
                          .filter((item) => item.day === 1)
                          .map((item) => (
                            <Step
                              key={item.id}
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
                                    border: "1px solid white",
                                    color: "white",
                                    background: "rgb(69 70 76)",
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
                                    {item.time}
                                  </div>
                                </Button>
                              </Typography>

                              <Stack spacing={1}>
                                <p className="d-flex text-white align-items-center gap-2">
                                  
                                  <strong>{item.selectedCard}</strong>
                                </p>
                                <Card className="mb-5" sx={cardw}>
                                  <CardOverflow className="p-2" sx={cardImg}>
                                    <img
                                      src={item.addImage}
                                      loading="lazy"
                                      alt=""
                                      style={imgCard2}
                                    />
                                  </CardOverflow>

                                  <CardContent>
                                    <div>
                                      <p style={{ fontSize: "12px" }}>
                                        {item.description}
                                      </p>
                                    </div>
                                    <div
                                      className="d-flex align-items-center justify-content-between"
                                      style={{ marginTop: "-10px" }}
                                    >
                                      <div>Rs.{item.price}/person</div>
                                      <div>
                                        <Button
                                         onClick={handleSearch}
                                          style={{
                                            position: "relative",
                                            fontStyle: "normal",
                                            color: "white",
                                            background: "rgb(255 0 127)",
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
                                            {Storecode}
                                          </div>
                                        </Button>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </Stack>
                            </Step>
                          ))}
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
                       {fetchedData
                          .filter((item) => item.day === 2)
                          .map((item) => (
                            <Step
                              key={item.id}
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
                                    border: "1px solid white",
                                    color: "white",
                                    background: "rgb(69 70 76)",
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
                                    {item.time}
                                  </div>
                                </Button>
                              </Typography>

                              <Stack spacing={1}>
                                <p className="d-flex text-white align-items-center gap-2">
                                  
                                  <strong>{item.selectedCard}</strong>
                                </p>
                                <Card className="mb-5" sx={cardw}>
                                  <CardOverflow className="p-2" sx={cardImg}>
                                    <img
                                      src={item.addImage}
                                      loading="lazy"
                                      alt=""
                                      style={imgCard2}
                                    />
                                  </CardOverflow>

                                  <CardContent>
                                    <div>
                                      <p style={{ fontSize: "12px" }}>
                                        {item.description}
                                      </p>
                                    </div>
                                    <div
                                      className="d-flex align-items-center justify-content-between"
                                      style={{ marginTop: "-10px" }}
                                    >
                                      <div>Rs.{item.price}/person</div>
                                      <div>
                                        <Button
                                          style={{
                                            position: "relative",
                                            fontStyle: "normal",
                                            color: "white",
                                            background: "rgb(255 0 127)",
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
                                            #GID8347
                                          </div>
                                        </Button>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </Stack>
                            </Step>
                          ))}
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
                        {fetchedData
                          .filter((item) => item.day === 3)
                          .map((item) => (
                            <Step
                              key={item.id}
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
                                    border: "1px solid white",
                                    color: "white",
                                    background: "rgb(69 70 76)",
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
                                    {item.time}
                                  </div>
                                </Button>
                              </Typography>

                              <Stack spacing={1}>
                                <p className="d-flex text-white align-items-center gap-2">
                                  
                                  <strong>{item.selectedCard}</strong>
                                </p>
                                <Card className="mb-5" sx={cardw}>
                                  <CardOverflow className="p-2" sx={cardImg}>
                                    <img
                                      src={item.addImage}
                                      loading="lazy"
                                      alt=""
                                      style={imgCard2}
                                    />
                                  </CardOverflow>

                                  <CardContent>
                                    <div>
                                      <p style={{ fontSize: "12px" }}>
                                        {item.description}
                                      </p>
                                    </div>
                                    <div
                                      className="d-flex align-items-center justify-content-between"
                                      style={{ marginTop: "-10px" }}
                                    >
                                      <div>Rs.{item.price}/person</div>
                                      <div>
                                        <Button
                                          style={{
                                            position: "relative",
                                            fontStyle: "normal",
                                            color: "white",
                                            background: "rgb(255 0 127)",
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
                                            #GID8347
                                          </div>
                                        </Button>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              </Stack>
                            </Step>
                          ))}
                      </Stepper>
                    </div>
                  )}
                  {/* {selectedDay === "Day4" && (
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
                                border: "1px solid white",
                                color: "white",
                                background: "rgb(69 70 76)",
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
                            <p className="d-flex text-white  align-items-center gap-2">
                              <strong>Accommodation</strong>at Solo Valley
                            </p>
                            <Card className="mb-5" sx={cardw}>
                              <CardOverflow className="p-2" sx={cardImg}>
                                <img
                                  src="https://images.unsplash.com/photo-1531465377364-ba9080522e1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFsbGV8ZW58MHx8MHx8fDA%3D"
                                  loading="lazy"
                                  alt=""
                                  style={imgCard2}
                                />
                              </CardOverflow>

                              <CardContent>
                                <div>
                                  <p style={{ fontSize: "12px" }}>
                                    Discover Uniques Stays with Airhub - Unlock
                                    20% Savings on your Next Gateway
                                  </p>
                                </div>
                                <div
                                  className="d-flex  align-items-center justify-content-between"
                                  style={{ marginTop: "-16px" }}
                                >
                                  <div>Rs.1509/person</div>
                                  <div>
                                    {" "}
                                    <Button
                                      style={{
                                        position: "relative",
                                        fontStyle: "normal",
                                        color: "white",
                                        background: "rgb(255 0 127)",
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
                                        #SAOP5476
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
                                border: "1px solid white",
                                color: "white",
                                background: "rgb(69 70 76)",
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
                            <p className="d-flex text-white align-items-center gap-2">
                              Lunch At BasilLeaf
                            </p>
                            <Card className="mb-5" sx={cardw}>
                              <CardOverflow className="p-2" sx={cardImg}>
                                <img
                                  src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZvb2R8ZW58MHx8MHx8fDA%3D"
                                  loading="lazy"
                                  alt=""
                                  style={imgCard2}
                                />
                              </CardOverflow>

                              <CardContent>
                                <div>
                                  <p style={{ fontSize: "12px" }}>
                                    MagicPin Presents: Culinary Delights Await -
                                    Dine in Style at Your Fevorite Restairent
                                    upto 50% off.
                                  </p>
                                </div>
                                <div
                                  className="d-flex  align-items-center justify-content-between"
                                  style={{ marginTop: "-16px" }}
                                >
                                  <div>Rs.229/person</div>
                                  <div>
                                    {" "}
                                    <Button
                                      style={{
                                        position: "relative",
                                        fontStyle: "normal",
                                        color: "white",
                                        background: "rgb(255 0 127)",
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
                                        #KLSOP5476
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
                                border: "1px solid white",
                                color: "white",
                                background: "rgb(69 70 76)",
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
                            <p className="d-flex text-white  align-items-center gap-2">
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
                              </CardOverflow>

                              <CardContent>
                                <div>
                                  <p style={{ fontSize: "12px" }}>
                                    Exclusive Flight Offer - Unleash Your
                                    WanderList with MakeMyTrip. Get Rs.1500/-
                                    off on flight bookings.
                                  </p>
                                </div>
                                <div
                                  className="d-flex  align-items-center justify-content-between"
                                  style={{ marginTop: "-10px" }}
                                >
                                  <div>Rs.9780/person</div>
                                  <div>
                                    {" "}
                                    <Button
                                      style={{
                                        position: "relative",
                                        fontStyle: "normal",
                                        color: "white",
                                        background: "rgb(255 0 127)",
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
                                        #TUGJH9845
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
                  )} */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelGuidePostPage;
