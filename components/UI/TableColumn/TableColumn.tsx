import styled from "styled-components";
import { IText } from "../Text/IText";
import Text from "../Text/Text";

interface ITableColumn {
  cta?: boolean;
  withAccordion?: boolean;
}

const TableColumn = styled(Text)<ITableColumn | IText>`
  table {
    border-collapse: collapse;

    .cta-link {
      min-height: ${(props: any) => (props?.cta ? "42px" : "0")};
    }
    
    tr {
      display: flex;
      /* padding-bottom: 40px; */
      
      &:last-of-type {
        td {
          padding-bottom: 0;
        }
      }
      
      td {
        width: 100%;
        padding-bottom: 40px;
        margin-right: 40px;
        font-size: 21px;
        vertical-align: text-top;

        &:last-of-type {
          margin-right: 0;
          padding-bottom: 0;
        }
      }
    }
  }

  @media only screen and (max-width: 834px) {
    table {
      tr {
        display: block;
        /* padding-bottom: 16px; */

        &:last-of-type {
          td {
            padding-bottom: 0;
          }
        }

        td {
          float: left;
          padding-bottom: 16px;
          padding-right: 0;
          font-size: 16px;

          h1 {
            font-size: 18px;
          }

          h2 {
            font-size: 14px;
          }

          &:last-of-type {
            margin-right: 0;
            padding-bottom: 0;
          }
        }
      }
    }
  }
`;

export default TableColumn;
