import React, {useState, useEffect} from "react";

function Header({props}) {

const [isOpenStatus, setIsOpenStatus] = useState(false) //состояние для отображения окна изменения статуса объекта

const status = (props) => {
    
    if(props.item.status === 0){ //в завимости от статуса отображаем нужный span
        return <span className='completed'>Выполненно</span>
    }else if (props.item.status === 1){
        return <span className='ongoing'>В процессе</span>
    }else {
        return <span className='waiting'>Ожидает</span>
    }
}


const OpenStatus = () => {
    setIsOpenStatus(!isOpenStatus)//Функциия отображения окна статуса 
}

useEffect(() => {
    setIsOpenStatus(false)//если изменяеи Id выбранного объекта - закрывем окно
}, [props.item.id])

const changeStatus = (e) => { // функция изменения статуса, получаем значения кликнутого элемента и в зависимости от этого изменяем его статус
    let newStatus = null//переменная для хранения нового статуса 

    if(e.target.innerText == "Выполнено"){
        newStatus = 0
    }else if (e.target.innerText == 'Впроцессе'){
        newStatus = 1
    }else{
        newStatus = 2
    }


    props.dispatch({type: "CHANGE_STATUS", payload: {id: props.item.id, newStatus: newStatus}})// вызываем редьюсер и отправляем объект с id и новый статусом
}
  return (
    <div className="todoHeader">
      <span>{props.item.todoTitle}</span>
      <div onClick={OpenStatus} className="todoProgress"> {/*вызовд функции изменнеия статуса*/}
        <span>прогресс :</span>
        <div>
          {status(props)}{/*фунция отображения текущего статуса*/}
          <img src="./Arrow.svg" alt="" />
        </div>
      </div>

      {isOpenStatus && <div className="popUpProgress">
        <div onClick={(e) =>changeStatus(e)}> {/*вызов функции изменнения статуса */}
          
          {props.item.status === 0 ? <img src="./img/status/DONE.svg" alt="" /> : null} {/* если выбранный статус равен id svg отображем его*/}
          <span>Выполнено</span>
        </div>

        <div onClick={(e) =>changeStatus(e)}>      
          {props.item.status === 1 ? <img src="./img/status/ONGOING.svg" alt="" /> : null}
          <span>Впроцессе</span>
        </div>

        <div onClick={(e) =>changeStatus(e)}>
        {props.item.status === 2 ? <img src="./img/status/WAITING.svg" alt="" /> : null}
          <span>Ожидает</span>
        </div>
      </div>}
    </div>
  );
}

export default Header;
