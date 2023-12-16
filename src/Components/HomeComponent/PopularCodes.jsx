import React, { useEffect, useState } from "react";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

function PopularCodes() {
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
  const cardStyles = {
    backgroundColor: "#f7f2f4",
    transform: "rotate(-2deg)",
    marginTop: "60px",
    boxShadow: "2px 12px 7px #f9d2e3", // Adjust the values as needed
    marginBottom: "20px",
    borderRadius: "20px",
    width: "280px",
    height: "300px",
  };
  if (windowWidth <= 450) {
    cardStyles.width = "100px";
    cardStyles.height = "140px";
  }
  const cardTravelStyles = {
    backgroundColor: "#f7f2f4",
    transform: "rotate(-2deg)",
    marginTop: "60px",
    boxShadow: "0px 6px 14px #5d80b5", // Adjust the values as needed
    marginBottom: "20px",
    borderRadius: "20px",
    width: "280px",
    height: "300px",
  };
  if (windowWidth <= 450) {
    cardTravelStyles.width = "100px";
    cardTravelStyles.height = "140px";
    cardTravelStyles.boxShadow = "2px 4px 14px #5d80b5"
    cardTravelStyles.borderRadius = "14px";
  }
  const imgStyles = {
    backgroundColor: "#f7f2f4",
    transform: "rotate(-0deg)",
    boxShadow: "2px 1px 10px #464546",
    marginBottom: "20px",
    borderRadius: "20px",
    
  };
  if (windowWidth <= 450) {
    imgStyles.width = "90px";
    imgStyles.padding = "5px";
    imgStyles.borderRadius = "8px";
    imgStyles.boxShadow = "1px 1px 5px #464546";
  }
  const pad = {
    padding:"10px"
  }
  if (windowWidth <= 450) {
    imgStyles.padding = "0px";
    imgStyles.marginLeft = "-5px";
  }
  const productName = {
    fontSize:"20px"
  }
  if (windowWidth <= 450) {
    productName.fontSize = "10px";
  }
  const productview = {
    fontSize:"15px"
  }
  if (windowWidth <= 450) {
    productview.fontSize = "8px";
    productview.marginTop = "-20px";
  }

  return (
    <div className="container">
      <div className="mb-5">
        <h5 className="fw-bold mb-4">Recent Popular Codes in StoreCodes</h5>
        <p className="px-3 " style={{fontSize:"15px", color:"gray"}}>Most Viewed Code in recent days are here....</p>
      </div>
      <div>
        <h4 className="fw-bold  " style={{marginBottom:"-40px"}}>Product Guide</h4>
        <div className="d-flex align-items-center justify-content-center ">
          <div className="px-2 mt-0 d-flex align-items-center gap-lg-5 gap-3 ">
            <div
              className=""
              style={{
                width: "200px",
                height: "330px",
                borderRadius: "10px",
                ...cardStyles,
              }}
            >
              <div className="text-center  " style={pad}>
                <div>
                  <AspectRatio
                    className=" mt-0 "
                    sx={{ width: "100%", ...imgStyles }}
                  >
                    <img
                      src="https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </div>
                <h5 className="fw-bold " style={productName}>Headphones</h5>
                <p className="fw-bold " style={{ color: "#ea97bc", ...productName }}>
                  SIAD3547
                </p>
              </div>
              <div
                className="d-flex align-items-center justify-content-end px-3"
                style={{ marginBottom: "-10px" }}
              >
                <p className="" style={productview}>2.3k Views</p>
              </div>
            </div>
            <div
              className=""
              style={{
                width: "200px",
                height: "330px",
                borderRadius: "10px",
                ...cardStyles,
              }}
            >
              <div className="text-center   " style={pad}>
                <div>
                  <AspectRatio
                    className=" mt-0 "
                    sx={{ width: "100%", ...imgStyles }}
                  >
                    <img
                      src="https://img.freepik.com/free-photo/set-with-fashionable-women-s-clothing-shirt-jeans-bag-with-accessories_169016-4107.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </div>
                <h5 className="fw-bold " style={productName}>Daily wear</h5>
                <p className="fw-bold " style={{ color: "#ea97bc", ...productName }}>
                  SI879873
                </p>
              </div>
              <div
                className="d-flex align-items-center justify-content-end px-3"
                style={{ marginBottom: "-10px" }}
              >
                <p className="" style={productview}>2.3k Views</p>
              </div>
            </div>

            <div
              className=""
              style={{
                width: "200px",
                height: "330px",
                borderRadius: "10px",
                ...cardStyles,
              }}
            >
              <div className="text-center    " style={pad}>
                <div>
                  <AspectRatio
                    className=" mt-0 "
                    sx={{ width: "100%", ...imgStyles }}
                  >
                    <img
                      src="https://img.freepik.com/free-vector/makeup-cosmetics-accessories-shelf-realistic-image_1284-9312.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </div>
                <h5 className="fw-bold " style={productName}>Meakup Product</h5>
                <p className="fw-bold " style={{ color: "#ea97bc", ...productName }}>
                  SIAD3547
                </p>
              </div>
              <div
                className="d-flex align-items-center justify-content-end px-3"
                style={{ marginBottom: "-10px" }}
              >
                <p className="" style={productview}>2.3k Views</p>
              </div>
            </div>
          </div>
          <div
            className="card p-2 ms-2 mt-5 shadow  d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#15325d",
              color: "white",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className=""
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h4 className="fw-bold   " style={{marginBottom:"-40px"}}>Travel Guide</h4>
        <div className="d-flex align-items-center justify-content-center ">
          <div className="px-2 mt-0 d-flex align-items-center  gap-lg-5 gap-3 ">
            <div
              className=""
              style={{
                width: "200px",
                height: "330px",
                borderRadius: "10px",
                ...cardTravelStyles,
              }}
            >
              <div className="text-center  " style={pad}>
                <div>
                  <AspectRatio
                    className=" mt-0 "
                    sx={{ width: "100%", ...imgStyles }}
                  >
                    <img
                      src="https://img.freepik.com/free-photo/black-headphones-digital-device_53876-96805.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </div>
                <h5 className="fw-bold " style={productName}>Headphones</h5>
                <p className="fw-bold " style={{ color: "#ea97bc", ...productName }}>
                  SIAD3547
                </p>
              </div>
              <div
                className="d-flex align-items-center justify-content-end px-3"
                style={{ marginBottom: "-10px" }}
              >
                <p className="" style={productview}>2.3k Views</p>
              </div>
            </div>
            <div
              className=""
              style={{
                width: "200px",
                height: "330px",
                borderRadius: "10px",
                ...cardTravelStyles,
              }}
            >
              <div className="text-center   " style={pad}>
                <div>
                  <AspectRatio
                    className=" mt-0 "
                    sx={{ width: "100%", ...imgStyles }}
                  >
                    <img
                      src="https://img.freepik.com/free-photo/set-with-fashionable-women-s-clothing-shirt-jeans-bag-with-accessories_169016-4107.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </div>
                <h5 className="fw-bold " style={productName}>Daily wear</h5>
                <p className="fw-bold " style={{ color: "#ea97bc", ...productName }}>
                  SI879873
                </p>
              </div>
              <div
                className="d-flex align-items-center justify-content-end px-3"
                style={{ marginBottom: "-10px" }}
              >
                <p className="" style={productview}>2.3k Views</p>
              </div>
            </div>

            <div
              className=""
              style={{
                width: "200px",
                height: "330px",
                borderRadius: "10px",
                ...cardTravelStyles,
              }}
            >
              <div className="text-center    " style={pad}>
                <div>
                  <AspectRatio
                    className=" mt-0 "
                    sx={{ width: "100%", ...imgStyles }}
                  >
                    <img
                      src="https://img.freepik.com/free-vector/makeup-cosmetics-accessories-shelf-realistic-image_1284-9312.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais"
                      loading="lazy"
                      alt=""
                    />
                  </AspectRatio>
                </div>
                <h5 className="fw-bold " style={productName}>Meakup Product</h5>
                <p className="fw-bold " style={{ color: "#ea97bc", ...productName }}>
                  SIAD3547
                </p>
              </div>
              <div
                className="d-flex align-items-center justify-content-end px-3"
                style={{ marginBottom: "-10px" }}
              >
                <p className="" style={productview}>2.3k Views</p>
              </div>
            </div>
          </div>
          <div
            className="card p-2 ms-2 mt-5 shadow  d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#db5885",
              color: "white",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className=""
              fill="currentColor"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCodes;
