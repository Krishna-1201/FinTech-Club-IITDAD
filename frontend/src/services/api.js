// API service for IIT Delhi Abu Dhabi FinTech Club website
const API_BASE = process.env.REACT_APP_BACKEND_URL + '/api';

// Contact form submission
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
};

// Get all contact submissions (for admin use)
export const getContactSubmissions = async () => {
  try {
    const response = await fetch(`${API_BASE}/contact`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Get submissions error:', error);
    throw error;
  }
};

// Test API connection
export const testConnection = async () => {
  try {
    const response = await fetch(`${API_BASE}/`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API connection test failed:', error);
    throw error;
  }
};