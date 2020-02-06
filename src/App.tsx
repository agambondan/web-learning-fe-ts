import React from 'react';

import {RouteComponentProps, Router} from '@reach/router'
import UserComponent from "./publish/components/authentications/user.component";
import ArticleComponent from "./publish/components/home/page/article.component";
import HeaderLayout from "./publish/components/home/layout/header.layout";

const RouterPage = (props: {pageComponent: JSX.Element}& RouteComponentProps ) => props.pageComponent

export default function App(){
  return(
      <Router>
          {/*<HeaderLayout/>*/}
          <RouterPage pageComponent={<UserComponent/>} path='/user'/>
          <RouterPage pageComponent={<ArticleComponent/>} path='/post'/>
      </Router>
  )
}
