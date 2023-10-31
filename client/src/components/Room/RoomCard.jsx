import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

export default function RoomCard({
  key,
  imageSrc,
  title,
  country,
  price,
  beds,
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
          <Typography
            color="text.secondary"
            gutterBottom
            component="div"
            marginTop={2}
          >
            Camas disponibles:
          </Typography>
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 1, sm: 2, md: 2 }}
          >
            {beds.map((bed) => (
              <Grid item>
                <Typography
                  color="#212121"
                  bgcolor="text.secondary"
                  padding={1}
                  borderRadius={2}
                >
                  {bed}
                </Typography>
              </Grid>
            ))}
          </Grid>
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
