
import { Route, Routes } from 'react-router-dom'
import './App.css'

import CoverPage from './pages/CoverPage'
import AboutPage from './pages/AboutPage'
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import DogListPage from './pages/DogListPage'
import DogDetailPage from './pages/DogDetailPage'
import AdminDogPage from './pages/AdminDogPage'
import FosterListPage from './pages/FosterListPage'
import DonationPage from './pages/DonationPage'
import ErrorPage from './pages/ErrorPage'
import LogoutPage from './pages/LogoutPage'

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
     <Route path='/donation' element={<DonationPage />} />
     <Route path='/logout' element={<LogoutPage />} />
     <Route path='/admin/dogs' element={<AdminDogPage/>} />
     <Route path='/admin/foster' element={<FosterListPage/>} />
 
     <Route path='*' element={<ErrorPage/>} />
    </Routes> 
  
  )

}

export default App
