import './App.css';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import BootstrapPage from './pages/BootstrapPage'


function App() {
  return (
    <div className='container-app'>
      <Router>
      <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/Bootstrap' element={<BootstrapPage/>} />
      </Routes>
      </Router>
    </div>
    
  );
}

export default App;
