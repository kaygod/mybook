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
                              <li>首页</li>
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
                      <img src="https://cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png"/>
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