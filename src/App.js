import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Login from './components/Login.js';
import PokeSprite from './components/Pokemon.js';
import NotFound from './components/NotFound.js';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/"/>
        <Route path="/user">
          <Route index element={<Login />}/>
          <Route path=":id" element={<PokeSprite image="zoroark"/>}/>
          <Route path="signup" element={<SignUp />}/>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App;
