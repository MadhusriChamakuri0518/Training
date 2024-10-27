import logo from './logo.svg';
import './App.css';
import Atomfunc from './components/atoms/Atomfunc';
import { AtomClass } from './components/atoms/AtomClass';
import Comp1 from './components/Day-3/Comp1';
import Comp2 from './components/Day-3/Comp2';
import Props from './components/Day-3/Props';


function App() {
  return (
    <div className="App">
      {/* <Atomfunc/>
      <AtomClass/>  */}
      <Comp1/>
      <Comp2/>
      <Props authName='Shaan'/>
    </div>
  );
}

export default App;
