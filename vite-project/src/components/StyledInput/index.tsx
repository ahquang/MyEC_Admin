import styled from "styled-components";
import { Input } from "antd";

export const StyledInput = styled(Input.Search)`
  border-radius: 4px;
  .ant-input {
    border-radius: 4px 0 0 4px;
    border-color: rgba(217, 217, 217, 1);
    &:hover, 
    &:focus {
      border-color: rgba(255, 149, 5, 1);
    }
  }
  .ant-btn {
    background-color: rgba(255, 149, 5, 1);
    border-color: rgba(255, 149, 5, 1);
    color: white;
    border-radius: 0 4px 4px 0;

    &:hover {
      background-color: rgba(255, 149, 5, 1);
      color: black;
      border-color: rgba(255, 149, 5, 1);
    }
  }
`;