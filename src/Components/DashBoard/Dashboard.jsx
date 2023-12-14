import { Avatar, Button, Input, Textarea } from "@mui/joy";
import React, { useEffect, useState } from "react";
import "./Dahboard.css";
import { Link } from "react-router-dom";

import Table from "@mui/joy/Table";

function createData(sr, post, view, edit) {
  return { sr, post, view, edit };
}

const rows = [
  createData("1", "Pink Dress", 8980, "Edit Post"),
  createData("2", "Floral Dress", 9019, "Edit Post"),
  createData("3", "Green Dress", 9990, "Edit Post"),
  createData("4", "One-Shoulder", 8759, "Edit Post"),
  createData("5", "Night Dress", 8697, "Edit Post"),
  createData("5", "Casual Dress", 8990, "Edit Post"),
];

function Dashboard() {
  const [showFooter, setShowFooter] = useState(true);
  const [showInputs, setShowInputs] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // Toggle function to show/hide inputs
  const toggleInputs = () => {
    setShowInputs(!showInputs);
  };
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgb(48 48 48)",
    color: "white",
    textAlign: "center",
    display: showFooter ? "block" : "none", // Hide or show the footer
  };

  useEffect(() => {
    const handleResize = () => {
      // Update the state based on the screen width
      setShowFooter(window.innerWidth <= 467);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen width
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const inputStyles = {
    padding: "0.5rem",
    border: `double 1px transparent`,
    borderRadius: "8px",
    backgroundImage: isFocused
      ? "linear-gradient(white, white), linear-gradient(to right, #ff7e5f, #feb47b)" // Gradient when focused
      : "linear-gradient(white, white),  linear-gradient(to right,  #dc1fff ,#3471e8)", // Default gradient
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    outline: "none", // Remove default focus outline
    boxShadow: isFocused ? "0 0 5px rgba(0, 0, 0, 0.5)" : "none", // Border color when focused
    transition: "box-shadow 0.3s ease", // Smooth transition
  };

  return (
    <div>
      <div>
        {/* Header Content Goes Here */}
        <div>
          <div className="d-flex align-items-center justify-content-between px-3 py-2">
            <div>
              <Button
                color="white"
                className="border "
                size="sm"
                style={{ borderRadius: "12px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </Button>
            </div>
            <div>
              {" "}
              <div
                className="fw-bold "
                style={{
                  position: "relative",
                  fontSize: "30px",
                  fontStyle: "normal",
                  lineHeight: "-0.3px",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    display: "inline-block",
                    fontFamily: "inherit",
                  }}
                >
                  Manage Posts
                </span>
              </div>
            </div>
            <div>
              <Avatar
                alt="Remy Sharp"
                src="https://img.freepik.com/free-photo/cheerful-girl-cashmere-sweater-laughs-against-backdrop-blossoming-sakura-portrait-woman-yellow-hoodie-city-spring_197531-17886.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                size="lg"
              />
            </div>
          </div>
          <hr style={{ marginTop: "-6px" }}></hr>
        </div>
        {/* Center Content Goes Here */}

        <div className="">
          <div>
            <div>
              <div>
                <div
                  className="d-flex align-items-center gap-2 px-3"
                  onClick={toggleInputs}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <h5 className="text-black fw-bold">Profile Details</h5>
                  </div>
                  <div className="mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      stroke="black"
                      fill="currentColor"
                      class="bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Conditionally render inputs based on showInputs state */}
                {showInputs && (
                  <div className="py-2">
                    <div className="d-flex gap-2 mb-2 px-3 ">
                      <div>
                        <Input
                          style={inputStyles}
                          variant="soft"
                          className="mb-2"
                          placeholder="Update Name"
                        ></Input>
                        <Textarea
                          variant="soft"
                          className=""
                          placeholder="About"
                          style={{
                            ...inputStyles,
                            marginTop: "12px",
                            height: "60px",
                          }}
                        />
                      </div>
                      <div>
                        {" "}
                        <Textarea
                          className="placeholder-center"
                          minRows={4}
                          variant="soft"
                          style={{ ...inputStyles, width: "100%" }}
                          placeholder="Update Profile Picture"
                        ></Textarea>
                      </div>
                    </div>
                    <div className="px-3">
                      <Input
                        variant="soft"
                        style={inputStyles}
                        endDecorator={
                          <div className=" d-flex align-items-center gap-1 ">
                            <div
                              className="px-2 p-1 rounded-5"
                              style={{ backgroundColor: "#1877f2" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                color="white"
                                style={{ marginBottom: "4px" }}
                                fill="currentColor"
                                class="bi bi-facebook"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                              </svg>
                            </div>
                            <div
                              className="px-2 p-1 rounded-5"
                              style={{ backgroundColor: "#f00073" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                color="white"
                                style={{ marginBottom: "4px" }}
                                fill="currentColor"
                                class="bi bi-instagram"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                              </svg>
                            </div>
                            <div
                              className="px-2 p-1 rounded-5"
                              style={{ backgroundColor: "#ff0000" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                color="white"
                                style={{ marginBottom: "4px" }}
                                fill="currentColor"
                                class="bi bi-youtube"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                              </svg>
                            </div>
                            <div
                              className="px-2 p-1 rounded-5"
                              style={{ backgroundColor: "rgb(34 73 109)" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                color="white"
                                style={{ marginBottom: "4px" }}
                                fill="currentColor"
                                class="bi bi-link"
                                viewBox="0 0 16 16"
                              >
                                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6z" />
                              </svg>
                            </div>
                          </div>
                        }
                        placeholder="Add Social Handles"
                      ></Input>
                    </div>
                    <hr></hr>
                  </div>
                )}
              </div>
            </div>
            <div className="px-3">
              <Link to="/add-new-post" className="text-decoration-none">
                <button
                  class="btn d-flex align-items-center "
                  style={{ color: "gray", height: "70px", fontSize: "18px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    stroke="gray"
                    style={{ fontWeight: "bold" }}
                    className="me-1 "
                    color="gray"
                    fill="currentColor"
                    class="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                    />
                  </svg>{" "}
                  Add New post
                </button>
              </Link>
            </div>
            <hr></hr>
          </div>
          <div className="table-responsive p-3 px-lg-5 ">
            <Table
              borderAxis="both"
              className="table-bordered table-striped"
              style={{
                border: `double 1px transparent`,
                borderRadius: "5px",
                backgroundImage: isFocused
                  ? "linear-gradient(white, white), linear-gradient(to right, #ff7e5f, #feb47b)" // Gradient when focused
                  : "linear-gradient(white, white),  linear-gradient(to right,  #dc1fff ,#3471e8)", // Default gradient
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                outline: "none", // Remove default focus outline
                boxShadow: isFocused ? "0 0 5px rgba(0, 0, 0, 0.5)" : "none", // Border color when focused
                transition: "box-shadow 0.3s ease", // Smooth transition
              }}
              sx={(theme) => ({
                '& th[scope="col"]': {
                  background: "linear-gradient(to right,  #dc1fff ,#3471e8)",
                  color: "white", // Set text color as needed
                },
              })}
            >
              <thead>
                <tr className="text-center gradient-header text-white">
                  <th
                    className="text-center text-white"
                    style={{
                      background:
                        "linear-gradient(to right,  rgb(211 147 211) ,rgb(196 148 214)",
                    }}
                  >
                    SR No.
                  </th>
                  <th
                    className="text-center text-white"
                    style={{
                      background:
                        "linear-gradient(to right,  rgb(195 148 215) ,rgb(175 152 220)",
                    }}
                  >
                    Post Name
                  </th>
                  <th
                    className="text-center text-white"
                    style={{
                      background:
                        "linear-gradient(to right,  rgb(174 152 220) ,#989ce3",
                    }}
                  >
                    View
                  </th>
                  <th
                    className="text-center text-white"
                    style={{
                      background:
                        "linear-gradient(to right,  rgb(149 157 228) ,#7da4eb",
                    }}
                  >
                    Edit
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr key={row.sr}>
                    <td className="text-center">{row.sr}</td>
                    <td className="text-center">{row.post}</td>
                    <td className="text-center">{row.view}</td>
                    <td className="text-center ">
                      <div
                        className="border rounded-2 text-white py-1"
                        style={{
                          background:
                            "linear-gradient(to right,  #d475d4 ,#7399f5)",
                        }}
                      >
                        {row.edit}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>

        {/* Footer content goes here */}
        <footer style={footerStyle}>
          <div className=" d-flex align-items-center justify-content-between px-2 py-2">
            <div style={{ marginBottom: "-14px" }}>
              <div className="mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                </svg>
              </div>
              <p>Home</p>
            </div>
            <div>
              <div className="mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12" y2="8" />
                </svg>
              </div>
              <div>About</div>
            </div>
            <div>
              <div className="mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-chat-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2" />
                </svg>
              </div>
              <div>Chat</div>
            </div>
            <div>
              <div className="mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-pencil-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fill-rule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                  />
                </svg>
              </div>
              <div>Blog</div>
            </div>
            <div>
              <div className="mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </div>
              <div>Account</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Dashboard;
