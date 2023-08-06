import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './pages/footer'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/footer' element={<Footer />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
