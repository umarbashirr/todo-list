import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App() {
  const APP_URL = "http://localhost:3500/todos";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");

  // Setting New Items to Items List and Saving to Local Storage
  const setAndSaveItem = (items) => {
    setItems(items);
    localStorage.setItem("todo-list", JSON.stringify(items));
  };

  // New Task Creation Handler
  const addNewTask = async (e) => {
    //   e.preventDefault();
    //   if (!newItem) return;
    //   const newTodo = { id: uuid(), task: newItem, completed: false };
    //   try {
    //     const response = await fetch(APP_URL, {
    //       method: "POST",
    //       body: JSON.stringify(newTodo),
    //     });
    //     const result = response.json();
    //     console.log(result);
    //   } catch (error) {}
    //   setNewItem("");
  };

  // Task Delete Handler
  const deleteItemHandler = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setAndSaveItem(newItems);
  };

  // Task Complete Handler
  const markCompleteHandler = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setAndSaveItem(newItems);
  };

  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        const response = await fetch(APP_URL);
        if (!response.ok) throw Error("Did not receive data!");
        const todoItems = await response.json();
        setItems(todoItems);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTodoList();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="border w-full max-w-[400px] bg-white rounded shadow-sm p-4">
        {/* Header Form Start */}
        <AddTask
          newItem={newItem}
          setNewItem={setNewItem}
          addNewTask={addNewTask}
        />

        <Filter
          items={items}
          searchItem={searchItem}
          setSearchItem={setSearchItem}
        />
        <TaskList
          markCompleteHandler={markCompleteHandler}
          deleteItemHandler={deleteItemHandler}
          items={items.filter((item) => item.task.includes(searchItem))}
          // items={items}
        />
      </div>
    </div>
  );
}

export default App;
