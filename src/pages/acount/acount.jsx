import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'reactstrap'
import Header from '../../components/header/header'
import config from '../../firebase/firebase'
import './acount.css'
const Acount = () => {
  return (
    <div>
        <Header/>
        <section>
          <button><FontAwesomeIcon icon={faDownload}/> certificatni yuklash</button>

        <Button onClick={()=> config.auth().signOut()}>chiqish</Button>
        </section>
    </div>
  )
}

export default Acount