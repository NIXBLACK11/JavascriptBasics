// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UseState from './Components/UseState'; // Component names should start with an uppercase letter
import UseEffect from './Components/UseEffect';
import UseLayoutEffect from './Components/UseLayoutEffect';

function App() {
  return (
    <div className="App">
      {/* <UseState/> */}
      {/* <UseEffect/> */}
      <UseLayoutEffect/>
    </div>
  );
}

export default App;
