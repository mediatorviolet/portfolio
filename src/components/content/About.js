import React from "react";
import SectionTitle from "../commons/Titles/SectionTitle";

const About = () => {
    return (
        <>
            <div className="col-12 col-md-6 px-5">
                <SectionTitle text="À propos" />
                <p className="my-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Volutpat consequat mauris nunc congue nisi vitae
                    suscipit tellus. Accumsan tortor posuere ac ut. Mi ipsum
                    faucibus vitae aliquet nec ullamcorper sit amet risus.
                    Ornare massa eget egestas purus viverra. In cursus turpis
                    massa tincidunt dui. Morbi non arcu risus quis varius quam
                    quisque id. Eu volutpat odio facilisis mauris. Lacinia at
                    quis risus sed. Risus pretium quam vulputate dignissim
                    suspendisse.
                </p>
            </div>
            <div className="col-12 col-md-6 px-5">
                <img className="img-fluid" src="/assets/silouette.jpg" alt="Profil pic" />
            </div>
        </>
    );
};

export default About;
