import React ,{Component} from "react";
import {RecommendWapper} from "../style";
import {actions} from "../store/index";
import {connect} from "react-redux";
import RotateComponent from "../../../components/rotate";
class RecommendComponent extends Component{
    
    render(){
        return (          
                <RecommendWapper>
                  <div className="recommended-authors">
                  <div className="title">
                    <span>推荐作者</span>
                     <div className="page-change">
                       <RotateComponent clickEvent={()=>{this.nextPage(this)}}></RotateComponent>
                     </div> 
                  </div>
                   <ul className="list">
                     
                     {this.renderList()}
                                    
                   </ul>
                  
                  </div>                
                </RecommendWapper>
        ) 
    }

    nextPage(_this){
      
        

    }

   

    renderList(){
     return this.props.list.map((v,index)=>{
        return (
            <li key={index}>
                <a className="avatar">
                <img src={v.get("src")} />
                </a> 
                <a className="follow" state="0">
                <i className="iconfont">&#xe617;</i>
                关注
                </a> 
                <a className="name">
                {v.get("name")}
                </a> 
                <p>
                    写了{v.get("write_num")}k字 · {v.get("love_num")}k喜欢
                </p>
           </li>
        )
     })

    }

    componentDidMount(){
        this.props.renderRecommends();
    }
    
  
       
  }


  const mapState = (state) => ({
	list: state.getIn(['homepage','recommendlist'])
  })

const mapDispatch = (dispatch) => ({
	renderRecommends(){
         dispatch(actions.getRecommendList());
    }
})

export default connect(mapState, mapDispatch)(RecommendComponent);

  
  

