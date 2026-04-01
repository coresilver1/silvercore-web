import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const fetchSiteContent = async () => {
  const response = await axios.get(`${API}/site-content`);
  return response.data;
};

export const submitContact = async (payload) => {
  const response = await axios.post(`${API}/contact`, payload);
  return response.data;
};

export const sendChatMessage = async (payload) => {
  const response = await axios.post(`${API}/chat`, payload);
  return response.data;
};

export { API, BACKEND_URL };