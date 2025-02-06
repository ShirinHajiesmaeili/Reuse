import axios from "axios";

const baseUrl = "http://localhost:3000";

export const signIn = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signin`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const signUp = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    const response = await axios.delete(`${baseUrl}/auth/signout`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
