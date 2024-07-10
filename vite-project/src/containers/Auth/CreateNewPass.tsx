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
const Resend = styled.a`
  color: rgba(255, 149, 5, 1);
  text-decoration: underline;
  font-size: 14px;
  width: 80%;
  margin-bottom: 15px;
`;

const CreateNewPass = () => {
  return (
    <AuthLayout title={"Create new password"}>
      <Div>
        <p>We have sent a temporary password to your email.</p>
        <p>Please check your email to get it,</p>
        <p>then create new password.</p>
      </Div>
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
        <Input.Password placeholder="Input password" />
      </Form.Item>
      <Resend>Resend</Resend>
      <Form.Item
        name="newPassword"
        label="New password"
        rules={[
          {
            required: true,
            message: "Please input new password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Input new password" />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="password2" 
        dependencies={['newPassword']}
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm password"/>
      </Form.Item>
      <FlexContainer>
        <MyButton primary={false} margin='10px' title={"Cancel"} />
        <MyButton primary={true} margin='10px' title={"Save"} />
      </FlexContainer>
    </AuthLayout>
  );
};

export default CreateNewPass;
