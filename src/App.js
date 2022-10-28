import React from 'react';
import {Link, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
    <h1>React Router</h1>

    <Navigation />
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/users' element={<Users />} />
    </Routes>
    </>
  );
};

const Navigation = () => {
  
  return (
    <nav style={{borderBottom: 'solid 1px', paddingBottom: '1rem'}}>
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
    </nav>

  )
};

const Home = () =>{
  return (
      <h2>Home</h2>
    
  )
}

const Users = () =>{
  return (
   
      <h2>Users</h2>
    

  )
}

const Layout = ({children}) =>{
  return ( <main style={{paddind: '1rem 0'}}>{children}</main>

  )
}

export default App;