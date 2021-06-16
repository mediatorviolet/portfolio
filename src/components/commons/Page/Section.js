import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
    min-height: 75vh;
    display: flex;
    align-items: center;
    background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
    color: ${(props) => (props.textColor ? props.textColor : "#212529")};
`;

const Section = ({ children, bgColor = null, textColor = null }) => {
    return (
        <StyledSection bgColor={bgColor} textColor={textColor}>
            <div className="container d-flex mx-auto">
                <div className="row py-5 d-flex justify-content-center align-items-center">
                    {children}
                </div>
            </div>
        </StyledSection>
    );
};

export default Section;
