import styled from 'styled-components';

export const HeaderWrapper = styled.div`
   
      &.wapper{
          
          width:100%;
          height:58px;
          background-color:#fff;
          border-bottom:1px solid #f0f0f0;
      }

      .width-limit{
        width:80%;  
        margin: 0 auto;
      }

      .mainContent{
          width:960px;
          margin:0px auto;
          .left-section{
              li{
                  float:left;
                  margin-right: 10px;
                  >a{
                    position: relative;
                    display: block;
                    height: 56px;
                    line-height: 26px;
                    padding: 15px;
                    color: #333;
                    box-sizing: border-box;
                    font-size: 17px;
                    i{
                        margin-right:5px; 
                    }
                  }
                  &.current{
                      a{
                        color: #ea6f5a;
                        background: none;
                      }
                  }
              }
              .search{
                position: relative;
                top: 9px;
                 .search-input{
                    padding: 0 40px 0 20px;
                    width: 240px;
                    height: 38px;
                    font-size: 14px;
                    border: 1px solid #eee;
                    border-radius: 40px;
                    background: #eee;
                    transition: width .5s;
                    -moz-transition: width .5s;
                    -webkit-transition: width .5s;
                    -o-transition: width .5s;
                    transition-delay: .1s;
                    -moz-transition-delay: .1s;
                    -webkit-transition-delay: .1s;
                    -o-transition-delay: .1s;
                    box-sizing:border-box;
                    outline:none;
                 }
                 a{
                    position: absolute;
                    top: 4px;
                    right: 5px;
                    width: 30px;
                    height: 30px!important;
                    line-height: normal!important;
                    padding: 0!important;
                    color: #969696!important;
                    text-align: center;
                    i{
                        margin: 7px -1px 0 0;
                        display: block;
                    }
                    &.active{
                        border-radius:50%;
                        background-color:#969696;
                        i{
                            color:#fff;
                        }
                    }
                 }
                 #navbar-search-tips{
                    margin-top: 9px;
                    width: 250px;
                    left: 0;
                    top: 100%;
                    visibility: hidden;
                    opacity: 0;
                    border-radius: 4px;
                    box-sizing: border-box;
                    .search-trending {
                        padding: 20px 20px 10px;
                        border-bottom: 1px solid #f0f0f0;
                        box-sizing: border-box;
                        .search-trending-header {
                            height: 20px;
                            margin-bottom: 10px;
                            span {
                                float: left;
                                font-size: 14px;
                                color: #969696;
                            }
                            a {
                                float: right;
                                font-size: 13px;
                                color: #969696;
                                background-color: transparent;
                                border-width: 0;
                                padding: 0;
                                i {
                                    display: inline-block;
                                    line-height: 1;
                                    transition: .5s ease;
                                }
                            }
                        }
                        .search-trending .search-trending-tag-wrap {
                            font-size: 0;
                            li {
                                margin-right: 10px;
                                display: inline-block;
                                line-height: 28px;
                                a {
                                    padding: 2px 6px;
                                    font-size: 12px;
                                    color: #787878;
                                    border: 1px solid #ddd;
                                    border-radius: 3px;
                                }
                            }
                        }
                    }
                 }
                 #navbar-search-tips:before {
                    position: absolute;
                    background-color: #fff;
                    box-shadow: 0 0 8px rgba(0,0,0,.2);
                }
              }
          }
          .right-section{
            div{
                float:right;
                margin-left: 10px;
                a{
                  position: relative;
                  display: block;
                  height: 56px;
                  line-height: 26px;
                  padding: 15px;
                  color: #969696;
                  box-sizing: border-box;
                  font-size: 15px;
                  i{
                      margin-right:5px; 
                  }
                }
            }
            .login{
                font-size:18px;
            }   
          } 
      }    
      .logo{
          position:absolute;
          left:200px;
          top:0px;
          height:56px;
          img{
              width:100px;
              height:59px;
          }
      }
      .other{
          position:absolute;
          height:56px;
          top:0px;
          right:220px;
          a{
              float:left;
              width: 80px;
              height: 38px;
              line-height: 24px;
              margin: 9px 5px 0 15px;
              border: 1px solid rgba(236,97,73,.7);
              border-radius: 20px;
              font-size: 15px;
              color: #ea6f5a;
              background-color: transparent;
              font-weight: 400;
              text-align: center;
              vertical-align: middle;
              -ms-touch-action: manipulation;
              touch-action: manipulation;
              cursor: pointer;
              background-image: none;
              white-space: nowrap;
              padding: 6px 12px;
              box-sizing:border-box;
          }
          .regist{

          }
          .write{
              i{
                margin-right: 3px;
                font-size: 19px;
                vertical-align: middle;
              }
              width: 100px;
              height: 40px;
              line-height: 24px;
              margin: 8px 15px 0;
              border-radius: 20px;
              font-size: 15px;
              color: #fff;
              background-color: #ea6f5a;
          } 
      }
      

`;

