import React, {useContext, useEffect} from 'react'
import {Store} from '../../reducers/article.reducer'
import {FETCH_DATA_CONTENT} from "../../constants/article.constant";
import { getDataArticles } from '../../services/article.service';
import HeaderLayout from "./layout/header.layout";
import {RouterPage} from "../../router/router.component";

const ArticleListComponent = React.lazy<any>(()=> import('./page/articleList.page'));

export default function Home():JSX.Element{

    const {state, dispatch} = useContext(Store);

    React.useEffect(()=>{
        state.articles.length === 0 && fetchDataContent();
    })

    const fetchDataContent=async ()=>{
        const dataArticles = await getDataArticles();
        return dispatch({
          type: FETCH_DATA_CONTENT,
          payload : dataArticles.articles
        })
    };

    const props ={
        articles:state.articles
    };

return(
    <React.Fragment>
        <br/>
        <div className="container mt-5 mb-5">
            <React.Suspense fallback={<div>loading......</div>}>
            <section>
                <div className="row">
               <div className="col-8 mr-1">
                   <div className="hoverable p-5 border">
                       <RouterPage pageComponent={<ArticleListComponent {...props}/>} path='/article'/>
                   </div>
               </div>
                    <div className="col-3">
                        <ul className="list-group">
                            <li className="list-group-item active">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>
            </section>
            </React.Suspense>
        </div>
    </React.Fragment>
)
}
