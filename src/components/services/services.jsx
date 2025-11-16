import React from 'react'
import './services.css'
import { FiCheck } from 'react-icons/fi'

const services = () => {
    return (

        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className='service__head'>
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service__list'>

                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Strategic UI Design</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>User-Centered Approach</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Responsive Web Solutions</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Interactive Prototypes</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Usability Testing</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Team-Centric Design</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Visual Storytelling</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Continuous Improvement</p>
                        </li>
                    </ul>
                </article>
                {/* end of ui/ux  */}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>

                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Frontend Excellence</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Backend Expertise</p>
                        </li>

                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Responsive Web Design</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Database Management</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>API Integration</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Security Assurance</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Wordpress</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Shopify</p>
                        </li>
                    </ul>
                </article>
                {/* end of webdevelopment  */}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Content Creation</h3>
                    </div>

                    <ul className='service__list'>

                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Compelling Copywriting</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Engaging Storytelling</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>SEO Optimization</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Visual Content Creation</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Social Media Strategy</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Brand Voice Development</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Target Audience Alignment</p>
                        </li>
                        <li>
                            <FiCheck className='service__list-icon' />
                            <p>Adaptable Content Creation</p>
                        </li>
                    </ul>
                </article>
                {/* end of content creation  */}
            </div>
        </section>
    )
}

export default services