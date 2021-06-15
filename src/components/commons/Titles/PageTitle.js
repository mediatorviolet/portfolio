import React from "react";
import styled from "styled-components";

const StyledPageTitle = styled.h1`
    color: white;
    font-size: 3rem;
    font-weight: bold;
`;

const PageTitle = ({ text }) => {
    return <StyledPageTitle>{text}</StyledPageTitle>;
};

export default PageTitle;
