import React from 'react'
import {IState, IAction} from "../interfaces/user.interface";
import {FETCH_DATA, ADD_FAV, REMOVE_DATA} from '../constants/user.constant'

const initialize:IState = {
    episodes:[],
    favourites:[]
};

export const Store = React.createContext<IState | any>(initialize);

function reducer(state: IState, action: IAction):IState {
    switch (action.type) {
        case FETCH_DATA:
            return {...state, episodes:action.payload}
        case ADD_FAV:
            return {...state, favourites:[...state.favourites,action.payload]}
        case REMOVE_DATA:
            return {...state, favourites:action.payload}
        default:
            return state
    }
}


export function StoreProvider(props:any): JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialize);
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}
