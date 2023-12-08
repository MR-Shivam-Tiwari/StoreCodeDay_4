import { Button, Input } from "@mui/joy";
import React from "react";

function GetCode() {
  return (
    <div className="container px-4 mb-4">
      <div
        className=""
        style={{ border: "3px solid #e49cdf", borderRadius: "12px" }}
      >
        <div
          className=""
          style={{ border: "2px solid white ", borderRadius: "12px" }}
        >
          <div
            className="card text-center "
            style={{
              borderRadius: "12px",
              background:
                "linear-gradient(120deg, #e9d2ef 0%, #d6dffc 70%, #d6dffc 100%)",
            }}
          >
            <h5 className="py-3 fw-bold">Get a code for your link</h5>
            <div
              className="px-4 mb-5"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Input
                sx={{
                  border: "1px solid #e49cdf",
                  borderRadius: "8px 0px 0px 8px ",
                  flex: 1,
                  marginRight: "-2px", // Adjust this value to fine-tune the alignment
                }}
                placeholder="Paste your link here.."
              />
              <Button
                className="rounded-1"
                style={{
                  position: "relative",
                  fontStyle: "normal",
                  background:
                    "linear-gradient(180deg, #d348a1 0%, #96aaf6 70%, #96aaf6 100%)",
                }}
              >
                <div
                  style={{
                    color: "white",
                    WebkitBackgroundClip: "text",
                    display: "inline-block",
                  }}
                >
                  Get Code
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetCode;
