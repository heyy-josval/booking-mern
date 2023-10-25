import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { useAxios } from "../utils";
import { Grid, TextField, Typography } from "@mui/material";
import RoomCard from "../components/Room/RoomCard";
// import { Star, StarOutline } from "@mui/icons-material";

const Hotel = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  const [rooms, setRooms] = useState([]);
  const [exists, setExists] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // FILTERS
  const [maxPrice, setMaxPrice] = useState(999999);

  useEffect(() => {
    const fetchData = async () => {
      const HotelData = await useAxios(`/hotels/${id}`, {}, "get");
      const RoomsData = await useAxios(`/rooms/hotel/${id}`, {}, "get");
      // console.log(data, status, exists);
      setHotel(HotelData.data);
      setRooms(RoomsData.data);
      setExists(HotelData.exists);
    };
    fetchData();
    setLoaded(true);
  }, []);

  return (
    <div>
      {loaded ? (
        exists ? (
          <div>
            <div>
              <Typography variant="h1" fontWeight="bold">
                {hotel.title}
              </Typography>
              <Typography variant="h4">
                {hotel.country} - {hotel.district}
              </Typography>
              <div>
                Estrellas:{" "}
                <span style={{ fontWeight: "bold" }}>{hotel.stars}</span>
              </div>
              <p>{hotel.description}</p>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Precio Maximo"
                variant="outlined"
                type="number"
                onChange={(event) => {
                  setMaxPrice(event.target.value);
                  console.log(event.target.value);
                  // console.log(typeof event.target.value);
                }}
              />
              <ul>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 1, sm: 2, md: 4 }}
                >
                  {rooms
                    .filter(
                      (room) =>
                        Number(maxPrice) >= Number(room.price.$numberDecimal)
                    )
                    .map((room, pos) => (
                      <RoomCard
                        key={pos}
                        title={room.title}
                        description={`Habitacion de ${room.size} a un precio de S/. ${room.price.$numberDecimal}. En la que pueden estar ${room.adults} adultos y ${room.children} infantes.`}
                        country={room.size}
                        price={room.price.$numberDecimal}
                        imageSrc="/room.jpg"
                        textSecondButton="Ver Habitacion"
                        textFirstButton="Reservar"
                        handleSecondButton={() => {
                          setLocation(`/hotels/${hotel._id}`);
                        }}
                      />
                    ))}
                </Grid>
              </ul>
            </div>
          </div>
        ) : (
          <p>No existe este hotel.</p>
        )
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Hotel;
