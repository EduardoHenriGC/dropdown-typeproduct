import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../types/product";

export const useProduct = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentFilter, setCurrentFilter] = useState("NEWS");
  const [currentSortOrder, setCurrentSortOrder] = useState("");

  // Função para buscar os produtos filtrados da API
  const fetchFilteredProducts = async (filter: string, sortOrder: string) => {
    try {
      let order = sortOrder;
      if (filter === "MINOR_PRICE") {
        order = "asc";
      } else if (filter === "BIGGEST_PRICE") {
        order = "desc";
      }

      const response = await axios.get(
        `http://localhost:22248/api/Products?filter=${filter}&sortOrder=${order}`
      );
      setFilteredProducts(response.data); // Atualiza o estado com os produtos filtrados
      setCurrentFilter(filter); // Atualiza o filtro atual
      setCurrentSortOrder(order); // Atualiza a ordenação atual
    } catch (error) {
      console.error("Erro ao obter os dados da API:", error);
    }
  };

  useEffect(() => {
    // Quando o componente for montado, busca os produtos filtrados com o filtro e a ordenação padrão ''
    fetchFilteredProducts("all", "asc");
  }, []);

  return {
    filteredProducts,
    currentFilter,
    currentSortOrder,
    fetchFilteredProducts,
  };
};
