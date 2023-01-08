import React, { useCallback }  from 'react'
import { Link } from 'react-router-dom'
import { Button, Input } from 'reactstrap'
import config from '../../firebase/firebase'
import "./singUp.css"
const SingUp = ({history}) => {
  
  const handleSingUp = useCallback(async event =>{
    event.preventDefault();
    const {email,password} = event.target.elements;
    try {
      await config
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value);
      history.push('/')
    } catch(error){
      alert(error)
    }
  },[history])
  return (
    <div className='sing_up'> 
      <div className='card'>
            <h1>Ro'yxatdan o'tish</h1>
            <form onSubmit={handleSingUp}>
            <Input type="email" />
            <label htmlFor="email" className='mb-3'>elektron pochtangizni kiriting</label>
            <Input type="password" />
            <label htmlFor="password" className='mb-3'>parolni kiriting</label>
            </form>
            <p>Agar akauntingiz bo'lsa unga <Link to='/sing_In'>kiring</Link> </p>
            <Button color="primary">Ro'yxatdan o'tish</Button>
        </div>
    </div>
    
  )
}

export default SingUp