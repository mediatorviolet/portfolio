import "./App.css";
import Wrapper from "./components/commons/Page/Wrapper";
import Navbar from "./components/commons/Navbar";
import Section from "./components/commons/Page/Section";
import Hero from "./components/content/Hero";
import About from "./components/content/About";
import Skills from "./components/content/Skills";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Section>
                <About />
            </Section>
            <Section bgColor="#14191e" textColor="#f8f9fa">
                <Skills />
            </Section>
            {/* <Wrapper></Wrapper> */}
        </>
    );
}

export default App;
