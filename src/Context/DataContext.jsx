import { createContext, useContext, useEffect, useState } from "react";

// Create a Context for the data
const DataContext = createContext();

// The URL for your Supabase Storage JSON file
const DATA_URL = "https://hugo8814.github.io/host-api-audiophile/data.json";

// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch the data.json file from Supabase Storage
        const response = await fetch(DATA_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        // Parse the JSON data
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <DataContext.Provider value={{ products, loading, error }}>
      {children}
    </DataContext.Provider>
  );
}

// Custom hook to use the DataContext
export const useData = () => useContext(DataContext);
