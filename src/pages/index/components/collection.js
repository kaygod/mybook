import React ,{Component} from "react";
import {CollectionWrapper} from "../style";
import {connect} from "react-redux";
import {getCollections} from "../store/actions"; 

class CollectionComponent extends Component{
  
  render(){
      return (
          <CollectionWrapper>
              
              <div className="recommend-collection">
                <a className="collection" target="_blank" href="/c/20f7f4031550?utm_medium=index-collections&amp;utm_source=desktop">
                    <img src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
                    <div className="name">社会热点</div>
                </a>

                {
					this.state.list.map((item, index) => {
						return (
							<div></div>
						);
					})
				}
               
              </div>
        
          </CollectionWrapper>
      ) 
  }
  
  componentDidMount() {
    this.render();
  }

  render(){//渲染热门专题
     this.props.renderCollections();
  }


}


const mapState = (state) => ({
	list: state.getIn(['homepage','list'])
})

const mapDispatch = (dispatch) => ({
	renderCollections(){
         dispatch(getCollections());
    }
})

export default connect(mapState, mapDispatch)(CollectionComponent);

