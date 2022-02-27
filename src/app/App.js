import { Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Dashboard from './Dashboard'
import NewUser from './NewUser'
import Header from './components/Header'
import Footer from './components/Footer'
import UserContextProvider from '../context/UserContextProvider'
import './App.css'

function App() {
  return (
    <ChakraProvider>
      <Header />
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/newuser' element={<NewUser />} />
        </Routes>
      </UserContextProvider>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
