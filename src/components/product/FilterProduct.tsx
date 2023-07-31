import { FilterComponentProps } from "../../types/FilterComponentProps";
import { styled } from "styled-components";

const FilterComponent: React.FC<FilterComponentProps> = ({
  currentFilter,
  currentSortOrder,
  onFilterChange,
}) => {
  const handleSortOrderChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedSortOrder = event.target.value;
    onFilterChange(currentFilter, selectedSortOrder);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = event.target.value;
    onFilterChange(selectedFilter, currentSortOrder);
  };

  const Container = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;

    select {
      width: 180px;
      height: 30px;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      cursor: pointer;
    }
  `;

  return (
    <Container>
      <select onChange={handleSortOrderChange} value={currentSortOrder}>
        <option value="asc">Menor preço</option>
        <option value="desc">Maior preço</option>
      </select>
      <select onChange={handleFilterChange} value={currentFilter}>
        <option value="">Filtrar por:</option>
        <option value="ALL">Todos</option>
        <option value="console">Video games</option>
        <option value="jogos">Jogos</option>
        <option value="manga">Manga</option>
      </select>
    </Container>
  );
};

export default FilterComponent;
