import React from 'react';
import { Router, Switch, Route } from "react-router-dom";
import history from './history';
import FileUpload from './components/FileUpload';
import Questionaries from './components/Questionaries';

const Routes = () => (
    <Router history={history}>
                <Switch>
                    {/* <Route path="/" exact component={FileUpload} /> */}
                    {/* <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />  */}
                    <Route path="/Questionaries" component={Questionaries} />
                </Switch>
            </Router>
  );
  
  export default Routes;