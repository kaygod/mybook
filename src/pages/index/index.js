import React ,{Component} from "react";
import HeaderComponent from "../../components/header";
import {Link} from 'react-router-dom';
class App extends Component{
  
  render(){
      return (
          <div>
                <HeaderComponent/>

                <Link to="/detail">调到详情页</Link>  
                 
          </div>
      ) 
  }

}

export default App;