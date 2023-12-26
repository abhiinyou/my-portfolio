import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion'
import { AppWrap } from "../../Wrapper"
import TypeEffect from "./TypeEffect";
import { images } from '../../Constants'
import "./Header.scss"
import "./Header.css"
import pdf from "./res.pdf"


// const Header = () => {
//   return (

//       <div className="header_section container">
//         <div className="about">
//         <motion.div
//               whileInView={{
//                 x: [-100, 0], opacity: [0, 1]
//               }}
//               transition={{ duration: 0.5 }}
//             >
//               <h1 className="heading pb-3">Hi There!{" "}
//               </h1>
//               <h1 className="heading-name">
//                 I'M {"   "}
//                 <span className="main-name">ABHIJEET KASHIDE</span>
//               </h1>
//               <div className=" ps-5 p-3 typee">
//                 <TypeEffect />
//               </div>
//       <span className="ps-5 res-btn">
//         <button >
//           <a href={pdf}>Download CV</a>
//         </button>
//       </span>
//             </motion.div>
//         </div>
//         <div className="hero">
//         <img src={images.hero} alt="technologies" className="hero" style={{ maxHeight: "400px" }} />
//         </div>
//       </div>

//   )
// }

// export default Header


const Header = () => {
  return (
    <Container fluid className="home-section" id="home">
      <Container className="home-content">

        <Row>
          <Col md={7} className="home-header">
            <motion.div
              whileInView={{
                x: [-100, 0], opacity: [0, 1]
              }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading pb-3">Hey There!{" "}
              </h1>
              <h1 className="heading-name">
                I'M {"   "}
                <span className="main-name">ABHIJEET KASHIDE</span>
              </h1>
              <div className=" ps-5 p-3 typee">
                <TypeEffect />
              </div>
              <span className="ps-5 res-btn">
                <button >
                  <b>
                    <a href={pdf}>Download CV</a>
                  </b>
                </button>
              </span>
            </motion.div>

          </Col>

          <Col md={5}>
            <motion.div
              whileInView={{
                x: [0, -100], opacity: [0, 1]
              }}
              transition={{ duration: 0.5 }}
            >
              <img src={images.hero} alt="technologies" className="hero " style={{ maxHeight: "320px" }} />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>

  );
}

export default AppWrap(Header)


