import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Knowledge from './routes/Knowledge';
import Certifications from './routes/Certifications';
import About from './routes/About';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Knowledge />} path='/portfolio' />
        <Route element={<Certifications />} path='/portfolio/certifications' />
        <Route element={<About />} path='/portfolio/about' />
      </Routes>
    </BrowserRouter>

  )
}

export default App
