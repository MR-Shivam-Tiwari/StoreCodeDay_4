import React, { useEffect, useState } from "react";
import Navbar from "../HomeComponent/Navbar";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardCover,
  Input,
  Typography,
} from "@mui/joy";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useDataContext } from "../DataContext";
const imageSrc =
  "https://img.freepik.com/premium-photo/portrait-beautiful-indian-woman-traditional-clothing-jewelry_947073-11022.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph";
const imageSrc2 =
  "https://img.freepik.com/free-photo/woman-with-his-hands-hair_1163-269.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=ais";
const imageSrc3 =
  "https://img.freepik.com/free-photo/young-cute-woman-cap-glasses-posing-outside-showing-thumbs-up-high-quality-photo_114579-91847.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph";
const imageSrc4 =
  "https://img.freepik.com/premium-photo/cute-young-girl-portrait-garden-wearing-des-dress-fashion-photoshoot_658768-286.jpg?size=626&ext=jpg&ga=GA1.1.1744357875.1693396610&semt=sph";

function ProductGuideProfile() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const { setContextData } = useDataContext();

  const [profileData, setProfileData] = useState({
    name: "",
    profileImage: "",
    about: "",
    instagramLink: "",
    youtubeLink: "",
  
  });
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/posts/getpost");
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Fetched data:", data);
        setFetchedData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  

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
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const backButton = () => {
    window.history.back();
  };
  
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      // Check if window width is less than or equal to 400
      if (newWidth <= 400) {
        // Refresh the page
        window.location.reload();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = (item) => {
    setContextData({
      videoLink: item.videoLink,
      tagProducts: item.tagProducts,
      startingPrice: item.startingPrice,
    });

    // Trigger navigation
    navigate(`/product-uploaded-post/${item.id}`);
  };
  

  
  const Cropimg = {
    width: "50px",
    height: "50px",

    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    Cropimg.width = "28px";
    Cropimg.height = "28px";
    Cropimg.borderRadius = "4px";
  }
  const Cropimg2 = {
    width: "50px",
    height: "50px",
    background: `url(${imageSrc2})`,
    backgroundSize: "cover",
    backgroundPosition: "start",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    Cropimg2.width = "30px";
    Cropimg2.height = "30px";
    Cropimg2.borderRadius = "2px";
  }
  const Cropimg3 = {
    width: "50px",
    height: "50px",
    background: `url(${imageSrc3})`,
    backgroundSize: "cover",
    backgroundPosition: "start",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    Cropimg3.width = "30px";
    Cropimg3.height = "30px";
    Cropimg3.borderRadius = "2px";
  }
  const Cropimg4 = {
    width: "50px",
    height: "50px",
    background: `url(${imageSrc4})`,
    backgroundSize: "cover",
    backgroundPosition: "start",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    Cropimg4.width = "30px";
    Cropimg4.height = "30px";
    Cropimg4.borderRadius = "2px";
  }

  const img = {
    height: "100%",
    width: "100%",
    borderRadius: "10px",
  };
  if (windowWidth <= 467) {
    img.width = "125px";
    img.height = "210px";
    img.borderRadius = "5px";
  }
  const back = {
    width: "20px",
  };
  if (windowWidth <= 467) {
    back.marginTop = "-15px";
  }
  const smallcard = {
    width: "40px",
    marginLeft: "320px",
    marginTop: "-15px",
    backgroundColor: "#42434a",
    border: "2px solid white",
  };
  if (windowWidth <= 467) {
    smallcard.marginTop = "-15px";
    smallcard.marginLeft = "190px";
    smallcard.border = "2px solid white";
  }
  const search = {
    width: "250px",
    borderRadius: "20px",
    border: "2px solid #d49ee2",
  };
  if (windowWidth <= 467) {
    search.width = "170px";
    search.height = "5px";
  }
  const videocard = {
    borderRadius: "20px",
    width: "200px",
    height: "200px",
    border: "1px solid white",
  };
  if (windowWidth <= 467) {
    videocard.width = "100px";
    videocard.height = "100px";
  }
  const gapcard = {
    gap: "150px",
  };
  if (windowWidth <= 467) {
    gapcard.gap = "20px";
  }
  const videocard2 = {
    border: "1px solid white",
    fontSize: "14px",
    width: "200px",
    height: "50px",
    lineHeight: "6px",
    backgroundColor: "#45464c",
  };
  if (windowWidth <= 467) {
    videocard2.width = "100px";
    videocard2.height = "30px";
    videocard2.fontSize = "9px";
    videocard2.lineHeight = "0px";
  }
  const arrowStyle = {
    position: "relative",
    width: "20px", // Adjust the width as needed
    height: "20px", // Adjust the height as needed
    borderBottom: "2px solid white", // Arrow stem
  };

  const arrowHeadStyle = {
    position: "absolute",
    top: "108%",
    left: "105%",
    transform: "translate(-100%, -50%)",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderWidth: "7px 0 7px 10px", // Adjust the size of the arrowhead
    borderColor: "transparent transparent transparent white", // Adjust the color
  };
  const username = profileData.name.slice(0, 5);
  return (
    <div>
      <div style={{ backgroundColor: "rgb(3 23 55)" }}>
        <div
          style={{
            background:
              "linear-gradient(0deg, #f11c86 3px, rgb(3 23 55) 330px)",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="text-black container px-2 ">
            <div className="d-flex align-items-center justify-content-between p-1 px-2">
              <div className="d-flex align-items-center " onClick={backButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  color="rgb(3 23 55)"
                  className="fw-bold "
                  style={{
                    backgroundColor: "rgb(255 0 127)",
                    borderRadius: "25px",
                  }}
                  fill="currentColor"
                  class="bi bi-arrow-left-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                  />
                </svg>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <h1
                  className=" "
                  style={{
                    fontSize: "30px",
                    fontWeight: "800",
                    marginTop: "5px",
                    fontFamily: "inherit",
                  }}
                >
                  <span style={{ color: "rgb(255 0 127)" }}>EXPLORE</span>{" "}
                </h1>
              </div>
              <Link to="/travel-dashboard">
                <div className="d-flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    fill="currentColor"
                    color="rgb(255 0 127)"
                    class="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                </div>
              </Link>
            </div>
            <div
              className=" rounded-5 p-4 mt-lg-5 mb-lg-5"
              style={{
                background: "linear-gradient(to bottom,#ff007f , #003c8f )",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="d-flex align-items-center gap-3 gap-lg-5  ">
                <div>
                  <div>
                    <Avatar
                      alt="Profile"
                      src={profileData.profileImage}
                      sx={{ width: 85, height: 85, border: "4px solid white" }}
                    />
                  </div>
                  <div
                    className=" d-flex align-items-center justify-content-center text-white py-1 rounded-2"
                    style={{
                      marginTop: "-7px",
                      backgroundColor: "#1f1f21",
                      border: "1px solid #ff007f",
                      fontSize: "7px",
                      position: "relative",
                    }}
                  >
                    Reccommends:&nbsp; <strong>55.3k</strong>
                  </div>
                  <div className="d-flex align-items-center gap-3 justify-content-center mt-1">
                    <div>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDM2IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+PGRlZnMgaWQ9IlN2Z2pzRGVmczEwMzciPjwvZGVmcz48ZyBpZD0iU3ZnanNHMTAzOCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiPjxwYXRoIGZpbGw9InVybCgjYSkiIGQ9Ik04IDBhOCA4IDAgMSAwIDAgMTZBOCA4IDAgMCAwIDggMFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIuMTYyIDcuMzM4Yy4xNzYuMTIzLjMzOC4yNDUuMzM4LjY3NCAwIC40My0uMjI5LjYwNC0uNDc0LjcyNS4xLjE2My4xMzIuMzYuMDg5LjU0Ni0uMDc3LjM0NC0uMzkyLjYxMS0uNjcyLjY5LjEyMS4xOTQuMTU5LjM4NS4wMTUuNjItLjE4NS4yOTUtLjM0Ni40MDctMS4wNTguNDA3SDcuNWMtLjk4OCAwLTEuNS0uNTQ2LTEuNS0xVjcuNjY1YzAtMS4yMyAxLjQ2Ny0yLjI3NSAxLjQ2Ny0zLjEzTDcuMzYxIDMuNDdjLS4wMDUtLjA2NS4wMDgtLjIyNC4wNTgtLjI3LjA4LS4wNzkuMzAxLS4yLjYzNS0uMi4yMTggMCAuMzYzLjA0MS41MzQuMTIzLjU4MS4yNzcuNzMyLjk3OC43MzIgMS41NDIgMCAuMjcxLS40MTQgMS4wODMtLjQ3IDEuMzY0IDAgMCAuODY3LS4xOTIgMS44NzktLjE5OSAxLjA2MS0uMDA2IDEuNzQ5LjE5IDEuNzQ5Ljg0MiAwIC4yNjEtLjIxOS41MjMtLjMxNi42NjZaTTMuNiA3aC44YS42LjYgMCAwIDEgLjYuNnYzLjhhLjYuNiAwIDAgMS0uNi42aC0uOGEuNi42IDAgMCAxLS42LS42VjcuNmEuNi42IDAgMCAxIC42LS42WiIgY2xhc3M9ImNvbG9yZmZmIHN2Z1NoYXBlIj48L3BhdGg+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iOCIgeDI9IjgiIHkyPSIxNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM4YjhiOGIiIGNsYXNzPSJzdG9wQ29sb3IxOEFGRkYgc3ZnU2hhcGUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDAwMDAiIGNsYXNzPSJzdG9wQ29sb3IwMDYyREYgc3ZnU2hhcGUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz48L2c+PC9zdmc+"
                        width="20"
                        height="20"
                        alt=""
                        class="p-5-5 image_3l786"
                      />
                    </div>
                    <div>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDY2IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+PGRlZnMgaWQ9IlN2Z2pzRGVmczEwNjciPjwvZGVmcz48ZyBpZD0iU3ZnanNHMTA2OCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTkgNTE5IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJhIiBjeD0iNTAlIiBjeT0iMjEuOTMxJSIgcj0iODcuODg4JSIgZng9IjUwJSIgZnk9IjIxLjkzMSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNhNGE0YTQiIGNsYXNzPSJzdG9wQ29sb3JGMjU2NzQgc3ZnU2hhcGUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIGNsYXNzPSJzdG9wQ29sb3JEODJENEUgc3ZnU2hhcGUiPjwvc3RvcD48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjI1OS41IiBjeT0iMjU5LjUiIHI9IjI1OS41IiBmaWxsPSJ1cmwoI2EpIj48L2NpcmNsZT48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMjM3LjA4NjUyOSwxMzguODA2MDggQzIzNS43NjM1NTcsMTM5LjQ0MDMxNyAyMzQuOTM1NTMzLDE0MC43OTE0OCAyMzQuOTcxMDEyLDE0Mi4yNTgxOTUgQzIzNS40ODU3NTQsMTYzLjU0ODk1NSAyMzUuNzQzMTI1LDE3NS44ODk5MjUgMjM1Ljc0MzEyNSwxNzkuMjgxMTA0IEwyMzUuNzQzMTI1LDE4OC44NzMzNjUgTDIzNC4xMzgyMDgsMTkyLjIzMDY1NyBDMjMyLjMzNTcwMiwxOTYuMDAwODk1IDIzMS40MDQ5MDgsMTk3LjU2NDkxMyAyMTguMjAyODM3LDIxOS4wMTMyMDkgQzIxMy4wMzI2MiwyMjcuNDEyNjcyIDIwNi4xOTkzNywyMzguOTIzMzg1IDIwMy4wMTc2MjMsMjQ0LjU5Mjg5MSBDMTk5LjIyNTYxMSwyNTEuMzUwMSAxOTcuMjQwNzMyLDI1OC45NzEyMTUgMTk3LjI1NDgxNiwyNjYuNzE5NzAxIEwxOTcuNDQyOTUsMzcwLjIzMDMyOCBDMTk3LjQ2NjAwNywzODIuOTE2NTM0IDIwNy43NTY2ODQsMzkzLjE4ODUyNSAyMjAuNDQyOTEyLDM5My4xODg1MjUgTDMzMy42NDIxMzYsMzkzLjE4ODUyNSBMMzMzLjY0MjEzNiwzOTMuMTg4NTI1IEwzMzcuNzY4NzIxLDM5MS4xNjM1OTggQzM0Ny4wMzUwMTQsMzg2LjYxNTQyOCAzNTMuODM4NzIzLDM3Ni4wMzMyNDUgMzUzLjg4ODEyLDM2Ni4wOTAzODcgQzM1My45MDc0OTEsMzYyLjI1NjM2MSAzNTMuNzg0OTY3LDM2MS43NTk0ODEgMzUxLjgzOTExMywzNTcuNzQ3OTk4IEMzNTAuNzAxMDQ2LDM1NS40MDIyMSAzNDkuODI5MzM0LDM1My40NDczMDggMzQ5LjkwMTk3NywzNTMuNDA0MTQyIEMzNDkuOTc0NjE5LDM1My4zNjA5NzcgMzUyLjExMDc5NywzNTIuNDEwODY0IDM1NC42NDg5MywzNTEuMjkyODg2IEMzNjUuNTUzMDcyLDM0Ni40ODg2MDIgMzcxLjk2OTgzNywzMzguODUzMTYyIDM3Mi40MzQyNjYsMzMwLjEyOTAwMSBDMzcyLjY3OTc5OCwzMjUuNTIyNzk3IDM3MS42MDEyOTcsMzIyLjM0MDA4NSAzNjcuOTU4OTk2LDMxNi45MTg1MzkgQzM2Ni40OTA2NDYsMzE0LjczMjk0MiAzNjUuMjg5MTM3LDMxMi44MTY0MDkgMzY1LjI4OTEzNywzMTIuNjU5MDk1IEMzNjUuMjg5MTM3LDMxMi41MDIyNjIgMzY1LjY0NDYwMiwzMTIuMzczNzI2IDM2Ni4wNzkwMDUsMzEyLjM3MzcyNiBDMzY2LjUxMzg5MiwzMTIuMzczNzI2IDM2OC42Mzg0NDYsMzExLjQ1NzE4NSAzNzAuODAwNzc1LDMxMC4zMzY4MDkgQzM4MC42NzgyMzUsMzA1LjIxOTgxNyAzODYuMzMzMjIxLDI5NS41MDcxNzQgMzg0LjczMDI0LDI4Ni40MTIyNzEgQzM4My42NjIzOTQsMjgwLjM1Mjg0IDM4MC40Njk5OTMsMjc1LjUzNTEyNyAzNzMuMzc3NjUxLDI2OS4yNzgwOTUgTDM3MS4wNTQwNTYsMjY3LjIyODIyOSBMMzczLjcyNDM5OSwyNjQuMzcxNjU0IEMzNzcuMTY4NjI4LDI2MC42ODcyNjYgMzc5LjI1ODc5OCwyNTcuNjU1MTUyIDM4MC42MzEyNTksMjU0LjM1MjA1NyBDMzgxLjUzMjk5NiwyNTIuMTgwODQ5IDM4MS43MzM5NzQsMjUwLjc5MDQ1MSAzODEuNzQzMTc2LDI0Ni42NDc1NTMgQzM4MS43NjEwOTQsMjM4Ljc0Nzg0NyAzNzkuOTM0ODU5LDIzMy40NTI5MTkgMzc1LjYxMjYyMywyMjguODc2OTMxIEMzNzIuNzE3NTcyLDIyNS44MTE3MjQgMzY5LjQ4Nzg4MSwyMjMuODE3MDEzIDM2NC45MjMwMTgsMjIyLjI3NDU3NyBMMzYxLjE3MjcyMiwyMjEuMDA3NDQgQzMwOS42NzgxNDIsMjIwLjcyMjg2OSAyODMuOTMxMzM2LDIyMC41MTc1OTUgMjgzLjkzMjMwNSwyMjAuMzkxNjE3IEMyODMuOTM0MjQyLDIyMC4yMDI2NDkgMjg0LjM2ODY0NSwyMTYuNDg3MDg3IDI4NC44OTc5NjcsMjEyLjEzNDU5OCBDMjg2LjExMDEzLDIwMi4xNjgyMzkgMjg2LjI0MjM0LDE4My45Nzg0MzUgMjg1LjE1MDI3OSwxNzcuMzYyNjUyIEMyODIuMDQwNjkxLDE1OC41MjM5MzEgMjcyLjAyMTgyLDE0My43NjgxNTYgMjU4LjgzOTEyMSwxMzguNjEwODc3IEMyNTUuNTM4MjQsMTM3LjMxOTc1OSAyNTQuNDUzNDQ0LDEzNy4xMzg0NjUgMjQ5LjMwMzA4MiwxMzcuMDIwMDAxIEMyNDYuMTA2ODA2LDEzNi45NDYxNCAyNDIuNTM5NTY5LDEzNy4wODMzMDkgMjQxLjM3NjMxOSwxMzcuMzI1MDM0IEMyNDAuMjEyNTg0LDEzNy41NjYyOCAyMzguMjgyMjI3LDEzOC4yMzI5NDIgMjM3LjA4NjUyOSwxMzguODA2MDggWiBNMTMwLDI1MC4zNzcwNDkgTDE3My44NTgzMzMsMjUwLjM3NzA0OSBDMTc3LjcyNDMyNywyNTAuMzc3MDQ5IDE4MC44NTgzMzMsMjUzLjUxMTA1NiAxODAuODU4MzMzLDI1Ny4zNzcwNDkgTDE4MC44NTgzMzMsMzk2IEMxODAuODU4MzMzLDM5OS44NjU5OTMgMTc3LjcyNDMyNyw0MDMgMTczLjg1ODMzMyw0MDMgTDEzMCw0MDMgQzEyNi4xMzQwMDcsNDAzIDEyMywzOTkuODY1OTkzIDEyMywzOTYgTDEyMywyNTcuMzc3MDQ5IEMxMjMsMjUzLjUxMTA1NiAxMjYuMTM0MDA3LDI1MC4zNzcwNDkgMTMwLDI1MC4zNzcwNDkgWiIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCAyNTQgMjcwKSIgY2xhc3M9ImNvbG9yRkZGIHN2Z1NoYXBlIj48L3BhdGg+PC9nPjwvc3ZnPjwvZz48L3N2Zz4="
                        width="20"
                        alt=""
                        height="20"
                        class="p-5-5 image_3l786"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-start" style={{ lineHeight: "1px" }}>
                    <h4 className="text-white fw-bold"> {profileData.name}</h4>
                    <p className="text-white" style={{ fontSize: "10px" }}>
                      @{username}
                    </p>
                    <p
                      className="text-white"
                      style={{
                        lineHeight: "16px",
                        fontSize: "14px",
                        fontFamily: "unset",
                      }}
                    >
                      {profileData.about}
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center gap-2 "
                    style={{ marginTop: "-10px" }}
                  >
                    <div>
                      <p
                        className="text-white fw-bold"
                        style={{ fontSize: "10px" }}
                      >
                        Follow Me:
                      </p>
                    </div>
                    <div className=" mb-3 d-flex gap-2 align-items-center justify-content-center">
                      <a
                        href={profileData.youtubeLink}
                        className="bg-danger px-2  rounded-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          color="white"
                          fill="currentColor"
                          class="bi bi-youtube"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                        </svg>
                      </a>

                      <a
                        href={profileData.instagramLink}
                        className="px-2  rounded-1"
                        style={{ backgroundColor: "#ff007f" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          color="white"
                          fill="currentColor"
                          class="bi bi-instagram"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div
                    style={{ marginTop: "-10px" }}
                    className="d-flex align-items-center justify-content-between  "
                  >
                    <div>
                      {" "}
                      <div className="d-flex align-items-center gap-2 justify-content-center ">
                        <div>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDM2IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+PGRlZnMgaWQ9IlN2Z2pzRGVmczEwMzciPjwvZGVmcz48ZyBpZD0iU3ZnanNHMTAzOCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiPjxwYXRoIGZpbGw9InVybCgjYSkiIGQ9Ik04IDBhOCA4IDAgMSAwIDAgMTZBOCA4IDAgMCAwIDggMFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIuMTYyIDcuMzM4Yy4xNzYuMTIzLjMzOC4yNDUuMzM4LjY3NCAwIC40My0uMjI5LjYwNC0uNDc0LjcyNS4xLjE2My4xMzIuMzYuMDg5LjU0Ni0uMDc3LjM0NC0uMzkyLjYxMS0uNjcyLjY5LjEyMS4xOTQuMTU5LjM4NS4wMTUuNjItLjE4NS4yOTUtLjM0Ni40MDctMS4wNTguNDA3SDcuNWMtLjk4OCAwLTEuNS0uNTQ2LTEuNS0xVjcuNjY1YzAtMS4yMyAxLjQ2Ny0yLjI3NSAxLjQ2Ny0zLjEzTDcuMzYxIDMuNDdjLS4wMDUtLjA2NS4wMDgtLjIyNC4wNTgtLjI3LjA4LS4wNzkuMzAxLS4yLjYzNS0uMi4yMTggMCAuMzYzLjA0MS41MzQuMTIzLjU4MS4yNzcuNzMyLjk3OC43MzIgMS41NDIgMCAuMjcxLS40MTQgMS4wODMtLjQ3IDEuMzY0IDAgMCAuODY3LS4xOTIgMS44NzktLjE5OSAxLjA2MS0uMDA2IDEuNzQ5LjE5IDEuNzQ5Ljg0MiAwIC4yNjEtLjIxOS41MjMtLjMxNi42NjZaTTMuNiA3aC44YS42LjYgMCAwIDEgLjYuNnYzLjhhLjYuNiAwIDAgMS0uNi42aC0uOGEuNi42IDAgMCAxLS42LS42VjcuNmEuNi42IDAgMCAxIC42LS42WiIgY2xhc3M9ImNvbG9yZmZmIHN2Z1NoYXBlIj48L3BhdGg+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iOCIgeDI9IjgiIHkyPSIxNiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiM4YjhiOGIiIGNsYXNzPSJzdG9wQ29sb3IxOEFGRkYgc3ZnU2hhcGUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDAwMDAiIGNsYXNzPSJzdG9wQ29sb3IwMDYyREYgc3ZnU2hhcGUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz48L2c+PC9zdmc+"
                            width="15"
                            height="15"
                            alt=""
                            class="p-5-5 image_3l786"
                          />
                        </div>
                        <div>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDY2IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+PGRlZnMgaWQ9IlN2Z2pzRGVmczEwNjciPjwvZGVmcz48ZyBpZD0iU3ZnanNHMTA2OCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTkgNTE5IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJhIiBjeD0iNTAlIiBjeT0iMjEuOTMxJSIgcj0iODcuODg4JSIgZng9IjUwJSIgZnk9IjIxLjkzMSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNhNGE0YTQiIGNsYXNzPSJzdG9wQ29sb3JGMjU2NzQgc3ZnU2hhcGUiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMwMDAwMDAiIGNsYXNzPSJzdG9wQ29sb3JEODJENEUgc3ZnU2hhcGUiPjwvc3RvcD48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjI1OS41IiBjeT0iMjU5LjUiIHI9IjI1OS41IiBmaWxsPSJ1cmwoI2EpIj48L2NpcmNsZT48cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMjM3LjA4NjUyOSwxMzguODA2MDggQzIzNS43NjM1NTcsMTM5LjQ0MDMxNyAyMzQuOTM1NTMzLDE0MC43OTE0OCAyMzQuOTcxMDEyLDE0Mi4yNTgxOTUgQzIzNS40ODU3NTQsMTYzLjU0ODk1NSAyMzUuNzQzMTI1LDE3NS44ODk5MjUgMjM1Ljc0MzEyNSwxNzkuMjgxMTA0IEwyMzUuNzQzMTI1LDE4OC44NzMzNjUgTDIzNC4xMzgyMDgsMTkyLjIzMDY1NyBDMjMyLjMzNTcwMiwxOTYuMDAwODk1IDIzMS40MDQ5MDgsMTk3LjU2NDkxMyAyMTguMjAyODM3LDIxOS4wMTMyMDkgQzIxMy4wMzI2MiwyMjcuNDEyNjcyIDIwNi4xOTkzNywyMzguOTIzMzg1IDIwMy4wMTc2MjMsMjQ0LjU5Mjg5MSBDMTk5LjIyNTYxMSwyNTEuMzUwMSAxOTcuMjQwNzMyLDI1OC45NzEyMTUgMTk3LjI1NDgxNiwyNjYuNzE5NzAxIEwxOTcuNDQyOTUsMzcwLjIzMDMyOCBDMTk3LjQ2NjAwNywzODIuOTE2NTM0IDIwNy43NTY2ODQsMzkzLjE4ODUyNSAyMjAuNDQyOTEyLDM5My4xODg1MjUgTDMzMy42NDIxMzYsMzkzLjE4ODUyNSBMMzMzLjY0MjEzNiwzOTMuMTg4NTI1IEwzMzcuNzY4NzIxLDM5MS4xNjM1OTggQzM0Ny4wMzUwMTQsMzg2LjYxNTQyOCAzNTMuODM4NzIzLDM3Ni4wMzMyNDUgMzUzLjg4ODEyLDM2Ni4wOTAzODcgQzM1My45MDc0OTEsMzYyLjI1NjM2MSAzNTMuNzg0OTY3LDM2MS43NTk0ODEgMzUxLjgzOTExMywzNTcuNzQ3OTk4IEMzNTAuNzAxMDQ2LDM1NS40MDIyMSAzNDkuODI5MzM0LDM1My40NDczMDggMzQ5LjkwMTk3NywzNTMuNDA0MTQyIEMzNDkuOTc0NjE5LDM1My4zNjA5NzcgMzUyLjExMDc5NywzNTIuNDEwODY0IDM1NC42NDg5MywzNTEuMjkyODg2IEMzNjUuNTUzMDcyLDM0Ni40ODg2MDIgMzcxLjk2OTgzNywzMzguODUzMTYyIDM3Mi40MzQyNjYsMzMwLjEyOTAwMSBDMzcyLjY3OTc5OCwzMjUuNTIyNzk3IDM3MS42MDEyOTcsMzIyLjM0MDA4NSAzNjcuOTU4OTk2LDMxNi45MTg1MzkgQzM2Ni40OTA2NDYsMzE0LjczMjk0MiAzNjUuMjg5MTM3LDMxMi44MTY0MDkgMzY1LjI4OTEzNywzMTIuNjU5MDk1IEMzNjUuMjg5MTM3LDMxMi41MDIyNjIgMzY1LjY0NDYwMiwzMTIuMzczNzI2IDM2Ni4wNzkwMDUsMzEyLjM3MzcyNiBDMzY2LjUxMzg5MiwzMTIuMzczNzI2IDM2OC42Mzg0NDYsMzExLjQ1NzE4NSAzNzAuODAwNzc1LDMxMC4zMzY4MDkgQzM4MC42NzgyMzUsMzA1LjIxOTgxNyAzODYuMzMzMjIxLDI5NS41MDcxNzQgMzg0LjczMDI0LDI4Ni40MTIyNzEgQzM4My42NjIzOTQsMjgwLjM1Mjg0IDM4MC40Njk5OTMsMjc1LjUzNTEyNyAzNzMuMzc3NjUxLDI2OS4yNzgwOTUgTDM3MS4wNTQwNTYsMjY3LjIyODIyOSBMMzczLjcyNDM5OSwyNjQuMzcxNjU0IEMzNzcuMTY4NjI4LDI2MC42ODcyNjYgMzc5LjI1ODc5OCwyNTcuNjU1MTUyIDM4MC42MzEyNTksMjU0LjM1MjA1NyBDMzgxLjUzMjk5NiwyNTIuMTgwODQ5IDM4MS43MzM5NzQsMjUwLjc5MDQ1MSAzODEuNzQzMTc2LDI0Ni42NDc1NTMgQzM4MS43NjEwOTQsMjM4Ljc0Nzg0NyAzNzkuOTM0ODU5LDIzMy40NTI5MTkgMzc1LjYxMjYyMywyMjguODc2OTMxIEMzNzIuNzE3NTcyLDIyNS44MTE3MjQgMzY5LjQ4Nzg4MSwyMjMuODE3MDEzIDM2NC45MjMwMTgsMjIyLjI3NDU3NyBMMzYxLjE3MjcyMiwyMjEuMDA3NDQgQzMwOS42NzgxNDIsMjIwLjcyMjg2OSAyODMuOTMxMzM2LDIyMC41MTc1OTUgMjgzLjkzMjMwNSwyMjAuMzkxNjE3IEMyODMuOTM0MjQyLDIyMC4yMDI2NDkgMjg0LjM2ODY0NSwyMTYuNDg3MDg3IDI4NC44OTc5NjcsMjEyLjEzNDU5OCBDMjg2LjExMDEzLDIwMi4xNjgyMzkgMjg2LjI0MjM0LDE4My45Nzg0MzUgMjg1LjE1MDI3OSwxNzcuMzYyNjUyIEMyODIuMDQwNjkxLDE1OC41MjM5MzEgMjcyLjAyMTgyLDE0My43NjgxNTYgMjU4LjgzOTEyMSwxMzguNjEwODc3IEMyNTUuNTM4MjQsMTM3LjMxOTc1OSAyNTQuNDUzNDQ0LDEzNy4xMzg0NjUgMjQ5LjMwMzA4MiwxMzcuMDIwMDAxIEMyNDYuMTA2ODA2LDEzNi45NDYxNCAyNDIuNTM5NTY5LDEzNy4wODMzMDkgMjQxLjM3NjMxOSwxMzcuMzI1MDM0IEMyNDAuMjEyNTg0LDEzNy41NjYyOCAyMzguMjgyMjI3LDEzOC4yMzI5NDIgMjM3LjA4NjUyOSwxMzguODA2MDggWiBNMTMwLDI1MC4zNzcwNDkgTDE3My44NTgzMzMsMjUwLjM3NzA0OSBDMTc3LjcyNDMyNywyNTAuMzc3MDQ5IDE4MC44NTgzMzMsMjUzLjUxMTA1NiAxODAuODU4MzMzLDI1Ny4zNzcwNDkgTDE4MC44NTgzMzMsMzk2IEMxODAuODU4MzMzLDM5OS44NjU5OTMgMTc3LjcyNDMyNyw0MDMgMTczLjg1ODMzMyw0MDMgTDEzMCw0MDMgQzEyNi4xMzQwMDcsNDAzIDEyMywzOTkuODY1OTkzIDEyMywzOTYgTDEyMywyNTcuMzc3MDQ5IEMxMjMsMjUzLjUxMTA1NiAxMjYuMTM0MDA3LDI1MC4zNzcwNDkgMTMwLDI1MC4zNzcwNDkgWiIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCAyNTQgMjcwKSIgY2xhc3M9ImNvbG9yRkZGIHN2Z1NoYXBlIj48L3BhdGg+PC9nPjwvc3ZnPjwvZz48L3N2Zz4="
                            width="15"
                            alt=""
                            height="15"
                            class="p-5-5 image_3l786"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      {" "}
                      <div
                        style={{ fontSize: "10px" }}
                        className="text-white fw-bold d-flex gap-2 align-items-center"
                      >
                        SWIPE FOR MORE{" "}
                        <div
                          className=""
                          style={{ marginTop: "-18px", ...arrowStyle }}
                        >
                          <div style={arrowHeadStyle}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
            </div>
            <div className="d-flex mt-4 px-2 align-items-center ">
              <div
                className="d-flex align-items-center gap-3 ms-1"
                style={{ overflow: "auto" }}
              >
                <div
                  className="rounded-5  px-3 shadow-sm"
                  style={{
                    backgroundColor: "rgb(255 0 127)",
                    border: "1px solid rgb(255 0 127)",
                  }}
                >
                  <div>All</div>
                </div>
                <div
                  className=" rounded-5 text-black px-3 shadow-lg"
                  style={{ border: "1px solid rgb(255 0 127)" }}
                >
                  <span
                    className=" text-white mt-2 mb-3"
                    style={{
                      position: "relative",
                      fontStyle: "normal",
                      lineHeight: "-0.3px",
                    }}
                  >
                    Festive
                  </span>{" "}
                </div>
                <div
                  className=" rounded-5 text-black px-3 shadow-lg"
                  style={{ border: "1px solid rgb(255 0 127)" }}
                >
                  {" "}
                  <span
                    className=" text-white mt-2 mb-3"
                    style={{
                      position: "relative",
                      fontStyle: "normal",
                      lineHeight: "-0.3px",
                    }}
                  >
                    Casual
                  </span>{" "}
                </div>
                <div
                  className="  rounded-5 text-black px-3 shadow-lg "
                  style={{ border: "1px solid rgb(255 0 127)" }}
                >
                  <span
                    className=" text-white mt-2 mb-3"
                    style={{
                      position: "relative",
                      fontStyle: "normal",
                      lineHeight: "-0.3px",
                    }}
                  >
                    Party
                  </span>{" "}
                </div>
                <div
                  className=" rounded-5 text-black px-3 shadow-lg"
                  style={{ border: "1px solid rgb(255 0 127)" }}
                >
                  {" "}
                  <span
                    className=" text-white mt-2 mb-3"
                    style={{
                      position: "relative",
                      fontStyle: "normal",
                      lineHeight: "-0.3px",
                    }}
                  >
                    Summer
                  </span>{" "}
                </div>
                <div
                  className=" rounded-5 text-black px-3 shadow-lg"
                  style={{ border: "1px solid rgb(255 0 127)" }}
                >
                  <span
                    className=" text-white mt-2 mb-3"
                    style={{
                      position: "relative",
                      fontStyle: "normal",
                      lineHeight: "-0.3px",
                    }}
                  >
                    Winter
                  </span>{" "}
                </div>
                <style className="">
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
            <div className="row">
              {fetchedData.map((item) => (
                <div className="col mt-5" key={item.id}>
                  <div
                    onClick={() => handleNavigation(item)}
                  >
                    <Card component="li" sx={videocard}>
                      <CardCover>
                        <video autoPlay loop muted poster={item?.videoLink}>
                          <source src={item?.videoLink} type="video/mp4" />
                        </video>
                      </CardCover>
                      <CardContent>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: 3, sm: 8 }}
                          ml={{ xs: 3, sm: 9 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            color="white"
                            fill="rgba(255,255,255,0.7)"
                            class="bi bi-play-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
                          </svg>
                        </Typography>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: -9, sm: -14 }}
                          ml={{ xs: 7, sm: 19 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            color="red"
                            fill="currentColor"
                            class="bi bi-youtube"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                          </svg>
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                  <div
                    className="card text-center py-2 text-white fw-bold mt-2"
                    style={videocard2}
                  >
                    <p>{item?.tagProducts.toUpperCase()}</p>
                    <p style={{ marginTop: "-3px" }}>
                      @ ₹{item?.startingPrice}/-
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="rounded-4 mt-3 mt-lg-5 "
              style={{
                background:
                  "linear-gradient(to bottom,#494a51 , rgb(30 30 32) )",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="px-2 py-3  "></div>
              <h6 className="fw-bold p-3 text-white ">@SHOPWITHSTORECODE</h6>
            </div>
            <div className="">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductGuideProfile;

{
  /*  <div
                  className="d-flex align-items-center justify-content-center mb-3  "
                  style={gapcard}
                >
                  <div className="">
                    <Card component="li" sx={videocard}>
                      <CardCover>
                        <video
                          autoPlay
                          loop
                          muted
                          poster="https://i.giphy.com/Z6FcYfppmULPq0HtUo.mp4"
                        >
                          <source
                            src="https://i.giphy.com/Z6FcYfppmULPq0HtUo.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </CardCover>
                      <CardContent>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: 3, sm: 8 }}
                          ml={{ xs: 3, sm: 9 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            color="white"
                            fill="rgba(255,255,255,0.7)"
                            class="bi bi-play-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
                          </svg>
                        </Typography>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: -9, sm: -14 }}
                          ml={{ xs: 7, sm: 19 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            color="red"
                            fill="currentColor"
                            class="bi bi-youtube"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                          </svg>
                        </Typography>
                      </CardContent>
                    </Card>
                    <div
                      className="card text-center py-2 text-white fw-bold mt-2"
                      style={videocard2}
                    >
                      <p>#GETTHISPRODUCT</p>
                      <p style={{ marginTop: "-3px" }}>@ ₹599/-</p>
                    </div>
                  </div>
                  <div className="">
                    <Card component="li" sx={videocard}>
                      <CardCover>
                        <video
                          autoPlay
                          loop
                          muted
                          poster="https://i.giphy.com/QroF2vIlzaTb1cxVQf.webp"
                        >
                          <source
                            src="https://i.giphy.com/QroF2vIlzaTb1cxVQf.webp"
                            type="video/mp4"
                          />
                        </video>
                      </CardCover>
                      <CardContent>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: 3, sm: 8 }}
                          ml={{ xs: 3, sm: 9 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            color="white"
                            fill="rgba(255,255,255,0.7)"
                            class="bi bi-play-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
                          </svg>
                        </Typography>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: -9, sm: -14 }}
                          ml={{ xs: 7, sm: 19 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            color="rgb(255, 0, 127)"
                            fill="currentColor"
                            class="bi bi-instagram"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                          </svg>
                        </Typography>
                      </CardContent>
                    </Card>
                    <div
                      className="card text-center py-2 text-white fw-bold mt-2"
                      style={videocard2}
                    >
                      <p>#GETTHISPRODUCT</p>
                      <p style={{ marginTop: "-3px" }}>@ ₹599/-</p>
                    </div>
                  </div>
                  <div className="">
                    <Card component="li" sx={videocard}>
                      <CardCover>
                        <video
                          autoPlay
                          loop
                          muted
                          poster="https://i.giphy.com/arWeCDLhAc5YJ4emGS.webp"
                        >
                          <source
                            src="https://i.giphy.com/arWeCDLhAc5YJ4emGS.webp"
                            type="video/mp4"
                          />
                        </video>
                      </CardCover>
                      <CardContent>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: 3, sm: 8 }}
                          ml={{ xs: 3, sm: 9 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            color="white"
                            fill="rgba(255,255,255,0.7)"
                            class="bi bi-play-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
                          </svg>
                        </Typography>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: -9, sm: -14 }}
                          ml={{ xs: 7, sm: 19 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            color="red"
                            fill="currentColor"
                            class="bi bi-youtube"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                          </svg>
                        </Typography>
                      </CardContent>
                    </Card>
                    <div
                      className="card text-center py-2 text-white fw-bold mt-2"
                      style={videocard2}
                    >
                      <p>#GETTHISPRODUCT</p>
                      <p style={{ marginTop: "-3px" }}>@ ₹599/-</p>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center mb-3  "
                  style={gapcard}
                >
                  <div className="">
                    <Card component="li" sx={videocard}>
                      <CardCover>
                        <video
                          autoPlay
                          loop
                          muted
                          poster="https://i.giphy.com/DkfYVdHU8q0wJmQM6c.webp"
                        >
                          <source
                            src="https://i.giphy.com/DkfYVdHU8q0wJmQM6c.webp"
                            type="video/mp4"
                          />
                        </video>
                      </CardCover>
                      <CardContent>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: 3, sm: 8 }}
                          ml={{ xs: 3, sm: 9 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            color="white"
                            fill="rgba(255,255,255,0.7)"
                            class="bi bi-play-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
                          </svg>
                        </Typography>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: -9, sm: -14 }}
                          ml={{ xs: 7, sm: 19 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            color="rgb(255, 0, 127)"
                            fill="currentColor"
                            class="bi bi-instagram"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                          </svg>
                        </Typography>
                      </CardContent>
                    </Card>
                    <div
                      className="card text-center py-2 text-white fw-bold mt-2"
                      style={videocard2}
                    >
                      <p>#GETTHISPRODUCT</p>
                      <p style={{ marginTop: "-3px" }}>@ ₹599/-</p>
                    </div>
                  </div>
                  <div className="">
                    <Card component="li" sx={videocard}>
                      <CardCover>
                        <video
                          autoPlay
                          loop
                          muted
                          poster="https://i.giphy.com/HC8QbzmTwA64RUkiSh.webp"
                        >
                          <source
                            src="https://i.giphy.com/HC8QbzmTwA64RUkiSh.webp"
                            type="video/mp4"
                          />
                        </video>
                      </CardCover>
                      <CardContent>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: 3, sm: 8 }}
                          ml={{ xs: 3, sm: 9 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            color="white"
                            fill="rgba(255,255,255,0.7)"
                            class="bi bi-play-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
                          </svg>
                        </Typography>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: -9, sm: -14 }}
                          ml={{ xs: 7, sm: 19 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            color="red"
                            fill="currentColor"
                            class="bi bi-youtube"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                          </svg>
                        </Typography>
                      </CardContent>
                    </Card>
                    <div
                      className="card text-center py-2 text-white fw-bold mt-2"
                      style={videocard2}
                    >
                      <p>#GETTHISPRODUCT</p>
                      <p style={{ marginTop: "-3px" }}>@ ₹599/-</p>
                    </div>
                  </div>
                  <div className="">
                    <Card component="li" sx={videocard}>
                      <CardCover>
                        <video
                          autoPlay
                          loop
                          muted
                          poster="https://i.giphy.com/1ap9jKhbda8M1iNka1.webp"
                        >
                          <source
                            src="https://i.giphy.com/1ap9jKhbda8M1iNka1.webp"
                            type="video/mp4"
                          />
                        </video>
                      </CardCover>
                      <CardContent>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: 3, sm: 8 }}
                          ml={{ xs: 3, sm: 9 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            color="white"
                            fill="rgba(255,255,255,0.7)"
                            class="bi bi-play-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
                          </svg>
                        </Typography>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: -9, sm: -14 }}
                          ml={{ xs: 7, sm: 19 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            color="red"
                            fill="currentColor"
                            class="bi bi-youtube"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                          </svg>
                        </Typography>
                      </CardContent>
                    </Card>
                    <div
                      className="card text-center py-2 text-white fw-bold mt-2"
                      style={videocard2}
                    >
                      <p>#GETTHISPRODUCT</p>
                      <p style={{ marginTop: "-3px" }}>@ ₹599/-</p>
                    </div>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center justify-content-center mb-2 "
                  style={gapcard}
                >
                  <div className="">
                    <Card component="li" sx={videocard}>
                      <CardCover>
                        <video
                          autoPlay
                          loop
                          muted
                          poster="https://i.giphy.com/Ji177DxhpYiaeuJDES.webp"
                        >
                          <source
                            src="https://i.giphy.com/Ji177DxhpYiaeuJDES.webp"
                            type="video/mp4"
                          />
                        </video>
                      </CardCover>
                      <CardContent>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: 3, sm: 8 }}
                          ml={{ xs: 3, sm: 9 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            color="white"
                            fill="rgba(255,255,255,0.7)"
                            class="bi bi-play-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
                          </svg>
                        </Typography>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: -9, sm: -14 }}
                          ml={{ xs: 7, sm: 19 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            color="rgb(255, 0, 127)"
                            fill="currentColor"
                            class="bi bi-instagram"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                          </svg>
                        </Typography>
                      </CardContent>
                    </Card>
                    <div
                      className="card text-center py-2 text-white fw-bold mt-2"
                      style={videocard2}
                    >
                      <p>#GETTHISPRODUCT</p>
                      <p style={{ marginTop: "-3px" }}>@ ₹599/-</p>
                    </div>
                  </div>
                  <div className="">
                    <Card component="li" sx={videocard}>
                      <CardCover>
                        <video
                          autoPlay
                          loop
                          muted
                          poster="https://i.giphy.com/9K5qVG5JyiVKrr8TeB.webp"
                        >
                          <source
                            src="https://i.giphy.com/9K5qVG5JyiVKrr8TeB.webp"
                            type="video/mp4"
                          />
                        </video>
                      </CardCover>
                      <CardContent>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: 3, sm: 8 }}
                          ml={{ xs: 3, sm: 9 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            color="white"
                            fill="rgba(255,255,255,0.7)"
                            class="bi bi-play-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
                          </svg>
                        </Typography>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: -9, sm: -14 }}
                          ml={{ xs: 7, sm: 19 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            color="red"
                            fill="currentColor"
                            class="bi bi-youtube"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408z" />
                          </svg>
                        </Typography>
                      </CardContent>
                    </Card>
                    <div
                      className="card text-center py-2 text-white fw-bold mt-2"
                      style={videocard2}
                    >
                      <p>#GETTHISPRODUCT</p>
                      <p style={{ marginTop: "-3px" }}>@ ₹599/-</p>
                    </div>
                  </div>
                  <div className="">
                    <Card component="li" sx={videocard}>
                      <CardCover>
                        <video
                          autoPlay
                          loop
                          muted
                          poster="https://i.giphy.com/3z157gzEbRIsKkNYzF.webp"
                        >
                          <source
                            src="https://i.giphy.com/3z157gzEbRIsKkNYzF.webp"
                            type="video/mp4"
                          />
                        </video>
                      </CardCover>
                      <CardContent>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: 3, sm: 8 }}
                          ml={{ xs: 3, sm: 9 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            color="white"
                            fill="rgba(255,255,255,0.7)"
                            class="bi bi-play-circle-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
                          </svg>
                        </Typography>
                        <Typography
                          level="body-lg"
                          fontWeight="lg"
                          textColor="#fff"
                          mt={{ xs: -9, sm: -14 }}
                          ml={{ xs: 7, sm: 19 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            color="rgb(255, 0, 127)"
                            fill="currentColor"
                            class="bi bi-instagram"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                          </svg>
                        </Typography>
                      </CardContent>
                    </Card>
                    <div
                      className="card text-center py-2 text-white fw-bold mt-2"
                      style={videocard2}
                    >
                      <p>#GETTHISPRODUCT</p>
                      <p style={{ marginTop: "-3px" }}>@ ₹599/-</p>
                    </div>
                  </div>
                </div> */
}
