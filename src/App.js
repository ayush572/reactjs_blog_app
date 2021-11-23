import './index.css';
import Navbar from './navbar';
import Home from './home';
//we are even nesting the navbar component inside the App root component
function App() {
  return (
    <div className="App">
      <Navbar /> 
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
