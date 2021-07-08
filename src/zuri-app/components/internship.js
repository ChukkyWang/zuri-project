import React, {Fragment, lazy, Suspense} from 'react'
import TrainingHeader from './props/training-header'
import { CURRICULUM, CONTACT, ENROL, INTERNSHIP } from './utils/routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


//Training Sub Page
const Enrol  = lazy(() => import("./training-routes/enrol"))
const Contact  = lazy(() => import("./training-routes/contact"))
const InternHome  = lazy(() => import("./internship-routes"))
const Curriculum = lazy(() => import("./training-routes/curriculum"))
function Internship() {
        const trainingRoutes = ([
                {
                        route: INTERNSHIP,
                        routeComponent: InternHome,
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

export default Internship
