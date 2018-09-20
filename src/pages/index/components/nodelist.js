import React ,{Component} from "react";
import {NoteListWapper} from "../style";
import {connect} from "react-redux";
import { actions } from "../store";

class NodeListComponent extends Component{

    getNodeList(){
        let { nodelist } =this.props;
        return nodelist.map((item)=>{
       
          if(item.get("img")!==undefined){

              return (
                
                <li className="have-img" key={item.get("id")} onClick={()=>{this.jump(item)}}>
                    <a className="wrap-img" target="_blank">
                    <img className="img-blur-done" src={item.get("img")} alt="120" />
                    </a>
                    <div className="content">
                        <a className="title" target="_blank">{item.get("title")}</a>
                        <p className="abstract">
                             {item.get("content")}
                        </p>
                        <div className="meta">
                        <a className="nickname" target="_blank">{item.get("name")}</a>
                        <a target="_blank">
                            <i className="iconfont">&#xe606;</i> {item.get("msgs")}
                        </a>      
                        <span><i className="iconfont">&#xe611;</i> {item.get("likes")}</span>
                        </div>
                    </div>
                </li>

              )
            }else{
              return (
                 <li key={item.get("id")} onClick={()=>{this.jump(item)}}>
                    <div className="content">
                        <a className="title" target="_blank">{item.get("title")}</a>
                        <p className="abstract">
                          {item.get("content")}
                        </p>
                        <div className="meta">
                        <a className="nickname" target="_blank">{item.get("name")}</a>
                        <a target="_blank">
                            <i className="iconfont">&#xe606;</i> {item.get("msgs")}
                        </a>      
                        <span><i className="iconfont">&#xe611;</i> {item.get("likes")}</span>
                        </div>
                    </div>
                </li>
              )
            }
        })
    }

    render(){
        return (
            <NoteListWapper>
               
               <ul className="note-list">                   
                     {this.getNodeList()}
               </ul>
          
            </NoteListWapper>
        ) 
    }
    
    componentDidMount(){
        this.props.getList();
    }

    jump(item){
        this.props.history.push(`/detail/${item.get("id")}`);
    }
       
  }

  
  const mapState = (state) => ({
    nodelist: state.getIn(['homepage','nodelist'])
  })
  
  const mapDispatch = (dispatch) => ({
    getList(){
        dispatch(actions.getNodeList());
    }
  })

  export default connect(mapState, mapDispatch)(NodeListComponent);


