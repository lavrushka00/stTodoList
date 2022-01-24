import React from "react";
import TodoItem from "./todoItem";

function todoList(props) {
  return (
    <div className="todoList">
      {props.todoItems.map((item) => (
        <TodoItem item={item} key = {item.id}/> //с помощью функции map отображаем все элементы массива и присываиваем уникальный Id
      ))}
    </div>
  );
}

export default todoList;
