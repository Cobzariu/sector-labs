import axios from "axios";

const GitHubClient = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Accept: "application/vnd.GitHub.v3+json",
    Authorization: "token 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",
  },
});

const getGits = async (userName) => {
  const response = await GitHubClient.get(`users/${userName}/gists`);
  return response.data;
};

const getForks = async (forkUrl) => {
  const response = await GitHubClient.get(forkUrl);
  return response.data;
};

const api = {
  getGits,
  getForks,
};

export default api;
