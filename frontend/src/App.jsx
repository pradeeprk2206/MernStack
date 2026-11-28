import './App.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Login from './pages/login'
import Project from './pages/projects'
import Task from './pages/tasks'
import Team from './pages/team';
import Clients from './pages/clients';
import Dashboard from './pages/dashboard';
import Calendar from './pages/calendar';
import Settings from './pages/settings';
import Register from './pages/register';
import Adminlayout from './pages/admin/adminlayout';
import Admindashboard from './pages/admin/admindashboard';
import Admindetails from './pages/admin/admindetails';
import Adminsettings from './pages/admin/adminsettings';

function App() {
 return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/tasks" element={<Task/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/clients" element={<Clients/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/calendar" element={<Calendar/>}/>
      <Route path="/settings" element={<Settings/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/admin" element={<Adminlayout/>}>
        <Route path="dashboard" element={<Admindashboard/>}/>
        <Route path="details" element={<Admindetails/>}/>
        <Route path="settings" element={<Adminsettings/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
 )
}
export default App
