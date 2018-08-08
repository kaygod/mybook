import React , {Component} from "react";
import {HeaderWrapper} from "./style";

class HeaderComponent extends Component{
  
    render(){
       return (
        <HeaderWrapper className="wapper">
            <div className="width-limit">
                   <div className="mainContent">
                       <div className="lt">
                          <ul className="left-section">
                              <li className="current"><a><i className="iconfont">&#xe69b;</i>首页</a></li>
                              <li><a><i className="iconfont">&#xe6f0;</i>下载APP</a></li>
                              <li>
                                   <form className="search">
                                       <input type="text" placeholder="搜索" className="search-input"/>
                                        <a>
                                             <i className="iconfont">&#xe625;</i>
                                        </a>
                                        <div id="navbar-search-tips">
                                          <div className="search-trending">
                                             <div className="search-trending-header clearfix">
                                               <span>热门搜索</span> 
                                               <a><i className="iconfont ic-search-change"></i> 换一批</a>
                                             </div> 
                                             <ul className="search-trending-tag-wrap">
                                                <li>
                                                    <a target="_blank">区块链</a>
                                                </li>
                                                <li>
                                                    <a target="_blank">小程序</a>
                                                </li>
                                            </ul>
                                          </div>
                                        </div>
                                   </form>
                              </li>  
                          </ul>
                       </div>
                       <div className="gt right-section">
                         <div><a>登录</a></div>
                         <div><a className="login"><i className="iconfont">&#xe636;</i></a></div>               
                       </div>
                       <div className="clear"></div>
                   </div>
                   <div className="logo">
                      <img src="./img/12.png"/>
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

export default HeaderComponent;