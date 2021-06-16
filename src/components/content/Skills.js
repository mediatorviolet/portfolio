import React from "react";
import SectionTitle from "../commons/Titles/SectionTitle";
import SubTitle from "../commons/Titles/SubTitles";
import { SKILLS } from "../../data/data";

const Skills = () => {
    return (
        <>
            <div className="col-12 col-md-6 px-5">
                <img className="img-fluid" src="/assets/coding.jpg" alt="Coding" />
            </div>
            <div className="col-12 col-md-6 px-5">
                <SectionTitle text="Compétences" />
                <div className="row mt-4">
                    <div className="col-12 col-md-6">
                        <SubTitle text="Langages" />
                        <ul>
                            {SKILLS.languages.map((language) => (
                                <li>{language}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-12 col-md-6">
                        <SubTitle text="Framework" />
                        <ul>
                            {SKILLS.frameworks.map((framework) => (
                                <li>{framework}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
