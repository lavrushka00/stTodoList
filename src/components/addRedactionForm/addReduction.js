import React, {useState} from "react";
import {connect} from "react-redux"

//окно добаления нового объекта
const mapStateToProps = (state) => {
  return {
    state
  }
}


function AddReduction(props) {
  const [title, setTitle] = useState("")//короткое название todo
  const [body, setBody] = useState("")//Тело todo

  const addNew = () => {
    
    props.dispatch({type: "ADD_NEW", payload: { //вызов функции создания нового объекта
      todoTitle: title,
      todoBody: body,
      status: 2,
      id: new Date().getTime(),
    }})
    //отправления объекта с названием и телом объекьа

    props.dispatch({type: "ADD"}) // закрытие окна отображения 

  }

  return (
    <div className="addForm">
      <div className="addTitle">
        <input placeholder="Введите название" value={title} onChange = {(e) =>setTitle(e.target.value)}/> {/*управляемый input с название todo*/}
      </div>  
      <hr />

      <div className="addBody">
        <textarea value = {body} onChange = {(e) => setBody(e.target.value)}></textarea> {/*управляемый texrarea с телом todo*/}
      </div>

      <button onClick={addNew}>Сохранить</button>{/*вызов функции добавления todo*/}
    </div>
  );
}

export default connect(mapStateToProps)(AddReduction);
