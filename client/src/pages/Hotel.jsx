import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { useAxios } from "../utils";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import RoomCard from "../components/Room/RoomCard";
// import { Star, StarOutline } from "@mui/icons-material";

const Hotel = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  const [rooms, setRooms] = useState([]);
  const [exists, setExists] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // FILTERS
  const [maxPrice, setMaxPrice] = useState(0);
  const [bedSize, setBedSize] = useState("");
  const [adults, setAdults] = useState(0);
  const [kids, setKids] = useState(0);

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
              <div
                style={{ display: "flex", gap: "2rem", alignItems: "center" }}
              >
                <TextField
                  label="Precio Maximo"
                  variant="outlined"
                  type="number"
                  onChange={(event) => {
                    setMaxPrice(event.target.value);
                  }}
                />
                <FormControl sx={{ m: 1, minWidth: 180 }}>
                  <InputLabel>Tamaño de cama</InputLabel>
                  <Select
                    value={bedSize}
                    label="Tamaño de cama"
                    onChange={(event) => {
                      setBedSize(event.target.value);
                    }}
                    autoWidth
                  >
                    <MenuItem value="Grande">Grande</MenuItem>
                    <MenuItem value="Mediano">Mediano</MenuItem>
                    <MenuItem value="Pequeño">Pequeño</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Adultos"
                  variant="outlined"
                  type="number"
                  onChange={(event) => {
                    setAdults(event.target.value);
                  }}
                />
                <TextField
                  label="Niños"
                  variant="outlined"
                  type="number"
                  onChange={(event) => {
                    setKids(event.target.value);
                  }}
                />
              </div>
              <ul>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 1, sm: 2, md: 4 }}
                >
                  {rooms
                    .filter((room) => {
                      if (Number(maxPrice) != 0) {
                        return (
                          Number(maxPrice) >= Number(room.price.$numberDecimal)
                        );
                      }
                      return true;
                    })
                    .filter((room) => {
                      if (
                        bedSize != "" &&
                        bedSize != null &&
                        bedSize != undefined
                      ) {
                        return room.beds.includes(bedSize);
                      }
                      return true;
                    })
                    .filter((room) => {
                      if (Number(adults) != 0) {
                        return Number(adults) == room.adults;
                      }
                      return true;
                    })
                    .filter((room) => {
                      if (Number(kids) != 0) {
                        return Number(kids) == room.children;
                      }
                      return true;
                    })
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
                        beds={room.beds}
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
