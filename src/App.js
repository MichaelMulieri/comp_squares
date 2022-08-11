import './App.css';
import BoxOne from './Components/Box1';
import BoxTwo from './Components/Box2';
import BoxThree from './Components/Box3';

function App() {
  return (
    <div className="App">
      <div className='BoxContainer'>
        <BoxOne/>
        <BoxTwo/>
        <BoxThree/>
      </div>
    </div>
  );
}

export default App;
