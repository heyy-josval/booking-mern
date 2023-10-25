import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function RoomCard({
  key,
  imageSrc,
  title,
  country,
  price,
  description,
  textFirstButton,
  textSecondButton,
  handleFirstButton,
  handleSecondButton,
}) {
  return (
    <Grid key={key} item xs={1} sm={1} md={1}>
      <Card variant="elevation" sx={{ maxWidth: 345 }} style={{ padding: 5 }}>
        <CardMedia sx={{ height: 140 }} image={imageSrc} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            gutterBottom
            component="div"
          >
            S/. {price}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {country}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={handleFirstButton}>
            {textFirstButton}
          </Button>
          <Button size="small" onClick={handleSecondButton}>
            {textSecondButton}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
