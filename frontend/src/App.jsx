import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/login'
import Project from './pages/projects'
import Task from './pages/tasks'


function App() {
 return(
 <BrowserRouter>
    <Routes>
       <Route path="/" element={<Login/>}/>
       <Route path="/project" element={<Project/>}/>
       <Route path="/task" element={<Task/>}/>
    </Routes>
 </BrowserRouter>
 )
}
export default App
