import { Avatar } from "antd";
import React from "react";

function TopInfluencer() {
  return (
    <div className=" text-white container px-4 mt-4 ">
      <h3 className="fw-bold mb-4">TOP INFLUENCER</h3>
      <div
        className="  d-flex align-items-center gap-3  "
        style={{
          overflow: "auto",
        }}
      >
        <div className=" d-flex align-items-center flex-column bg-white text-black rounded-4 p-4 text-center mb-3">
          <div className="d-flex align-items-center justify-content-center">
            <Avatar
              alt="Remy Sharp"
              src="https://blackhattalent.com/wp-content/uploads/2023/08/Bhuvan-Bam.jpg"
              size="lg"
              style={{
                borderTop: "2px solid red",
                borderRight: "2px solid red",
                borderBottom: "2px solid red",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <h6 className="mb-0" style={{ fontSize: "12px" }}>
              Bhuvam Bam
            </h6>
            <p style={{ fontSize: "8px" }}>Delhi, India</p>
          </div>
          <div className="text-center">
            <p style={{ fontSize: "8px", width: "135px" }}>
              Bhuvan Bam is an Indian comedian, writer, singer, actor,
              songwriter, and YouTube personality from Delhi, India.
            </p>
          </div>
          <div>
            <div
              className="px-2 py-0"
              style={{
                display: "inline-block",
                backgroundColor: "#25205c",
                borderRadius: "5px",
              }}
            >
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
            </div>
          </div>
          <div>
            <div className="d-flex gap-2 align-items-center justify-content-center mt-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-play-btn"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column bg-white text-black rounded-4 p-4 text-center mb-3">
          <div className="d-flex align-items-center justify-content-center">
            <Avatar
              alt="Remy Sharp"
              src="data:image/jpeg;base64,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"
              size="lg"
              style={{
                borderTop: "2px solid red",
                borderRight: "2px solid red",
                borderBottom: "2px solid red",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <h6 className="mb-0" style={{ fontSize: "12px" }}>
              Bhuvam Bam
            </h6>
            <p style={{ fontSize: "8px" }}>Delhi, India</p>
          </div>
          <div className="text-center">
            <p style={{ fontSize: "8px", width: "135px" }}>
              BeerBiceps is also known for his podcast show, The Ranveer Show
              (TRS).
            </p>
          </div>
          <div>
            <div
              className="px-2 py-0"
              style={{
                display: "inline-block",
                backgroundColor: "#25205c",
                borderRadius: "5px",
              }}
            >
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
            </div>
          </div>
          <div>
            <div className="d-flex gap-2 align-items-center justify-content-center mt-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-play-btn"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column bg-white text-black rounded-4 p-4 text-center mb-3">
          <div className="d-flex align-items-center justify-content-center">
            <Avatar
              alt="Remy Sharp"
              src="https://www.koimoi.com/wp-content/new-galleries/2021/06/carryminati-interesting-facts-001.jpg"
              size="lg"
              style={{
                borderTop: "2px solid red",
                borderRight: "2px solid red",
                borderBottom: "2px solid red",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <h6 className="mb-0" style={{ fontSize: "12px" }}>
              Ajey Nagar
            </h6>
            <p style={{ fontSize: "8px" }}>Delhi, India</p>
          </div>
          <div className="text-center">
            <p style={{ fontSize: "8px", width: "135px" }}>
              Ajey Nagar, better known as CarryMinati, is an Indian YouTuber from Faridabad, India.
            </p>
          </div>
          <div>
            <div
              className="px-2 py-0"
              style={{
                display: "inline-block",
                backgroundColor: "#25205c",
                borderRadius: "5px",
              }}
            >
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
            </div>
          </div>
          <div>
            <div className="d-flex gap-2 align-items-center justify-content-center mt-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-play-btn"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column bg-white text-black rounded-4 p-4 text-center mb-3">
          <div className="d-flex align-items-center justify-content-center">
            <Avatar
              alt="Remy Sharp"
              src="https://yt3.googleusercontent.com/ytc/APkrFKbpvca6h14CK7Z9w6Dao_UVmLebxpu4K_N1VikPKQ=s900-c-k-c0x00ffffff-no-rj"
              size="lg"
              style={{
                borderTop: "2px solid red",
                borderRight: "2px solid red",
                borderBottom: "2px solid red",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <h6 className="mb-0" style={{ fontSize: "12px" }}>
            thugesh
            </h6>
            <p style={{ fontSize: "8px" }}>Delhi, India</p>
          </div>
          <div className="text-center">
            <p style={{ fontSize: "8px", width: "135px" }}>
              Hello everyone this is mahesh keshwala aka thugesh welcome to
              thugesh vlogs, meme
              reviews!
            </p>
          </div>
          <div>
            <div
              className="px-2 py-0"
              style={{
                display: "inline-block",
                backgroundColor: "#25205c",
                borderRadius: "5px",
              }}
            >
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
            </div>
          </div>
          <div>
            <div className="d-flex gap-2 align-items-center justify-content-center mt-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-play-btn"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column bg-white text-black rounded-4 p-4 text-center mb-3">
          <div className="d-flex align-items-center justify-content-center">
            <Avatar
              alt="Remy Sharp"
              src="https://blackhattalent.com/wp-content/uploads/2023/08/Bhuvan-Bam.jpg"
              size="lg"
              style={{
                borderTop: "2px solid red",
                borderRight: "2px solid red",
                borderBottom: "2px solid red",
                borderRadius: "50%",
              }}
            />
          </div>
          <div>
            <h6 className="mb-0" style={{ fontSize: "12px" }}>
              Bhuvam Bam
            </h6>
            <p style={{ fontSize: "8px" }}>Delhi, India</p>
          </div>
          <div className="text-center">
            <p style={{ fontSize: "8px", width: "135px" }}>
              Bhuvan Bam is an Indian comedian, writer, singer, actor,
              songwriter, and YouTube personality from Delhi, India.
            </p>
          </div>
          <div>
            <div
              className="px-2 py-0"
              style={{
                display: "inline-block",
                backgroundColor: "#25205c",
                borderRadius: "5px",
              }}
            >
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
              <span style={{ color: "gold", fontSize: "14px" }}>★</span>
            </div>
          </div>
          <div>
            <div className="d-flex gap-2 align-items-center justify-content-center mt-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-play-btn"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopInfluencer;
