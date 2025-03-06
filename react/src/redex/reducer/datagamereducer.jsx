import { produce } from 'immer'
import { act } from 'react';

export const mystore = {

  listGame: [

  ]
}

export const datagamereducer = produce((state, action) => {
  switch (action.type) {
    case "CHANGEFLAG":
      {
        let index = state.listGame.findIndex(a => a.code == action.payload)
        state.listGame[index].flag = true;
      }
      break;
    case "CHANGEFLAGAGAIN":
      {
        let index = state.listGame.findIndex(a => a.code == action.payload)
        state.listGame[index].flag = false;
      }
      break;
    case "DELLGAME": { state.listGame = state.listGame.filter(x => x._id !== action.payload) }
      break;
    case "ADDGAME": { state.listGame.push(action.payload) }
      break;
    case "ONLOADGAME": { debugger; state.listGame = action.payload }
      break;
    case "UPDATE_GAME": {
      const index = state.listGame.findIndex((game) => game._id === action.payload._id);
      if (index !== -1) {
        return {
          ...state,
          listGame: state.listGame.map((game, i) => (i === index ? action.payload : game)),
        };
      }
      return state;
    }

      break;
    case "GET_BY_CATEGORY_ID": state.listGame = action.payload
      break;

    default:
      break;
  }
}, mystore)