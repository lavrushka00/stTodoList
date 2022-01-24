import React from "react";
import Header from "./Header";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    item: state.todoReducer.filter((item) => item.id === state.currentTodo)[0], //в item записываем текущий выбранный объект
  
  };
};

function index(props) { 

  const deleteTodo = () => {
    props.dispatch({ type: "DELETE", payload: props.item.id });               //при нажатии на кнопку "удалить" вызываем редьюсер удаления элемента, и отправляем id элемента
  };

  return (
    <div className="todoMain">
      {props.item ? <Header props={props} /> : null} {/* если выбран какой либо элемент но отображаем его, если нет то отображаем пустое место, сделанно для корректного удаления элемента */}

      <hr />

      <div className="todoMainContent">
        <div>{props.item ? props.item.todoBody : null}</div> {/* так же если выбран то отображаем */}
      </div>

      <div className="todoFooter">
        <button onClick={deleteTodo} className="buttonDelete"> {/*вызов функции удаления */}
          <span>Удалить</span>
        </button>
        
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(index);
