import styled from "styled-components";
import ArrowIcon from "../../assets/arrow-chevron-down.svg";
import { FlexContainer } from "../CommonStyledComponent/index.styled";
import React, { ReactNode } from "react";

interface FilterItemProps {
  text: string;
  children: ReactNode;
  handleOnClick: React.MouseEventHandler<HTMLElement>
}
const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  cursor: pointer;
`;
const Text = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
const FilterItem: React.FC<FilterItemProps> = ({ text, children, handleOnClick }) => {
  return (
    <FilterDiv>
      <FlexContainer justify="space-between">
        <Text>{text}</Text>
        <img src={ArrowIcon} alt=""  onClick={handleOnClick}/>
      </FlexContainer>
      {children}
    </FilterDiv>
  );
};

export default FilterItem;
