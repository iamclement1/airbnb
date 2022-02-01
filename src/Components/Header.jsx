import React from 'react'

const Header = () => {
    return (
    <div>
        <header>
            <nav className='nav'>
                <img src="..." alt="logo" />
                <ul className='nav-link'>
                    <a href="#">
                        <li>Pricing</li>
                    </a>
                    <a href="#">
                        <li>About</li>
                    </a>
                    <a href="#">
                        <li>Contact</li>
                    </a>
                </ul>
            </nav>
        </header>
    </div>
    )
}

export default Header
