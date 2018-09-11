import React ,{Component} from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store";
import IndexPage from './pages/index/loadable';
import DetailPage from './pages/detail/loadable';

class App extends Component {
  render() {
    return (
          <Provider store={store}>
            <BrowserRouter>
                <div>
                  <Route exact path="/" component={IndexPage}/>
                  <Route path="/index" component={IndexPage}/>
                  <Route path="/detail/:id" component={DetailPage}/>
                </div>
              </BrowserRouter>
             </Provider>
            )  
          }   
}   
export default App;