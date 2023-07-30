import { DataTitle } from "../Types/DataType";
import { useState } from "react";

interface Props {
  onAddTodo: ({ title }: DataTitle) => void;
}
export const CreateTodo: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onAddTodo({ title: inputValue });
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        type='text'
        value={inputValue}
        placeholder='Type a task...'
        autoFocus
        required
      />
    </form>
  );
};
