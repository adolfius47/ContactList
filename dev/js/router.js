"use strict";
import React from "react";
import {hashHistory, IndexRoute, Route, Router} from "react-router";

import App from './Components/App'
import AddContact from './Components/AddContact'
import EditContact from './Components/EditContact'

import ContactList from './Components/ContactList'
const createRouter = (getState, dispatch) => {


    return (
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={ContactList}/>
                <Route path='/create' component={AddContact}/>
                <Route path='/edit/:id' component={EditContact}/>

            </Route>
        </Router>
    )
}

export default createRouter;
