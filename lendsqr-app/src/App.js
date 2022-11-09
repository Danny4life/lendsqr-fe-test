
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import UserDetail from './components/userdetail/UserDetail';
import User from './components/userpage/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user' element={<User />} />
          <Route path='/userdetail' element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
