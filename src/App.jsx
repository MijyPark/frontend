
import { Route, Routes } from 'react-router-dom'
import './App.css'

import CoverPage from './pages/CoverPage'
import AboutPage from './pages/AboutPage'
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import DogListPage from './pages/DogListPage'
import DogDetailPage from './pages/DogDetailPage'
import DogCreatePage from './pages/DogCreatePage'
import AdoptPage from './pages/AdoptPage'



function App() {
  
  return (
  
    <Routes>
     <Route path='/' element={<CoverPage />} />
     <Route path='/about' element={<AboutPage />} />
     <Route path='/login' element={<LogInPage />} />
     <Route path='/register' element={<SignUpPage />} />
     <Route path='/dogs' element={<DogListPage />} />
     <Route path='/adopt' element={<AdoptPage />} />
     <Route path='/dogs/:dogId' element={<DogDetailPage />} />
     <Route path="/admin" element={<DogCreatePage/>} />
 
    </Routes> 
  
  )

}

export default App
