import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Todos } from "./Components/ListOfTodos";
import { DATA_FILTERS } from "./Const/const";
import { data } from "./Mocks/data";
import {
  type DataId,
  type DataTitle,
  type Data as DataType,
  type FilterValue,
} from "./Types/DataType";
import { useState } from "react";
//
function App() {
  const [todos, setTodos] = useState(data);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    DATA_FILTERS.ALL
  );

  const handleRemove = ({ id }: DataId): void => {
    const newTodos = todos.filter((item) => item.id != id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<DataType, "id" | "completed">): void => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed,
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
  };

  const filteredData = todos.filter((item) => {
    if (filterSelected === DATA_FILTERS.ACTIVE) return !item.completed;
    if (filterSelected === DATA_FILTERS.COMPLETED) return item.completed;
    return item;
  });

  const activeCount = todos.filter((item) => !item.completed).length;

  const completedCount = todos.length - activeCount;

  const onClearCompleted = (): void => {
    const newTodos = todos.filter((item) => !item.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = ({ title }: DataTitle): void => {
    const newTodo = {
      title,
      id: crypto.randomUUID(),
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <main>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        data={filteredData}
        handleRemove={handleRemove}
        handleCompleted={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={onClearCompleted}
      />
    </main>
  );
}

export default App;
