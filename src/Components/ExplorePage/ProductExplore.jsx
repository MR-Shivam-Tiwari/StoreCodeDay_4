import React, { useEffect, useState } from "react";
import Navbar from "../HomeComponent/Navbar";
import { Avatar, Button, CardContent, Input } from "@mui/joy";
import { useDataContext } from "../DataContext";
import { useNavigate } from "react-router-dom";
const imageSrc =
  "https://img.freepik.com/premium-photo/portrait-beautiful-indian-woman-traditional-clothing-jewelry_947073-11022.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph";
const imageSrc2 =
  "https://img.freepik.com/free-photo/woman-with-his-hands-hair_1163-269.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais";
const imageSrc3 =
  "https://img.freepik.com/free-photo/young-cute-woman-cap-glasses-posing-outside-showing-thumbs-up-high-quality-photo_114579-91847.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph";
const imageSrc4 =
  "https://img.freepik.com/premium-photo/cute-young-girl-portrait-garden-wearing-des-dress-fashion-photoshoot_658768-286.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph";

function ProductExplore() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [fetchedData, setFetchedData] = useState([]);
  const navigate = useNavigate();
  const { setContextData } = useDataContext();
  const [sortBy, setSortBy] = useState('popularity'); // Default sorting by popularity
  const [filteredData, setFilteredData] = useState(fetchedData);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/posts/getpost");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data);
        setFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The emp
  const handleSort = (sortType) => {
    setSortBy(sortType);
    // Implement sorting logic based on sortType (popularity, priceHighToLow, priceLowToHigh, etc.)
    // Update the filteredData state accordingly
    // Example: You can use Array.sort() to sort the data array
    let sortedData = [...fetchedData];
    if (sortType === 'priceHighToLow') {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (sortType === 'priceLowToHigh') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (sortType === 'popularity') {
      // Add your popularity sorting logic here
    }
    setFilteredData(sortedData);
  };

  const backButton = () => {
    window.history.back();
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
  const Cropimg2 = {
    width: "50px",
    height: "50px",
    background: `url(${imageSrc2})`,
    backgroundSize: "cover",
    backgroundPosition: "start",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    Cropimg2.width = "30px";
    Cropimg2.height = "30px";
    Cropimg2.borderRadius = "2px";
  }
  const Cropimg3 = {
    width: "50px",
    height: "50px",
    background: `url(${imageSrc3})`,
    backgroundSize: "cover",
    backgroundPosition: "start",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    Cropimg3.width = "30px";
    Cropimg3.height = "30px";
    Cropimg3.borderRadius = "2px";
  }
  const Cropimg4 = {
    width: "50px",
    height: "50px",
    background: `url(${imageSrc4})`,
    backgroundSize: "cover",
    backgroundPosition: "start",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    Cropimg4.width = "30px";
    Cropimg4.height = "30px";
    Cropimg4.borderRadius = "2px";
  }

  const img = {
    height: "210px",
    width: "150px",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    img.width = "125px";
    img.height = "210px";
    img.borderRadius = "5px";
  }
  const back = {
    width: "20px",
  };
  if (windowWidth <= 467) {
    back.marginTop = "-15px";
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

  const handleNavigation = (item) => {
    setContextData({
      videoLink: item.videoLink,
      tagProducts: item.tagProducts,
      startingPrice: item.startingPrice,
      postName: item.postName,
      img1: item.img1,
      img2: item.img2,
      img3: item.img3,
      img4: item.img4,
    });

    // Trigger navigation
    navigate(`/post-view/${item.id}`);
  };

  return (
    <div style={{ backgroundColor: "rgb(3 23 55)" }}>
      <div
        style={{
          background: "linear-gradient(0deg, #670133 3px, rgb(3 23 55) 330px)",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
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
                <span style={{ color: "rgb(255 0 127)" }}>STORE</span>{" "}
                <span style={{ color: "rgb(0 71 171)" }}>CODE</span>
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
          <div className="px-2 mt-3 p-1 d-flex align-items-center justify-content-between">
            <div>
              <Input
                style={{ width: "120%" }}
                className="rounded-3 ms-1"
                placeholder="Search"
                startDecorator={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                  </svg>
                }
              ></Input>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                className=""
                fill="currentColor"
                color="white"
                class="bi bi-funnel"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="text-white container px-3 mt-4">
          <div className="d-flex align-items-center ">
            <div
              className="d-flex align-items-center gap-3 ms-1"
              style={{ overflow: "auto" }}
            >
              <div
               onClick={() => handleSort('popularity')}
                className="rounded-5  px-3 shadow-sm"
                style={{
                  border: "1px solid rgb(255 0 127)",
                }}
              >
                <div>Most Popular</div>
              </div>
              <div
             
                className=" rounded-5 text-black px-3 shadow-lg"
                style={{ border: "1px solid rgb(255 0 127)" }}
              >
                <span
                  className=" text-white mt-2 mb-3"
                  style={{
                    position: "relative",
                    fontStyle: "normal",
                    lineHeight: "-0.3px",
                  }}
                >
                  New Arrivals
                </span>{" "}
              </div>
              <div
               onClick={() => handleSort('priceHighToLow')}
                className=" rounded-5 text-black px-3 shadow-lg"
                style={{ border: "1px solid rgb(255 0 127)" }}
              >
                {" "}
                <span
                  className=" text-white mt-2 mb-3"
                  style={{
                    position: "relative",
                    fontStyle: "normal",
                    lineHeight: "-0.3px",
                  }}
                >
                  Price (High to Low)
                </span>{" "}
              </div>
              <div
              onClick={() => handleSort('priceLowToHigh')}
                className="  rounded-5 text-black px-3 shadow-lg "
                style={{ border: "1px solid rgb(255 0 127)" }}
              >
                <span
                  className=" text-white mt-2 mb-3"
                  style={{
                    position: "relative",
                    fontStyle: "normal",
                    lineHeight: "-0.3px",
                  }}
                >
                  Price (Low to High)
                </span>{" "}
              </div>
              <div
                className=" rounded-5 text-black px-3 shadow-lg"
                style={{ border: "1px solid rgb(255 0 127)" }}
              >
                {" "}
                <span
                  className=" text-white mt-2 mb-3"
                  style={{
                    position: "relative",
                    fontStyle: "normal",
                    lineHeight: "-0.3px",
                  }}
                >
                  Ratings
                </span>{" "}
              </div>
              <div
                className=" rounded-5 text-black px-3 shadow-lg"
                style={{ border: "1px solid rgb(255 0 127)" }}
              >
                <span
                  className=" text-white mt-2 mb-3"
                  style={{
                    position: "relative",
                    fontStyle: "normal",
                    lineHeight: "-0.3px",
                  }}
                >
                 Discounts
                </span>{" "}
              </div>
              <style className="">
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
          <div className="row py-3 ">
            {[...Array(Math.ceil(fetchedData.length / 2))].map(
              (_, rowIndex) => (
                <div key={rowIndex} className="row">
                   {filteredData.slice(rowIndex * 2, rowIndex * 2 + 2).map((item) => (
                      <div key={item._id} className="col-12 col-lg-6 mb-2">
                        <div
                          className="card rounded-4   mb-2 "
                          style={{
                            border: "2px solid white",
                            height: "250px",
                            backgroundImage:
                              "linear-gradient(to bottom,  rgb(71 72 79) ,rgb(31 31 33)",
                          }}
                        >
                          <div className="row">
                            <div className="col-4">
                              <div className="p-2 py-3 me-1">
                                <div>
                                  <img
                                    className="rounded-4"
                                    src={item.videoLink}
                                    alt=""
                                    style={img}
                                  />
                                </div>
                                <div
                                  className=""
                                  style={{
                                    marginTop: "-120px",
                                    marginLeft: "50px",
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="35"
                                    height="35"
                                    fill="currentColor"
                                    color="white"
                                    class="bi bi-play-circle-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="col-8">
                              <div className="text-center">
                                <h5 className="pt-3 fw-bold">
                                  <span className="fw-bold mt-2 mb-3 text-white">
                                    {item.postName}
                                  </span>{" "}
                                </h5>
                                <div
                                  className="fw-bold  mb-3 "
                                  style={{
                                    color: "rgb(255 0 127)",
                                    fontSize: "12px",
                                    marginTop: "-9px",
                                  }}
                                >
                                  {item.category}
                                </div>{" "}
                                <div
                                  className="d-flex align-items-center justify-content-center "
                                  style={{ marginTop: "-10px" }}
                                >
                                  <div
                                    className="d-flex py-1 text-white   align-items-center gap-2 justify-content-center "
                                    style={{
                                      fontSize: "13px",
                                      border: "1px solid white",
                                      borderRadius: "8px",
                                      width: "130px",
                                    }}
                                  >
                                    <svg
                                      version="1.1"
                                      id="Layer_1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      width="15"
                                      height="15"
                                      y="0px"
                                      viewBox="0 0 122.14 122.88"
                                      fill="white"
                                    >
                                      <g>
                                        <path d="M35.14,0H87c9.65,0,18.43,3.96,24.8,10.32c6.38,6.37,10.34,15.16,10.34,24.82v52.61c0,9.64-3.96,18.42-10.32,24.79 l-0.02,0.02c-6.38,6.37-15.16,10.32-24.79,10.32H35.14c-9.66,0-18.45-3.96-24.82-10.32l-0.24-0.27C3.86,105.95,0,97.27,0,87.74 V35.14c0-9.67,3.95-18.45,10.32-24.82S25.47,0,35.14,0L35.14,0z M91.51,31.02l0.07,0.11h21.6c-0.87-5.68-3.58-10.78-7.48-14.69 C100.9,11.64,94.28,8.66,87,8.66h-8.87L91.51,31.02L91.51,31.02z M81.52,31.13L68.07,8.66H38.57l13.61,22.47H81.52L81.52,31.13z M42.11,31.13L28.95,9.39c-4.81,1.16-9.12,3.65-12.51,7.05c-3.9,3.9-6.6,9.01-7.48,14.69H42.11L42.11,31.13z M113.48,39.79H8.66 v47.96c0,7.17,2.89,13.7,7.56,18.48l0.22,0.21c4.8,4.8,11.43,7.79,18.7,7.79H87c7.28,0,13.9-2.98,18.69-7.77l0.02-0.02 c4.79-4.79,7.77-11.41,7.77-18.69V39.79L113.48,39.79z M50.95,54.95l26.83,17.45c0.43,0.28,0.82,0.64,1.13,1.08 c1.22,1.77,0.77,4.2-1,5.42L51.19,94.67c-0.67,0.55-1.53,0.88-2.48,0.88c-2.16,0-3.91-1.75-3.91-3.91V58.15h0.02 c0-0.77,0.23-1.55,0.7-2.23C46.76,54.15,49.19,53.72,50.95,54.95L50.95,54.95L50.95,54.95z" />
                                      </g>
                                    </svg>
                                    Watch the reel
                                  </div>
                                </div>
                                <div
                                  className=" p-1 rounded-1 text-white"
                                  style={smallcard}
                                >
                                  +2
                                </div>
                                <h6
                                  className=" fw-bold text-white "
                                  style={{
                                    fontSize: "13px",
                                    marginTop: "-10px",
                                  }}
                                >
                                  Products in this reel
                                </h6>
                                <div className="mb-2 ms-2 mt-2">
                                  {" "}
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "10px",
                                      flexWrap: "wrap",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {/* Original Image */}
                                    <div
                                      style={{
                                        background: `url(${item.img1})`,
                                        ...Cropimg,
                                      }}
                                    />
                                    <div
                                      style={{
                                        background: `url(${item.img2})`,
                                        ...Cropimg,
                                      }}
                                    />
                                    <div
                                      style={{
                                        background: `url(${item.img3})`,
                                        ...Cropimg,
                                      }}
                                    />
                                    <div
                                      style={{
                                        background: `url(${item.img4})`,
                                        ...Cropimg,
                                      }}
                                    />
                                    <div
                                      style={{
                                        background: `url(${item.img5})`,
                                        ...Cropimg,
                                      }}
                                    />
                                  </div>
                                </div>
                                <h6
                                  className="text-white"
                                  style={{ fontSize: "13px" }}
                                >
                                  5 Products at ₹699 onwards{" "}
                                </h6>
                                <div className="d-flex align-items-center justify-content-center">
                                  <Button
                                  onClick={() => handleNavigation(item)}
                                    size="sm"
                                    className="rounded-2 px-2"
                                    style={{
                                      position: "relative",
                                      fontStyle: "normal",
                                      backgroundColor: "rgb(255 0 127)",
                                    }}
                                  >
                                    Shop Now{" "}
                                    <span>
                                      {" "}
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        className=""
                                        color="black"
                                        style={{
                                          marginLeft: "5px",
                                          backgroundColor: "white",
                                          borderRadius: "25px",
                                        }}
                                        fill="currentColor"
                                        class="bi bi-arrow-right-circle"
                                        viewBox="0 0 16 16"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                                        />
                                      </svg>
                                    </span>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
                    ))}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductExplore;
