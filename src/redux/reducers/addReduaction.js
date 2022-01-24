const initialState = false


const addReduction = (state = initialState, action) => {
    switch(action.type)
    {
        case "ADD":
            return !state //в зависимости от состояния на главной странице отображается или не отображается окно с возможностью добавления нового объекта
        default:
            return state
    }
}

export default addReduction