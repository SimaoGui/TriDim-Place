import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/Home/HomePage'
import './index.css'


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/home' element={<HomePage />}/>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </HashRouter>
  )
}

export default App