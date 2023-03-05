import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigator = useNavigate();
  return (
    <Card sx={{ height: "100%" }}>
      <CardActionArea onClick={() => navigator(`/user/${user._id}`)}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {`${user.name.split(" ")[0][0]} ${user.name
                .split(" ")[0][1]
                .toUpperCase()}`}
            </Avatar>
          }
          title={user.name}
          subheader={user.email}
        />
        <CardMedia
          component="img"
          height="120"
          image={user.picture}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {user.about}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
