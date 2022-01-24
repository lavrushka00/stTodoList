const initialState = [
  {
    todoTitle: "Диплом",
    todoBody: "Доделать основную часть, список литературы",
    status: 0,
    id: 0,
  },
  {
    todoTitle: "Cходить в магазин за продуктами",
    todoBody: "хлеб, яйца, фарш, воду",
    status: 2,
    id: 1,
  },
  {
    todoTitle: "Убрать старые вещи",
    todoBody: "перевести вещи в другую квартиру",
    status: 1,
    id: 2,
  },
];
//основное состояние приложения


const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW":
      return [...state, action.payload];//добавление нового объекта в массив
    case "CHANGE_STATUS": //из Header.js  получаем объект с текущим id айтема и новым статусом объекта, проводим по изначальному массиву поиск по id и изменяем его статус
      return state.map((item) => {
        if (item.id === action.payload.id) { //Поиск по id
          return { ...item, status: action.payload.newStatus };//изменение поля status
        } else {
          return item; // если не находим возвращаем изначальный объект
        }
      });
    case "DELETE":
      return state.filter((item) => item.id !== action.payload);//получаем id объекта который надо удалить, и с помощью filter возвращаем новый массив

    default:
      return state;
  }
};

export default todoReducer;
