import axios from "axios";

const backend = "http://localhost:8080/api";

const useAxios = async (route, options, method) => {
  try {
    const response = await sendRequest(route, options, method);

    if (response) {
      const { data, status } = response;
      return { data, status, exists: true };
    }
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response;
      return { data, status, exists: false };
    }
  }

  return { data: null, status: null, exists: false };
};

const sendRequest = async (route, options, method) => {
  switch (method) {
    case "get":
      return await axios.get(`${backend}${route}`);
    case "post":
      return await axios.post(`${backend}${route}`, options);
    case "put":
      return await axios.put(`${backend}${route}`, options);
    case "delete":
      return await axios.delete(`${backend}${route}`, options);
    default:
      return null;
  }
};

export { useAxios, backend };
