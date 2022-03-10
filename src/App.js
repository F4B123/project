import './App.css';
import Header from './Components/Header';
import Post from './Components/Post';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header /> 
      <p>
        Welcome to forumm a place where you can share pictures and videos of every topic
      </p>
      <Post/>
      <Footer/>
      
    </div>
  );
}

export default App;
