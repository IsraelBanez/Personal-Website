import './App.css';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NoPage/>}/>
    </Routes>
  </>

  );
}

export default App;
