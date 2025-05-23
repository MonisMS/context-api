import UserContextProvider from './context/UserContextProvider.jsx'

import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {
  

  return (
    <>
    <UserContextProvider>
      <div className='bg-black w-full h-screen text-white'>Hello</div>
      <Login/>
      <Profile/>
   </UserContextProvider>
    </>
  )
}

export default App
