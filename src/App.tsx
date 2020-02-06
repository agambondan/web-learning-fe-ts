import React from 'react';
import {Router} from '@reach/router'
import UserComponent from "./publish/components/authentications/user.component";
import Home from "./publish/components/home/home";
import {RouterPage} from "./publish/router/router.component";
import HeaderLayout from "./publish/components/home/layout/header.layout";

export default function App(){

  return(
      <div>
          <HeaderLayout/>
          <Router>
              <RouterPage pageComponent={<UserComponent/>} path='/user'/>
              <RouterPage pageComponent={<Home/>} path='/'/>
          </Router>
      </div>

  )
}
