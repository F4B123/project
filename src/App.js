import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'


function App() {
  return (
    <div className='container-app'>
      <Router>
      <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/Admin' element={<AdminPage/>} />
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
