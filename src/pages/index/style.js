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