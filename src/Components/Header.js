import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
    return(
        <header className='header'>
            <h1 className='header h1'>
            <Link to={`/`}>Aplikasi Notes</Link>
            </h1>
            <Navigation/>
        </header>
    )
}

export default Header;