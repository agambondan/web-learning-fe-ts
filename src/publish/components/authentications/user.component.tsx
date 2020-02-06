import React, {Fragment, useContext}from 'react'
import {Store} from '../../reducers/user.reducer'
import {getUserData} from "../../services/user.service";
import {IEpisode, IAction} from "../../interfaces/user.interface";
import {FETCH_DATA, ADD_FAV, REMOVE_DATA} from '../../constants/user.constant'


const UserListComponent = React.lazy<any>(()=> import('./userList.component'))
export default function UserComponent():JSX.Element {

   const {state, dispatch} = React.useContext(Store);

   React.useEffect(()=>{
       state.episodes.length === 0 && fetchDataAction();
   });

   const fetchDataAction= async ()=>{
           const data = await getUserData();
           return dispatch({
               type: FETCH_DATA,
               payload:data._embedded.episodes
           })
   };

    const toggleFavAction =(episode:IEpisode):IAction => {
        const episodeInFav = state.favourites.includes(episode);
        let dispatchObj = {
            type: ADD_FAV,
            payload: episode
        };
        if (episodeInFav){
            const favWithoutEpisode = state.favourites.filter((fav:IEpisode) => fav.id !== episode.id)
            dispatchObj ={
                type: REMOVE_DATA,
                payload: favWithoutEpisode
            }
        }

        return dispatch(dispatchObj);
    };

    const props ={
        episodes: state.episodes,
        toggleFavAction,
        favourites:state.favourites
    }

    return(
       <React.Fragment>
           {console.log(state)}
           <h1>FAVORITE : {state.favourites.length}</h1>
           <React.Suspense fallback={<div>loading...</div>}>
           <section style={{display:"inline-flex"}}>
               <UserListComponent {...props}/>
           </section>
           </React.Suspense>
       </React.Fragment>
   )
}
