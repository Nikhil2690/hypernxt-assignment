const API_BASE_URL = 'https://api.khusindia.com/rest/api/product'; // Replace with your actual API URL

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_BASE_URL);

    const data = await response.json();

    console.log("API RESPONSE:", data);
    
    if (data.status && data.result && data.result.data) {
      return data.result.data.result;
    }
    
    throw new Error('Invalid API response structure');
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};