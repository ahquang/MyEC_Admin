import MyButton from "../../components/MyButton";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import styled from "styled-components";
import AuthLayout from "../../components/AuthLayout";
import { FlexContainer } from "../../components/CommonStyledComponent/index.styled";

const ForgotPassLink = styled(Link)`
  color: rgba(255, 149, 5, 1);
  text-decoration: underline;
  font-size: 14px;
  width: 80%;
  margin-bottom: 20px;
`;

const Login: React.FC = () => {
  return (
    <AuthLayout title={"Login"}>
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
          <Input placeholder="Email@example.com"/>
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Input password"/>
        </Form.Item>
        <ForgotPassLink to={"/login/forgotpass"}>
          Forgot password
        </ForgotPassLink>
        <FlexContainer>
          <MyButton primary={true} title={"Login"}/>
        </FlexContainer>
    </AuthLayout>
  );
};

export default Login;
