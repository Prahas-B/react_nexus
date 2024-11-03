import React from 'react'
import './Navbar.css'
import nexus from '../../assets/nexus.png'

const navbar = () => {
    return (
        <nav className='container'>
            <img src={nexus} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Events</li>
                <li>About</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact us</button></li>
            </ul>
        </nav>
    )
}

export default navbar