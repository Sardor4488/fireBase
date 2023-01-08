import logo from './logo.svg';
import './App.css';
import Main from './pages/main';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import LogIn from './pages/logIn';
import SingUp from './pages/singUp';
import { AuthProvider } from './auth';
import PrivateRout from './PrivateRout';
import Adminn from './admin/adminn';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <PrivateRout path='/' exact element={<Main />} component={Main}></PrivateRout>
        <Route path='/sing_In' exact element={<LogIn />} component={LogIn}></Route>
        <Route path='/sing_Up' exact element={<SingUp />} component={SingUp}></Route>
        <Route path='/Admin' exact element={<Adminn />} component={Adminn}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
