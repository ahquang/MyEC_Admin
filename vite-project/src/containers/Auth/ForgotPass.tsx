import MyButton from "../../components/MyButton";
import styled from "styled-components";
import AuthLayout from "../../components/AuthLayout";
import { Form, Input } from "antd";
import { FlexContainer } from "../../components/CommonStyledComponent/index.styled";

const Div = styled.div`
  text-align: center;
  font-size: 14px;
  width: 100%;
  margin-bottom: 20px;
`;
const ForgotPass = () => {
  return (
    <AuthLayout title={"Forgot password"}>
      <Div>
        Please enter your email address to receive a temporary password.
      </Div>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="Email@example.com" />
      </Form.Item>
      <FlexContainer>
        <MyButton primary={false} margin='10px' title={"Cancel"} />
        <MyButton primary={true} margin='10px' title={"Send"} />
      </FlexContainer>
    </AuthLayout>
  );
};

export default ForgotPass;
