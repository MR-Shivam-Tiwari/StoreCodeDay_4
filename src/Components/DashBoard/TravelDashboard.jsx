import { Avatar, Button, FormLabel, Input, Textarea } from "@mui/joy";
import React, { useEffect, useState } from "react";
import Table from "@mui/joy/Table";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDropzone } from "react-dropzone";

function createData(sr, post, view, edit) {
  return { sr, post, view, edit };
}

const rows = [
  createData("1", "Goa 5 Days", 8980, "Edit Post"),
  createData("2", "Manali 7 days", 9019, "Edit Post"),
  createData("3", "Italy 3 Days", 9990, "Edit Post"),
];
function TravelDashboard() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({
    name: "",
    profileImage: null,
    about: "",
    instagramLink: "",
    youtubeLink: "",
  });

  useEffect(() => {
    // Fetch existing user profile data when the component mounts
    axios
      .get("https://storecode.onrender.com/api/user/profile")
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(profileData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Make a PUT request to update the user profile
    // Inside the success block of your PUT request
    axios
      .put("https://storecode.onrender.com/api/user/profile", formData)
      .then((response) => {
        console.log(response.data);

        // Save the profile image data to local storage
        const imageData =
          profileData.profileImage instanceof Blob
            ? URL.createObjectURL(profileData.profileImage)
            : "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph";
        localStorage.setItem("profileImage", imageData);

        // Optionally, you can redirect the user or show a success message
      })
      .catch((error) => {
        console.error("Error updating user profile:", error);
      });
  };
  useEffect(() => {
    // Fetch existing user profile data when the component mounts
    axios
      .get("http://localhost:3002/api/user/profile")
      .then((response) => {
        setProfileData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });

    // Retrieve the profile image data from local storage
    const imageData = localStorage.getItem("profileImage");
    if (imageData) {
      setProfileData((prevData) => ({
        ...prevData,
        profileImage: imageData,
      }));
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setProfileData((prevData) => ({
        ...prevData,
        profileImage: acceptedFiles[0],
      }));
    },
  });
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setProfileData({
      ...profileData,
      profileImage: file, // Update profileImage with the new file
    });
  };
  return (
    <div className="container">
      <div className="py-2 mt-4 d-flex align-content-center justify-content-center">
        <Button
          size="lg"
          style={{
            width: "400px",
            height: "70px",
            backgroundColor: "rgb(65 133 247)",
            fontSize: "25px",
          }}
          onClick={() => navigate("/add-new-travel-post")}
        >
          Add New Post
        </Button>
      </div>
      <div>
        <h5 className="d-flex align-items-center justify-content-start fw-bold py-3">
          Your Profile
        </h5>
        <form onSubmit={handleSubmit}>
          <div {...getRootProps()}>
            <input onChange={handleImageUpload} {...getInputProps()} />
            <div className="d-flex align-items-center justify-content-center">
              <Avatar
                alt="Remy Sharp"
                src={
                  profileData.profileImage instanceof Blob
                    ? URL.createObjectURL(profileData.profileImage)
                    : `https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph&t=${new Date().getTime()}`
                }
                size="lg"
                style={{ width: "150px", height: "150px" }}
              />

              <div
                className="card rounded-5 mt-5  p-2"
                style={{ marginLeft: "-30px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex align-items-center justify-content-between mb-2 ">
              <FormLabel>Name</FormLabel>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </div>
            <Input
              placeholder="Shivam Tiwari"
              variant="outlined"
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="mb-3">
            <div className="d-flex align-items-center justify-content-between mb-2 ">
              <FormLabel>About</FormLabel>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </div>
            <Textarea
              placeholder="Designed and built with all the love in the world by the Bootstrap team"
              variant="outlined"
              name="about"
              value={profileData.about}
              onChange={handleInputChange}
            ></Textarea>
          </div>
          <div className="mb-3">
            <div className="d-flex align-items-center justify-content-between mb-2 ">
              <FormLabel>Instagram Link</FormLabel>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </div>
            <Input
              placeholder="https://www.instagram.com/"
              variant="outlined"
              type="text"
              name="instagramLink"
              value={profileData.instagramLink}
              onChange={handleInputChange}
            ></Input>
          </div>
          <div className="mb-3">
            <div className="d-flex align-items-center justify-content-between mb-2 ">
              <FormLabel>Youtube Link</FormLabel>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </div>
            <Input
              placeholder="https://youtube.com/"
              variant="outlined"
              type="text"
              name="youtubeLink"
              value={profileData.youtubeLink}
              onChange={handleInputChange}
            ></Input>
            <Button
              className="mt-4"
              type="submit"
              size="lg"
              fullWidth
              style={{
                backgroundColor: "rgb(65 133 247)",
              }}
            >
              Update Profile
            </Button>
          </div>
        </form>

        <div>
          <h4 className="fw-bold mt-4 mb-4">Manage Your Posts</h4>
          <div>
            <div className="  mb-4 px-lg-5 ">
              <Table borderAxis="both" className="table-bordered table-striped">
                <thead>
                  <tr className="text-center gradient-header text-white">
                    <th className="text-center text-primary">SR No.</th>
                    <th className="text-center text-primary" width="30%">
                      Post Name
                    </th>
                    <th className="text-center text-primary">View</th>
                    <th className="text-center text-primary">Edit</th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row) => (
                    <tr key={row.sr}>
                      <td className="text-center fw-bold">{row.sr}</td>
                      <td className="text-center fw-bold">{row.post}</td>
                      <td className="text-center fw-bold">{row.view}</td>
                      <td className="text-center fw-bold ">
                        <u className="  ">{row.edit}</u>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelDashboard;
