import axios from "axios";

const baseUrl = "http://localhost:3000";

export const createProduct = async (product) => {
  try {
    const response = await axios.post(`${baseUrl}/product/create`, product, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("There was an error creating the product!", error);
    throw error;
  }
};
