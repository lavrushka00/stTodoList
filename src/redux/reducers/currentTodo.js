import React from 'react';

const initialState = 0

const currentTodo = (state = initialState, action) => {
    switch(action.type){
        case "CHANGE_CURRENT":
            return action.payload //изменяем выбранный объект
        default:
            return state
    }
}

export default currentTodo;
