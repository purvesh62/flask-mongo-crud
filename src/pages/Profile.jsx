import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';

const Profile = () => {
  const { _id } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    console.log("useEffect");
    axios
      .get(`https://express-t4.onrender.com/api/users/${_id}`)
      .then(function (response) {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch(function (error) {
        console.log(error, "not found");
      });
  }, []);

  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: "2rem 1rem",
      }}>
        <Link href="/users" underline="hover">Homepage</Link>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "0 1rem",
          boxShadow: 1,
        }}>
        <Grid container>
          <Grid item xs={12}>
            <Avatar
              alt={userData.name}
              src={userData.picture}
              sx={{ width: 70, height: 70, margin: "auto" }}
            />
          </Grid>
          <Grid item xs={12} justifyItems={"center"}>
            <Typography variant="h4" gutterBottom>
              {userData.name}
            </Typography>

            <Typography variant="overline" display="block" gutterBottom>
              {userData.email}
            </Typography>

            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography variant="body1" gutterBottom>
              {userData.about}
            </Typography>

            <Typography variant="h6" gutterBottom>
              Age
            </Typography>
            <Typography variant="body1" gutterBottom>
              {userData.age}
            </Typography>

            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <Typography variant="body1" gutterBottom>
              {userData.address}
            </Typography>

            <Typography variant="h6" gutterBottom>
              Phone
            </Typography>
            <Typography variant="body1" gutterBottom>
              {userData.phone}
            </Typography>

            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography variant="body1" gutterBottom>
              {userData.company}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
