import axios from "axios";

const baseUrl = "http://localhost:3000";

export const getAllZipCodes = async (value) => {
  try {
    const response = await axios.get(`${baseUrl}/zipcodes?zipCode=${value}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching zip codes:", error);
    throw error;
  }
};
