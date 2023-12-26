import React from 'react'
import { motion } from 'framer-motion';
import { Container, Row, Col } from "react-bootstrap";
import 'react-tooltip/dist/react-tooltip.css'
import  {AppWrap} from "../../Wrapper"



import { images } from '../../Constants';
import './Skills.scss'



const icons = [
    {
    title: 'html',
    imgUrl: images.html
}, 
{
    title: 'css',
    imgUrl: images.css
}, 
{
    title: 'javascript',
    imgUrl: images.javascript
},
{
    title: 'node.js',
    imgUrl: images.node
}, 
{
    title: 'redux',
    imgUrl: images.redux
}, 
{
    title: 'react',
    imgUrl: images.react
    
},
{
    title: 'bootstrap',
    imgUrl: images.bootstrap
},
{
    title: 'sass',
    imgUrl: images.sass
},

{
    title: 'MU5',
    imgUrl: images.mu5
}, 
{
    title: 'tailwind',
    imgUrl: images.tailwind
}, 
{
    title: 'git',
    imgUrl: images.git
}, 
{
    title: 'vsCode',
    imgUrl: images.vsCode
},
]

const experiences = [
    { year: "2022  -  Present", work: "Frontend Developer", company: "Redbytes" },

]

const Skills = () => {
    return (

        <Container fluid className="skills-section" id="skills">
                    <h1 className="head-text text-center">
                        Professional <span> Skillset </span> And <span>Tools</span>
                    </h1>
                <Row  className="skills-top">
                    <Col md={1}></Col>
                    <Col lg={7} md={12} >
                        <div className="app__skills-container text-end">
                            <motion.div className='app__skills-list text-end'>
                                {icons.map((skill) => (
                                    <motion.div
                                        whileInView={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.5 }}
                                        className='app__skills-item app__flex text-end'
                                        key={skill.name}>
                                        <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                                            <img src={skill.imgUrl} alt={skill.title} />
                                        </div>
                                        <p className="p-text">
                                            {skill.name}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </Col>
                    {/* Experience */}
                    <Col lg={3} md={12}>
                        <div className='app__skills-exp pr-5'>
                            {experiences.map((experience) => (
                                <div
                                    className='app__skills-exp-item'
                                    key={experience.year}
                                >
                                    <div className="app__skills-exp-year">
                                        <p className="bold-text">
                                            {experience.year}
                                        </p>
                                    </div>
                                    <div className='app__skills-exp-works'>
                                        {experience.work}
                                        <div>
                                            {experience.company}
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </Col>
                    <Col md={1}></Col>

                </Row>
        </Container>
    )
}

export default AppWrap(Skills)

