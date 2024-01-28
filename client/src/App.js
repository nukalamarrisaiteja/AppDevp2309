import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './Components/Home';
import Leaves from './Components/Leaves';
import Tasks from './Components/Tasks';
import Requests from './Components/Requests';
import EditProfile from './Components/EditProfile';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/leaves" element={<Leaves/>}></Route>
    <Route path="/Tasks" element={<Tasks/>}></Route>
    <Route path="/requests" element={<Requests/>}></Route>
    <Route path="/editProfile" element={<EditProfile/>}></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
