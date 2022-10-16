import React from "react";
import TodoItem from "./TodoItem";

export default function Todo(props) {
  return (
    <div>
      <div className="container">
        <h3 className="text-center my-3">Todo List</h3>
        {props.todoDatas.length === 0
          ? "Todo List is Empty"
          : props.todoDatas.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.deleteData}
                />
              );
            })}
      </div>
    </div>
  );
}
