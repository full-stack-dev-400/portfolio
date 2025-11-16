import React from 'react'
import './experience.css'
import { FaHtml5 } from 'react-icons/fa'
import { DiCss3 } from 'react-icons/di'
import { FaBootstrap } from 'react-icons/fa'
import { DiJavascript1 } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { FaPhp } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { SiExpress } from "react-icons/si";

const Experience = () => {
    return (
        <section id="skills">
            <h5>What Skill I Have</h5>
            <h2>Skills</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <FaHtml5 />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <DiCss3 />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <FaBootstrap />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <DiJavascript1 />
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <FaReact />
                            <div>
                                <h4>ReactJS</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End of Frontend  */}
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">

                    <article className='experience__details'>
                            <FaNodeJs />
                            <div>
                                <h4>NodeJs</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <SiMongodb />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <SiExpress />
                            <div>
                                <h4>Express</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience__details'>
                            <FaPhp />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                       
                        <article className='experience__details'>
                            <GrMysql />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience