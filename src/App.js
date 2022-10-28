import React from 'react';
import { Link, Route, Routes, Outlet } from 'react-router-dom'


function App() {
  return (
    <>
      <h1>React Router</h1>

      <Navigation />
      <Routes>
        {/* Route per il Layout applicato a tutti e due gli elementi  */}
        <Route element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/users' element={<Users />} />
        </Route>
      </Routes>
    </>
  );
};

const Navigation = () => {

  return (
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
    </nav>

  )
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
  return (
    <main style={{ padding: '1rem 0', color: 'red' }}>
      <Outlet />
    </main>

  )
}

export default App;