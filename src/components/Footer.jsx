import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
    return (
      <div>
        {/* Footer Start */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Copyright © All rights are reserved by Eventify 2023
          </Typography>
        </Box>
        {/* Footer end */}
      </div>
    );
}
 
export default Footer;