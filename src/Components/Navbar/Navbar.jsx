import React, { useState } from "react";
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion'
// import { images } from "../../Constants";
import "./Navbar.scss";

const Navbar = () => {
    // useState used for toogle between mobileMenu| pcMenu
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">

            <div className="app__navbar-logo">
                {/* <img src={images.logo} alt="logo" /> */}
            </div>

            <ul className="app__navbar-links">
                {/* pcMenu mapping */}
                {["home", "skills", "projects","contact"].map(
                    (items) => (
                        <li className="app__flex p-text" key={`link-${items}`}>
                            <div />
                            <a href={`#${items}`}>{items}</a>
                        </li>
                    )
                )}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true
                )} />
                {
                    toggle && (
                        // motion.div imorted from framer motion 
                        <motion.div
                            whileInView={{ x: [300, 0] }}
                            transition={{ duration: 0.80, ease: 'easeOut' }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            {/* moblileMenu mapping*/}
                            <ul>{["home", "skills", "projects","contact"].map(
                                (items) => (
                                    <li key={{ items }}>
                                        <a href={`#${items}`} onClick={() => setToggle(false
                                        )}>{items}</a>
                                    </li>
                                )
                            )}</ul>
                        </motion.div>
                    )
                }
            </div>
        </nav >
    );
};

export default Navbar;
