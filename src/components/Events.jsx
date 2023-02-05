import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import EventBanner from "./EventBanner";
import { eventList } from "../assets/EventList";
import EventCard from "./EventCard";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "./SearchBar";
const theme = createTheme();

export default function Events() {
  const events = eventList.map((item) => {
    return (
      <Grid item key={item.id} xs={12} sm={6} md={4}>
        <EventCard key={item.id} item={item} />
      </Grid>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <main>
        <EventBanner />
        <SearchBar/>
        <Container sx={{ py: 1 }} maxWidth="lg">
          <Grid container spacing={5}>
            {events}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
