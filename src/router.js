import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import IndexPage from './pages/index/loadable';
import DetailPage from './pages/detail/loadable';

const App = () => (
    <Router>
      <div>
        <Route exact path="/" component={IndexPage}/>
        <Route path="/index" component={IndexPage}/>
        <Route path="/detail" component={DetailPage}/>
      </div>
    </Router>
  )
export default App;