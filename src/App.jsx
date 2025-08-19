import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import LangingPage from './pages/LangingPage';
import ResumeGenerator from './pages/ResumeGenerator';
import History from './pages/History';
import UserForm from './pages/UserForm';
import PageNotFound from './pages/PageNotFound';
function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<LangingPage/>} />
        <Route path='/resumegenerator' element={<ResumeGenerator/>} />
        <Route path='/history' element={<History/>} />
        <Route path='form' element={<UserForm/>} />
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
