import './App.css';
import HelloPerson from './components/hello-person/hello-person';

function App() {
  return (
    <div className="App">
      <HelloPerson name='Kevin' age={29} />
    </div>
  );
}

export default App;
