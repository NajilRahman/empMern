
import {  Routes,Route } from 'react-router-dom'
import './App.css'
import EmployeeManagement from './pages/empManage'
import LandingPage from './pages/landing'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
   <Routes>
    <Route path='/' element={<LandingPage/>}></Route>
    <Route path='/emp' element={<EmployeeManagement/>}></Route>
   </Routes>
  )
}

export default App
