import React, { useState } from 'react'
import "./main.css"
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
const Main = () => {

    return (
        <div className='main'>

            <section className='main-section'>
                <div className="container">
                    <div className='text-center'>
                        <h1 className='text-white'>
                            Sertifikat olishingiz uchun veb saytdan ro'yxatdan o'ting
                        </h1>
                        <Link to='/sing_In'>
                            <Button className='mx-1' color="primary" >
                                Kirish
                            </Button>
                        </Link>
                        <Link to='/sing_Up'>
                        <Button className='mx-1' color="primary" >
                                Ro'yxatdan o'tish
                            </Button>
                        </Link>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Main;