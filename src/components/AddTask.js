const AddTask = ({ addNewTask, newItem, setNewItem }) => {
  return (
    <form onSubmit={addNewTask}>
      <div className="input-group border p-2 rounded shadow-sm flex items-center justify-between">
        <label className="hidden" role="label" htmlFor="newTask">
          New Task
        </label>
        <input
          type="text"
          placeholder="Add new task"
          autoFocus={true}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="grow focus:outline-none"
        />
        <button
          role="button"
          type="submit"
          className="py-1 px-4 text-white bg-blue-800 border-transparent rounded shadow-sm"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTask;
