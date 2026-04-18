import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container my-4">

      {/* Heading */}
      <h3 className="text-center mb-4">Your Todos</h3>

      {/* Empty State */}
      {props.todos.length === 0 ? (
        <div className="text-center text-muted my-5">
          <h5>No Todos Yet</h5>
          <p>Start by adding a new task</p>
        </div>
      ) : (
        /* Todo List */
        <div className="d-flex flex-column">
          {props.todos.map((todo) => {
            return (
              <TodoItem
                key={todo.sno}
                todo={todo}
                onDelete={props.onDelete}
                toggleComplete={props.toggleComplete}
                onEdit={props.onEdit}
              />
            );
          })}
        </div>
      )}

    </div>
  );
};