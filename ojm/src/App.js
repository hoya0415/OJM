import './App.css';
import Header from './components/Header';
import Store from './pages/Store';

function App() {
  return (
    <div className="App" style={{border: "solid 2px"}}>
      <Header />
      <Store />
    </div>
  );
}

export default App;
