import styled from "styled-components";
import { ReactNode } from "react";
import { Form } from "antd";
import loginBg from "../../assets/loginBg.svg";
interface AuthLayoutProps {
  title: String;
  children: ReactNode;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${loginBg});
  background-size: cover;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgba(
    255,
    255,
    255,
    0.9
  ); /* Replace with your specific color */
  padding: 2.5rem 5rem;
  width: 40%;
  border-radius: 1.5rem;
  margin-left: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  font-family: "Playfair Display"; /* Replace with your specific font family */
  font-weight: 600;
  font-size: 1.875rem; /* 3xl */
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <StyledForm layout='vertical'>{children}</StyledForm>
      </Container>
    </Wrapper>
  );
};

export default AuthLayout;
