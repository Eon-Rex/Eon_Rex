
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Find from './Find';
import Post from './Post';
import Community from './Community';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';
import {Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <div className="App">
    
    <Navbar />
      <Routes>
        <Route  path='/' element={<Home/> }/>
        <Route  path='/find' element={<Find/> }/>
        <Route  path='/post' element={<Post/> }/>
        <Route  path='/community' element={<Community/> }/>
        <Route  path='/about' element={<About/> }/>
        <Route  path='/login' element={<Login/> }/>
      </Routes>
    </div>
  );
};

export default App;
