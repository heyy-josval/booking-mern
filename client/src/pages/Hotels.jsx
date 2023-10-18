import React, { useEffect, useState } from "react";
import axios from "axios";
import { backend } from "../utils";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [exists, setExists] = useState(false);
  const [error, setError] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backend}/hotels`);
        const { data } = response;

        if (data && data.length > 0) {
          setExists(true);
          setHotels(data);
        }
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;
          setError({ data, status });
        } else {
          setError({ data: "Error de red", status: 500 });
        }
      } finally {
        setLoaded(true);
      }
    };

    fetchData();
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
      {/* {error.status && (
        <div>
          <p>Error: {error.status}</p>
          <p>
            {typeof error.data === "object"
              ? JSON.stringify(error.data)
              : error.data}
          </p>
        </div>
      )} */}
    </div>
  );
};

export default Hotels;
