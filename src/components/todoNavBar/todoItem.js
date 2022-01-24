import React from "react";

import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        current: state.currentTodo //получем Id выбранного объекта
    }
}

function todoItem(props) {

  const progressIMG = (props) => {
    // в зависимости от статуса отобржаем нужную svg
    if (props.status === 0) {
      return <img src="./img/status/DONE.svg" alt="" />;
    } else if (props.status === 1) {
      return <img src="./img/status/ONGOING.svg" alt="" />;
    } else {
      return <img src="./img/status/WAITING.svg" alt="" />;
    }
  };

  const changeCurrent = () => {
      props.dispatch({type: "CHANGE_CURRENT", payload: props.item.id})
      //меняем id выбранного объекта
  }
  
  return (
    //если id выбранного объекта равно id объекта из массива то изменяем стиль на выбранный
    <div className={props.current === props.item.id ? "todoItemCurrent todoItem" : " todoItem"} onClick = {changeCurrent}>
      {progressIMG(props.item)}{/*функция для отображения статуса*/}
      <span>{props.item.todoTitle}</span>
    </div>
  );
}

export default connect(mapStateToProps)(todoItem);
