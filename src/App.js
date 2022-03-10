import './App.css';
import Header from './Components/Header';
import Post from './Components/Post';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header /> 
      <p>
        Do not click the Footer
      </p>
      <Post/>
      <Footer/>
      
    </div>
  );
}

export default App;
