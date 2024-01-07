import { Avatar, Button, Input, Textarea } from "@mui/joy";
import React, { useEffect, useState } from "react";
import "./Dahboard.css";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCombinedContext } from "../DataContext";

function AddPost() {
  const navigate = useNavigate();
  const [showFooter, setShowFooter] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [showInputs1, setShowInputs1] = useState(false);
  const [showInputs2, setShowInputs2] = useState(false);
  const [link, setLink] = useState("");
  const [generatedStorecode, setGeneratedStorecode] = useState("");
  const [profileData, setProfileData] = useState({
    name: "",
  });
  const { data, loading ,isDarkMode } = useCombinedContext();
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/api/user/profile"
        );
        setProfileData(response.data || {});
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchProfileData();
  }, []);

  useEffect(() => {
    // Trigger store code generation when the link changes, but with a delay
    const timeoutId = setTimeout(() => {
      handleGenerateStorecode();
    }, 2000); // 2000 milliseconds (2 seconds)

    // Clear the timeout on each link change to avoid unnecessary triggers
    return () => clearTimeout(timeoutId);
  }, [link]);

  const generateStorecode = async (name, link) => {
    try {
      const response = await axios.post("http://localhost:3002/api/generate-storecode", {
        name,
        link,
      });

      const { storecode } = response.data;

      setGeneratedStorecode(storecode);

      // Automatically set the generated store code in the tagProducts input field
      setPostData((prevData) => ({
        ...prevData,
        tagProducts: storecode,
      }));
    } catch (error) {
      console.error("Error generating Storecode:", error);
    }
  };
  const handleGenerateStorecode = () => {
    const name = profileData.name.slice(0, 4).toUpperCase();

    generateStorecode(name, link);
  };

  const [postData, setPostData] = useState({
    category: "", // Add any default value if needed
    postName: "",
    videoLink: "",
    tagProducts:{generatedStorecode},
    startingPrice: "",
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  });
  const [productData, setproductData] = useState({
    productName: "", // Add any default value if needed
    productImageLink: "",
    price: "",
  });

  const handleInputChange = (event, fieldName) => {
    const value = event.target.value;
    setPostData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  const handleproductInputChange = (event, fieldName) => {
    const value = event.target.value;
    setproductData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleUpload = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3002/api/posts/upload",
        postData
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };
  const handleproductUpload = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3002/api/uploadproduct",
        productData
      );

      console.log(response.data);

      navigate("/product-profile");
    } catch (error) {
      console.error("Error uploading post:", error);
    }
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const handleButtonClick1 = () => {
    setShowInputs1(!showInputs1);
    setShowInputs2(false);
  };

  const handleButtonClick2 = () => {
    setShowInputs2(!showInputs2);
    setShowInputs1(false);
  };

  // Toggle function to show/hide inputs

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
  const copyToClipboard = () => {
    // Create a temporary textarea element
    const textArea = document.createElement("textarea");
    textArea.value = generatedStorecode;

    // Append the textarea to the document
    document.body.appendChild(textArea);

    // Select the text in the textarea
    textArea.select();

    // Execute the "copy" command to copy the text
    document.execCommand("copy");

    // Remove the textarea from the document
    document.body.removeChild(textArea);
  };
  return (
    <div style={{
      backgroundColor: isDarkMode ? "#261450" : "white", height:"100%"
    }}>
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
                onClick={handleBackClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-left"
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
                  Add New Posts
                </span>
              </div>
            </div>
            <div>
              <Link to="/product-profile">
                <Avatar
                  alt="Remy Sharp"
                  src="https://img.freepik.com/free-photo/cheerful-girl-cashmere-sweater-laughs-against-backdrop-blossoming-sakura-portrait-woman-yellow-hoodie-city-spring_197531-17886.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                  size="lg"
                />
              </Link>
            </div>
          </div>
          <hr style={{ marginTop: "-6px" }}></hr>
        </div>
        {/* Center Content Goes Here */}
        <div className="d-flex align-items-center justify-content-center">
          <div className="px-3 mt-3">
            <div className="">
              <div className="mb-3">
                <select
                  name="category"
                  value={postData.category}
                  onChange={(e) => handleInputChange(e, "category")}
                  className="form-select custom-select"
                  style={{
                    height: "60px",
                    width: "340px",
                    border: "1px solid #dc1fff",
                  }}
                >
                  <option value="">Select Category</option>
                  <option value="casual">casual</option>
                  <option value="festive">Festive</option>
                  <option value="party">Party</option>
                  <option value="occasional">Occasional</option>
                </select>
                {/* <Select
                  fullwidth
                  name="anotherCategory"
                  value={postData.anotherCategory}
                  onChange={(e) => handleInputChange(e, "anotherCategory")}
                  placeholder="Select Another Category"
                  indicator={<KeyboardArrowDown />}
                  style={inputStyles}
                  sx={{
                    height: "60px",
                    width: "340px",
                    [`& .${selectClasses.indicator}`]: {
                      transition: "0.2s",
                      [`&.${selectClasses.expanded}`]: {
                        transform: "rotate(-180deg)",
                      },
                    },
                  }}
                >
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                  <Option value="option3">Option 3</Option>
                 
                </Select> */}
              </div>
              <div className="mb-3">
                <Input
                  name="postName"
                  type="text"
                  value={postData.postName}
                  onChange={(e) => handleInputChange(e, "postName")}
                  style={{ ...inputStyles, height: "60px" }}
                  placeholder="Post Name"
                  variant="outlined"
                />
              </div>
              <div className="mb-3">
                <Input
                  type="url"
                  name="videoLink"
                  value={postData.videoLink}
                  onChange={(e) => handleInputChange(e, "videoLink")}
                  style={{ ...inputStyles, height: "60px" }}
                  placeholder="Associated Video Link"
                  variant="outlined"
                />
              </div>
              <div className="mb-3">
                <Input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  style={{ ...inputStyles, height: "60px" }}
                  placeholder="Add Your Shopping Link For Generate Code"
                  variant="outlined"
                />
               
              </div>
              {/* <div className="mb-3">
                <Input
                  name="tagProducts"
                  value={generatedStorecode}
                  onChange={(e) => handleInputChange(e, "tagProducts")}
                  style={{ ...inputStyles, height: "60px" }}
                  placeholder="Tag Products"
                  variant="outlined"
                />
              </div> */}
              <div className="mb-3">
                <Input
                  name="startingPrice"
                  value={postData.startingPrice}
                  onChange={(e) => handleInputChange(e, "startingPrice")}
                  style={{ ...inputStyles, height: "60px" }}
                  placeholder="Starting Price"
                  variant="outlined"
                />
              </div>
              <div className="mb-3">
                <Input
                  name="img1"
                  value={postData.img1}
                  onChange={(e) => handleInputChange(e, "img1")}
                  style={{ ...inputStyles, height: "60px" }}
                  placeholder="Product Img 1"
                  variant="outlined"
                />
              </div>
              <div className="mb-3">
                <Input
                  name="img2"
                  value={postData.img2}
                  onChange={(e) => handleInputChange(e, "img2")}
                  style={{ ...inputStyles, height: "60px" }}
                  placeholder="Product Img 2"
                  variant="outlined"
                />
              </div>
              <div className="mb-3">
                <Input
                  name="img3"
                  value={postData.img3}
                  onChange={(e) => handleInputChange(e, "img3")}
                  style={{ ...inputStyles, height: "60px" }}
                  placeholder="Product Img 3"
                  variant="outlined"
                />
              </div>
              <div className="mb-3">
                <Input
                  name="img4"
                  value={postData.img4}
                  onChange={(e) => handleInputChange(e, "img4")}
                  style={{ ...inputStyles, height: "60px" }}
                  placeholder="Product Img 4"
                  variant="outlined"
                />
              </div>
              <div className="mb-3">
                <Input
                  name="img5"
                  value={postData.img5}
                  onChange={(e) => handleInputChange(e, "img5")}
                  style={{ ...inputStyles, height: "60px" }}
                  placeholder="Product Img 5"
                  variant="outlined"
                />
              </div>
            </div>
            <div>
              <div className="animated-form-container mb-3">
                <div className={`input-container `}>
                  <button
                    style={{
                      width: "340px",
                      color: "gray",
                      fontSize: "25px",
                      height: "55px",
                    }}
                    className="btnadd d-flex align-items-center justify-content-center gap-1 "
                    onClick={handleButtonClick1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
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
                    Add Product
                  </button>

                  {showInputs1 && (
                    <div
                      className="slide-down-inputs w-100"
                      style={{
                        padding: "0.5rem",
                        border: "double 1px transparent",
                        borderRadius: "0px 0px 10px 10px",
                        backgroundImage: isFocused
                          ? "linear-gradient(white, white), linear-gradient(to right, #ff7e5f, #feb47b)"
                          : "linear-gradient(white, white), linear-gradient(to right, #dc1fff ,#3471e8)",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box",
                        outline: "none",
                        boxShadow: isFocused
                          ? "0 0 5px rgba(0, 0, 0, 0.5)"
                          : "none",
                        transition: "box-shadow 0.3s ease",
                      }}
                    >
                      <input
                        className="mt-3"
                        style={{ ...inputStyles, width: "300px" }}
                        type="text"
                        name="productName"
                        placeholder="Product Name"
                        value={productData.productName}
                        onChange={(e) =>
                          handleproductInputChange(e, "productName")
                        }
                      />
                      <input
                        style={{ ...inputStyles, width: "300px" }}
                        type="text"
                        name="productImageLink"
                        placeholder="Product Image Link"
                        value={productData.productImageLink}
                        onChange={(e) =>
                          handleproductInputChange(e, "productImageLink")
                        }
                      />
                      <input
                        style={{ ...inputStyles, width: "300px" }}
                        type="text"
                        placeholder="Price"
                        name="price"
                        value={productData.price}
                        onChange={(e) => handleproductInputChange(e, "price")}
                      />
                      <Button
                        className="rounded-3 mb-5"
                        onClick={handleproductUpload}
                        style={{
                          background:
                            "linear-gradient(to right, #d475d4, #7399f5)",
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            WebkitBackgroundClip: "text",
                            display: "inline-block",
                          }}
                        >
                          Upload Product
                        </div>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="animated-form-container mb-3">
              <div
                className={`input-container ${showInputs1 ? "shift-down" : ""}`}
              >
                <button
                  style={{
                    width: "340px",
                    color: "gray",
                    fontSize: "25px",
                    height: "55px",
                  }}
                  className="btnadd d-flex align-items-center justify-content-center gap-1 "
                  onClick={handleButtonClick2}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
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
                  Add New Product
                </button>

                {showInputs2 && (
                  <div
                    className="slide-down-inputs w-100"
                    style={{
                      padding: "0.5rem",
                      border: `double 1px transparent`,
                      borderRadius: " 0px 0px 10px 10px",
                      backgroundImage: isFocused
                        ? "linear-gradient(white, white), linear-gradient(to right, #ff7e5f, #feb47b)" // Gradient when focused
                        : "linear-gradient(white, white),  linear-gradient(to right,  #dc1fff ,#3471e8)", // Default gradient
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                      outline: "none", // Remove default focus outline
                      boxShadow: isFocused
                        ? "0 0 5px rgba(0, 0, 0, 0.5)"
                        : "none", // Border color when focused
                      transition: "box-shadow 0.3s ease", // Smooth transition
                    }}
                  >
                    <input
                      className="mt-3"
                      style={{ ...inputStyles, width: "300px" }}
                      type="text"
                      placeholder="Product Name"
                    />
                    <input
                      style={{ ...inputStyles, width: "300px" }}
                      type="text"
                      placeholder="Product Image Link"
                    />
                    <input
                      style={{ ...inputStyles, width: "300px" }}
                      type="text"
                      placeholder="Price"
                    />
                  </div>
                )}
              </div>
            </div>
            <div>
              <Button
                className="rounded-3 mb-5"
                onClick={handleUpload}
                style={{
                  width: "340px",
                  height: "70px",
                  position: "relative",
                  marginTop: "200px",
                  fontStyle: "normal",
                  background: "linear-gradient(to right,  #d475d4 ,#7399f5)",
                }}
              >
                <div
                  style={{
                    color: "white",
                    WebkitBackgroundClip: "text",
                    display: "inline-block",
                    fontSize: "30px",
                  }}
                >
                  Upload Post
                </div>
              </Button>
            </div>
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
                  className="bi bi-house"
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
                  className="bi bi-chat-dots"
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
                  className="bi bi-pencil-square"
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
                  className="bi bi-person"
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

export default AddPost;
