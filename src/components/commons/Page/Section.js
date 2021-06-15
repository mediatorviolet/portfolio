import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
    min-height: 75vh;
`;

const Section = ({ children }) => {
    return (
        <StyledSection className="py-5">
            <div className="row py-5">{children}</div>
        </StyledSection>
    );
};

export default Section;
