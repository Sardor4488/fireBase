import React, { useContext } from 'react'
import { useCallback } from 'react';
import { Link, Navigate  } from 'react-router-dom';
 import { Button, Input } from 'reactstrap';
import { AuthContext } from '../../auth';
import config from '../../firebase/firebase';
import './logIn.css'

const LogIn = (history) => {

  const handleSingIn= useCallback( async event => {

      event.preventDefault();
      const {email, password} = event.target.elements;
      try {
        await config
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error)
      }
    } , [history]
  )
  const {currentUser} = useContext(AuthContext);
  if(currentUser){
    return <Navigate  to='/'/>
  }
  return (
    <div className='log_in'>
        <div className='card'>
            <h1>Akauntingiz kirish</h1>
            <form onSubmit={handleSingIn}>
            <Input type="email" />
            <label htmlFor="email" className='mb-3'>elektron pochtangizni kiriting</label>
            <Input type="password" />
            <label htmlFor="password" className='mb-3'>parolni kiriting</label>
            </form>
            <p>Agar akauntingiz bo'lmasa <Link to='/sing_Up'>ro'yxatdan</Link> o'ting</p>
            <Button color="primary">Kirish</Button>
        </div>
    </div>
  )
}

export default LogIn;