import logo from './logo.svg';
import './App.css';
import Table from './components/Table';
import Events from './components/Events';
import App2 from './components/Greet';

function App() {
  return (
    <div className="App">
       <h1>Random Table</h1> 
       <Table/>
      <hr />
    
      <hr />
      <App2/>
      <Events />
      
    </div>
  );
}

export default App;
