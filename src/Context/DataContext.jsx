import { createContext, useContext, useEffect, useState } from "react";

// Create a Context for the data
const DataContext = createContext();

export function DataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const productEndpoints = [0, 1, 2, 3, 4, 5];
      try {
        const responses = await Promise.all(
          productEndpoints.map((id) =>
            fetch(`http://localhost:8000/${id}`).then((response) => {
              if (!response.ok) {
                throw new Error(`Failed to fetch product ${id}`);
              }
              return response.json();
            })
          )
        );
        setProducts(responses);
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
