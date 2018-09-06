import React ,{Component} from "react";
import {QrBoxWapper} from "../style";

export default class QrBoxComponent extends Component{
    
    render(){
        return (          
                <QrBoxWapper>
                     
                     <a className="col-xs-8 download">
                            <img className="qrcode" src="./img/download-index-side-qrcode.png" alt="Download index side qrcode" />
                            <div className="info">
                              <div className="title">下载简书手机App<i className="iconfont ic-link"></i></div>
                              <div className="description">随时随地发现和创作内容</div>
                            </div>
                    </a>

                </QrBoxWapper>
        ) 
    }
    
  
       
  }

  
  

