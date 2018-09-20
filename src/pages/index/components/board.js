import React ,{Component} from "react";
import {BoardWapper} from "../style";
import {connect} from "react-redux";
import { actions } from "../store";

class BoardComponent extends Component{
    
    render(){
        return (          
                <BoardWapper>
                     <div className="board">
                            {
                                this.props.boardlist.map((v)=>{
                                    return (                                      
                                    <a key={v.get("id")}>
                                      <img src={v.get("src")} alt="Banner s 3" />
                                    </a>
                                  )
                                })
                            }  
                     </div>
                </BoardWapper>
        ) 
    }
    
    componentDidMount(){
       this.props.getList();
    }
       
  }

  
  const mapState = (state) => ({
    boardlist: state.getIn(['homepage','boardlist'])
  })
  
  const mapDispatch = (dispatch) => ({
    getList(){
        dispatch(actions.getBoardList());
    }
  })
  
  export default connect(mapState, mapDispatch)(BoardComponent);


