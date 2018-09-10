import styled from 'styled-components';

export const IndexWrapper = styled.div`

      .main{         
        width:960px;
        margin:40px auto;
        
        .lt{
            width:625px;
        }

        .gt{
            width:280px;
        }

        .margin40{
            margin-top:40px;
        }

      }
`;

export const CollectionWrapper = styled.div`
   
    .recommend-collection{
        margin-bottom: 20px;
        .collection{
            display: inline-block;
            margin: 0 18px 18px 0;
            min-height: 32px;
            background-color: #f7f7f7;
            border: 1px solid #dcdcdc;
            border-radius: 4px;
            vertical-align: top;
            overflow: hidden;
            color: #333;
            img {
                width: 32px;
                height: 32px;
                vertical-align: middle;
            }
            .name {
                display: inline-block;
                padding: 0 11px 0 6px;
                font-size: 14px;
            }
        }
        .more-hot-collection{
            display: inline-block;
            margin-top: 7px;
            font-size: 14px;
            color: #787878;
            text-decoration:none;
        }
    }
      
`;

export const NoteListWapper = styled.div`
  
    .note-list {
        margin: 0;
        padding: 0;
        list-style: none;
        .have-img {
            min-height: 140px;
            >div {
                padding-right: 140px;
            }
        }
        li {
            position: relative;
            width: 100%;
            margin: 0 0 15px;
            padding: 15px 2px 20px 0;
            border-bottom: 1px solid #f0f0f0;
            word-wrap: break-word;
            .wrap-img {
                position: absolute;
                top: 50%;
                margin-top: -60px;
                right: 0;
                width: 125px;
                height: 100px;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 4px;
                    border: 1px solid #f0f0f0;
                }
            }
        }
        .abstract {
            margin: 0 0 8px;
            font-size: 13px;
            line-height: 24px;
            color: #999;
        }
        .title {
            margin: -7px 0 4px;
            display: inherit;
            font-size: 18px;
            font-weight: 700;
            line-height: 1.5;
        }
        .meta {
            padding-right: 0!important;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            a {
                margin-right: 10px;
                color: #b4b4b4;
            }
            span {
                margin-right: 10px;
                color: #b4b4b4;
            }
            i{
                font-size:14px;
            }
        }
    }
`;

export const BoardWapper = styled.div`
   .board {
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
    
    img {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }

  }
`;

export const QrBoxWapper = styled.div`
  
  .download {
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    display:block;
    .qrcode {
    width: 60px;
    height: 60px;
    opacity: .85;
    }
    .info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    .title {
        font-size: 15px;
        color: #333;
        }
    .description {
        margin-top: 4px;
        font-size: 13px;
        color: #999;
     }    
    }
}

}
`;

export const RecommendWapper = styled.div`
   
   .recommended-authors {
        margin-bottom: 20px;
        padding-top: 0;
        font-size: 13px;
        text-align: center;
        position:relative;
        .title {
                text-align: left;
            span {
                font-size: 14px;
                color: #969696;
            }
            .page-change {
                float: right;
                display: inline-block;
                font-size: 14px;
                color: #969696;
                i{
                    display: inline-block;
                    line-height: 1;               
                    font-size: 14px;
                    margin-right: 5px;
                }
            }   
        }
        .list {
             margin: 0 0 20px;
            text-align: left;
            list-style: none;
            li {
                margin-top: 15px;
                line-height: 20px;
                .avatar {
                    float: left;
                    width: 48px;
                    height: 48px;
                    margin-right: 10px;
                    img {
                        width: 100%;
                        height: 100%;
                        border: 1px solid #ddd;
                        border-radius: 50%;
                    }
                }
                .follow{
                    float: right;
                    margin-top: 5px;
                    padding: 0;
                    font-size: 13px;
                    color: #42c02e;
                    border-color: #42c02e;
                    i{
                        margin-top: 5px;
                        padding: 0;
                        font-size: 13px;
                        color: #42c02e;
                        border-color: #42c02e;
                        font-weight: 400;
                        line-height: normal;
                    }
                }
                .name {
                    padding-top: 5px;
                    margin-right: 60px;
                    font-size: 14px;
                    display: block;
                }
                p {
                    margin-top: 2px;
                    font-size: 12px;
                    color: #969696;
                }
            }
        }
        .find-more {
                position: absolute;
                padding: 7px 7px 7px 12px;
                left: 0;
                width: 100%;
                font-size: 13px;
                color: #787878;
                background-color: #f7f7f7;
                border: 1px solid #dcdcdc;
                border-radius: 4px;
                i{
                    font-size:12px;
                    margin-left:5px;
                }
        }
  }

`;