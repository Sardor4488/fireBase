import React from 'react'
import "./header.css"
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <Link to='/'>
                    <h1 className='logo'>logo</h1>
                </Link>
                <ul className='ul-links'>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">We</a></li>
                    <li>
                        <Link to='/sing_In'>
                            <Button className='mx-1' color="primary" >
                                Kirish
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/sing_Up'>
                            <Button className='mx-1' color="primary" >
                                Ro'yxatdan o'tish
                            </Button>
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header