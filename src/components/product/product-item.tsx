import FilterComponent from "./FilterProduct";
import FilteredProduct from "./filtered-product";
import { useProduct } from "../../hooks/useProduct";
import { styled } from "styled-components";

const Container = styled.div`
  margin: 20px 0;

  h1 {
    margin-bottom: 40px;
  }
`;

const ProductItem: React.FC = () => {
  const {
    filteredProducts,
    currentFilter,
    currentSortOrder,
    fetchFilteredProducts,
  } = useProduct();

  return (
    <Container>
      <h1>Produtos</h1>
      <FilterComponent
        currentFilter={currentFilter}
        currentSortOrder={currentSortOrder}
        onFilterChange={fetchFilteredProducts}
      />

      {filteredProducts.length > 0 ? (
        <FilteredProduct filteredProducts={filteredProducts} />
      ) : (
        <p>Nenhum produto encontrado.</p>
      )}
    </Container>
  );
};

export default ProductItem;
