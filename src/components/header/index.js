import React , {Component} from "react";
import {HeaderWrapper} from "./style";

class HeaderComponent extends Component{
  
    render(){
       return (
        <HeaderWrapper className="wapper">
            <div className="width-limit">
                   <div className="mainContent">
                       <div className="lt">
                          <ul>
                              <li><i className="iconfont">&#xe69b;</i>首页</li>
                              <li>下载APP</li>
                              <li>搜索</li>  
                          </ul>
                       </div>
                       <div className="gt">
                         <div>Aa</div>
                         <div>登录</div>
                       </div>
                   </div>
                   <div className="logo">
                      <img src="./img/12.png"/>
                   </div>
                   <div className="other">
                      <div>注册</div>
                      <div>写文章</div>
                   </div>
            </div>
        </HeaderWrapper> 
       ) 
    }

}

export default HeaderComponent;