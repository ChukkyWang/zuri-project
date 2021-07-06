import React, {Fragment, lazy, Suspense} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TrainingHeader from './props/training-header'
import { CONTACT, CURRICULUM, ENROL, TRAINING } from './utils/routes'


//Training Sub Page
const Enrol  = lazy(() => import("./training-routes/enrol"))
const Contact  = lazy(() => import("./training-routes/contact"))
const Training  = lazy(() => import("./training-routes"))
const Curriculum = lazy(() => import("./training-routes/curriculum"))




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
                        <Router>
                                <TrainingHeader/>
                                <Suspense fallback="Lo">
                                        <Switch>
                                                {
                                                        trainingRoutes.map(route => (
                                                                <Route exact={route.exact} path={route.route} component={route.routeComponent}/>
                                                        ))
                                                }
                                        </Switch>
                                </Suspense>
                        </Router>
                </Fragment>
        )
}

export default ZuriTraining
