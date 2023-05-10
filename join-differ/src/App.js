
import Public from './Components/Public'
import Layouts from "./Components/Layouts"
import Login from "./features/auth/Login";
import DashLayout from "./Components/DashLayout"
import Welcome from "./features/auth/Welcome"
import ProjectList from "./features/Projects/ProjectList"
import UserList from "./features/User/UserList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Public />} />
          <Route path="Login" element={<Login />} />

          <Route path="dash" element={<DashLayout />}>
            <Route index element={< Welcome />} />

            <Route path="project">
              <Routes index element={<ProjectList />} />
            </Route>

            <Route path="user">
              <Routes index element={<UserList />} />
            </Route>


          </Route>{/* End Dash */}

        </Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
