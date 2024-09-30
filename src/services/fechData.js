import { API_URL } from "./config";

export const fetchData = async (route, options = {}) => {
  try {
    const response = await fetch(`${API_URL}${route}`, options);
    const answer = await response.json();
    return answer;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

export const fetchData1 = async (endpoint) => {
  try {
    const token = localStorage.getItem("jwt");
    const response = await fetch(`http://localhost:8000/${endpoint}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch data");
    }

    const data = await response.json();

    return Array.isArray(data.habits) ? data.habits : data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    throw error;
  }
};
