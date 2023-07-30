import { type Data as Datatype } from "../Types/DataType";
import { type DataId, Data as DataType } from "../Types/DataType";
//

interface Props extends Datatype {
  handleRemove: ({ id }: DataId) => void;
  handleCompleted: ({
    id,
    completed,
  }: Pick<DataType, "id" | "completed">) => void;
}

export const TodosItem: React.FC<Props> = ({
  id,
  title,
  completed,
  handleRemove,
  handleCompleted,
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleCompleted({ id, completed: event.target.checked });
  };

  const className = completed ? "bg-neutral-900/10" : "bg-white/20 border border-neutral-400/40";

  return (
    <li className={`w-full flex justify-between rounded-xl px-5 py-2  ${className}`}>
      <input type='checkbox' checked={completed} onChange={handleChange} className="accent-neutral-600 "  />
      <label className={`${completed ? "line-through" : ""}`}>{title}</label>
      <button
        onClick={() => {
          handleRemove({ id });
        }}
      >
        x
      </button>
    </li>
  );
};
