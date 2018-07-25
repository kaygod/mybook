import React , {Component} from "react";
import {CarouselWrapper} from "./style";

class CarouselComponent extends Component{
  
    render(){
       return (
         <CarouselWrapper>
             <a target="_blank" href="https://www.jianshu.com/mobile/audio/fm?utm_medium=index-banner&amp;utm_source=desktop">
              <img src="//upload.jianshu.io/admin_banners/web_images/4353/ee6b0e57da4752ae7760f72e496cbc2afe8c40d9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
             </a>
         </CarouselWrapper>
       ) 
    }

}

export default CarouselComponent;