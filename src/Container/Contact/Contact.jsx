import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { images } from '../../Constants';
import { AppWrap } from "../../Wrapper"
import './Contact.scss';

const Contact = () => {
    return (
        <Container fluid className='app__footer' id='contact'>
            <Row>
                <h2 className="head-text" >Let's Work <span>Together !</span></h2>
                <Col lg={3} md={1}>

                </Col>
                <Col lg={9} md={10} className="alignment">

                    <div className="app__footer-cards">
                        <div className="connect">
                            <span className='connect'>
                                Have a project you'd like to discuss? Feel free to connect with me through my social media or send me an email.
                            </span>
                        </div>
                        <div className="app__footer-card ">
                            <img src={images.email} alt="email" />
                            <a href="mailto:kashideabhiraaj@gmail.com" className="p-text">kashideabhiraaj.com</a>
                        </div>
                        <div className="app__footer-card">
                            <img src={images.mobile} alt="phone" />
                            <a href="tel:+91 7709207690" className="p-text">+91 7709207690</a>
                        </div>
                        {/* <div><SocialMedia/></div> */}
                    </div>

                </Col>
                <Col lg={3}>

                </Col>
            </Row>

        </Container>
    );
};

export default AppWrap(Contact)
