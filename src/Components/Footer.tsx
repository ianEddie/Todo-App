import { FilterValue } from "../Types/DataType";
import { Filters } from "./Filters";

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: FilterValue;
  onClearCompleted: () => void;
  handleFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
  activeCount,
  completedCount,
  filterSelected,
  onClearCompleted,
  handleFilterChange,
}) => {
  return (
    <footer>
      <div className='flex gap-x-1'>
        <span className="font-bold text-neutral-700">{activeCount}</span>
        <span>Pending Tasks</span>
      </div>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
        completedCount={completedCount}
        onclearCompleted={onClearCompleted}
      />
    </footer>
  );
};
