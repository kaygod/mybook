import React ,{Component} from "react";
import HeaderComponent from "../../components/header";
import CarouselComponent from "../../components/carousel";
import {IndexWrapper} from "./style";
import  CollectionComponent from "./components/collection";
import {Link} from 'react-router-dom';
class App extends Component{
  
  render(){
      return (
          <IndexWrapper>
            <HeaderComponent/>
            <div className="main">
                
                <div className="lt">
                    
                 <CarouselComponent />
                  
                <div className="margin40">
                  <CollectionComponent/>        
                </div> 
                
                    

                </div>

                <div className="gt">
                
                
                </div>

            </div>                
          </IndexWrapper>
      ) 
  }

}

export default App;