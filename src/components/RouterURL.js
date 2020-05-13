import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Main from './Main'
import P404 from './P404'
import Detail from './Detail'
export default class RouterURL extends Component {
     render() {
          return (
               <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="*" exact component={P404}/>
               </Switch>
            
          )
     }
}
