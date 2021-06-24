import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../pages/home'
import Simpsons from '../pages/simpsons'
import Gato from '../pages/gatos'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/simpsons' component={Simpsons} />
                <Route path='/gatos' component={Gato} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes