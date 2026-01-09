import { createContext, useState } from "react";
import productApi from "../productapi";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false); // ✅ global loading only

  /* ===================== GENERIC FETCH ===================== */
  const fetchProducts = async (filters = {}) => {
    try {
      setLoading(true);
      const data = await productApi.getProducts(filters); // ✅ accepts filters
      return data || [];
    } catch (err) {
      console.error("Failed to load products", err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  /* ===================== FETCH BY ID ===================== */
  const fetchProductById = async (id) => {
    if (!id) return null;
    return await productApi.getProductById(id);
  };

  return (
    <ProductContext.Provider
      value={{
        fetchProducts,   // ✅ pages call this
        fetchProductById,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
