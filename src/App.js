import React, {useEffect, lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


//Styles
import './zuri-app/assets/style/root/style.css'
import ZuriFooter from './zuri-app/components/props/footer';




//Constant Routes
import { HOME, TRAINING } from './zuri-app/components/utils/routes'


//Routes Components
const Home = lazy(() => import("./zuri-app/components"));
const ZuriTraining = lazy(() => import("./zuri-app/components/training"))




function App() {
  return (
    <Router>
      <Suspense fallback="">
          <div className="_zuri_training">
            <Switch>
              <Route exact path={HOME} component={Home}/>
              <Route path={TRAINING} component={ZuriTraining}/>
            </Switch>
          </div>
      </Suspense>
      <ZuriFooter/>
    </Router>
    
  );
}

export default App;
