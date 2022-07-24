import React from "react";
import { FaTimes } from "react-icons/fa";

const TaskList = ({ items, markCompleteHandler, deleteItemHandler }) => {
  return (
    <div className="mt-3">
      {items.length > 0 ? (
        <ul>
          {items.map((item) => {
            return (
              <li
                key={item.id}
                className="border rounded shadow-sm p-2 flex justify-between items-center mb-2 last:mb-0"
              >
                <div className="flex items-center justify-start gap-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                    checked={item.completed}
                    onChange={() => markCompleteHandler(item.id)}
                  />
                  {item.task}
                </div>
                <FaTimes
                  role="button"
                  onClick={() => deleteItemHandler(item.id)}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-slate-400 text-center">No list item found!</p>
      )}
    </div>
  );
};

export default TaskList;
