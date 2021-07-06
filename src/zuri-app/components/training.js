import React, {Fragment, lazy, Suspense} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TrainingHeader from './props/training-header'
import { CONTACT, CURRICULUM, ENROL, TRAINING } from './utils/routes'


//Training Sub Page
import Enrol from './training-routes/enrol'
import Contact from './training-routes/contact'
import Training from './training-routes'
import Curriculum from './training-routes/curriculum'

function ZuriTraining() {
        const trainingRoutes = ([
                {
                        route: TRAINING,
                        routeComponent: Training,
                        exact: true
                },
                {
                        route: CURRICULUM,
                        routeComponent: Curriculum,
                        exact: false
                },
                {
                        route: CONTACT,
                        routeComponent: Contact,
                        exact: false
                },
                {
                        route: ENROL,
                        routeComponent: Enrol,
                        exact: false
                },
        ])
        return (
                <Fragment>
                        <TrainingHeader/>
                        <Router>
                                <Switch>
                                        {
                                                trainingRoutes.map(route => (
                                                        <Route exact={route.exact} path={route.route} component={route.routeComponent}/>
                                                ))
                                        }
                                </Switch>
                        </Router>
                </Fragment>
        )
}

export default ZuriTraining
