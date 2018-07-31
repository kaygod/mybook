import React ,{Component} from "react";
import HeaderComponent from "../../components/header";
import CarouselComponent from "../../components/carousel";
import {IndexWrapper} from "./style";
import  CollectionComponent from "./components/collection";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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

const mapState = (state) => ({
	
});

const mapDispatch = (dispatch) => ({
	getDetail(id) {
	
	}
});

export default connect(null, null)(App);
