import { Avatar } from "antd";
import React from "react";

function ExploreGuides() {
  return (
    <div className="text-white container px-4 mt-4">
      <div
      style={{
        background: "linear-gradient(0deg, #670133 10%, #000000)",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      }}
      >
        <h3 className="fw-bold mb-4">EXPLORE GUIDES</h3>

        <div
          className="d-flex align-items-center  gap-3"
          style={{
            overflow: "auto",
          }}
        >
          <div>
            <div className="d-flex align-items-center flex-column bg-white mb-2 text-black rounded-4 p-2 text-center ">
              <div className="mt-3">
                <h5
                  className="mb-2 fw-bold"
                  style={{ fontSize: "15px", color: "#144da4" }}
                >
                  PRODUCT GUIDES
                </h5>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://img.freepik.com/free-vector/online-shopping-concept-young-man-shopping-online-via-smartphone_1150-51083.jpg?w=740&t=st=1702049850~exp=1702050450~hmac=0eec7596e60243324e1c46d8b6fc915e78fcfe0e1a1e7bef0c2e159b9bcbf939"
                  alt=""
                  style={{ width: "120px", height: "120px" }}
                />
              </div>
              <div className="text-center">
                <p
                  style={{
                    fontSize: "12px",
                    width: "174px",
                    textAlign: "center",
                    marginBottom: "6px",
                    lineHeight: "12px",
                  }}
                >
                  Elevate your user experience with our comprehensive product
                  guides. Elevate your user experience with our comprehensive
                  product guides.
                </p>
              </div>
              <div className="mb-0">
                <div
                  className="px-2 py-0"
                  style={{
                    backgroundColor: "#1960ae",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  <p
                    className="fw-bold p-1 "
                    style={{
                      fontSize: "11px",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
                    EXPLORE
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex align-items-center flex-column bg-white mb-2 text-black rounded-4 p-2 text-center ">
              <div className="mt-3">
                <h5
                  className="mb-2 fw-bold"
                  style={{ fontSize: "15px", color: "#144da4" }}
                >
                  TRAVEL GUIDES
                </h5>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="https://img.freepik.com/premium-vector/gradient-world-tourism-day-illustration_52683-129622.jpg?w=900"
                  alt=""
                  style={{ width: "150px", height: "120px" }}
                />
              </div>
              <div className="text-center">
                <p
                  style={{
                    fontSize: "12px",
                    width: "174px",
                    textAlign: "center",
                    marginBottom: "6px",
                    lineHeight: "12px",
                  }}
                >
                  Embark on unforgettable journeys with our insightful travel
                  guides, offering curated recommendations and hidden gems for a
                  truly experience.
                </p>
              </div>
              <div className="mb-0">
                <div
                  className="px-2 py-0"
                  style={{
                    backgroundColor: "#1960ae",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  <p
                    className="fw-bold p-1 "
                    style={{
                      fontSize: "11px",
                      marginBottom: "0px",
                      marginTop: "0px",
                    }}
                  >
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
