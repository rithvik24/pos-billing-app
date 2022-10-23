import React from "react";
import { Box, Typography, Card } from "@mui/material";
import { useSelector } from "react-redux";

const Account = (props) => {
  const { user } = useSelector((state) => {
    return state;
  });

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#f5f5f5",
      }}
    >
      {user.isLoading ? (
        <>
          <h1
            style={{
              padding: "300px 200px 200px 710px",
            }}
          >
            Loading...
          </h1>
        </>
      ) : (
        <Box
          component={Card}
          mt={"80px"}
          ml={"85px"}
          sx={{
            position: "absolute",
            p: "100px 0px 0px 100px",
            width: "600px",
            height: "350px",
            top: "60px",
          }}
        >
          <Typography variant="h3" component="h1">
            Name :{" "}
            {user.data.username[0].toUpperCase() +
              user.data.username.slice(1).toLowerCase()}
          </Typography>
          <Typography variant="h4" component="h1">
            Business Name : {user.data.businessName}
          </Typography>
          <Typography variant="h4" component="h1">
            Email : {user.data.email}
          </Typography>
          <Typography variant="h4" component="h1">
            Joined On : {user.data.createdAt.slice(0, 10)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Account;
