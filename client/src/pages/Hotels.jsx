import React, { useEffect, useState } from "react";
import { useAxios } from "../utils";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import HotelCard from "../components/Hotel/HotelCard";
import { useLocation } from "wouter";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [exists, setExists] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const [location, setLocation] = useLocation();

  //FILTERS
  const [country, setCountry] = useState("");

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
          <div>
            <div style={{ marginTop: "2rem" }}>
              <FormControl sx={{ m: 1, minWidth: 180 }}>
                <InputLabel>Pais del hotel</InputLabel>
                <Select
                  value={country}
                  label="Tamaño de cama"
                  onChange={(event) => {
                    setCountry(event.target.value);
                  }}
                  autoWidth
                >
                  <MenuItem value="">Todos</MenuItem>
                  <MenuItem value="Estados Unidos">Estados Unidos</MenuItem>
                  <MenuItem value="Peru">Peru</MenuItem>
                  <MenuItem value="Venezuela">Venezuela</MenuItem>
                  <MenuItem value="Brasil">Brasil</MenuItem>
                </Select>
              </FormControl>
            </div>
            <ul>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, sm: 2, md: 4 }}
              >
                {hotels
                  .filter((hotel) => {
                    if (
                      country != "" &&
                      country != null &&
                      country != undefined
                    ) {
                      return hotel.country === country;
                    }
                    return true;
                  })
                  .map((hotel, pos) => (
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
          </div>
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
