import React from "react";

const Filter = ({ items, searchItem, setSearchItem }) => {
  // const itemsFiltered = items.filter((item) => item.task.includes(searchItem));
  return (
    <div className="mt-3 flex items-center justify-between">
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search item"
            className="border p-2 rounded shadow-sm"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
          />
        </form>
      </div>
      <div>
        Total:{" "}
        {/* {itemsFiltered.length && itemsFiltered.length < 10
          ? `0${itemsFiltered.length}`
          : itemsFiltered.length} */}
        {items.length && items.length < 10 ? `0${items.length}` : items.length}
      </div>
    </div>
  );
};

export default Filter;
