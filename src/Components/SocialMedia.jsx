import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://twitter.com/abhiinyou"><BsTwitter /></a>
            </div>
            <div>
                <a href="https://instagram.com/abhiinyou"> <BsInstagram /></a>
            </div>
            <div>
                <a href="https://github.com/abhiinyou">  <BsGithub /></a>

            </div>
        </div>
    )
}

export default SocialMedia