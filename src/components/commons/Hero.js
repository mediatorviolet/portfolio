import React from "react";
import styled from "styled-components";
import PageTitle from "./Titles/PageTitle";

const StyledHero = styled.div`
    background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.1) 85.4%
        ),
        url(/assets/keyboard.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 75vh;
    padding: 2rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Hero = () => {
    return (
        <StyledHero>
            <PageTitle text="Page title" />
        </StyledHero>
    );
};

export default Hero;
