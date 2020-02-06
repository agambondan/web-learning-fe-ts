import React from 'react'
import {IEpisode} from "../../interfaces/user.interface";

export default function UserListComponent(props:any): Array<JSX.Element> {
    const {episodes, toggleFavAction, favourites} = props;
    return episodes.map((episode: IEpisode ) =>{
            return (
                <section key={episode.id}>
                    <img src={episode.image.medium} alt={`Rick and Mort ${episode.name}`}/>
                    <div>{episode.name}</div>
                    <section>
                        <div>season : {episode.season} Number : {episode.number}</div>
                        <button type="button" onClick={()=> toggleFavAction(episode)}>
                            {favourites.find((fav:IEpisode)=> fav.id === episode.id)?'UnFav' : 'Fav'}
                        </button>
                    </section>
                </section>
            )
        })
}
