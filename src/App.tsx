import './App.css';
import Toggle from './Components/Toggle';
import Parent from './Components/Parent';

const App = () => (
  <div className="columns">
    <div className="column">
      <Toggle/>
    </div>
    <div className="column">
      <Parent/>
    </div>
  </div>
)

export default App;
