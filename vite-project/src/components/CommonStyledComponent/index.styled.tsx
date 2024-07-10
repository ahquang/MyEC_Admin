import styled from "styled-components";

interface FlexProps {
    justify?: string;
    align?: string;
}

export const FlexContainer = styled.div<FlexProps>`
    width: 100%;
    display: flex;
    justify-content: ${(props) => props.justify || 'center'};
    align-items: ${(props) => props.align || 'center'}
`
export const PageContainer = styled.div`
    width: 100%;
    padding: 20px;
`

export const Title = styled.div`
    color: rgba(107, 63, 2, 1);
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 20px;
`
export const SubTitle = styled.h2`
  font-weight: 600;
  font-size: larger;
`
