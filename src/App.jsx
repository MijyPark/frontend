
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CoverPage from './pages/CoverPage'
import SignUpPage from './pages/SignUpPage'
import LogInPage from './pages/LogInPage'

/*i'

import DogListPage from './pages/DogListPage'
import DogDetailPage from './pages/DogDetailPage'
import DogEditPage from './pages/DogEditPage'
import FostersListPage from './pages/FostersListPage'
import DonationPage from './pages/DonationPage'
import ErrorPage from './pages/ErrorPage'*/


function App() {
  
  return (
  
    <Routes>
     <Route path='/' element={<CoverPage />} />
     <Route path='/signup' element={<SignUpPage />} />
     <Route path='/login' element={<LogInPage />} />
    </Routes> 
  
  )

}

export default App
/*<Route path='/about' element={<AboutPage />} />
<Route path='/login' element={<LogInPage />} />

<Route path='/dogs' element={<DogListPage />} />
<Route path='/adopt' element={<AdoptPage />} />
<Route path='/dogs/:dogId' element={<DogDetailPage />} />
<Route path='/donation' element={<DonationPage />} />
<Route path='/admin/dogs' element={<DogEditPage/>} />
<Route path='/admin/fosters' element={<FostersListPage/>} />
<Route path='*' element={<ErrorPage/>} />*/