import React ,{Component} from "react";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {DetailWrapper} from "./style";
import HeaderComponent from "../../components/header";
import AuthorComponent from "./components/author";
import ContentComponent from "./components/content";
import ScannerComponent from "./components/scanner";
import PropTypes from 'prop-types';

class DetailPage extends Component{

  constructor(){
      super();
  }  
  
  render(){
      return (
        <DetailWrapper>
        <HeaderComponent history={this.context.router.history}/>
        <div className="main">
            
            <div className="lt">
                
                <div className="article">
                     <h1 className="title">一个出轨男人的真实故事</h1>

                     <div>
                        <AuthorComponent/>
                     </div>

                     <div>
                       <ContentComponent/>
                     </div> 

                </div>          
                

            </div>

            <div className="gt">
             
            <ScannerComponent></ScannerComponent>

            </div>

            <div className="clear"></div>

        </div>                
      </DetailWrapper>              
      ) 
  }

  componentDidMount(){
    console.log(this.props.match.params);
  }

}


const mapState = (state) => ({
	
});

const mapDispatch = (dispatch) => ({
	getDetail(id) {
	
	}
});

DetailPage.contextTypes = {
  router: PropTypes.object.isRequired
}


export default withRouter(connect(null, null)(DetailPage));
