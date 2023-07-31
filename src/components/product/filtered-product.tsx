import { FilteredProductProps } from "@/src/types/filteredProdutct";
import { styled } from "styled-components";

const Container = styled.ul`
  display: flex;
  flex: 1 1;
  gap: 20px;
  margin-top: 20px;

  li {
    background-color: aliceblue;
    border-radius: 0.25rem;
    width: 230px;
    height: 330px;
  }
  li :nth-child(2) {
    margin: 10px 0;
    color: red;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 600;
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 0.25rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  p {
    color: #111;
    font-weight: 500;
    margin-top: 4px;
    margin-left: 7px;
  }

  span {
    font-weight: bold;
    color: #444;
  }
`;

const FilteredProduct: React.FC<FilteredProductProps> = ({
  filteredProducts,
}) => {
  return (
    <Container>
      {filteredProducts.map((product) => (
        <li key={product.id}>
          <img src={product.urlImg} alt={product.name} />
          <p>{product.name}</p>
          <p>
            <span>Tipo:</span> {product.type}
          </p>
          <p>
            <span>Descrição:</span> {product.description}
          </p>
          <p>
            <span>Preço:</span>${product.price}
          </p>
        </li>
      ))}
    </Container>
  );
};

export default FilteredProduct;
