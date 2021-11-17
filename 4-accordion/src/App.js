import './App.css';
import Container from './components/Container';

function App() {
  console.log('App.js is running');
  return (
    <div>
      <div className="App">
        <Container />
        <div className="circle c1" />
        <div className="circle c2" />
      </div>
    </div>
  );
}

export default App;
