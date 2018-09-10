import React , {Component} from "react";
import {RotateWrapper} from "./style";

class RotateComponent extends Component{
    
   constructor(){
     super();
     this.state={
         rotate:"0deg",
         rotateStyle:{
            transform:"rotate(0deg)"
         }
     }
     this.nextPage=this.nextPage.bind(this);
   }

    render(){
       return (
        <RotateWrapper>
              <a className="rotate-page" onClick={this.nextPage}>
                  <i className="iconfont" style={this.state.rotateStyle}>&#xe64e;</i>
                  换一批
              </a>
        </RotateWrapper>
       ) 
    }

    nextPage(){
      let value=parseInt(this.state.rotate)+360+"deg";
      this.setState({
        rotateStyle:{
          transform:"rotate("+value+")",
        },
        rotate:value
      })
      this.props.clickEvent();
    }

}

export default RotateComponent;