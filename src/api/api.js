import axios from "axios";

const getGits = async (userName) => {
  const response = await axios.get(
    `https://api.github.com/users/${userName}/gists`
  );
  return response.data;
};

const api = {
  getGits,
};

export default api;
