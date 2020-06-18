import React from 'react'
import { UL, NavContainer } from './navStyles'
import {BrowserRouter as Router, Link} from 'react-router-dom'
const Nav = () => {
    return (
     
        <NavContainer>
            <UL>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                <Link to='/skills'>Skills</Link>
                </li>
                <li>
                <Link to='/projects'>Projects</Link>
                </li>
            </UL>
            
        </NavContainer>


    )
}

export default Nav