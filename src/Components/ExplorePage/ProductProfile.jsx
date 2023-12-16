import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Avatar, Card, CardContent, CardCover, Typography } from "@mui/joy";

function ProductProfile() {
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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const div1 = {
    width: "100%",
    height: "400px",
    borderRadius: "0px 0px 150px 0px",
    background:
      "linear-gradient(120deg, #2f31a2 0%,  #a9a0d9 40%, #c894e8 100%)",
  };
  if (windowWidth <= 467) {
    div1.height = "170px";
    div1.borderRadius = "0px 0px 80px 0px";
  }
  const card__overlay = {
    position: "absolute",
    bottom: 0,
    height: "300px",
    left: 0,
    right: 0,
    zIndex: 1,
    width: "75%",
    borderRadius: "100px 40px 100px 0px",
    backgroundColor: "var(--surface-color)",
    marginBottom: "-150px",
  };

  if (windowWidth <= 467) {
    card__overlay.height = "250px";
    card__overlay.borderRadius = "50px 10px 100px 0px";
  }
  const Name = {
    fontSize: "20px",
  };

  if (windowWidth <= 467) {
    Name.fontSize = "12px";
  }
  const followtext = {
    fontSize: "15px",
    position: "relative",
  };

  if (windowWidth <= 467) {
    followtext.fontSize = "10px";
  }
  const namediv = {
    marginLeft: windowWidth <= 467 ? '-15px' : '100px',
  };
  const followmargin = {
    marginLeft: "50px",
  };

  if (windowWidth <= 467) {
    followmargin.marginLeft = "25px";
  }
  const margininf = {
    marginLeft: "100px",
    marginTop: "20px",
  };

  if (windowWidth <= 467) {
    margininf.marginLeft = "-15px";
  }
  const imgavtar = {
    border: "8px solid #cea8ed",
    borderRadius: "50%",
    marginRight: "-2px",
    marginTop: "-55px",
  };

  if (windowWidth <= 467) {
    imgavtar.marginLeft = "-10px";
    imgavtar.marginTop = "-70px";
  }
  const card__thumb = {
    flexShrink: 0,
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    padding: "3px",
    border: "5px solid #8202d0",
  };

  if (windowWidth <= 467) {
    card__thumb.width = "45px";
    card__thumb.height = "45px";
    card__thumb.borderRadius = "50%";
    card__thumb.border = "3px solid #8202d0";
  }
  const Explore = {
    fontSize: "25px",
  };

  if (windowWidth <= 467) {
    Explore.fontSize = "15px";
    Explore.marginTop = "15px";
    Explore.marginLeft = "-20px";
  }
  const avtarmini = { width: "50px", height: "50px" };

  if (windowWidth <= 467) {
    avtarmini.width = "30px";
    avtarmini.height = "30px";
  }
  const avtarminitext = { fontSize: "12px" };

  if (windowWidth <= 467) {
    avtarminitext.fontSize = "7px";
  }
  const minicard = {
    marginLeft: "50px",
  };

  if (windowWidth <= 467) {
    minicard.marginLeft = "10px";
    minicard.marginRight = "10px";
  }
  const iconx = {
    width: "20px",
    height: "20px",
    padding:"0px 4px 0px 4px "
  };

  if (windowWidth <= 467) {
    iconx.width = "10px";
    iconx.height = "10px";
  }
  const textblack = {
    fontSize: "9px",
    lineHeight: "0px",
    marginBottom: "13px",
  };

  if (windowWidth <= 467) {
    textblack.fontSize = "5px";
    textblack.marginBottom = "10px";
  }
  const cardImg = { minHeight: "250px", width: 200, borderRadius: "30px", };

  if (windowWidth <= 467) {
    cardImg.minHeight = "150px";
    cardImg.width = "100px";
    cardImg.borderRadius = "20px";
  }
  const cardStyle = {
    padding: "6px",
    borderRadius: "15px",
    fontWeight: "bold",
    height: "40px",
    background: "rgba(173, 216, 230, 0.3)", // Light blue with transparency
    color: "#fff", // Text color
    backdropFilter: "blur(3px)", // Blur effect
  };
  if (windowWidth <= 467) {
    cardStyle.height = "20px";
    cardStyle.padding = "0px";
  }

  return (
    <div>
      <div style={{ backgroundColor: "#2f30a4" }}>
        <div className="text-black container  ">
          <div className="card border-0">
            <div className="card border-0">
              <div className="card" style={div1}>
                <div className=" border-1" style={card__overlay}>
                  <div className="d-flex align-items-center justify-content-between ">
                    <div className="px-5">
                      <div className="text-center mt-3 " style={namediv}>
                        <h2 className="fw-bold" style={Name}>
                          ManualRovira{" "}
                          <img
                            alt=""
                            style={{ width: "25px" }}
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEyklEQVR4nO2Z21NbVRTGU/8CdfriVKiKbaW1RTqdKoLjHYihgFhKKQIKUrXSYoGOj7x0qj75JzhToKUgsaQBwiUNiOFSWpByCXGEALkeyO3kRkKSfs6OPIDEJCc5B3zIN5Pn8/v2rL3XWl94vLjiiot1Vc96+ZdmfJKvpzcsXz7esFyc8kiqprx83v9dNdNIrp7xdX4z48OlaS++euzFxakNVP2xgcrJDVRMeKTlk57X9pqTd3UGz9Yr8UOd0q+oVfjpbxV+XJnz4/KsDyHg8dkjD8ofulE67kbJg3UUj7no88POuXPDzu8vDFmf2RX47xaQeE2JpTrlE9TOP0G08BfG1nF+xIWiYRcK5U58MuRQ5Q26EjiFbwCeqldCzjb82d+dKBhyIP83h5x8gzMDdX+ikkN45A3akTtAV3ACXzuP/bXzfopL+DMDdghkNJUjs+1njxzYV69EWd2838A1fI7Mho/u25AtpU1Z/XRNQ0OM5UQuLMc1jyDwyOqn8WGfFR/0WuSZElNC1E8lF69N5PBWvNdjwbvd5sUMcRRP7DUlftxzeIkFb3ebkdFlusHYQKBJ7Qa8lEZWrwmZfZag8G91mZEuNs0yNnB13u/gGp7fb0G2aAXXR3Q4I1Lh/W7jDviMThPSxCY7YwM1Cp+Ha/isjmXINXYQLdMe5Heo8E7n2jb4N8UmvCEyuhkbuDLr83F68h3LGNU5sFUKowvpbapt8Gn3jDjdseZlBF89jZTdhieaM7qQ1qraBv+6KGAAp9uplIgNXJ7x9YaDL3vgwqejDpSMuaIum61asrohEC4gXUTtgD91dw2pQup+ZKc/6+WHhR9zoEKmw0+TFIqlehTJ7TGd/ILFDX4I+JO/riJVuIrjwtXwSxHZpMLBfyHTYsnmCXx8gnKisEeLs0M2Tk7+5CZ8SjuF420GSVgDZA0MVfNFUj3+srq3QTw0OFAg0eDjQZqTk09pp3DiFwrH2vTWsAb+2WH/+8IW9ut2GCAaNziQ36VGrszKCfyrbQYktxrMYQ1UTXm6Q66Bw3aUS9VYooObyBWrIZBaWCubE5vwR1sNeKVF3x2BAS8/3FN5bsiG0j41VMFM6B0QiFZYh0++o8fh27rIko3PH3l6wu6wgzRKeoObICXDVtkc3YQ/0qKTRgQfMDDhSYmkSeXJrCjqXsFikDvB5skfadHjUIs68kZGVDq+7oukw+ZILTjbtRzSRMzwt7TMRgmikjGXJ+IO22dGgXgpUCJswx++rUNSs475MFc86nIwWUYye0zIE6m2mWAD/uVbOrzUpGE+TheNOBVMNykyz+feXQxMlWQw47MAn9SsxYtNGuYLDYn7olkDyTxPRmIyVbIDr0XiTfV1xgZIVknivmh22H/P87HAH7ypWUhsXo4uNyVZJYn79gy+US0/0Kh+nheTgH2CAUeZQEYbdg2+UWtKaFTX8GINtraKxH3ZUivFNfwLTRrquWYti9HiFmX32yq5LxsNN+EuEckqSdzHZc3z2CybYCJZJYn7uHhtDsR8YSMUySpJ3EcSszSx0Zx2b83PHF7rT2rWmkmTSmzU3Dj4s+pp3l4rVWhMThVSnaFG4kNNmr3/ky+cSHpAFvBjrXpL8p3ATxLxMhJXXHHxmOhvmf2cD18NzjEAAAAASUVORK5CYII="
                          />
                        </h2>
                        <div className="d-flex align-items-center   mt-4">
                          <div className="">
                            <h6 className="fw-bold" style={followtext}>
                              101
                            </h6>
                            <p style={followtext}>Posts</p>
                          </div>
                          <div className="" style={followmargin}>
                            <h6 className="fw-bold" style={followtext}>
                              20.7K
                            </h6>
                            <p style={followtext}>Followers</p>
                          </div>
                          <div className="" style={followmargin}>
                            <h6 className="fw-bold" style={followtext}>
                              11
                            </h6>
                            <p style={followtext}>Followoing</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="  " style={imgavtar}>
                      <img
                        style={card__thumb}
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="px-5  " style={margininf}>
                    <p className="" style={Name}>
                      Manual James Rovira | IG Marketing
                    </p>
                    <ul style={{ fontSize: "12px", marginTop: "-12px" }}>
                      <li style={{ listStyle: "none" }}>
                        <input
                          type="radio"
                          id="influencer"
                          name="category"
                          style={{ display: "none" }}
                        />
                        <label htmlFor="influencer" style={followtext}>
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              backgroundColor: "#1c74b5", // Yellow color
                              borderRadius: "50%",
                              position: "absolute",
                              top: "50%",
                              transform: "translateY(-50%)",
                              left: "-16px", // Adjust this value based on your design
                            }}
                          ></div>
                          Influencer
                        </label>
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <input
                          type="radio"
                          id="publicFigure"
                          name="category"
                          style={{ display: "none" }}
                        />
                        <label htmlFor="publicFigure" style={followtext}>
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              backgroundColor: "#41338b", // Yellow color
                              borderRadius: "50%",
                              position: "absolute",
                              top: "50%",
                              transform: "translateY(-50%)",
                              left: "-16px", // Adjust this value based on your design
                            }}
                          ></div>
                          Public Figure
                        </label>
                      </li>
                      <li style={{ listStyle: "none" }}>
                        <input
                          type="radio"
                          id="fashionGuide"
                          name="category"
                          style={{ display: "none" }}
                        />
                        <label htmlFor="fashionGuide" style={followtext}>
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              backgroundColor: "#640e9b",
                              borderRadius: "50%",
                              position: "absolute",
                              top: "50%",
                              transform: "translateY(-50%)",
                              left: "-16px",
                            }}
                          ></div>
                          I am your Fashion Guide
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-0 rounded-0 "
              style={{ height: "400px" }}
            >
              <div className="mt-5"></div>
              <div className="mt-5"></div>
              <div className="mt-5"></div>
              <div className="d-flex align-items-center justify-content-between px-5">
                <h3 className="fw-bold" style={Explore}>
                  Explore Categories
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
              </div>
              <div className="d-flex align-items-center justify-content-center mt-4">
                <div
                  className="card bg-light text-center rounded-5"
                  style={minicard}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                    style={avtarmini}
                  />
                  <p className="mt-3 " style={avtarminitext}>
                    Casual
                  </p>
                </div>
                <div
                  className="card bg-light text-center rounded-5"
                  style={minicard}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://img.freepik.com/free-photo/beautiful-woman-park-last-sunny-days_144627-16054.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                    style={avtarmini}
                  />
                  <p className="mt-3 " style={avtarminitext}>
                    Night
                  </p>
                </div>
                <div
                  className="card bg-light text-center rounded-5"
                  style={minicard}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://img.freepik.com/free-photo/brunette-girl-walking-through-park-during-autumn_1157-17764.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                    style={avtarmini}
                  />
                  <p className="mt-3 " style={avtarminitext}>
                    Travel
                  </p>
                </div>
                <div
                  className="card bg-light text-center rounded-5"
                  style={minicard}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://img.freepik.com/free-photo/beautiful-woman-sweater-sweater_144627-46546.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                    style={avtarmini}
                  />
                  <p className="mt-3 " style={avtarminitext}>
                    Party
                  </p>
                </div>
                <div
                  className="card bg-light text-center rounded-5"
                  style={minicard}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                    style={avtarmini}
                  />
                  <p className="mt-3 " style={avtarminitext}>
                    Occasion
                  </p>
                </div>
                <div
                  className="card bg-light text-center rounded-5"
                  style={minicard}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://img.freepik.com/free-photo/young-woman-model-posing-with-checkered-plaid-near-christmas-balls_114579-66821.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                    style={avtarmini}
                  />
                  <p className="mt-3 " style={avtarminitext}>
                    Festive
                  </p>
                </div>
                <div
                  className="card bg-light text-center rounded-5"
                  style={minicard}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="https://img.freepik.com/premium-photo/beauty-fashion-portrait-young-beautiful-brunette-woman-with-long-black-hair-green-eyes_333900-2852.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                    style={avtarmini}
                  />
                  <p className="mt-3 " style={avtarminitext}>
                    Casual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="p-4 d-flex align-items-center justify-content-between gap-4 mt-3">
          <Card sx={cardImg}>
            <CardCover>
              <img
                src="https://img.freepik.com/free-photo/cute-young-woman-outdoor_624325-2545.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <div className="card   " textColor="#fff" style={cardStyle}>
                <div
                  className="d-flex align-items-center "
                  style={{ marginBottom: "10px" }}
                >
                  <div className="p-1 d-flex align-items-center justify-content-center card mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                       style={iconx}
                      fill="currentColor"
                      color="red"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </div>

                  <div
                    className="ms-2"
                    style={{ lineHeight: "0px", marginTop: "-8px" }}
                  >
                    <p className="text-black" style={textblack}>
                      #GETTHISLOOK
                    </p>
                    <p  className="text-black" style={textblack}>
                      Lorem, ipsum dolor.Lorem, ipsum dolor
                    </p>
                    <p
                      className="text-blue"
                      style={{
                        color: "blue",
                        fontSize: "8px",
                        lineHeight: "0px",
                        marginTop: "2px",
                      }}
                    >
                      @lorem
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="" sx={cardImg}>
            <CardCover>
              <img
                src="https://img.freepik.com/free-photo/stylish-girl-walking-through-her-school-s-campus_1157-17419.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <div className="card   " textColor="#fff" style={cardStyle}>
                <div
                  className="d-flex align-items-center "
                  style={{ marginBottom: "10px" }}
                >
                  <div className="p-1 d-flex align-items-center justify-content-center card mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                       style={iconx}
                      fill="currentColor"
                      color="red"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </div>

                  <div
                    className="ms-2"
                    style={{ lineHeight: "0px", marginTop: "-8px" }}
                  >
                    <p className="text-black" style={textblack}>
                      #GETTHISLOOK
                    </p>
                    <p  className="text-black" style={textblack}>
                      Lorem, ipsum dolor.Lorem, ipsum dolor
                    </p>
                    <p
                      className="text-blue"
                      style={{
                        color: "blue",
                        fontSize: "8px",
                        lineHeight: "0px",
                        marginTop: "-2px",
                      }}
                    >
                      @lorem
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card sx={cardImg}>
            <CardCover>
              <img
                src="https://img.freepik.com/free-photo/pretty-girl_1157-7140.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <div className="card   " textColor="#fff" style={cardStyle}>
                <div
                  className="d-flex align-items-center "
                  style={{ marginBottom: "10px" }}
                >
                  <div className="p-1 d-flex align-items-center justify-content-center card mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                       style={iconx}
                      fill="currentColor"
                      color="red"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </div>

                  <div
                    className="ms-2"
                    style={{ lineHeight: "0px", marginTop: "-8px" }}
                  >
                    <p className="text-black" style={textblack}>
                      #GETTHISLOOK
                    </p>
                    <p  className="text-black" style={textblack}>
                      Lorem, ipsum dolor.Lorem, ipsum dolor
                    </p>
                    <p
                      className="text-blue"
                      style={{
                        color: "blue",
                        fontSize: "8px",
                        lineHeight: "0px",
                        marginTop: "2px",
                      }}
                    >
                      @lorem
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="p-4 d-flex align-items-center justify-content-between gap-4 mt-3">
          <Card sx={cardImg}>
            <CardCover>
              <img
                src="https://img.freepik.com/free-photo/young-woman-model-posing-with-checkered-plaid-near-christmas-balls_114579-66821.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <div className="card   " textColor="#fff" style={cardStyle}>
                <div
                  className="d-flex align-items-center "
                  style={{ marginBottom: "10px" }}
                >
                  <div className="p-1 d-flex align-items-center justify-content-center card mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                       style={iconx}
                      fill="currentColor"
                      color="red"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </div>

                  <div
                    className="ms-2"
                    style={{ lineHeight: "0px", marginTop: "-8px" }}
                  >
                    <p className="text-black" style={textblack}>
                      #GETTHISLOOK
                    </p>
                    <p  className="text-black" style={textblack}>
                      Lorem, ipsum dolor.Lorem, ipsum dolor
                    </p>
                    <p
                      className="text-blue"
                      style={{
                        color: "blue",
                        fontSize: "8px",
                        lineHeight: "0px",
                        marginTop: "2px",
                      }}
                    >
                      @lorem
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="" sx={cardImg}>
            <CardCover>
              <img
                src="https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <div className="card   " textColor="#fff" style={cardStyle}>
                <div
                  className="d-flex align-items-center "
                  style={{ marginBottom: "10px" }}
                >
                  <div className="p-1 d-flex align-items-center justify-content-center card mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                       style={iconx}
                      fill="currentColor"
                      color="red"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </div>

                  <div
                    className="ms-2"
                    style={{ lineHeight: "0px", marginTop: "-8px" }}
                  >
                    <p className="text-black" style={textblack}>
                      #GETTHISLOOK
                    </p>
                    <p  className="text-black" style={textblack}>
                      Lorem, ipsum dolor.Lorem, ipsum dolor
                    </p>
                    <p
                      className="text-blue"
                      style={{
                        color: "blue",
                        fontSize: "8px",
                        lineHeight: "0px",
                        marginTop: "2px",
                      }}
                    >
                      @lorem
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card sx={cardImg}>
            <CardCover>
              <img
                src="https://img.freepik.com/free-photo/beautiful-woman-sweater-sweater_144627-46546.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <div className="card   " textColor="#fff" style={cardStyle}>
                <div
                  className="d-flex align-items-center "
                  style={{ marginBottom: "10px" }}
                >
                  <div className="p-1 d-flex align-items-center justify-content-center card mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                       style={iconx}
                      fill="currentColor"
                      color="red"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </div>

                  <div
                    className="ms-2"
                    style={{ lineHeight: "0px", marginTop: "-8px" }}
                  >
                    <p className="text-black" style={textblack}>
                      #GETTHISLOOK
                    </p>
                    <p  className="text-black" style={textblack}>
                      Lorem, ipsum dolor.Lorem, ipsum dolor
                    </p>
                    <p
                      className="text-blue"
                      style={{
                        color: "blue",
                        fontSize: "8px",
                        lineHeight: "0px",
                        marginTop: "2px",
                      }}
                    >
                      @lorem
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="p-4 d-flex align-items-center justify-content-between gap-4 mt-3">
          <Card sx={cardImg}>
            <CardCover>
              <img
                src="https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <div className="card   " textColor="#fff" style={cardStyle}>
                <div
                  className="d-flex align-items-center "
                  style={{ marginBottom: "10px" }}
                >
                  <div className="p-1 d-flex align-items-center justify-content-center card mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                       style={iconx}
                      fill="currentColor"
                      color="red"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </div>

                  <div
                    className="ms-2"
                    style={{ lineHeight: "0px", marginTop: "-8px" }}
                  >
                    <p className="text-black" style={textblack}>
                      #GETTHISLOOK
                    </p>
                    <p  className="text-black" style={textblack}>
                      Lorem, ipsum dolor.Lorem, ipsum dolor
                    </p>
                    <p
                      className="text-blue"
                      style={{
                        color: "blue",
                        fontSize: "8px",
                        lineHeight: "0px",
                        marginTop: "2px",
                      }}
                    >
                      @lorem
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="" sx={cardImg}>
            <CardCover>
              <img
                src="https://img.freepik.com/free-photo/beautiful-woman-park-last-sunny-days_144627-16054.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <div className="card   " textColor="#fff" style={cardStyle}>
                <div
                  className="d-flex align-items-center "
                  style={{ marginBottom: "10px" }}
                >
                  <div className="p-1 d-flex align-items-center justify-content-center card mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                       style={iconx}
                      fill="currentColor"
                      color="red"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </div>

                  <div
                    className="ms-2"
                    style={{ lineHeight: "0px", marginTop: "-8px" }}
                  >
                    <p className="text-black" style={textblack}>
                      #GETTHISLOOK
                    </p>
                    <p  className="text-black" style={textblack}>
                      Lorem, ipsum dolor.Lorem, ipsum dolor
                    </p>
                    <p
                      className="text-blue"
                      style={{
                        color: "blue",
                        fontSize: "8px",
                        lineHeight: "0px",
                        marginTop: "2px",
                      }}
                    >
                      @lorem
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card sx={cardImg}>
            <CardCover>
              <img
                src="https://img.freepik.com/free-photo/brunette-girl-walking-through-park-during-autumn_1157-17764.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardCover
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
              }}
            />
            <CardContent sx={{ justifyContent: "flex-end" }}>
              <div className="card   " textColor="#fff" style={cardStyle}>
                <div
                  className="d-flex align-items-center "
                  style={{ marginBottom: "10px" }}
                >
                  <div className="p-1 d-flex align-items-center justify-content-center card mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={iconx}
                      fill="currentColor"
                      color="red"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </div>

                  <div
                    className="ms-2"
                    style={{ lineHeight: "0px", marginTop: "-8px" }}
                  >
                    <p className="text-black" style={textblack}>
                      #GETTHISLOOK
                    </p>
                    <p className="text-black" style={textblack}>
                      Lorem, ipsum dolor.Lorem, ipsum dolor
                    </p>
                    <p
                      className="text-blue"
                      style={{
                        color: "blue",
                        fontSize: "8px",
                        lineHeight: "0px",
                        marginTop: "2px",
                      }}
                    >
                      @lorem
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProductProfile;
