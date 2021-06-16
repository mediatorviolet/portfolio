import React from "react";
import styled from "styled-components";

const StyledSectionTitle = styled.h2`
    color: inherit;
    font-size: 2.5rem;
    font-weight: bold;
`;

const SectionTitle = ({ text }) => {
    return <StyledSectionTitle>{text}</StyledSectionTitle>;
};

export default SectionTitle;
