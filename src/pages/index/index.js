import React ,{Component} from "react";
import HeaderComponent from "../../components/header";
import CarouselComponent from "../../components/carousel";
import {IndexWrapper} from "./style";
import  CollectionComponent from "./components/collection";
import NodeListComponent from "./components/nodelist";
import BoardComponent from "./components/board";
import QrBoxComponent from "./components/qrbox";
import RecommendComponent from "./components/recommend";
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
                
                {/*渲染列表数据*/}
                <div>
                    
                 <NodeListComponent history={this.context.router.history}/>
                
                </div> 
                
                    

                </div>

                <div className="gt">
                  
                   <BoardComponent></BoardComponent>

                   <div>
                      <QrBoxComponent></QrBoxComponent>
                   </div>

                   <div>
                      <RecommendComponent></RecommendComponent>
                   </div>

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

App.contextTypes = {
  router: PropTypes.object.isRequired
}


export default connect(null, null)(App);
