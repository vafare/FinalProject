import { Actions, todoItem } from "../../types/types";
import * as actionTypes from "./types";

// Action Creators

export function addItem(todo: todoItem) {
  return {
    type: actionTypes.add_item,
    payload: todo,
  };
}

export function deleteItem(item: todoItem) {
  return {
    type: actionTypes.delete_item,
    payload: item,
  };
}

export function completeItem(item: todoItem) {
  return {
    type: actionTypes.complete_item,
    payload: item,
  };
}

// reducer
const todoItemsListReady: todoItem[] = [
  {
    id : 1,
    title: "Buy bread",
    compeleted: false,
  },
  {
    id : 2,
    title: "Buy pepsi",
    compeleted: false,
  },
  {
    id : 3,
    title: "Buy Vegtables",
    compeleted: false,
  },
  {
    id : 4,
    title: "Buy Meat",
    compeleted: false,
  },
];


const todoItemsListDone: todoItem[] = [
  {
    id : 6,
    title: "Buy ticket",
    compeleted: true,
  },
  {
    id : 8,
    title: "Call doctor",
    compeleted: true,
  },
  {
    id : 9,
    title: "Air plane",
    compeleted: true,
  },
  {
    id : 10,
    title: "zoo bar",
    compeleted: true,
  },
];

let itemId : number = 10;
const initialState = {
  itemsReady: todoItemsListReady,
  itemsDone : todoItemsListDone
};


function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case actionTypes.add_item:
      action.payload.id = ++itemId
      return {
        ...state,
        itemsReady: [...state.itemsReady ,action.payload],
      };

    case actionTypes.complete_item:
      
      return {
        ...state,
        itemsReady: state.itemsReady.filter((item : todoItem)=> item.id !== action.payload.id),
        itemsDone: [...state.itemsDone , action.payload]
        
      };

    case actionTypes.delete_item:
      return {
        ...state,
        itemsReady: state.itemsReady.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
}

export default reducer;
