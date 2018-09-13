import React ,{Component} from "react";
import {AuthorWapper} from "../style";

export default class AuthorComponent extends Component{
    
    render(){
        return (          
            <AuthorWapper>
                     
                <div class="author">
                        <a class="avatar" href="/u/a15ffc0e1a43">
                            <img src="/img/a1.png" alt="96" />
                        </a>          
                        <div class="info">
                    <span class="name">
                    <a href="/u/a15ffc0e1a43">云水禅心1</a></span>         
                    <a class="btn btn-success follow">
                    <i class="iconfont ic-follow">&#xe617;</i><span>关注</span></a>      
                    <div class="meta">
                        <span class="publish-time">2018.08.22 16:30</span>
                        <span class="wordage">字数 1252</span>
                        <span class="views-count">阅读 1893</span>
                        <span class="comments-count">评论 6</span>
                        <span class="likes-count">喜欢 23</span></div>
                    </div>
                </div>

            </AuthorWapper>
        ) 
    }
    
  
       
  }

  
  

