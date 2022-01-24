import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TodoList from "./todoList";

const mapStateToProps = (state) => { //получаем состояние из редакса
  return state;
};

function TodoNavBar(props) {
  const [filtered, setFiltered] = useState(props.todoReducer); //для того что бы не изменять изначальное состояние создаём state для хранения фильтрованного массива
  const [searchValue, setSearchValue] = useState(""); //состояние для значения поиска

  const add = () => {
    props.dispatch({ type: "ADD" }); // по нажатию по кнопке "добавить" изменяется состояние отображения окна добавления нового объекта
  };

  const find = (e) => {
    setSearchValue(e.target.value); // созаём управляемый input с значением поиска
  };

  useEffect(() => {
    setFiltered(
      props.todoReducer.filter((item) =>
        item.todoTitle.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);//при изменении Input фильтруем изначальный массив и запоминаем его в массиве filtred


  useEffect(() => {
    setFiltered(props.todoReducer);
  }, [props.todoReducer]); //обновление при изменении изначального массива

  
  return (
    <div className="todoNavBar">
      <div className="todoSearch">
        <img src="./Lupa.svg" alt="" />
        <input
          type="placeholder"
          placeholder="Поиск..."
          value={searchValue} //управляемый input
          onChange={(e) => find(e)} // приизменении вызываем функцию find
        />
      </div>

      <TodoList todoItems={filtered} /> {/*в дочерний элемент отправляем отфильрованный массив  */}
      

      <button
        onClick={add}
        className={props.addReduction ? "buttonCancel" : "buttonDefault"/* в зависимости  от состояния добавления нового объекта, отображаем "Отмена", "Добавить"*/ }
      >
        {props.addReduction ? "Отмена" : "Добавить"}
      </button>
    </div>
  );
}

export default connect(mapStateToProps)(TodoNavBar);
