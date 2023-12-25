import { Button, FormLabel, Input } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { Select, MenuItem } from "@mui/material";
import axios from "axios";

const generateUniqueId = () => {
  // Implement your logic to generate a unique ID here
  // For example, you can use a library like nanoid
  const { nanoid } = require("nanoid");
  return nanoid();
};

function AddTravelPost() {
  const [itineraries, setItineraries] = useState([]);
  const [dayCounter, setDayCounter] = useState(1);
  const [link, setLink] = useState("");
  const [generatedStorecode, setGeneratedStorecode] = useState("");
  const [profileData, setProfileData] = useState({
    name: "",
  });

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

  const [newItinerary, setNewItinerary] = useState({
    relatedName: "",
    description: "",
    time: "",
    addImage: "",
    googleMapLink: "",
    price: "",
    selectedCard: "",
    videoLink: "",
    fullTripPrice: "",
    postName: "",
  });
  const generateStorecode = async (name, link) => {
    try {
      const response = await axios.post("http://localhost:3002/api/generate-storecode", {
        name,
        link,
      });

      const { storecode } = response.data;

      setGeneratedStorecode(storecode);
    } catch (error) {
      console.error("Error generating Storecode:", error);
    }
  };

  const handleGenerateClick = () => {
    const name = profileData.name.slice(0, 4).toUpperCase();
    generateStorecode(name, link);
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
  const createEmptyItineraryState = () => ({
    relatedName: "",
    description: "",
    time: "",
    addImage: "",
    googleMapLink: "",
    price: "",
    selectedCard: "",
    videoLink: "",
    fullTripPrice: "",
    postName: "",
  });

  const handleCardClick = (id, selectedValue) => {
    // Implement the logic to handle card selection
    setItineraries((prevItineraries) =>
      prevItineraries.map((itinerary) =>
        itinerary._id === id
          ? { ...itinerary, selectedCard: selectedValue }
          : itinerary
      )
    );
  };

  
  const handleInputChange = (id, field, value) => {
    setItineraries((prevItineraries) =>
      prevItineraries.map((itinerary) =>
        itinerary._id === id ? { ...itinerary, [field]: value } : itinerary
      )
    );
  };
  const handleAddNewItineraryClick = (day) => {
    const updatedItinerary = {
      ...newItinerary,
      day,
    };
  
    console.log('Updated Itinerary:', updatedItinerary);
  
    setItineraries((prevItineraries) => [...prevItineraries, updatedItinerary], () => {
      // Clear the form after adding a new itinerary
      console.log('Clearing newItinerary:', newItinerary);
      setNewItinerary({
        relatedName: "",
        description: "",
        time: "",
        addImage: "",
        googleMapLink: "",
        price: "",
        selectedCard: "",
        videoLink: "",
        fullTripPrice: "",
        postName: "",
      });
    });
  };
  
  
  
  
  

  const handleRemoveItinerary = (id) => {
    setItineraries((prevItineraries) =>
      prevItineraries.filter((itinerary) => itinerary._id !== id)
    );
  };

  const handleAddNewDay = () => {
    setDayCounter((prevCounter) => prevCounter + 1);
    // Logic for adding a new day
    setItineraries([]);
  };
  

  // Assuming you have a function to submit the itineraries to the API
  const handleSubmitItineraries = async () => {
    try {
      console.log("Submitting itineraries:", itineraries);
  
      const response = await fetch("http://localhost:3002/api/itinerary/saveItinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itineraryData: itineraries, day: dayCounter }),
      });
  
      const responseData = await response.json();
      console.log("Backend Response:", responseData);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log("Itineraries saved successfully!");
      // Optionally, you can reset the component state or show a success message
    } catch (error) {
      console.error("Error saving itineraries:", error);
      // Handle the error, e.g., display an error message to the user
    }
  };
  
  

  return (
    <div className="container">
    <div className="mb-2 ">
  <FormLabel className="mb-2">Post Name</FormLabel>
  <Input
    placeholder="Post Name"
    variant="outlined"
    value={newItinerary.postName}
    onChange={(e) =>
      setNewItinerary((prev) => ({
        ...prev,
        postName: e.target.value,
      }))
    }
  />
</div>
<div className="mb-2 ">
  <FormLabel className="mb-2">Full Trip Price</FormLabel>
  <Input
    placeholder=" Enter Full Trip Price"
    variant="outlined"
    value={newItinerary.fullTripPrice}
    onChange={(e) =>
      setNewItinerary((prev) => ({
        ...prev,
        fullTripPrice: e.target.value,
      }))
    }
  ></Input>
</div>
<div className="mb-2 ">
  <FormLabel className="mb-2">Video Link </FormLabel>
  <Input
    placeholder="https://icons.getbootstrap.com/icons/check2/"
    variant="outlined"
    value={newItinerary.videoLink}
    onChange={(e) =>
      setNewItinerary((prev) => ({
        ...prev,
        videoLink: e.target.value,
      }))
    }
  ></Input>
</div>

      {[...Array(dayCounter)].map((_, index) => (
        <div key={`day-${index + 1}`}>
          <h6 className=" mt-4  fw-bold">{`Day-${index + 1}`}</h6>

          <div>
            {itineraries
              .filter((itinerary) => itinerary.day === index + 1)
              .map((itinerary) => (
                <div key={itinerary._id}>
                  <div className="d-flex align-items-center">
                    <select
                      value={itinerary.selectedCard || ""}
                      onChange={(e) =>
                        handleCardClick(itinerary._id, e.target.value)
                      }
                    >
                      <option value="Book Journey">Book Journey</option>
                      <option value="Accommodation">Accommodation</option>
                      <option value="Culinary">Culinary</option>
                      <option value="Explore Attractions">
                        Explore Attractions
                      </option>
                      <option value="Return Journey">Return Journey</option>
                    </select>
                  </div>

                  <div className="mb-2">
                    <Input
                      placeholder="Related Name"
                      variant="outlined"
                      value={itinerary.relatedName}
                      onChange={(e) =>
                        handleInputChange(
                          itinerary.id,
                          "relatedName",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <Input
                      placeholder="Description"
                      variant="outlined"
                      value={itinerary.description}
                      onChange={(e) =>
                        handleInputChange(
                          itinerary.id,
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <Input
                      placeholder="Time"
                      variant="outlined"
                      value={itinerary.time}
                      onChange={(e) =>
                        handleInputChange(itinerary.id, "time", e.target.value)
                      }
                    />
                  </div>
                  <div className="mb-2">
                    <Input
                      placeholder="Add Image"
                      variant="outlined"
                      value={itinerary.addImage}
                      onChange={(e) =>
                        handleInputChange(
                          itinerary.id,
                          "addImage",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="mb-3">
                <Input
                  type="text"
                  value={link}
        onChange={(e) => setLink(e.target.value)}
                  placeholder="Add YourGoogle Map Link For Genrate Code"
                  variant="outlined"
                />
                <div className="d-flex gap-2">
                  <Button
                    className="mt-2"
                    variant="outlined"
                    onClick={handleGenerateClick}
                  >
                    Generate Storecode
                  </Button>
                  {generatedStorecode && (
                    <div className=" align-items-center">
                      <p className="mt-2" style={{marginBottom:"-0px"}}>Storecode: <span className="fw-bold text-danger">{generatedStorecode}</span></p>
                      <Button fullWidth variant="outlined" onClick={copyToClipboard}>Copy Storecode</Button>
                    </div>
                  )}
                </div>
              </div>
                  <div className="mb-2">
                    <Input
                      placeholder="StoreCode"
                      variant="outlined"
                      value={itinerary.googleMapLink}
                      onChange={(e) =>
                        handleInputChange(
                          itinerary.id,
                          "googleMapLink",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <div className="mb-2">
                    <Input
                      placeholder="Price"
                      variant="outlined"
                      value={itinerary.price}
                      onChange={(e) =>
                        handleInputChange(itinerary.id, "price", e.target.value)
                      }
                    />
                  </div>
                  <Button
                    onClick={() => handleRemoveItinerary(itinerary.id)}
                    variant="outlined"
                    color="error"
                  >
                    Remove Itinerary
                  </Button>
                </div>
              ))}
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
              onClick={() => handleAddNewItineraryClick(index + 1)}
            >
              Add New Itenrary
            </Button>
            <Button
              fullWidth
              variant="outlined"
              color="neutral"
              onClick={handleSubmitItineraries}
              className="px-4 border-2 rounded-4"
              style={{ height: "65px", fontSize: "20px" }}
            >
              Upload Post
            </Button>
          </div>
        </div>
      ))}
      <div>
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
            onClick={handleAddNewDay}
          >
            Add New Day
          </Button>
          <Button
            fullWidth
            className="px-4 border-2 rounded-4"
            style={{
              height: "65px",
              fontSize: "20px",
              backgroundColor: "#4186f7",
            }}
          >
            Upload Post
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddTravelPost;
