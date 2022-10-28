import { useState }  from 'react';
import { Route, Routes, NavLink, } from 'react-router-dom'


function App() {
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(token);
    console.log('set token', token);
  }

  const handleLogout = ()=>{
    setToken(null);
  }

  return (
    <>
      <h1>React Router</h1>

      <Navigation token={token} onLogout={handleLogout}/>

      <Routes>
        <Route index element={<Home onLogin={handleLogin}/>} />
        <Route path='/home' element={<Home onLogin={handleLogin}/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NoMatch />} />

      </Routes>
    </>
  );
};

const NoMatch = () => {
  return (
    <p>There is nothing here: 404!</p>
  )
}


const Navigation = ({token, onLogout}) => {
  return (
    <nav>
      <NavLink to="/home"  >Home</NavLink>
      <NavLink to="/dashboard" >Dashboard</NavLink>

      {token && <button type='button' onClick={onLogout}>Sign Out</button>}
    </nav>

  )
}


const Home = ({ onLogin }) => {
  return (
    <>
      <h2>Home (Public)</h2>

      <button type='button' onClick={onLogin}>
        Sign In
      </button>
    </>
  )
}

const Dashboard = () => {
  return (
    <>
      <h2>Dashboard (Protected)</h2>

    </>
  )
}

const fakeAuth = () => 
  new Promise((resolve) => {
    setTimeout(() => resolve('2342342342134'), 250);
  })




export default App;