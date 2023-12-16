import React, { useEffect, useState } from "react";
import Navbar from "../HomeComponent/Navbar";
import { Avatar, Button, Input } from "@mui/joy";
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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const Cropimg = {
    width: "50px",
    height: "50px",
    background: `url(${imageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    Cropimg.width = "30px";
    Cropimg.height = "30px";
    Cropimg.borderRadius = "2px";
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
    height: "100%",
    width: "100%",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    img.width = "115px";
    img.height = "175px";
    img.borderRadius = "5px";
  }
  const back = {
    width: "20px",
  };
  if (windowWidth <= 467) {
    back.marginTop = "-15px";
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

  return (
    <div>
      <div className="text-black container px-2 ">
        <div className="d-flex align-items-center justify-content-between p-1">
          <div className="d-flex align-items-center ">
            <img
              src="https://storecode.in/images/logo-nav.png"
              alt="logo"
              style={{ width: "40px", height: "40px" }}
            />
            <h6 className="fw-bold ms-1 mt-1" style={{ color: "#fc339f" }}>
              StoreCode
            </h6>
          </div>
          <div className="d-flex gap-2">
            <Input
              className=""
              style={search}
              placeholder="Search Your StoreCode"
              startDecorator={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  color="black"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              }
              endDecorator={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-mic"
                  viewBox="0 0 16 16"
                  color="black"
                >
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
                  <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
                </svg>
              }
            />
            <Avatar
              alt="Remy Sharp"
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
            />
          </div>
        </div>
      </div>
      <div className="text-white container px-3 mt-4">
        <div className="d-flex align-items-center ">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/free-chevron-with-circle-left-1859434-1577830.png?f=webp&w=512"
            alt=""
            style={back}
          />

          <div
            className="d-flex align-items-center gap-3 ms-1"
            style={{ overflow: "auto" }}
          >
            <div
              className="rounded-2 px-4 shadow-sm"
              style={{
                position: "relative",
                fontStyle: "normal",
                background:
                  "linear-gradient(180deg, #d49ee2 0%, #96aaf6 70%, #96aaf6 100%)",
              }}
            >
              <div
                style={{
                  color: "white",
                  WebkitBackgroundClip: "text",
                  display: "inline-block",
                }}
              >
                All
              </div>
            </div>
            <div
              className=" rounded-3 text-black px-3 shadow-lg"
              style={{ border: "1px solid #d49ee2" }}
            >
              <span
                className="fw-bold mt-2 mb-3"
                style={{
                  position: "relative",
                  fontStyle: "normal",
                  lineHeight: "-0.3px",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #C63AC0 0%, #fb9a44 70%, #fb9a44 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  Festive
                </span>{" "}
              </span>{" "}
            </div>
            <div
              className=" rounded-3 text-black px-3 shadow-lg"
              style={{ border: "1px solid #d49ee2" }}
            >
              {" "}
              <span
                className="fw-bold mt-2 mb-3"
                style={{
                  position: "relative",
                  fontStyle: "normal",
                  lineHeight: "-0.3px",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #C63AC0 0%, #fb9a44 70%, #fb9a44 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  Casual
                </span>{" "}
              </span>{" "}
            </div>
            <div
              className="  rounded-3 text-black px-3 shadow-lg "
              style={{ border: "1px solid #d49ee2" }}
            >
              <span
                className="fw-bold mt-2 mb-3"
                style={{
                  position: "relative",
                  fontStyle: "normal",
                  lineHeight: "-0.3px",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #C63AC0 0%, #fb9a44 70%, #fb9a44 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  Party
                </span>{" "}
              </span>{" "}
            </div>
            <div
              className=" rounded-3 text-black px-3 shadow-lg"
              style={{ border: "1px solid #d49ee2" }}
            >
              {" "}
              <span
                className="fw-bold mt-2 mb-3"
                style={{
                  position: "relative",
                  fontStyle: "normal",
                  lineHeight: "-0.3px",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #C63AC0 0%, #fb9a44 70%, #fb9a44 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  Summer
                </span>{" "}
              </span>{" "}
            </div>
            <div
              className=" rounded-3 text-black px-3 shadow-lg"
              style={{ border: "1px solid #d49ee2" }}
            >
              <span
                className="fw-bold mt-2 mb-3"
                style={{
                  position: "relative",
                  fontStyle: "normal",
                  lineHeight: "-0.3px",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #C63AC0 0%, #fb9a44 70%, #fb9a44 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  Winter
                </span>{" "}
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
          <div className="col-12 col-lg-6 mb-2">
            <div
              className="card rounded-3   mb-2 "
              style={{ border: "2px solid #d49ee2" }}
            >
              <div className="row">
                <div className="col-4">
                  <div className="p-1 me-1">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/2f9a/93c7/dd11017f19c07cc74ab2f13989c88710?Expires=1702857600&Signature=b2ezd8Slf-O0qWcMNbTkXio0hfWdYye~n3WVihG69lAAlTr4a51ABKLTF5wglF5g-YLAh-YtpyhLnXvh5Y7lOR0-ne~Tq3BbFMHniFB92U95m~05qw0hsZ2FUupNywWrmU~E9DEj8AfQb1oD5~e2brWci9UA9X-BF2GGgNSmNnoxAxBtAoYJ3Ji4lpRC3o4b3zTY1G1TUbSxXoVThBQLfWVdl8v7KleOK3yr0PUBjIqM4WaR~xjJ7~iWOt1wazguBiNmswA4m~zhQxnHqJ0IsyYQfxmW-TIjV0o2n5geASk5yB69M~05wvWb5uXWDijYuxtZklPce~yihM1FEgSafg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                      alt=""
                      style={img}
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="text-center">
                    <h6 className="pt-3 fw-bold">
                      <span
                        className="fw-bold mt-2 mb-3"
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          lineHeight: "-0.3px",
                        }}
                      >
                        <span
                          style={{
                            background:
                              "linear-gradient(90deg, #C63AC0 0%, #fb9a44 70%, #fb9a44 100%)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            display: "inline-block",
                          }}
                        >
                          Myntra
                        </span>{" "}
                      </span>{" "}
                      Black Friday Sale
                    </h6>
                    <h6
                      className="d-flex align-items-center gap-1 justify-content-center "
                      style={{ marginTop: "-5px", fontSize: "13px" }}
                    >
                      {" "}
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/11820/11820224.png"
                        alt=""
                        style={{ width: "20px" }}
                      />
                      Watch the reel
                    </h6>
                    <h6
                      className="mt-0"
                      style={{ fontSize: "13px", marginTop: "-18px" }}
                    >
                      Products in this reel
                    </h6>
                    <div className="mb-1">
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
                        <div style={Cropimg} />

                        {/* Cropped Face */}
                        <div style={Cropimg} />

                        {/* Cropped Camera */}
                        <div style={Cropimg} />
                        <div style={Cropimg} />
                        <div style={Cropimg} />

                        {/* Add more divs for other sections */}
                      </div>
                    </div>
                    <h6 style={{ fontSize: "13px" }}>
                      5 Products at ₹699 onwards{" "}
                    </h6>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        size="sm"
                        className="rounded-4 px-5"
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          background:
                            "linear-gradient(180deg, #d49ee2 0%, #96aaf6 70%, #96aaf6 100%)",
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          Shop Now
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-12 col-lg-6 mb-2">
            <div
              className="card rounded-3   mb-2 "
              style={{ border: "2px solid #d49ee2" }}
            >
              <div className="row">
                <div className="col-4">
                  <div className="p-1 me-1">
                    <img
                      src="https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17503.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                      alt=""
                      style={img}
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="text-center">
                    <h6 className="pt-3 fw-bold">
                      <span
                        className="fw-bold mt-2 mb-3"
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          lineHeight: "-0.3px",
                        }}
                      >
                        <span
                          style={{
                            background:
                              "linear-gradient(90deg, #C63AC0 0%, #fb9a44 70%, #fb9a44 100%)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            display: "inline-block",
                          }}
                        >
                          Meesho
                        </span>{" "}
                      </span>{" "}
                      Black Friday Sale
                    </h6>
                    <h6
                      className="d-flex align-items-center gap-1 justify-content-center "
                      style={{ marginTop: "-5px", fontSize: "13px" }}
                    >
                      {" "}
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/11820/11820224.png"
                        alt=""
                        style={{ width: "20px" }}
                      />
                      Watch the reel
                    </h6>
                    <h6
                      className="mt-0"
                      style={{ fontSize: "13px", marginTop: "-18px" }}
                    >
                      Products in this reel
                    </h6>
                    <div className="mb-1">
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
                        <div style={Cropimg2} />

                        {/* Cropped Face */}
                        <div style={Cropimg2} />

                        {/* Cropped Camera */}
                        <div style={Cropimg2} />
                        <div style={Cropimg2} />
                        <div style={Cropimg2} />

                        {/* Add more divs for other sections */}
                      </div>
                    </div>
                    <h6 style={{ fontSize: "13px" }}>
                      5 Products at ₹699 onwards{" "}
                    </h6>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        size="sm"
                        className="rounded-4 px-5"
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          background:
                            "linear-gradient(180deg, #d49ee2 0%, #96aaf6 70%, #96aaf6 100%)",
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          Shop Now
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-12 col-lg-6 mb-2">
            <div
              className="card rounded-3   mb-2 "
              style={{ border: "2px solid #d49ee2" }}
            >
              <div className="row">
                <div className="col-4">
                  <div className="p-1 me-1">
                    <img
                      src="https://img.freepik.com/free-photo/young-attractive-indian-woman-traditional-dress-woman-dancing-against-white-background_1157-48166.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                      alt=""
                      style={img}
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="text-center">
                    <h6 className="pt-3 fw-bold">
                      <span
                        className="fw-bold mt-2 mb-3"
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          lineHeight: "-0.3px",
                        }}
                      >
                        <span
                          style={{
                            background:
                              "linear-gradient(90deg, #C63AC0 0%, #fb9a44 70%, #fb9a44 100%)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            display: "inline-block",
                          }}
                        >
                          Myntra
                        </span>{" "}
                      </span>{" "}
                      Black Friday Sale
                    </h6>
                    <h6
                      className="d-flex align-items-center gap-1 justify-content-center "
                      style={{ marginTop: "-5px", fontSize: "13px" }}
                    >
                      {" "}
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/11820/11820224.png"
                        alt=""
                        style={{ width: "20px" }}
                      />
                      Watch the reel
                    </h6>
                    <h6
                      className="mt-0"
                      style={{ fontSize: "13px", marginTop: "-18px" }}
                    >
                      Products in this reel
                    </h6>
                    <div className="mb-1">
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
                        <div style={Cropimg3} />

                        {/* Cropped Face */}
                        <div style={Cropimg3} />

                        {/* Cropped Camera */}
                        <div style={Cropimg3} />
                        <div style={Cropimg3} />
                        <div style={Cropimg3} />

                        {/* Add more divs for other sections */}
                      </div>
                    </div>
                    <h6 style={{ fontSize: "13px" }}>
                      5 Products at ₹699 onwards{" "}
                    </h6>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        size="sm"
                        className="rounded-4 px-5"
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          background:
                            "linear-gradient(180deg, #d49ee2 0%, #96aaf6 70%, #96aaf6 100%)",
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          Shop Now
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-12 col-lg-6 mb-2">
            <div
              className="card rounded-3   mb-2 "
              style={{ border: "2px solid #d49ee2" }}
            >
              <div className="row">
                <div className="col-4">
                  <div className="p-1 me-1">
                    <img
                      src="https://img.freepik.com/free-photo/woman-with-his-hands-hair_1163-269.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                      alt=""
                      style={img}
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="text-center">
                    <h6 className="pt-3 fw-bold">
                      <span
                        className="fw-bold mt-2 mb-3"
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          lineHeight: "-0.3px",
                        }}
                      >
                        <span
                          style={{
                            background:
                              "linear-gradient(90deg, #C63AC0 0%, #fb9a44 70%, #fb9a44 100%)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            display: "inline-block",
                          }}
                        >
                          Meesho
                        </span>{" "}
                      </span>{" "}
                      Black Friday Sale
                    </h6>
                    <h6
                      className="d-flex align-items-center gap-1 justify-content-center "
                      style={{ marginTop: "-5px", fontSize: "13px" }}
                    >
                      {" "}
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/11820/11820224.png"
                        alt=""
                        style={{ width: "20px" }}
                      />
                      Watch the reel
                    </h6>
                    <h6
                      className="mt-0"
                      style={{ fontSize: "13px", marginTop: "-18px" }}
                    >
                      Products in this reel
                    </h6>
                    <div className="mb-1">
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
                        <div style={Cropimg4} />

                        {/* Cropped Face */}
                        <div style={Cropimg4} />

                        {/* Cropped Camera */}
                        <div style={Cropimg4} />
                        <div style={Cropimg4} />
                        <div style={Cropimg4} />

                        {/* Add more divs for other sections */}
                      </div>
                    </div>
                    <h6 style={{ fontSize: "13px" }}>
                      5 Products at ₹699 onwards{" "}
                    </h6>
                    <div className="d-flex align-items-center justify-content-center">
                      <Button
                        size="sm"
                        className="rounded-4 px-5"
                        style={{
                          position: "relative",
                          fontStyle: "normal",
                          background:
                            "linear-gradient(180deg, #d49ee2 0%, #96aaf6 70%, #96aaf6 100%)",
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          Shop Now
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductExplore;
