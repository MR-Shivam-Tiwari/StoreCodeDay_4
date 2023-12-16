import { Button, FormLabel, Input } from "@mui/joy";
import React, { useState } from "react";

const Card = ({ text, isSelected, onClick }) => {
  const cardStyle = {
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
    padding: "10px",
    margin: "10px",
    border: isSelected ? "2px solid rgb(65 134 247)" : "2px solid #ddd",
    borderRadius: "15px",
    backgroundColor: isSelected ? "rgb(65 134 247)" : "#fff",
    cursor: "pointer",
    color: isSelected ? "white" : "black", // Set the text color based on isSelected
  };

  return (
    <div style={cardStyle} onClick={onClick}>
      <span>{text}</span>
      {isSelected && (
        <span style={{ marginLeft: "5px", color: "white" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-check2"
            viewBox="0 0 16 16"
          >
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
          </svg>
        </span>
      )}
    </div>
  );
};

function AddTravelPost() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (text) => {
    setSelectedCard(text);
  };

  return (
    <div className="container">
      <div>
        <h6 className="mt-4 fw-bold">Select Category</h6>
        <div>
          <div>
            <div className="d-flex">
              <Card
                text="Domestic"
                isSelected={selectedCard === "Domestic"}
                onClick={() => handleCardClick("Domestic")}
              />
              <Card
                text="InterNational"
                isSelected={selectedCard === "InterNational"}
                onClick={() => handleCardClick("InterNational")}
              />
            </div>
          </div>
        </div>
        <div className="mb-2 ">
          <FormLabel className="mb-2">Post Name</FormLabel>
          <Input placeholder="Manali Trip" variant="outlined"></Input>
        </div>
        <div className="mb-2 ">
          <FormLabel className="mb-2">Full Trip Price</FormLabel>
          <Input
            placeholder=" Enter Full Trip Price"
            variant="outlined"
          ></Input>
        </div>
        <div className="mb-2 ">
          <FormLabel className="mb-2">Video Link </FormLabel>
          <Input
            placeholder="https://icons.getbootstrap.com/icons/check2/"
            variant="outlined"
          ></Input>
        </div>
      </div>
      <div>
        <h6 className=" mt-4  fw-bold">Day-1</h6>
        <div>
          <div>
            <div
              className="d-flex align-items-center"
              style={{
                overflow: "auto",
              }}
            >
              <div>
                <Card
                  text="BookJourney"
                  isSelected={selectedCard === "Book Journey"}
                  onClick={() => handleCardClick("Book Journey")}
                />
              </div>
              <div>
                <Card
                  text="Accommodation"
                  isSelected={selectedCard === "Accommodation"}
                  onClick={() => handleCardClick("Accommodation")}
                />
              </div>
              <div>
                <Card
                  text="Culinary"
                  isSelected={selectedCard === "Culinary"}
                  onClick={() => handleCardClick("Culinary")}
                />
              </div>
              <style>
                {`
          /* Hide the scrollbar for Chrome, Safari, and Edge */
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
        `}
              </style>
            </div>
          </div>
        </div>
        <div className="mb-2 ">
          <Input placeholder="Related Name" variant="outlined"></Input>
        </div>
        <div className="mb-2 ">
          <Input placeholder="Description" variant="outlined"></Input>
        </div>
        <div className="mb-2 ">
          <Input placeholder="Time" variant="outlined"></Input>
        </div>
        <div className="mb-2 ">
          <Input placeholder="Add Image" variant="outlined"></Input>
        </div>
        <div className="mb-2 ">
          <Input placeholder="Google Map Link" variant="outlined"></Input>
        </div>
        <div className="mb-2 ">
          <Input placeholder="Price" variant="outlined"></Input>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2 mb-3 mt-3">
          <Button
            fullWidth
            className="px-4 rounded-4"
            style={{
              height: "65px",
              fontSize: "20px",
              backgroundColor: "#4186f7",
            }}
          >
            Add New Day
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="neutral"
            className="px-4 border-2 rounded-4"
            style={{ height: "65px", fontSize: "20px" }}
          >
            Upload Post
          </Button>
        </div>
      </div>
      <div>
        <h6 className=" mt-4  fw-bold">Day-2</h6>
        <div>
          <div>
            <div
              className="d-flex align-items-center"
              style={{
                overflow: "auto",
              }}
            >
              <div>
                <Card
                  text="BookJourney"
                  isSelected={selectedCard === "Book Journey"}
                  onClick={() => handleCardClick("Book Journey")}
                />
              </div>
              <div>
                <Card
                  text="Accommodation"
                  isSelected={selectedCard === "Accommodation"}
                  onClick={() => handleCardClick("Accommodation")}
                />
              </div>
              <div>
                <Card
                  text="Culinary"
                  isSelected={selectedCard === "Culinary"}
                  onClick={() => handleCardClick("Culinary")}
                />
              </div>
              <style>
                {`
          /* Hide the scrollbar for Chrome, Safari, and Edge */
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
        `}
              </style>
            </div>
          </div>
        </div>
        <div className="mb-2 ">
          <Input placeholder="Related Name" variant="outlined"></Input>
        </div>
        <div className="mb-2 ">
          <Input placeholder="Description" variant="outlined"></Input>
        </div>
        <div className="mb-2 ">
          <Input placeholder="Time" variant="outlined"></Input>
        </div>
        <div className="mb-2 ">
          <Input placeholder="Add Image" variant="outlined"></Input>
        </div>
        <div className="mb-2 ">
          <Input placeholder="Google Map Link" variant="outlined"></Input>
        </div>
        <div className="mb-2 ">
          <Input placeholder="Price" variant="outlined"></Input>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2 mb-3 mt-3">
          <Button
            fullWidth
            className="px-4 rounded-4 border-2"
            color="neutral"
            variant="outlined"
            style={{
              height: "65px",
              fontSize: "20px",
              
            }}
          >
            Add New Day
          </Button>
          <Button
            fullWidth
            
            
            className="px-4 border-2 rounded-4"
            style={{ height: "65px", fontSize: "20px",backgroundColor: "#4186f7", }}
          >
            Upload Post
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddTravelPost;
