import { Button } from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";
function PasswordChanged() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Set height to 100% of viewport height for full-screen effect
      }}
    >
      <div>
        <div className="d-flex align-items-center  justify-content-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/b1ba/1a8a/eb3af683296582164734f7c6c6977b45?Expires=1702857600&Signature=UEyfD7bHf3LO7D3EUAtzDhdlEawC7tkomdltWn2a2GBFDwcuTtcaIvT8YFrJLUJm6CXElV7Mu5iiKyS0g2o1F~JAzksWWxIhQ0zQoEJp84KY7VALBWb1HnggLmYDQhh95gn-rrzRwwM0O~qHoSC3IaLdDDtLxI0kjekAKa5pGXQ8LvLhkJYl1wrVPYq0hNtQVqRiSNmiAdUOOeFORd8nUG9qpvWxDQD4sBAnQnM3xyRjt2gehuJgA~CYndc9B05shmEikz8s-mO6czvqSNiymgR709yW5WwBOPo239~A3me9ZjTsMhVQbfoR8JbiJ2Dv221ULLpS-7rMnBOXkhhrvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
        <div>
          {" "}
          <div
            className="fw-bold mt-2 mb-3 text-center"
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
              }}
            >
              Password Changed!
            </span>
          </div>
        </div>
        <div className="mb-4" style={{ fontSize: "16px", color: "#6A707C" }}>
          Your password has been changed successfully.
        </div>
        <div className="mb-2 mt-4">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button
            size="lg"
            style={{
              position: "relative",
              fontStyle: "normal",
              lineHeight: "-0.3px",
              background:
                "linear-gradient(90deg, #C63AC0 0%, #518EF8 70%, #2F6CE5 100%)",
            }}
            fullWidth
          >
            <div
              style={{
                color: "white",
                WebkitBackgroundClip: "text",
                display: "inline-block",
              }}
            >
              Back to Login{" "}
            </div>
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PasswordChanged;
