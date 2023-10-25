import React, { useEffect, useState } from "react";
import { useAxios } from "../utils";
import { Grid } from "@mui/material";
import HotelCard from "../components/Hotel/HotelCard";
import { useLocation } from "wouter";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [exists, setExists] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [location, setLocation] = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const { data, status, exists } = await useAxios("/hotels", {}, "get");
      // console.log(data, status, exists);
      setHotels(data);
      if (data) {
        if (data.length > 0) {
          setExists(exists);
        }
      }
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
              {hotels.map((hotel, pos) => (
                <HotelCard
                  key={pos}
                  title={hotel.title}
                  description={hotel.description}
                  country={hotel.country}
                  district={hotel.district}
                  imageSrc="/hotel.jpg"
                  textSecondButton="Ver Hotel"
                  textFirstButton="Reservar"
                  handleSecondButton={() => {
                    setLocation(`/hotels/${hotel._id}`);
                  }}
                />
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
