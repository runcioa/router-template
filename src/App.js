import React from 'react';
import { Route, Routes, Outlet, NavLink, Link } from 'react-router-dom'


function App() {
  const users = [{
    id: '1', fullname: 'Robin',
    id: '3', fullname: 'Sarah',
  }];

  return (
    <>
      <Routes>
        {/* Route per il Layout applicato a tutti e due gli elementi  */}
        <Route element={<Layout />}>
          {/* Inseriamo l'Index Route per la pagina / */}
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          {/* Passo gli utenti nel componente Users con una Route */}
          <Route path='/users' element={<Users users={users}/>} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

const NoMatch = () => {
  return (
    <p>There is nothing here: 404!</p>
  )
}


const Home = () => {
  return (
    <h2>Home</h2>

  )
}

const Users = ({ users }) => {
  return (
    <>
      <h2>Users</h2>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.fullname}</Link>
          </li>
        ))}
      </ul>
    </>
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