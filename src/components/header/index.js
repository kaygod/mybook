import React , {Component} from "react";
import {HeaderWrapper} from "./style";
import { CSSTransition } from 'react-transition-group';
import {connect} from "react-redux";
import {getKeyWords} from "./store/actions"; 

class HeaderComponent extends Component{

    constructor(props){
      super(props);
      this.state={
          isFocus:2,//1表示input框聚焦了 2表示失去了焦点
          isInner:false,//false 鼠标没有处于热门搜索框 true鼠标处于热门搜索框
          rotating:false,//旋转的状态
          degree:0,
          curpage:1,
          size:10//每页显示多少个
      }
      this.handleClick= this.handleClick.bind(this);
      this.update= this.update.bind(this);
      this.jump= this.jump.bind(this);
    }

    handleClick(type){
        this.setState((prevState, props) => {
            if(type!=prevState.isFocus){
               return {
                isFocus:type
               }
            }
        });
    }

    changeInnerState(flag){//改变isInner状态
      this.setState({
        isInner:flag  
      })
    }

    update(){//换一批
        var totalpage=Math.ceil(this.props.list.size/this.state.size);
        this.setState((prevState)=>{
            var page=prevState.curpage+1;
            if(prevState.curpage==totalpage){
              page=1;
            }
            return {
                curpage:page,
                rotating:!prevState.rotating,
                degree:prevState.degree+360
            }     
        });
    }

    toggleSearchWord(){//切换热门搜索词
      if(this.state.isInner || this.state.isFocus==1){
        const {list} =this.props;
        return (
            <div id="navbar-search-tips" onMouseEnter={()=>{this.changeInnerState(true)}} onMouseLeave={()=>{this.changeInnerState(false)}}>
            <div className="search-trending">
               <div className="search-trending-header clearfix">
                 <span>热门搜索</span> 
                 <a className="hand" onClick={this.update}>
                 <CSSTransition
                    in={this.state.rotating == true}
                    timeout={250}
                    classNames="rotate"          
                    onExited={() => {
                        this.setState({
                            rotating: false
                        });
                    }} 
                  > 
                     <i className="iconfont ic-search-change">&#xe64e;</i>
                  </CSSTransition>
                  &nbsp;换一批</a>
               </div> 
               <ul className="search-trending-tag-wrap">
                 {this.renderList(list)}              
              </ul>
            </div>
           </div>
          );

      }else{
        return null;
      }
    }

    renderList(list){
       var size=this.state.size; 
       var startIndex=(this.state.curpage-1)*size;
       var keyword=list.slice(startIndex,startIndex+size);
       return keyword.map((item)=>{
            return (
                <li key={item.get("id")}>
                  <a target="_blank">{item.get("name")}</a>
                </li>
            )
         })
    }

    componentDidMount(){
        this.props.renderKeyWord();
    }

    jump(){
        this.props.history.push(`/index`);
    }
    
    render(){
       return (
        <HeaderWrapper className="wapper"  degree={this.state.degree}>
            <div className="width-limit">
                   <div className="mainContent">
                       <div className="lt">
                          <ul className="left-section">
                              <li className="current"><a onClick={this.jump}><i className="iconfont">&#xe69b;</i>首页</a></li>
                              <li><a><i className="iconfont">&#xe6f0;</i>下载APP</a></li>
                              <li>
                                   <form className={this.state.isFocus==2?"search":"search active"}>
                                       <input type="text" onFocus={()=>{this.handleClick(1)}} onBlur={()=>{this.handleClick(2)}} placeholder="搜索" className="search-input"/>
                                        <a>
                                             <i className="iconfont">&#xe625;</i>
                                        </a>
                                        {this.toggleSearchWord()}
                                   </form>
                              </li>
                              <li className="clear"></li>  
                          </ul>
                       </div>
                       <div className="gt right-section">
                         <div><a>登录</a></div>
                         <div><a className="login"><i className="iconfont">&#xe636;</i></a></div>               
                       </div>
                       <div className="clear"></div>
                   </div>
                   <div className="logo" onClick={this.jump}>
                      <img src="/img/12.png"/>
                   </div>
                   <div className="other">
                      <a className="regist">注册</a>
                      <a className="write">
                        <i className="iconfont">&#xe6ca;</i>写文章
                      </a>
                   </div>
            </div>
        </HeaderWrapper> 
       ) 
    }

}

const mapState = (state) => ({
	list: state.getIn(['keyword','list'])
})

const mapDispatch = (dispatch) => ({
	renderKeyWord(){
         dispatch(getKeyWords());
    }
})

export default connect(mapState, mapDispatch)(HeaderComponent);
