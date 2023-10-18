import React, { useEffect, useState } from "react";
import { useAxios } from "../utils";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [exists, setExists] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data, status, exists } = await useAxios("/hotels", {}, "get");
      console.log(data, status, exists);
      setHotels(data);
      setExists(exists);
    };
    fetchData();
    setLoaded(true);
  }, []);

  return (
    <div>
      {loaded ? (
        exists ? (
          <ul>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 2, md: 4 }}
            >
              {hotels.map((hotel) => (
                <Grid key={hotel._id} item xs={1} sm={1} md={1}>
                  <Card
                    variant="elevation"
                    sx={{ maxWidth: 345 }}
                    style={{ padding: 5 }}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/hotel.jpg"
                      title="Hotel"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {hotel.title}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {hotel.country} - {hotel.district}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        {hotel.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" variant="contained">
                        Reservar
                      </Button>
                      <Button size="small">Ver</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </ul>
        ) : (
          <p>No hay hoteles disponibles.</p>
        )
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Hotels;
