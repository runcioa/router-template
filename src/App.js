import React from 'react';
import {Route, Routes, Outlet, NavLink } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        {/* Route per il Layout applicato a tutti e due gli elementi  */}
        <Route element={<Layout />}>
          {/* Inseriamo l'Index Route per la pagina / */}
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/users' element={<Users />} />
        </Route>
      </Routes>
    </>
  );
};


const Home = () => {
  return (
    <h2>Home</h2>

  )
}

const Users = () => {
  return (

    <h2>Users</h2>


  )
}

// Utilizzo il Layout per gli stili di entrambe le pagine
// Con Outlet tolgo i childre e li prende da soli
const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <>
      <h1>React Router</h1>

      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <NavLink to="/home" style={style} >Home</NavLink>
        <NavLink to="/users" style={style} >Users</NavLink>
      </nav>

      <main style={{ padding: '1rem 0', color: 'red' }}>
        <Outlet />
      </main>

    </>
  )
}

export default App;