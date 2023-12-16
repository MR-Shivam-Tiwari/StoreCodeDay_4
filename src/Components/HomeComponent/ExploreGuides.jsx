import { Avatar } from "antd";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
function ExploreGuides() {
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
    height: "500px"
  };
  if(windowWidth <= 450){
    cardStyle.width="185px"    
    cardStyle.height="290px"    
  }
  const productname = { fontSize: "25px", color: "#144da4" };
  if(windowWidth <= 450){
    productname.fontSize="12px"    
  }
  const imgStyle = { width: "250px", height: "250px", marginTop: "20px" };
  if(windowWidth <= 450){
    imgStyle.width="120px"   
    imgStyle.marginTop="1px"   
    imgStyle.height="120px"   
  }
  const para = {
    fontSize: "22px",
    textAlign: "center",
    marginBottom: "6px",
    marginTop: "10px",
    lineHeight: "22px",
  };
  if(windowWidth <= 450){
    para.fontSize="8px"   
    para.lineHeight="12px"   
  }
  const button = {
    backgroundColor: "#1960ae",
    color: "white",
    borderRadius: "5px",
    width: "200px",
    height: "40px",
    cursor: "pointer",
  };
  if(windowWidth <= 450){
    button.width="80px"   
    button.height="30px"   
  }

  const buttontext = {
    fontSize: "21px",
    marginBottom: "0px",
    marginTop: "0px",
  };
  if(windowWidth <= 450){
    buttontext.fontSize="13px"   
  }
  return (
    <div className=" container px-4 mt-4">
      <div>
        <h2 className="fw-bold mb-4" style={{ color: "#ea5e90" }}>
          EXPLORE GUIDES
        </h2>

        <div className="d-flex align-items-center justify-content-center  gap-3">
          <div>
            <div
              className="d-flex align-items-center flex-column bg-white  mb-2 text-black rounded-4 p-2 text-center "
              style={cardStyle}
            >
              <div className="mt-3">
                <h5 className="mb-2 fw-bold" style={productname}>
                  PRODUCT GUIDES
                </h5>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://img.freepik.com/free-vector/online-shopping-concept-young-man-shopping-online-via-smartphone_1150-51083.jpg?w=740&t=st=1702049850~exp=1702050450~hmac=0eec7596e60243324e1c46d8b6fc915e78fcfe0e1a1e7bef0c2e159b9bcbf939"
                  alt=""
                  style={imgStyle}
                />
              </div>
              <div className="text-center">
                <p style={para}>
                  Elevate your user experience with our comprehensive product
                  guides. Elevate your user experience with our comprehensive
                  product guides.
                </p>
              </div>
              <div className="mb-0">
                <div
                  className="px-2 py-0"
                  style={button}
                  onClick={() => navigate("/product-guide-page")}
                >
                  <p
                    className="fw-bold p-1"
                    style={buttontext}
                  >
                    EXPLORE
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex align-items-center flex-column bg-white mb-2 text-black rounded-4 p-2 text-center " style={cardStyle}>
              <div className="mt-3">
                <h5
                  className="mb-2 fw-bold"
                  style={productname}
                >
                  TRAVEL GUIDES
                </h5>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://img.freepik.com/premium-vector/gradient-world-tourism-day-illustration_52683-129622.jpg?w=900"
                  alt=""
                  style={imgStyle}
                />
              </div>
              <div className="text-center">
                <p
                  style={para}
                >
                  Embark on unforgettable journeys with our insightful travel
                  guides, offering curated recommendations and hidden gems for a
                  truly experience.
                </p>
              </div>
              <div className="mb-0">
                <div
                  className="px-2 py-0"
                  style={button}
                  onClick={() => navigate("/travel-guide-page")}
                >
                  <p className="fw-bold p-1 " style={buttontext}>
                    EXPLORE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreGuides;
