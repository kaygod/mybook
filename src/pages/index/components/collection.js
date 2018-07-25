import React ,{Component} from "react";
import {CollectionWrapper} from "../style";

class CollectionComponent extends Component{
  
  render(){
      return (
          <CollectionWrapper>
              
              <div className="recommend-collection">
                <a class="collection" target="_blank" href="/c/20f7f4031550?utm_medium=index-collections&amp;utm_source=desktop">
                    <img src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64" />
                    <div class="name">社会热点</div>
                </a>
                <a class="collection" target="_blank" href="/c/fcd7a62be697?utm_medium=index-collections&amp;utm_source=desktop">
                    <img src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64"  />
                       <div class="name">故事</div>
               </a>            
               <a class="collection" target="_blank" href="/c/7b2be866f564?utm_medium=index-collections&amp;utm_source=desktop">
                 <img src="//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64"  />
                  <div class="name">摄影</div>
              </a>            
              <a class="collection" target="_blank" href="/c/cc7808b775b4?utm_medium=index-collections&amp;utm_source=desktop">
                 <img src="//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64"  />
                  <div class="name">自然科普</div>
              </a>            
              <a class="collection" target="_blank" href="/c/8c92f845cd4d?utm_medium=index-collections&amp;utm_source=desktop">
                <img src="//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64"  />
                <div class="name">手绘</div>
              </a>            
              <a class="collection" target="_blank" href="/c/V2CqjW?utm_medium=index-collections&amp;utm_source=desktop">
                <img src="//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64"  />
                 <div class="name">@IT·互联网</div>
              </a>            
              <a class="collection" target="_blank" href="/c/1hjajt?utm_medium=index-collections&amp;utm_source=desktop">
                <img src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64"  />
                <div class="name">简书电影</div>
              </a>

              <a class="more-hot-collection" target="_blank" href="/recommendations/collections?utm_medium=index-collections&amp;utm_source=desktop">
                 更多热门专题 <i class="iconfont ic-link"></i>
              </a>

              </div>
        
          </CollectionWrapper>
      ) 
  }

}

export default CollectionComponent;