import { ReactNode } from "react"
import styled from "styled-components"

interface MybuttonProps {
  title?: ReactNode;
  primary?: boolean;
  margin?: string;
  handleOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button<{ $primary?:boolean; $margin?:string}>`
    padding: 5px 30px;
    background-color: ${props => props.$primary ? "rgba(255, 149, 5, 1)" : "white"};
    color: ${props => props.$primary ? "white" : "rgba(255, 149, 5, 1)"};
    border-radius: 40px;
    border: 2px solid rgba(255, 149, 5, 1);
    margin: ${(props) => props.$margin || "10px 0px"};
`

const MyButton: React.FC<MybuttonProps> = ({title, primary, margin, handleOnClick }) => {
  return (
    <StyledButton $primary={primary} $margin={margin} onClick={handleOnClick}>{title}</StyledButton>
  )
}

export default MyButton