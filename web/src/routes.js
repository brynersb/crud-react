import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Create from './pages/create';
import Edit from './pages/edit';
import List from './pages/list';
import Cliente from './pages/cliente';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={List} />
                <Route path="/create" component={Create} />
                <Route path="/edit" component={Edit} />
                <Route path="/cliente/:id" component={Cliente} />
            </Switch>
        </BrowserRouter>

    );

}

export default Routes;