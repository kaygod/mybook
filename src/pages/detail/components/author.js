import React ,{Component} from "react";
import {AuthorWapper} from "../style";

export default class AuthorComponent extends Component{
    
    render(){
        return (          
            <AuthorWapper>
                     
                <div className="author">
                        <a className="avatar" href="/u/a15ffc0e1a43">
                            <img src="/img/a1.png" alt="96" />
                        </a>          
                        <div className="info">
                    <span className="name">
                    <a href="/u/a15ffc0e1a43">云水禅心1</a></span>         
                    <a className="btn btn-success follow">
                    <i className="iconfont ic-follow">&#xe617;</i><span>关注</span></a>      
                    <div className="meta">
                        <span className="publish-time">2018.08.22 16:30</span>
                        <span className="wordage">字数 1252</span>
                        <span className="views-count">阅读 1893</span>
                        <span className="comments-count">评论 6</span>
                        <span className="likes-count">喜欢 23</span></div>
                    </div>
                </div>

            </AuthorWapper>
        ) 
    }
    
  
       
  }

  
  

