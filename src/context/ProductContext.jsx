import { createContext, useEffect, useState } from "react";
import productApi from "../productapi";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);     // ✅ ALWAYS array
  const [loading, setLoading] = useState(true);     // ✅ global loading

  /* ===================== FETCH ALL PRODUCTS ===================== */
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await productApi.getProducts();
        setProducts(data || []);
      } catch (err) {
        console.error("Failed to load products", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  /* ===================== HELPERS ===================== */
  const fetchProducts = async (filters = {}) => {
    return await productApi.getProducts(filters);
  };

  const fetchHeroProducts = async () => {
    return await productApi.getProducts({ tag: "hero-product" });
  };

  const fetchFeaturedProducts = async () => {
    return await productApi.getProducts({ tag: "featured-product" });
  };

  const fetchProductById = async (id) => {
    if (!id) return null;
    return await productApi.getProductById(id);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        fetchProducts,
        fetchHeroProducts,
        fetchFeaturedProducts,
        fetchProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
