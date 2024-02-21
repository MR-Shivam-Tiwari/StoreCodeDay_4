import { Avatar } from "antd";
import React, { useEffect, useState } from "react";
import bluesuit from "./bluesuit.png";
import pinkcart from "./pinkcart.png";
import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";
function ExploreGuides({isDarkMode}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      // Check if window width is less than or equal to 400
      if (newWidth <= 450) {
        // Refresh the page
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navigate = useNavigate();

  const cardStyle = {
    border: "2px solid blue",
    width: "500px",
    height: "500px",
  };
  if (windowWidth <= 450) {
    cardStyle.width = "185px";
    cardStyle.height = "290px";
  }
  const productname = { fontSize: "25px", color: "#144da4" };
  if (windowWidth <= 450) {
    productname.fontSize = "12px";
  }
  const imgStyle = { width: "250px", height: "250px", marginTop: "20px" };
  if (windowWidth <= 450) {
    imgStyle.width = "120px";
    imgStyle.marginTop = "1px";
    imgStyle.height = "120px";
  }
  const para = {
    fontSize: "22px",
    textAlign: "center",
    marginBottom: "6px",
    marginTop: "10px",
    lineHeight: "22px",
  };
  if (windowWidth <= 450) {
    para.fontSize = "8px";
    para.lineHeight = "12px";
  }
  const imgSize = { width: "1000px", height: "700px" };
  if (windowWidth <= 450) {
    imgSize.width = "650px";
    imgSize.height = "400px";
  }
  const imgSize2 = { width: "1000px", height: "650px" }
  if (windowWidth <= 450) {
    imgSize2.width = "850px";
    imgSize2.height = "400px";
    imgSize2.marginTop = "100px";
  }
  const imgtext1 ={ marginLeft: "-97%", marginTop: "-15%" }
  if (windowWidth <= 450) {
    imgtext1.marginLeft = "-700px";
    imgtext1.marginTop = "-10%";
  }
  const imgtext2 ={
                  color: "white",
                  width: "57%",
                  marginLeft: "23%",
                  fontSize: "23px",
  }
  if (windowWidth <= 450) {
    imgtext2.width = "60%";
    imgtext2.fontSize = "11px";
  }
  const button1 ={ background: "#db378c", width:"150px" }
  if (windowWidth <= 450) {
    button1.width = "100px";
  }
  const button2 ={ background: "#0a5ff4", width:"150px" }
  if (windowWidth <= 450) {
    button2.width = "100px";
  }
  const heading ={ color: "#db378c", fontSize: "30px" }
  if (windowWidth <= 450) {
    heading.fontSize = "19px";
    // imgtext1.marginTop = "400px";
  }
  const productimg ={
    width: "20%",
    marginLeft: "5%",
    height: "22%",
    borderRadius: "15px",
    objectFit: "cover",
    marginTop: "-10%",
  }
  if (windowWidth <= 450) {
    productimg.width = "12%";
    productimg.height = "12%";
    productimg.marginLeft = "2%";
    productimg.marginTop = "-30px";
  }
  const productimg2 ={
    width: "60%",
    borderRadius: "15px",
    marginTop: "-18%",
    height: "170px",
    objectFit: "cover",
  }
  if (windowWidth <= 450) {
    productimg2.width = "62%";
    productimg2.height = "100px";
    productimg2.marginLeft = "2%";
    productimg2.marginTop = "-60px";
  }
  const imgpara ={ width: "58%", fontSize: "22px" }
  if (windowWidth <= 450) {
    imgpara.width = "65%";
    imgpara.fontSize = "12px";
    // imgtext1.marginTop = "400px";
  }
  const button = {
    backgroundColor: "#1960ae",
    color: "white",
    borderRadius: "5px",
    width: "200px",
    height: "40px",
    cursor: "pointer",
  };
  if (windowWidth <= 450) {
    button.width = "80px";
    button.height = "30px";
  }

  const buttontext = {
    fontSize: "21px",
    marginBottom: "0px",
    marginTop: "0px",
  };
  if (windowWidth <= 450) {
    buttontext.fontSize = "13px";
  }
  const handleregisterClick = () => {
    // Reload the entire page when navigating to /login
    window.location.href = "/product-explore-page";
  };
  const handletravelClick = () => {
    // Reload the entire page when navigating to /login
    window.location.href = "/travel-explore-page";
  };
  return (
    <div className=" container px-4 mt-4">
      <div className="text-center">
        <span
          className="fw-bold  mt-0"
          style={{
            background:
              "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
          }}
        >
          <p className="fw-bold mb-0" style={{ fontSize: "40px" }}>
            EXPLORE GUIDES
          </p>
        </span>
      </div>

      <div className=" row mt-5  " style={{ marginBottom: "160px" }}>
        <div className="col-lg-6 col-12">
          <img src={pinkcart} alt="" className="img-fluid" style={imgSize} />
          <div
            className="d-flex align-items-center justify-content-center "
            style={{
              marginTop: "-80%",
            }}
          >
            <div className="d-flex align-items-center justify-content-start ">
              <img
                src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                style={productimg}
              />
            </div>
            <div
              className=" text-white"
              style={imgtext1}
            >
              <div>
                <h2
                  className="fw-bold"
                  style={heading}
                >
                  {" "}
                  Product Guides
                </h2>
                <p
                  className="fw-bold"
                  style={{...imgpara, color: isDarkMode ? "white" : "black"}}
                >
                  Discover curated looks for every occasion. From casual to
                  festive and much more...
                </p>
                <Button
                  className="px-5 rounded-4"
                  style={button1}
                  onClick={() => navigate('/product-explore-page')}
                >
                  {" "}
                  EXPLORE
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <img
            src={bluesuit}
            alt=""
            className="img-fluid"
            style={imgSize2}
          />
          <div className="align-items-center" style={{ marginTop: "-88%" }}>
            <div className="p-3 d-flex align-items-center justify-content-center">
              <img
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                style={productimg2}
                alt=""
              />
            </div>
            <div className="text-center">
              <h1 className="fw-bold" style={{ color: "#0a5ff4" }}>
                {" "}
                Travel Guides
              </h1>
            </div>
            <div>
              <p
                className="text-start fw-bold "
                style={{...imgtext2, color: isDarkMode ? "white" : "black"}}
              >
                Embark on unforgettable Trip with our Travel Guides.From nature
                to adventure , from basic to luxury and much more...
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <Button
                className="px-5 rounded-4"
                style={button2}
                onClick={() => navigate('/travel-explore-page')}
              >
                {" "}
                EXPLORE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreGuides;
