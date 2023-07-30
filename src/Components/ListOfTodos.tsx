import { DataId, type Data as DataType, DataList} from "../Types/DataType";
import { TodosItem } from "./TodosItem";

interface Props {
  data: DataList;
  handleRemove: ({ id }: DataId) => void;
  handleCompleted: ({
    id,
    completed,
  }: Pick<DataType, "id" | "completed">) => void;
}

export const Todos: React.FC<Props> = ({
  data,
  handleRemove,
  handleCompleted,
}) => {
  return (
    <section className='bg-neutral-100/50 sm:w-custom w-mobile flex justify-center rounded-xl border border-neutral-300 '>
      <ul className='w-full flex items-center flex-col gap-y-3 p-3'>
        {data.map((item) => (
          <TodosItem
            key={item.id}
            {...item}
            handleRemove={handleRemove}
            handleCompleted={handleCompleted}
          />
        ))}
      </ul>
    </section>
  );
};
