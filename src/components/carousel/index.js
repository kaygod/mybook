import React , {Component} from "react";
import {CarouselWrapper} from "./style";

class CarouselComponent extends Component{
  
    render(){
       return (
         <CarouselWrapper>
             <a target="_blank">
              <img src="./img/11.jpg" alt="540" />
             </a>
         </CarouselWrapper>
       ) 
    }

}

export default CarouselComponent;