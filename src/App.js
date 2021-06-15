import "./App.css";
import Wrapper from "./components/commons/Page/Wrapper";
import Navbar from "./components/commons/Navbar";
import Section from "./components/commons/Page/Section";
import Hero from "./components/commons/Hero";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Wrapper>
                <Section></Section>
            </Wrapper>
        </>
    );
}

export default App;
