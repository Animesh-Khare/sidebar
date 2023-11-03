import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formdata, setFormData] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log("change ===>", e.target.name);
    console.log("change ===>", e.target.value);

    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", formdata);
    localStorage.setItem("formData", formdata);
    navigate("/home");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        paddingTop: "150px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "20px",
        }}
      >
        <TextField
          type="text"
          label="User name"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" sx={{ width: "100px" }} type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
