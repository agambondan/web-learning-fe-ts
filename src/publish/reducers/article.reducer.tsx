import React from "react";
import {ContentAction, PublishContent} from '../interfaces/article.interface'
import { FETCH_DATA_CONTENT } from "../constants/article.constant";
import {IState} from "../interfaces/user.interface";

const initialize: PublishContent = {
    articles:[]
}

export const Store = React.createContext<IState | any>(initialize);


function ArticleReducer(state: PublishContent, action:ContentAction):PublishContent{
    switch (action.type) {
        case FETCH_DATA_CONTENT :
            return {...state, articles:action.payload}
        default: return state
    }
}

export function PublishStoreProvider(props:any): JSX.Element {
    const [state, dispatch] = React.useReducer(ArticleReducer, initialize);
    return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}

