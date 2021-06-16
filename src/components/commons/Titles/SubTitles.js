import React from "react";
import styled from "styled-components";

const StyledSubTitle = styled.h3`
    color: inherit;
    font-size: 1.5rem;
    font-weight: bold;
`;

const SubTitle = ({ text }) => {
    return <StyledSubTitle>{text}</StyledSubTitle>;
};

export default SubTitle;
