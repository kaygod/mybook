import { fromJS } from 'immutable';
import * as constans from "./actionTypes"; 


const defaultState = fromJS({
	list:[
    {
      src:"//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
      title:"社会热点",
      id:1
    },
    {
      src:"//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
      title:"故事",
      id:2
    },
    {
      src:"//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
      title:"摄影",
      id:3
    },{
      src:"//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
      title:"自然科普",
      id:4
    },{
      src:"//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
      title:"@IT·互联网",
      id:5
    },{
      src:"//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64",
      title:"简书电影",
      id:6
    }
  ]
});

export default (state = defaultState, action) => {
     
    switch(action.type){
      case constans.GET_COLLECTIONS: return defaultState;break;
      default: return defaultState; 
    }

}


