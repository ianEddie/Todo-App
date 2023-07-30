import { type DataTitle } from "../Types/DataType";
import { CreateTodo } from "./CreateTodo";

interface Props {
  onAddTodo: ({ title }: DataTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header>
      <h1 className="text-3xl text-neutral-900">Tasks</h1>
      <CreateTodo onAddTodo={onAddTodo} />
    </header>
  );
};
