import React ,{Component} from "react";
import {CollectionWrapper} from "../style";
import {connect} from "react-redux";
import {getCollections} from "../store/actions"; 


class CollectionComponent extends Component{
  render(){
    const {list} =this.props;
      return (
          <CollectionWrapper>
              <div className="recommend-collection">             
                 {this.renderList(list)}
              </div>
        
          </CollectionWrapper>
      ) 
  }
  
  componentDidMount() {
    this.renderPage();
  }

  renderPage(){//渲染热门专题
     this.props.renderCollections();
  }

  renderList(list){//渲染列表数据
     return list.map((item)=>{
        return (
            <a key={item.get("id")} className="collection" target="_blank" href="/c/20f7f4031550?utm_medium=index-collections&amp;utm_source=desktop">
                <img src={item.get("src")} alt="64" />
                <div className="name">{item.get("title")}</div>
            </a>
        )
     })
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

