import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexContainer, SubTitle, PageContainer, Title } from "../../components/CommonStyledComponent/index.styled";
import Layout from "../../components/Layout";
import FilterBar from "../../components/FilterBar";
import MyButton from "../../components/MyButton";
import LearningTable from "../../components/LearningTable";
import { StyledInput } from "../../components/StyledInput";

const LearningActivities = styled.div`
    background-color: white;
    padding: 15px;
    width: 85%;
`

const LearningList: React.FC = () => {
  const navigate = useNavigate()
  return (
      <Layout>
        <PageContainer>
          <Title>
            Learning Activities
          </Title>
          <FlexContainer align="none">
            <FilterBar />
            <LearningActivities>
              <FlexContainer justify="space-between">
                <SubTitle>Learning Activities List</SubTitle>
                <MyButton primary={true} margin="10px 0px" title={'Add'} handleOnClick={() => {navigate("/learningList/addLearningActivities")}}/>
              </FlexContainer>
              <StyledInput placeholder="Search"  enterButton style={{color: 'rgba(255, 149, 5, 1)'}}/>
              <LearningTable/>
            </LearningActivities>
          </FlexContainer>
        </PageContainer>
      </Layout>
  );
};

export default LearningList;
