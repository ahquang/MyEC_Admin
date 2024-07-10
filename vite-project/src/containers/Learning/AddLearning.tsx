import styled from "styled-components";
import { PageContainer, Title, SubTitle } from "../../components/CommonStyledComponent/index.styled";
import Layout from "../../components/Layout";
import { Breadcrumb, Form } from "antd";
const dataBreadcrumb = [
  {
    title: <a href="/learningList">Learning Activities</a>,
  },
  {
    title: <a href="/learningList/addLearningActivities">Add New Learning Activities</a>,
  },
];
const AddLearningForm = styled(Form)`
    margin: 10px 0px;
    border-radius: 8px;
    padding: 20px;
    background-color: white;
    width: 100%;
    height: 80vh;
`
const AddLearning = () => {
  return (
    <Layout>
      <PageContainer>
        <Title>
          Learning Activities
        </Title>
        <Breadcrumb items={dataBreadcrumb} />
        <AddLearningForm layout="vertical">
            <SubTitle>Add New Learning Activities</SubTitle>
        </AddLearningForm>
      </PageContainer>
    </Layout>
  );
};

export default AddLearning;
