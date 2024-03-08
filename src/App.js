import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { NewSidebar } from './components/Sidebar/NewSidebar'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Speaking } from './pages/Speaking';
import { Writing } from './pages/Writing';
import { Reading } from './pages/Reading';
import { Listening } from './pages/Listening';
import { RW } from './pages/RW';
import { RE } from './pages/RE';
import Signup from './components/Authentication/Signup';
import Login from './components/Authentication/Login';
import { Home } from './pages/Home';
import Aboutus from './components/AboutUs/AboutUs';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<NewSidebar />}>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/pte-speaking' element={<Speaking />} />
            <Route path='/pte-writing' element={<Writing />} />
            <Route path='/pte-reading' element={<Reading />} />
            <Route path='/pte-listening' element={<Listening />} />
            <Route path='/rw' element={<RW />} />
            <Route path='/re' element={<RE />} />
            <Route path='/aboutus' element={<Aboutus />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
