import './App.css';
import { CardList } from './Components';
import Navbar from './Components/Navbar/Navbar';
import './global.css'

function App() {
  return (
    <div className="App">
      <div className="background"> 
        <Navbar/>
        <CardList />
      </div>
    </div>
  );
}

export default App;
