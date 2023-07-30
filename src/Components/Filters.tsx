import { FILTERS_BUTTONS } from "../Const/const";
import { type FilterValue } from "../Types/DataType";
interface Props {
  filterSelected: FilterValue;
  completedCount: number;
  onFilterChange: (filter: FilterValue) => void;
  onclearCompleted: () => void;
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
  completedCount,
  onclearCompleted,
}) => {
  return (
    <ul className='flex items-center gap-x-3 text-[0.95rem]'>
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "noSelected";
        return (
          <li key={key}>
            <a
              className={className}
              href={href}
              onClick={(event) => {
                event.preventDefault();
                onFilterChange(key as FilterValue);
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
      {completedCount > 0 && (
        <button onClick={onclearCompleted} className='noSelected'>
          Delete Completed
        </button>
      )}
    </ul>
  );
};
