import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

const EventBanner = () => {
    return ( <div>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Find events happening near you
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Looking for things to do in Canada? Whether you're a local, a
              tourist or just cruising through we've got loads of great tips and
              events. You can explore by location, what's popular, our top
              picks, free stuff... you got this. Ready?
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Find your next event</Button>
            </Stack>
          </Container>
        </Box>
    </div> );
}
 
export default EventBanner;