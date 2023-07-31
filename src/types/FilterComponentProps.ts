export interface FilterComponentProps {
  currentFilter: string;
  currentSortOrder: string;

  onFilterChange: (filter: string, sortOrder: string) => void;
}
