import { useState, createContext, useContext } from 'react';
import { Route, Routes, NavLink, useNavigate, Navigate, } from 'react-router-dom'
const AuthContext = createContext(null)

const ProtectedRoute = ({children}) => {
  const {token} = useContext(AuthContext);

  if (!token){
    return <Navigate to='/home' replace />    
  }

  return children
};


const AuthProvider = ({ children }) => {

  // Navigate per redirect
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  
  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(token);
    console.log('set token', token);
  }

  const handleLogout = () => {
    setToken(null);
  }

  const value = {
    token, 
    onLogin: handleLogin,
    onLogout: handleLogout,
  };
  
  return (
    <AuthContext.Provider value = {value}>
      {children}
    </AuthContext.Provider>
  ) 
  
}

function App() {

  return (
    <>
      <AuthProvider>
        <h1>React Router</h1>

        <Navigation />

        <Routes>
          <Route index element={<Home  />} />
          <Route path='/home' element={<Home  />} />
         
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />


          <Route path='*' element={<NoMatch />} />

        </Routes>
      </AuthProvider>
    </>
  );
};

const NoMatch = () => {
  return (
    <p>There is nothing here: 404!</p>
  )
}


const Navigation = () => {
  const {token, onLogout} = useContext(AuthContext);
  return (
    <nav>
      <NavLink to="/home"  >Home</NavLink>
      <NavLink to="/dashboard" >Dashboard</NavLink>

      {token && <button type='button' onClick={onLogout}>Sign Out</button>}
    </nav>

  )
}


const Home = () => {
  const {onLogin} = useContext(AuthContext);
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
  const {token} = useContext(AuthContext);
  return (
    <>
      <h2>Dashboard (Protected)</h2>

      <div>Authenticated as {token}</div>

    </>
  )
}

const fakeAuth = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('2342342342134'), 250);
  })




export default App;