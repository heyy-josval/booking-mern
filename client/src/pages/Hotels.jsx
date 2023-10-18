import React, { useEffect, useState } from "react";
import { useAxios } from "../utils";

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
      <h1>Hotels</h1>
      {loaded ? (
        exists ? (
          <ul>
            {hotels.map((hotel) => (
              <li key={hotel._id}>{hotel.title}</li>
            ))}
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
