import React from 'react';
import './navbar.scss';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className= {"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Greg D'Amato.</a>
                    <div className='itemContainer'>
                        <LocalPhoneIcon className='icon'/>
                        <span>631-786-5612</span>
                    </div>
                    <div className='itemContainer'>
                        <EmailIcon className='icon'/>
                        <span>gregdamato2@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
