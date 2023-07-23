import Skill from './pages/skill';
import './App.css';
import ResponsiveAppBar from './components/navbar';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import About from './pages/about';
import WorkXperience from './pages/workXperience';
import Project from './pages/project';
import Contact from './pages/contact';
import Spinner from './pages/spinner';


function App() {

  return (
    <Box>
    <Router>
    <Spinner/>
    <ResponsiveAppBar/>
      <Routes>
      <Route path="/" element={<HomePage/>} /> 
      <Route path="/about" element={<About/>} /> 
      <Route path="/skill" element={<Skill/>} /> 
      <Route path="/work-expeience" element={<WorkXperience/>} /> 
      <Route path="/project" element={<Project/>} /> 
      <Route path="/contact" element={<Contact/>} /> 
      </Routes>
    </Router>
    </Box>
  )
}

export default App;
