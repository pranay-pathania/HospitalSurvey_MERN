import React from 'react'
import Facebook from '../../social-media-logos/facebook.png'
import Instagram from '../../social-media-logos/instagram.png'
import Reddit from '../../social-media-logos/reddit.png'
import Twitter from '../../social-media-logos/twitter.png'
import './Contact.css'

const Contact = () => {
    return <footer>
        <h1>Contact Us</h1>
        <div className="underline"></div>
        <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src={Facebook} alt="facebook" /></a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src={Instagram} alt="instagram" /></a></li>
            <li><a href="https://www.reddit.com" target="_blank" rel="noreferrer"><img src={Reddit} alt="reddit" /></a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noreferrer"><img src={Twitter} alt="twitter" /></a></li>
        </ul>
    </footer>
}

export default Contact
