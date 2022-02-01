import React from 'react'
import Logo from '@/assets/logo.png'


const Header = () => {
    return (
    <div>
        <nav className='navbar'>
            <div className='nav-items'>
            <img className='brand-logo' src={Logo} alt="logo" />
            <h2>ReactFacts</h2>
            </div>
            <div>
                <h3>React Course - Project 1</h3>
            </div>
        </nav>
    </div>
    )
}

export default Header
