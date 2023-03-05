import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import axios from "axios";
import Box from "@mui/material/Box";
import SearchBar from "../components/SearchBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Users = () => {
  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) => {
    return user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  console.log("filteredUsers", filteredUsers);

  function handleSearch() {
    console.log("Handlesearch");
  }

  useEffect(() => {
    console.log("useEffect");
    axios
      .get("https://express-t4.onrender.com/api/users")
      .then(function (response) {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        <div className="cardContainer">
          <SearchBar
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
          <Box>
            <Grid
              container
              justifyContent={"center"}
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 2, sm: 8, md: 12 }}>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => {
                  return (
                    <Grid item xs={2} sm={4} md={4} key={user._id}>
                      <UserCard user={user} />
                    </Grid>
                  );
                })
              ) : search === "" ? (
                users.map((user) => {
                  return (
                    <Grid item xs={2} sm={4} md={4} key={user._id}>
                      <UserCard user={user} />
                    </Grid>
                  );
                })
              ) : (
                <p>No users found</p>
              )}
            </Grid>
          </Box>
        </div>
      ) : (
        <>No users</>
      )}
    </div>
  );
};

export default Users;
