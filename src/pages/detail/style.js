import styled from 'styled-components';

export const DetailWrapper = styled.div`

      .main{         
        width:960px;
        margin:56px auto;
        
        .lt{
            width:625px;
        }

        .gt{
            width:280px;
        }

        .margin40{
            margin-top:40px;
        }

        .article{
              
            margin: 0 auto;
            padding-top: 20px;
            padding-bottom: 40px;
            width: 620px;
            .title {
                word-break: break-word!important;
                word-break: break-all;
                margin: 20px 0 0;
                font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
                font-size: 34px;
                font-weight: 700;
                line-height: 1.3;
            }

        }

    }
`;

export const AuthorWapper = styled.div`
  
  .author{
            margin: 30px 0 40px;

           .avatar {
                width: 48px;
                height: 48px;
                vertical-align: middle;
                display: inline-block;
                img {
                    width: 100%;
                    height: 100%;
                    border: 1px solid #ddd;
                    border-radius: 50%;
                }
            }

            .info {
                vertical-align: middle;
                display: inline-block;
                margin-left: 8px;
                .name {
                    margin-right: 3px;
                    font-size: 16px;
                    vertical-align: middle;
                }
                .follow {
                        border-color: #42c02e;
                        padding: 0 7px 0 5px;
                        font-size: 12px;
                        font-weight: 400;
                        line-height: normal;
                        margin-left:5px;
                        span {
                            margin-left: 2px;
                            display: inline;
                        }
                        i{
                            font-size:14px;
                        }
                }
                .meta {
                    margin-top: 5px;
                    font-size: 12px;
                    color: #969696;
                    span {
                            padding-right: 5px;
                    }
                }
              
            }

        }

`;

export const ContentWapper = styled.div`
   
  .show-content {
    color: #2f2f2f;
    word-break: break-word!important;
    word-break: break-all;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    
     p {
          margin: 0 0 25px;
          word-break: break-word!important;
          word-break: break-all;
      }

 }

`;


export const ScannerWapper = styled.div`

    .web-note-ad-fixed {
        position: fixed;
        top: 80px;
        right: 50%;
        margin-right: -560px;
        width: 180px;
        height: 260px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 50%;

        img{
            width:100%;
            height:100%;
        }
    }

`;
