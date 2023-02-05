import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const EventCard = (props) => {
  function getEventTime(props) {
    const d = new Date(`${props.item.start_date} ${props.item.start_time}`);
    return d.toLocaleTimeString("en-US");
  }

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      id={props.item.id}
      className="card"
    >
      <CardMedia
        component="img"
        // image="https://source.unsplash.com/random"
        image={props.item.image}
        alt={props.item.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.item.title}
        </Typography>

        {/* <Typography variant="body2">{props.item.description}</Typography> */}

        <Typography variant="button">
          Price: CAD ${props.item.price}
        </Typography>
        <br />
        <Typography variant="button">Time: {getEventTime(props)}</Typography>
        <br />
        <Typography variant="button">
          Location: {props.item.location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Register</Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
};

export default EventCard;
