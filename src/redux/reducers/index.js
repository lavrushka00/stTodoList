import { combineReducers } from "redux";


import todoReducer from './todoReducer'
import currentTodo from "./currentTodo";
import addReduction from "./addReduaction";

const rootReducer = combineReducers({
    todoReducer,
    currentTodo,
    addReduction,
})
//создаём общий редьюсер для доступа сразу к всем

export default rootReducer;